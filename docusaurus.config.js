import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Подкастиң',
  tagline: 'Тәуелсіз технология, шексіз контент',
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
          routeBasePath: 'book',
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
          hideable: true,
        },
      },
      navbar: {
        title: 'Подкастиң',
        logo: {
          src: 'img/rss-blue-white-svgrepo-com.svg',
          srcDark: 'img/rss-orange-white-svgrepo-com.svg',
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
        copyright: `Copyright © 2023 - ${new Date().getFullYear()} <a href="https://yeldar.org" target="_blank">Елдар Құдайбергенов</a> • <a href="https://yeldar.org/blog/tags/podbook" target="_blank">Блог</a> • <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
