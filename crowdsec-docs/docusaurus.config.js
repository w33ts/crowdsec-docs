const { themes } = require('prism-react-renderer');

const path = require('path')
const { remediationSideBar, ctiApiSidebar} = require('./sidebarsUnversioned.js')
const backportRedirect = ({ id, link, items }) => {
  const arr = [];
  if (id) {
    arr.push({
      to: `/u/${id}`,
      from: `/docs/${id}`,
    },{
      to: `/u/${id}`,
      from: `/docs/next/${id}`,
    })
  }
  if (link && link.id) {
    arr.push({
      to: `/u/${link.id}`,
      from: `/docs/${link.id}`,
    },{
      to: `/u/${link.id}`,
      from: `/docs/next/${link.id}`,
    })
  }
  if (items) {
    for (const item of items) {
      if (typeof item === 'string') {
        arr.push({
          to: `/u/${item}`,
          from: `/docs/${item}`,
        },{
          to: `/u/${item}`,
          from: `/docs/next/${item}`,
        })
      }
      if (typeof item === 'object') {
        arr.push(...backportRedirect(item));
      }
    }
  }
  return arr;
}
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CrowdSec',
  tagline: 'CrowdSec - Real-time & crowdsourced protection against aggressive IPs',
  url: 'https://docs.crowdsec.net',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/crowdsec_no_txt.png',
  organizationName: 'CrowdSec',
  projectName: 'crowdsec-docs',
  markdown: {
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    }
  ],
  themeConfig: {
    algolia: {
      appId: 'PWTZ94KULF',
      apiKey: '31673122672f1eb819e16c87468e53b4',
      indexName: 'crowdsec',
      contextualSearch: true
    },
    navbar: {
      items: [

      ],
    },
    navbar: {
      title: '',
      logo: {
        alt: 'CrowdSec',
        src: 'img/crowdsec_logo.png',
      },
      items: [
        {
          type: 'docsVersionDropdown',
          docsPluginId: 'default',
          position: 'left',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'CrowdSec',
        },
        {
          type: 'doc',
          docId: 'cscli/cscli',
          position: 'left',
          label: 'Cscli',
        },
        {
          to: '/u/bouncers/intro',
          position: 'left',
          label: 'Remediation',
        },
        {
          to: '/u/cti_api/getting_started',
          position: 'left',
          label: 'CTI API',
        },
        { to: `https://academy.crowdsec.net/courses?${process.env.NODE_ENV === 'production' ? 'utm_source=docs&utm_medium=menu&utm_campaign=top-menu&utm_id=academydocs' : ''}`, label: 'Academy', position: 'left' },
        {
          type: 'doc',
          docId: 'faq',
          position: 'left',
          label: 'FAQ',
        },
        {
          type: 'doc',
          docId: 'troubleshooting',
          position: 'left',
          label: 'Troubleshooting',
        },
        {
          href: 'https://github.com/crowdsecurity/crowdsec',
          position: 'right',
          className: 'header-github-link header-icon-link',
        },
        {
          href: 'https://discord.gg/wGN7ShmEE8',
          position: 'right',
          className: "header-discord-link",
        },
        {
          href: 'https://discourse.crowdsec.net',
          position: 'right',
          className: "header-discourse-link",
        },
        {
          href: 'https://app.crowdsec.net/',
          position: 'right',
          className: "header-console-link",
        },
        {
          href: 'https://hub.crowdsec.net/',
          position: 'right',
          className: "header-hub-link",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/crowdsecurity/crowdsec',
            },
            {
              label: 'Discourse',
              href: 'https://discourse.crowdsec.net/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/crowdsec',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/crowd_security',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: "Console",
              href: "https://app.crowdsec.net/"
            },
            {
              label: 'Hub',
              href: 'https://hub.crowdsec.net/',
            },
            {
              label: 'Blog',
              href: 'https://crowdsec.net/blog/',
            },
            {
              label: 'Tutorial',
              href: 'https://crowdsec.net/blog/category/tutorial/',
            },

          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CrowdSec`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['bash', 'yaml', 'json'],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/crowdsecurity/crowdsec-docs/edit/main/crowdsec-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/crowdsecurity/crowdsec-docs/edit/main/crowdsec-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'unversioned',
        path: 'unversioned',
        routeBasePath: 'u',
        sidebarPath: require.resolve('./sidebarsUnversioned.js'),
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Redirect current and next routes to unversioned to avoid 404 on articles and app.crowdsec.net
        redirects: [...remediationSideBar,...ctiApiSidebar].flatMap(backportRedirect),
      },
    ],
  ],
};