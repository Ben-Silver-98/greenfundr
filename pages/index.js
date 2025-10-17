import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>GreenFundr | Sustainable Projects Made Simple</title>
        <meta
          name="description"
          content="GreenFundr empowers climate-positive founders with transparent, compliant funding tools."
        />
      </Head>
      <article className="legal-article">
        <h1>Welcome to GreenFundr</h1>
        <p>
          GreenFundr is a platform for launching and managing sustainable initiatives. We pair
          founders and investors who are committed to measurable impact and responsible growth.
        </p>
        <p>
          As we prepare for launch, we are making our key legal frameworks public. You can review
          our{' '}
          <Link href="/terms-of-service">Terms of Service</Link>,{' '}
          <Link href="/privacy-policy">Privacy Policy</Link>,{' '}
          <Link href="/refund-policy">Refund Policy</Link>, and{' '}
          <Link href="/data-processing-agreement">Data Processing Agreement</Link> at any time.
        </p>
        <p>
          Need to talk with us directly? Email{' '}
          <a href="mailto:support@greenfundr.com">support@greenfundr.com</a> and we will be in touch.
        </p>
      </article>
    </>
  );
};

export default Home;
