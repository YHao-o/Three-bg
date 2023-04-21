# ModelHere

> 该组件支持模型上传，并绑定鼠标移动、滚轮事件触发等多种事件

### 代码

```javascript
const background = {
  src: '/images/scene.jpg',
  position: { x: 0, y: 0 },
  scale: { x: 1, y: 1 },
}
const model = [
  {
    modelSrc: '/model/x7.gltf',
    scale: { x: 0.1, y: 0.1, z: 0.1 },
    position: { x: 3, y: 0, z: 0 },
    // 初始角度
    rotation: { x: 0, y: 0, z: 0 },
    // 偏移延迟
    delayTime: 1,
    //偏移强度
    strength: 1,
    axial: '',
  },
  {
    modelSrc: '/model/B1.gltf',
    scale: { x: 0.08, y: 0.08, z: 0.08 },
    position: { x: 3, y: -8, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    delayTime: 1,
    strength: 1,
    axial: '',
  },
]
const light = [
  { color: 0xffffff, position: { x: -6, y: 0, z: 1 }, strength: 1 },
  { color: 0x000000, position: { x: 0, y: 0, z: -1 }, strength: 0.5 },
  { color: 0x2b1e54, position: { x: -1, y: 1, z: 1 }, strength: 1 },
]
```

```html
<ModelHere
  selfStyle="width:740px; height:356px;border-radius: 10px;overflow:hidden"
  :backgroundInfo="background"
  :modelList="model"
  :lightList="light"
></ModelHere>
```

### 示例

<ClientOnly>
<ModelHere></ModelHere>
</ClientOnly>

### 参数

| 参数           | 说明                                                                                                                                                                                                                                    | 类型                                                                                                                                                  | 是否必要 | 默认值                                      |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------- |
| selfStyle      | 自定义样式                                                                                                                                                                                                                              | String                                                                                                                                                | false    | 'position:absolute;top:0;left:0;z-index=-1' |
| isFullScreen   | 是否开启双击全屏                                                                                                                                                                                                                        | Boolean                                                                                                                                               | false    | false                                       |
| isWheel        | 是否开启滚轮切换功能                                                                                                                                                                                                                    | Boolean                                                                                                                                               | false    | true                                        |
| backgroundInfo | 画布材质信息,有三个参数`src:''`为图片路径，`position:{x,y}`为图片坐标，以及`size:{x,y}`为图片拉伸比例                                                                                                                                   | Object<br/>如`{src:'',position:{x:0,y:0},size:{x:1,y:1}}`                                                                                             | false    | -                                           |
| lightList      | 添加光源，每组光源包含`color:0x000000`色彩，`position:{x,y,z}`位置，`strength:1`光照强度                                                                                                                                                | Array<br/>如`[{ color: 0xffffff, position: { x: -6, y: 0, z: 1 }, strength: 1 },{ color: 0x000000, position: { x: 0, y: 0, z: -1 }, strength: 0.5 }]` | false    | -                                           |
| modelList      | 添加模型，`modelSrc:'/model/x7.gltf'`模型路径,`scale:{x,y,z}`模型大小，`position:{x,y,z}`模型坐标，`rotation:{x:0,y:1,z:0}`模型初始角度，`delayTime:1`延迟时间，`strength:1`偏移强度，`axial:''`转轴，转轴可以设定 x 或 y，默认为全角度 | Array<br/>如`[{modelSrc:'/model/x7.gltf',scale:{x:1,y:1,z:1},position:{x:1,y:0,z:0},rotation:{x:0,y:-1.3,z:0},delayTime:1,strength:'1',axial:'x'}]`   | true     | -                                           |
| wheelFn        | 鼠标滚轮视角，默认参数 e 为页面值，页面值会根据模型数量生成                                                                                                                                                                             | Function                                                                                                                                              | false    | -                                           |
| screenResizeFn | 带防抖的页面大小变化回调函数,默认参数 e 为页面窗口信息                                                                                                                                                                                  | Function                                                                                                                                              | false    | -                                           |
