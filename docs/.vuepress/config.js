import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: '/Three-bg/',
  lang: 'zh-CN',
  title: 'THREE-BG',
  description: '以three.js为核的背景组件',
  public: `${__dirname}/public`, //指定 Public 文件目录。
  head: [['link', { rel: 'icon', href: '/images/headpic.png' }]],
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  theme: defaultTheme({
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [{
      text: '快速上手',
      link: '/'
    }, {
      text: 'Background2To3',
      link: '/componentDocs/2To3'
    }]
    //  [
    //   // SidebarItem
    //   {
    //     text: 'Foo',
    //     link: '/foo/',
    //     children: [
    //       // SidebarItem
    //       {
    //         text: 'github',
    //         link: 'https://github.com',
    //         children: [],
    //       },
    //       // 字符串 - 页面文件路径
    //       '/foo/bar.md',
    //     ],
    //   },
    //   // 字符串 - 页面文件路径
    //   '/bar/README.md',
    // ],
  }),
})