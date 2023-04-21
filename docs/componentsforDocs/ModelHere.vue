<template>
  <div class="canvas-container" :style="selfStyle"></div>
</template>
<script>
import {
  Scene,
  PerspectiveCamera,
  WebGL1Renderer,
  TextureLoader,
  // EquirectangularReflectionMapping,
  DirectionalLight,
  LinearFilter,
} from 'three'
// 引入模型加载器
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { nextTick, ref, toRefs, onMounted, onBeforeMount } from 'vue'
import { gsap } from 'gsap'
export default {
  name: 'ModelHere',
  props: {
    selfStyle: {
      type: String,
      default: 'width:740px; height:356px;border-radius: 10px;overflow:hidden',
    },
    // 页面大小变化事件带防抖
    screenResizeFn: {
      type: Function,
      // default: (e) => console.log(e),
    },
    // 是否双击全屏
    isFullScreen: {
      type: Boolean,
      default: true,
    },
    // 转轴
    axial: {
      type: String,
    },
    // 背景图片路径
    backgroundInfo: {
      type: Object,
      default: () => {
        return {
          src: '',
          position: { x: 20, y: 0 },
          size: { x: 1, y: 1 },
        }
      },
    },

    // 灯光信息
    lightList: {
      type: Array,
      default: () => [
        { color: 0xffffff, position: { x: -6, y: 0, z: 1 }, strength: 1 },
        { color: 0x000000, position: { x: 0, y: 0, z: -1 }, strength: 0.5 },
        { color: 0x2b1e54, position: { x: -1, y: 1, z: 1 }, strength: 1 },
      ],
    },
    //模型信息
    modelList: {
      // required: true,
      type: Array,
      default: () => [
        {
          modelSrc: '/model/x7.gltf',
          // modelSrc: './model/小汽车.gltf',
          scale: { x: 0.1, y: 0.1, z: 0.1 },
          position: { x: 3, y: 0, z: 0 },
          rotation: { x: 0, y: 0, z: 0 },
          delayTime: 1,
          strength: 1,
        },
        {
          modelSrc: '/model/GR.gltf',
          scale: { x: 0.8, y: 0.8, z: 0.8 },
          position: { x: 3, y: -8, z: 0 },
          rotation: { x: 0, y: 0, z: 0 },
          delayTime: 1,
          strength: 1,
        },
        // {
        //   modelSrc: '/model/XQ.gltf',
        //   scale: {
        //     x: 0.05,
        //     y: 0.05,
        //     z: 0.05,
        //   },
        //   position: { x: 3, y: -16, z: 0 },
        //   rotation: { x: 0, y: 0, z: 0 },
        //   delayTime: 1,
        //   strength: 1,
        // },
      ],
    },
  },
  setup(props) {
    // console.log('setup')
    let screenDom
    let utexture
    const backgroundSizeFn = (e) => {
      console.log(screenDom.style.width)
      const { x: width, y: height } = picSize
      const { innerWidth: wWidth, innerHeight: wHeight } = window
      console.log(wWidth, wHeight)
      // const { width: sWidth, height: sHeight } = screenDom.style
      e.repeat.x =
        (1 * height * wWidth) / (width * wHeight) / backgroundInfo.value.size.x
      e.repeat.y = 1 / backgroundInfo.value.size.y
    }
    // 图片宽高
    let picSize = {}
    const {
      backgroundInfo,
      modelList,
      lightList,
      axial,
      isFullScreen,
      screenResizeFn,
    } = toRefs(props)
    // 设置页面值
    let page = ref(0)
    onMounted(() => {
      // console.log('onMounted')
    })
    onBeforeMount(() => {
      // console.log('onBeforeMount')
    })
    nextTick(() => {
      // console.log('nextTick')
      screenDom = document.getElementsByClassName('canvas-container')[0]
      // 创建屏幕
      const scene = new Scene()
      // 创建摄像头
      const camera = new PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      // 移动摄像头
      camera.position.set(0, 0, 10)
      // 创建渲染器
      const renderer = new WebGL1Renderer({ antialias: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      // 将画布添加在页面中
      screenDom.appendChild(renderer.domElement)
      // 创建背景
      if (backgroundInfo.value.src) {
        let url = backgroundInfo.value.src
        const envTexture = new TextureLoader().load(url, function (e) {
          picSize = { x: e.source.data.width, y: e.source.data.height }
          utexture = e
          // 位置坐标
          e.offset.x = 0 + backgroundInfo.value.position.x / 100
          e.offset.y = 0 + backgroundInfo.value.position.y / 100
          backgroundSizeFn(utexture)
          // console.log(e)
        }) //添加纹理
        //圆柱反射映射
        // envTexture.mapping = EquirectangularReflectionMapping
        scene.background = envTexture
        scene.environment = envTexture
        envTexture.minFilter = LinearFilter
      } else {
        let url = '/images/scene.jpg'
        const envTexture = new TextureLoader().load(url, function (e) {
          picSize = { x: e.source.data.width, y: e.source.data.height }
          utexture = e
          // 位置坐标
          e.offset.x = 0 + backgroundInfo.value.position.x / 100
          e.offset.y = 0 + backgroundInfo.value.position.y / 100
          backgroundSizeFn(utexture)
        }) //添加纹理
        //圆柱反射映射
        // envTexture.mapping = EquirectangularReflectionMappin
        scene.background = envTexture
        scene.environment = envTexture
        envTexture.minFilter = LinearFilter
      }

      function render() {
        requestAnimationFrame(render)
        renderer.render(scene, camera)
      }
      render()
      // 添加灯光
      if (lightList.value) {
        for (let i = 0; i < lightList.value.length; i++) {
          const info = lightList.value[i]
          const { color, strength, position } = info
          let light1 = new DirectionalLight(color, strength)
          light1.position.set(position.x, position.y, position.z)
          scene.add(light1)
        }
      }

      // let light2 = new DirectionalLight(0x000000, 0.5)
      // light2.position.set(0, 0, -1)
      // let light3 = new DirectionalLight(0x2b1e54, 1)
      // light3.position.set(-1, 1, 1)
      // scene.add(light1)
      // scene.add(light2)

      if (modelList.value) {
        // 设置模型解压缩加载器
        let dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('./draco/gltf')
        dracoLoader.setDecoderConfig({ type: 'js' })
        let loader = new GLTFLoader()
        loader.setDRACOLoader(dracoLoader)
        // 循环生成模型
        for (let i = 0; i < modelList.value.length; i++) {
          const info = modelList.value[i]
          const { modelSrc, scale, position, strength, delayTime, rotation } =
            info
          loader.load(modelSrc, (gltf) => {
            console.log(gltf)
            gltf.scene.rotation.y = rotation.y
            gltf.scene.rotation.x = rotation.x
            gltf.scene.rotation.z = rotation.z
            gltf.scene.scale.set(scale.x, scale.y, scale.z)
            gltf.scene.position.set(position.x, position.y, position.z)
            scene.add(gltf.scene)
            // 模型跟随鼠标移动
            window.addEventListener('mousemove', (e) => {
              let x = ((e.clientX / window.innerWidth) * 2 - 1) * strength
              let y = ((e.clientY / window.innerHeight) * 2 - 1) * strength
              // 调用动画时间线函数
              let timeline = gsap.timeline()
              if (axial.value) {
                timeline.to(gltf.scene.rotation, {
                  x: axial.value === 'x' ? 0 + rotation.x : y + rotation.x,
                  y: axial.value === 'y' ? 0 + rotation.y : x + rotation.y,
                  duration: delayTime,
                })
              } else {
                timeline.to(gltf.scene.rotation, {
                  x: y + rotation.x,
                  y: x + rotation.y,
                  duration: delayTime,
                })
              }
            })
          })
        }
      }
      // 根据页面大小重新渲染画布与模型
      // 防抖
      let timer = null
      window.addEventListener('resize', (e) => {
        if (timer !== null) {
          clearTimeout(timer)
          timer = null
        }
        timer = setTimeout(() => {
          if (backgroundInfo.value.src) {
            backgroundSizeFn(utexture)
          }
          screenResizeFn.value && screenResizeFn.value(e)
          // 调整摄像头宽高比
          camera.aspect = window.innerWidth / window.innerHeight
          // 更新摄像机的投影矩阵
          camera.updateProjectionMatrix()
          // 重置渲染器输出画布canvas尺寸
          renderer.setSize(window.innerWidth, window.innerHeight)
        }, 100)
      })
      let timeline2 = gsap.timeline()
      // 滚动滚轮切换模型
      window.addEventListener('mousewheel', (e) => {
        // 判断是否处于动画播放状态
        if (!timeline2.isActive()) {
          if (e.deltaY > 0) {
            page.value++
            if (page.value > modelList.value.length - 1) {
              page.value = modelList.value.length - 1
            }
          }
          if (e.deltaY < 0) {
            page.value--
            if (page.value < 0) {
              page.value = 0
            }
          }
          timeline2.to(camera.position, {
            duration: 1,
            y: page.value * -8,
          })
        }
      })
      // 双击进入或退出全屏
      if (isFullScreen.value) {
        screenDom.addEventListener('dblclick', () => {
          if (!document.fullscreenElement) {
            // 切换至全屏模式
            renderer.domElement.requestFullscreen()
          } else {
            document.exitFullscreen()
          }
        })
      }
    })
    return {
      page,
    }
  },
}
</script>
<style lang="scss">
canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
