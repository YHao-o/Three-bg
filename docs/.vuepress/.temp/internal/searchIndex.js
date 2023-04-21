export const searchIndex = [
  {
    "title": "",
    "headers": [
      {
        "level": 2,
        "title": "快速上手",
        "slug": "快速上手",
        "link": "#快速上手",
        "children": []
      }
    ],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Background2To3",
    "headers": [],
    "path": "/componentDocs/2To3.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "ModelHere",
    "headers": [
      {
        "level": 3,
        "title": "代码",
        "slug": "代码",
        "link": "#代码",
        "children": []
      },
      {
        "level": 3,
        "title": "示例",
        "slug": "示例",
        "link": "#示例",
        "children": []
      }
    ],
    "path": "/componentDocs/Model.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
