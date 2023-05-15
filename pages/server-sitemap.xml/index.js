import { getServerSideSitemapLegacy } from 'next-sitemap';

const pages = [
  '/',
  '/about',
  '/services',
  '/solutions',
  '/contact',
  '/privacy-policy',
  '/testimonials',
  '/services/agriculture',
  '/services/commercialIndustrialSolar',
  '/services/company',
  '/services/healthcare',
  '/services/housing',
  '/services/industry',
  '/services/institute',
  '/services/residentialSolar',
  '/solutions',
  '/solutions/hybridSolarPump',
  '/solutions/offGridSolarSystem',
  '/solutions/onGridSolarSystem',
  '/solutions/solarWaterPump',
];

export async function getServerSideProps(ctx) {
  const fields = pages.map((page) => ({
    loc: `https://www.mgetenergy.com${page}`,
    lastmod: new Date().toISOString(),
  }));
  return getServerSideSitemapLegacy(ctx, fields);
}

// Default export to prevent Next.js errors
const Sitemap = () => {};
export default Sitemap;
