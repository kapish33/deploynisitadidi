import { siteRoutes } from '../../../utils/sitePaths';
const { landingPagesNav } = siteRoutes;
export const footerConstRoutes = {
  footerNav: [
    {
      path: landingPagesNav.home,
      css: 'anchor-footer-nav ',
      name: 'Home',
    },
    {
      path: landingPagesNav.about,
      css: 'anchor-footer-nav ',
      name: 'About',
    },

    {
      path: landingPagesNav.Contact,
      css: 'anchor-footer-nav',
      name: 'Contact',
    },
  ],
};

export const Companyname = 'Nisheeta Bajaj';
export const Slogan =
  'Experience the Power of Leadership Excellence with Nisheeta Bajaj: Empowering CEOs and Business Leaders for Success';
