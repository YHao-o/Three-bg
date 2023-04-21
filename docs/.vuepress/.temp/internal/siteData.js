export const siteData = JSON.parse("{\"base\":\"/Three-bg/\",\"lang\":\"zh-CN\",\"title\":\"THREE-BG\",\"description\":\"以three.js为核的背景组件\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/Three-bg/images/favoricon.png\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
