import Head from 'next/head';
import CompanyDetails from '../components/CompanyDetails';

const lastUpdated = '17 October 2024';

const DataProcessingAgreement = () => {
  return (
    <>
      <Head>
        <title>Data Processing Agreement | GreenFundr</title>
        <meta
          name="description"
          content="Download the GreenFundr DPA stub, designed to support GDPR compliance for EU-based customers."
        />
      </Head>
      <article className="legal-article">
        <h1>Data Processing Agreement (Stub)</h1>
        <p>
          For our customers in the European Union and European Economic Area, GreenFundr provides a Data
          Processing Agreement (DPA) that incorporates EU Standard Contractual Clauses and defines the
          security safeguards we apply to personal data processed on your behalf.
        </p>
        <p>
          The downloadable stub below contains the baseline clauses and schedules that will be appended to
          your Master Service Agreement. Once you are ready to execute the full DPA, please contact our
          legal team so we can tailor the schedules to your specific use case.
        </p>

        <div className="download-card">
          <h2>Download the Current DPA Stub</h2>
          <p>
            The document includes our data protection commitments, subprocessors overview, and instructions
            on completing Annex I & II. Use it as a starting point for contract review and internal compliance
            assessments.
          </p>
          <a className="download-button" href="/dpa-stub.txt" download>
            Download DPA Stub
          </a>
        </div>

        <h2>How to Finalise the DPA</h2>
        <ol>
          <li>Download and review the stub for alignment with your internal compliance requirements.</li>
          <li>Share any requested amendments, including security or governance questionnaires, with our team.</li>
          <li>Sign the final DPA electronically; we return a countersigned copy for your records.</li>
        </ol>

        <h2>Security & Subprocessor Commitments</h2>
        <p>
          We maintain organisational and technical measures designed to protect personal data against
          accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access. These
          measures include encryption in transit, strict role-based access controls, continual monitoring,
          and regular penetration testing. A current list of subprocessors is provided within the stub and
          updated via email notifications before any material changes.
        </p>

        <CompanyDetails />
        <p className="last-updated">Last updated: {lastUpdated}</p>
      </article>
    </>
  );
};

export default DataProcessingAgreement;
