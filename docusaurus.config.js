/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Loreum',
  tagline: 'Godspeed',
  url: 'https://docs.loreum.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'loreum', // Usually your GitHub org/user name.
  projectName: 'docs.loreum.org', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: 'rtl',
      },
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      navbar: {
        title: 'Loreum',
        logo: {
          alt: 'My Meta Project Logo',
          src: 'https://cdn.loreum.org/logos/white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/loreum-org/docs.loreum.org',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'About',
            items: [
            ],
          },
          {
            title: 'Guides',
            items: [
              {
                label: 'Stack Overflow',
                to: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/docusaurus',
              },
              {
                label: 'Discord',
                to: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'Developer',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'Link',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacy',
                to: 'https://opensource.fb.com/legal/privacy/',
              },
              {
                label: 'Terms',
                to: 'https://opensource.fb.com/legal/terms/',
              },
              {
                label: 'Data Policy',
                to: 'https://opensource.fb.com/legal/data-policy/',
              },
              {
                label: 'Cookie Policy',
                to: 'https://opensource.fb.com/legal/cookie-policy/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Meta Open Source Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/meta_opensource_logo_negative.svg',
          href: 'https://opensource.fb.com',
        },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Meta Platforms, Inc. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
