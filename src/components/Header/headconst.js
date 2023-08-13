import { G_FORM } from '../../../utils/nameConst';
import { siteRoutes } from '../../../utils/sitePaths';
import { number, whatsAppURL } from '../../../utils/whatsappHelper';
import homeImage from '../../assets/images/logo.png';
const { landingPagesNav } = siteRoutes;

export const headerRoutes = {
  homePage: {
    path: landingPagesNav.home,
    name: 'Logo',
    imagePath: homeImage,
  },
  mobile: [
    {
      path: landingPagesNav.about,
      css: 'anchor_nonunderline_mobile',
      name: 'About',
    },
    // {
    //   path: landingPagesNav['Thought Leadership'],
    //   css: 'anchor_nonunderline_mobile',
    //   name: 'Thought Leadership',
    // },
    // {
    //   path: landingPagesNav['Master classes'],
    //   css: 'anchor_nonunderline_mobile',
    //   name: 'Master Classes',
    // },
    // {
    //   path: landingPagesNav['Life Wisdom'],
    //   css: 'anchor_nonunderline_mobile',
    //   name: 'Life Wisdom',
    // },
    {
      path: 'https://linktr.ee/nisheetabajaj',
      css: 'anchor_nonunderline_mobile',
      name: 'Minfulness workshops',
    },
    {
      path: whatsAppURL(),
      css: 'anchor_button_mobile',
      name: 'Master Class',
    },
  ],
  pc: [
    {
      path: landingPagesNav.about,
      css: 'anchor_pc',
      name: 'About',
    },
    // {
    //   path: landingPagesNav['Thought Leadership'],
    //   css: 'anchor_pc',
    //   name: 'Thought Leadership',
    // },
    // {
    //   path: landingPagesNav['Master classes'],
    //   css: 'anchor_pc',
    //   name: 'Master clasee',
    // },
    // {
    //   path: landingPagesNav['Life Wisdom'],
    //   css: 'anchor_pc',
    //   name: 'Life Wisdom',
    // },
    {
      path: 'https://linktr.ee/nisheetabajaj',
      css: 'anchor_pc',
      name: 'Minfulness workshops',
    },
    {
      path: whatsAppURL(),
      css: 'anchor_pc_button',
      name: 'Master Class',
    },
  ],
};
