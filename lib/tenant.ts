import { UserRole } from '@prisma/client';
import { prisma } from './db';

export async function getDefaultMembership(clerkUserId: string) {
  return prisma.userTenant.findFirst({
    where: { clerkUserId },
    orderBy: [
      { isDefault: 'desc' },
      { createdAt: 'asc' }
    ],
    include: {
      tenant: true
    }
  });
}

export async function ensureTenantForUser(clerkUserId: string) {
  const tenant = await prisma.$transaction(async (tx) => {
    const membership = await tx.userTenant.findFirst({
      where: { clerkUserId },
      orderBy: [
        { isDefault: 'desc' },
        { createdAt: 'asc' }
      ],
      include: {
        tenant: true
      }
    });

    if (membership) {
      return membership.tenant;
    }

    return tx.tenant.create({
      data: {
        name: 'Personal Workspace',
        subscriptionIsActive: true,
        members: {
          create: {
            clerkUserId,
            role: UserRole.OWNER,
            isDefault: true
          }
        }
      }
    });
  });

  return tenant;
}
