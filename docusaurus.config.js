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
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/loreum-org/docs.loreum.org/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      navbar: {
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: 'blog', label: 'Blog', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            to: 'https://github.com/loreum-org',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: 'https://discord.gg/JPFCJFHKxE',
            label: 'Discord',
            position: 'right',
          },
          {
            to: 'https://twitter.com/loreumdao',
            label: 'Twitter',
            position: 'right',
          },
        ],
      },
      footer: {
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
                label: 'Twitter',
                to: 'https://twitter.com/loreumdao',
              },
              {
                label: 'Discord',
                to: 'https://discord.gg/JPFCJFHKxE',
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
                to: 'https://github.com/loreum-org',
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
