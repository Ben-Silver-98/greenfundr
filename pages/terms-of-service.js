import Head from 'next/head';
import CompanyDetails from '../components/CompanyDetails';

const lastUpdated = '17 October 2024';

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | GreenFundr</title>
        <meta
          name="description"
          content="Terms that govern the use of the GreenFundr platform, including user responsibilities and acceptable use."
        />
      </Head>
      <article className="legal-article">
        <h1>Terms of Service</h1>
        <p>
          These Terms of Service (the “Terms”) govern your access to and use of the products,
          services, websites, and applications (collectively, the “Services”) provided by GreenFundr
          Ltd. By creating an account, browsing our website, or otherwise using the Services, you
          agree to be bound by these Terms.
        </p>

        <h2>1. Eligibility & Registration</h2>
        <p>
          You must be at least 18 years of age and capable of entering into a legally binding
          agreement in your jurisdiction to use the Services. When you register for an account, you
          agree to provide accurate and complete information and to keep that information up to date
          at all times. We reserve the right to suspend or terminate accounts that contain false,
          incomplete, or outdated details.
        </p>

        <h2>2. Your Responsibilities</h2>
        <p>
          You are responsible for all activity that occurs under your account and for maintaining the
          confidentiality of your login credentials. You agree to comply with all applicable laws,
          regulations, and industry standards when using the Services. Misuse of the Services,
          including attempting to gain unauthorized access, interfering with other users, or
          employing the Services for fraudulent or illegal activities, is strictly prohibited.
        </p>

        <h2>3. Platform Content & Intellectual Property</h2>
        <p>
          All content provided through the Services, including text, graphics, logos, and software,
          is owned or licensed by GreenFundr and protected under relevant intellectual property laws.
          You may not copy, modify, distribute, sell, lease, or sublicense any part of the Services
          without our express written permission. User-generated content remains the property of
          those users, but by posting on the platform you grant us a non-exclusive, royalty-free
          license to display and promote that content in connection with the Services.
        </p>

        <h2>4. Paid Services & Billing</h2>
        <p>
          Certain features may be available only through a paid subscription or usage-based billing.
          By selecting a paid Service, you agree to pay the applicable fees and taxes. Pricing
          details, billing cycles, and refund eligibility are described on our pricing page and in our
          Refund Policy. We reserve the right to update our pricing with reasonable prior notice.
        </p>

        <h2>5. Availability & Maintenance</h2>
        <p>
          We aim to provide the Services on a continuous basis but do not guarantee uninterrupted or
          error-free operation. Downtime may occur for maintenance, updates, or events outside our
          control. We will make commercially reasonable efforts to notify you of planned maintenance
          and to restore operation promptly.
        </p>

        <h2>6. Acceptable Use & Suspension</h2>
        <p>
          We may suspend or terminate your access to the Services if we reasonably believe that your
          use violates these Terms, applicable law, or poses a risk to the security or integrity of
          the platform. We also reserve the right to remove any content that we determine, at our
          discretion, is harmful, unlawful, or infringes on the rights of others.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, GreenFundr shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
          whether incurred directly or indirectly, resulting from your use of the Services. Our total
          aggregate liability for any claim arising out of or relating to these Terms shall not exceed
          the amounts you have paid to us for the Services in the twelve (12) months preceding the
          event giving rise to the claim.
        </p>

        <h2>8. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time to reflect changes in our Services, business
          practices, or legal obligations. When we make changes, we will revise the “Last updated”
          date below and, when appropriate, provide additional notice via email or in-product
          notifications. Continued use of the Services after the effective date constitutes acceptance
          of the revised Terms.
        </p>

        <CompanyDetails />
        <p className="last-updated">Last updated: {lastUpdated}</p>
      </article>
    </>
  );
};

export default TermsOfService;
