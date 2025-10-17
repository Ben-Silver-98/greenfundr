import { companyDetails, contactInstructions } from '../lib/companyDetails';

const CompanyDetails = () => {
  return (
    <section className="company-details">
      <h2>Company Details</h2>
      <p className="company-name">{companyDetails.name}</p>
      <address>
        {companyDetails.addressLines.map((line) => (
          <span key={line} className="address-line">
            {line}
          </span>
        ))}
      </address>
      <p>{companyDetails.registration}</p>
      <p>
        Contact: <a href={`mailto:${companyDetails.email}`}>{companyDetails.email}</a> |{' '}
        <a href={`tel:${companyDetails.phone.replace(/[^+\d]/g, '')}`}>{companyDetails.phone}</a>
      </p>
      <p>{contactInstructions}</p>
    </section>
  );
};

export default CompanyDetails;
