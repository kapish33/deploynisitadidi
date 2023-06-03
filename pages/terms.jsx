import SafeArea from '../src/components/SafeArea';
import { NextSeo } from 'next-seo';
import { SEO } from '../utils/SeoConst';

const terms = () => {
  return (
    <>
      <NextSeo {...SEO.termsAndConditions} />
      <SafeArea>
        <h1 className='text-center'>Terms and conditions of use</h1>
      </SafeArea>
    </>
  );
};

export default terms;
