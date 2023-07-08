import { siteRoutes } from '../sitePaths';

export const formMenuData = {
  'Thought Leadership': {
    value: siteRoutes.landingPagesNav['Thought Leadership'],
    subMenu: {
      'Energy Leadership': siteRoutes.landingPagesNav['Energy Leadership'],
      'Leadership Agility Quotient':
        siteRoutes.landingPagesNav['Leadership Agility Quotient'],
      'Blocks to Change - Obstacles to success':
        siteRoutes.landingPagesNav['Blocks to Change - Obstacles to success'],
      'Silent Secrets of Accelerated Growth of Organizations':
        siteRoutes.landingPagesNav[
          'Silent Secrets of Accelerated Growth of Organizations'
        ],
    },
  },
  'Master classes': {
    value: siteRoutes.landingPagesNav['Master classes'],
    subMenu: {
      'Gold standard leader':
        siteRoutes.landingPagesNav['Gold standard leader'],
      'Block Busters': siteRoutes.landingPagesNav['Block Busters'],
      'Gold Standard Leadership':
        siteRoutes.landingPagesNav['Gold Standard Leadership'],
      'Creating a Dream Team':
        siteRoutes.landingPagesNav['Creating a Dream Team'],
      'Hidden Pillar of Breakthrough Growth':
        siteRoutes.landingPagesNav['Hidden Pillar of Breakthrough Growth'],
      Other: siteRoutes.landingPagesNav.Other,
    },
  },
  'Life Wisdom': {
    value: siteRoutes.landingPagesNav['Life Wisdom'],
    subMenu: {
      'Energy & Time': siteRoutes.landingPagesNav['Energy & Time'],
      'Mind and Body': siteRoutes.landingPagesNav['Mind and Body'],
      'Secrets Of Breath': siteRoutes.landingPagesNav['Secrets Of Breath'],
      'Reboot & Recharge': siteRoutes.landingPagesNav['Reboot & Recharge'],
      'Meaning & Purpose': siteRoutes.landingPagesNav['Meaning & Purpose'],
    },
  },
};
