import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Подкастиң: тәуелсіз технология, шексіз контент',
  tagline: 'Подкастиң бойынша ашық кітап',
  favicon: 'img/favicon.ico',
  url: 'https://openpodcasting.com',
  baseUrl: '/',
  organizationName: 'yeldarx',
  projectName: 'openpodcasting.com',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'kk',
    locales: ['kk'],
  },
  titleDelimiter: '•',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/yeldarx/openpodcasting.com/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Подкастиң',
        logo: {
          alt: 'Ашық подкастиң кітабы, лого',
          src: 'img/infinite-svgrepo-com.svg',
          srcDark: 'img/infinite-svgrepo-com-dark.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Кітап',
          },
          {
            href: 'https://github.com/yeldarx/openpodcasting.com/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://yeldar.org" target="_blank">Елдар Құдайбергенов</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
