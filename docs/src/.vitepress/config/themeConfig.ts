import type { DefaultTheme } from 'vitepress'

const themeConfig: DefaultTheme.Config = {


    nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guides/getting-started' },
        { text: 'Hugging Face', link: 'https://huggingface.co/bluolightning/manga-ocr-mobile' },
    ],

    sidebar: [
        {
            text: 'Guides',
            items: [
                { text: 'Getting Started', link: '/guides/getting-started' },
                { text: 'Decoder Specs', link: '/guides/decoder-specs' },
            ],
        },
    ],

    socialLinks: [
        { icon: 'github', link: 'https://github.com/bluolightning/manga-ocr-mobile' },
    ],

    footer: {
        message: 'Released under the Apache License 2.0.',
        copyright: 'Copyright © 2026',
    },
}

export default themeConfig
