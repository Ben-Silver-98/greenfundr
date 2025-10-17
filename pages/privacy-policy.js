import Head from 'next/head';
import CompanyDetails from '../components/CompanyDetails';

const lastUpdated = '17 October 2024';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | GreenFundr</title>
        <meta
          name="description"
          content="GreenFundr privacy notice outlining GDPR-compliant data practices, analytics, and user rights."
        />
      </Head>
      <article className="legal-article">
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy explains how GreenFundr Ltd. (“GreenFundr”, “we”, “us”) collects,
          processes, and protects personal data when you visit our website, create an account, or use
          our Services. We comply with the EU General Data Protection Regulation (GDPR) and other
          applicable privacy laws.
        </p>

        <h2>1. Data We Collect</h2>
        <p>We collect only the data that is necessary to provide and improve our Services, including:</p>
        <ul>
          <li>Account details such as your name, email address, organisation, and billing information.</li>
          <li>Project information submitted by founders and impact metrics shared with investors.</li>
          <li>
            Usage data, device identifiers, and log information collected automatically through our
            analytics tools and server logs.
          </li>
          <li>
            Support communications, feedback, and any documents you send when you contact our team.
          </li>
        </ul>

        <h2>2. Purposes & Legal Bases for Processing</h2>
        <p>
          We process personal data on the following legal bases under Article 6 of the GDPR:
        </p>
        <ul>
          <li>
            <strong>Contractual necessity:</strong> to create and manage your account, deliver the
            Services, handle payments, and provide customer support.
          </li>
          <li>
            <strong>Legitimate interests:</strong> to keep our platform secure, prevent abuse, and
            improve functionality by analysing aggregated usage patterns.
          </li>
          <li>
            <strong>Consent:</strong> for optional newsletters, marketing communications, and
            analytics cookies where required. You may withdraw consent at any time.
          </li>
          <li>
            <strong>Legal obligations:</strong> to comply with tax, accounting, and regulatory
            requirements applicable to our operations.
          </li>
        </ul>

        <h2>3. Cookies, Analytics & Tracking</h2>
        <p>
          We use first-party cookies to maintain your session and remember preferences. We also use
          privacy-focused analytics providers to help us understand platform adoption and performance.
          Analytics data is pseudonymised and aggregated whenever possible. You can control non-essential
          cookies through your browser settings or via in-product controls when available.
        </p>

        <h2>4. Data Sharing & Subprocessors</h2>
        <p>
          We do not sell personal data. We may share information with carefully selected processors who
          support our operations, such as hosting providers, payment processors, and email delivery
          services. Each processor is bound by a Data Processing Agreement that includes EU Standard
          Contractual Clauses when data is transferred outside the EEA. A current list of subprocessors
          is available upon request.
        </p>

        <h2>5. International Transfers</h2>
        <p>
          When we transfer personal data outside of the European Economic Area, we rely on appropriate
          safeguards such as adequacy decisions, Standard Contractual Clauses, and supplementary security
          measures. Users may request copies of the relevant transfer mechanisms by contacting us.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          Personal data is retained only for as long as necessary to fulfil the purposes described in
          this Policy or to meet legal obligations. We periodically review the data we hold and delete or
          anonymise records that are no longer required.
        </p>

        <h2>7. Your Rights Under GDPR</h2>
        <p>As a data subject, you have the following rights, subject to applicable law:</p>
        <ul>
          <li>Access your personal data and request a copy in a portable format.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>Request erasure of personal data when it is no longer needed.</li>
          <li>Restrict or object to certain processing activities.</li>
          <li>Withdraw consent for processing activities based on consent.</li>
          <li>Lodge a complaint with your local supervisory authority.</li>
        </ul>
        <p>
          To exercise these rights, contact us using the details below. We will respond within one month
          of receiving your request, or sooner where required by law.
        </p>

        <h2>8. Security Measures</h2>
        <p>
          We implement administrative, technical, and physical safeguards to protect personal data from
          unauthorised access, disclosure, alteration, and destruction. These measures include encrypted
          data transit, strict access controls, and regular security assessments.
        </p>

        <h2>9. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy to reflect new regulatory requirements or improvements to the
          Services. The latest version will always be available on this page. Significant changes will be
          communicated via email or product notifications before they take effect.
        </p>

        <CompanyDetails />
        <p className="last-updated">Last updated: {lastUpdated}</p>
      </article>
    </>
  );
};

export default PrivacyPolicy;
