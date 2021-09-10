console.log(__dirname)

module.exports = {
  lang: 'ru',
  title: 'Ss3t',
  description: 'Документация Ss3t',
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#ffffff"}],
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#ffffff"}],
    ['meta', { name: "msapplication-config", content: "/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
  ],
  themeConfig: {
    logo: '/logo.svg',
    navbar: [
      { text: 'Главная', link: '/' },
      { text: 'Быстрый старт', link: '/quick-start/' },
      { text: 'Погружение', link: '/dive-into/' },
      { text: 'Оформление', link: '/design/' },
      { text: 'Редактор', link: 'https://editor.ss3t.io/' },
      { text: 'Discord', link: 'https://discord.gg/nBkFGnx' },
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-search', {
        locales: {
          '/': {
            placeholder: 'Поиск',
          },
        },
      },
    ],
    [
      '@vuepress/plugin-shiki', {
        langs: [
          'html', 'css', 'javascript',
          {
            id: 'ssthreet',
            scopeName: 'ssthreet',
            path: `${__dirname}/ss3tl.json` // or `plist`
          }
        ]
      }
    ]
  ],
}
