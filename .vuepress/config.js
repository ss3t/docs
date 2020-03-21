module.exports = {
    title: 'Ss3t',
    description: 'Документация Ss3t',
    head: [['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/apple-touch-icon.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicon-16x16.png"}],
        ['link', { rel: "manifest", href: "/assets/site.webmanifest"}],
        ['link', { rel: "mask-icon", href: "/assets/safari-pinned-tab.svg", color: "#3a0839"}],
        ['link', { rel: "shortcut icon", href: "/assets/favicon.ico"}],
        ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
        ['meta', { name: "msapplication-config", content: "/assets/browserconfig.xml"}],
        ['meta', { name: "theme-color", content: "#ffffff"}],
    ],
    themeConfig: {
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Быстрый старт', link: '/quick-start/' },
            { text: 'Погружение', link: '/dive-into/' },
            { text: 'Оформление', link: '/design/' },
            { text: 'Редактор', link: 'https://editor.ss3t.io/' },
            { text: 'Discord', link: 'https://discord.gg/nBkFGnx' },
        ]
    },
};
