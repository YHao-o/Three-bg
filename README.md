## 快速上手

> 这就是一个防止我忘记 three.js 咋用的简单组件库，目前主要用于网页背景

**仅支持 Vue3**

#### 1.安装组件库

```bash
npm i three-bg
or
yarn add three-bg
```

#### 2.引用组件库

```javascript
//全部引入
import THREEBG from 'three-bg'
vue.use(THREEBG)
//按需引入

import { Background2To3, ModelHere } from 'three-bg'
vue.use(Background2To3).use(ModelHere)
```

点击[参数详情](https://yhao-o.github.io/Three-bg/)了解更多
