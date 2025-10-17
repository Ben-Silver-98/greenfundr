import Head from 'next/head';
import CompanyDetails from '../components/CompanyDetails';

const lastUpdated = '17 October 2024';

const RefundPolicy = () => {
  return (
    <>
      <Head>
        <title>Refund Policy | GreenFundr</title>
        <meta
          name="description"
          content="GreenFundr refund guidelines, including 14-day money-back guarantee and refund request process."
        />
      </Head>
      <article className="legal-article">
        <h1>Refund Policy</h1>
        <p>
          We want you to feel confident in choosing GreenFundr. If, for any reason, the Service does
          not meet your expectations, this Refund Policy outlines how you can request and receive a
          refund.
        </p>

        <h2>1. 14-Day Money-Back Guarantee</h2>
        <p>
          New subscription purchases are eligible for a full refund within fourteen (14) calendar days
          of the initial charge, provided that you have not materially breached our Terms of Service or
          misused the platform. The guarantee applies to both monthly and annual plans.
        </p>

        <h2>2. Refund Eligibility</h2>
        <ul>
          <li>Refund requests must be submitted within the 14-day window from the billing date.</li>
          <li>
            Only the first purchase of a given subscription tier is eligible. Upgrade or downgrade fees
            are prorated and non-refundable unless required by law.
          </li>
          <li>
            Add-on services, consultation packages, or third-party fees processed through GreenFundr are
            refundable only where those providers permit reimbursement.
          </li>
        </ul>

        <h2>3. How to Request a Refund</h2>
        <p>
          Email <a href="mailto:billing@greenfundr.com">billing@greenfundr.com</a> with the subject line
          “Refund request” and include your organisation name, subscription plan, and invoice number. Our
          support team will acknowledge the request within two business days and may ask for additional
          details to validate the claim.
        </p>

        <h2>4. Processing Your Refund</h2>
        <p>
          Approved refunds are issued to the original payment method within ten (10) business days. Please
          note that your payment provider may take additional time to credit the amount to your account.
          Currency conversion fees or bank charges applied by your provider are outside of our control.
        </p>

        <h2>5. Exceptional Circumstances</h2>
        <p>
          If service outages, billing errors, or other extenuating circumstances occur, we will work with
          you to find a fair resolution. This may include account credits, service extensions, or partial
          refunds beyond the standard guarantee timeframe.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may amend this Refund Policy from time to time. Any changes will take effect upon posting on
          this page, with notice provided for substantial updates. Continuing to use the Services after a
          change signifies acceptance of the revised policy.
        </p>

        <CompanyDetails />
        <p className="last-updated">Last updated: {lastUpdated}</p>
      </article>
    </>
  );
};

export default RefundPolicy;
