<template>
  <div class="containerThree" :style="selfStyle"></div>
</template>

<script>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  TextureLoader,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  Vector2,
} from 'three'
import { toRefs, nextTick } from 'vue'
export default {
  name: 'Background2To3',
  props: {
    // 页面大小变化事件
    screenResizeFn: {
      type: Function,
      // default:e=> console.log(e),
    },
    // 鼠标移动事件
    mouseMoveFn: {
      type: Function,
      // default:e=> console.log(e),
    },
    //图片加载完成的回调函数
    picLoadedFn: {
      type: Function,
      // default:(e)=> console.log(e),
    },
    //是否自定义样式
    selfStyle: {
      type: String,
      default:
        'width: 100vw; height: 100vh; position: absolute; top: 0; left: 0;z-index:-1',
    },
    // 是否开启自适应
    adaptive: {
      type: Boolean,
      default: true,
    },
    strength: {
      // 偏移强度
      type: Number,
      default: 2,
    },
    picSrc: {
      //图片路径
      required: true,
      type: String,
      default: '',
    },
    depthSrc: {
      //深度图片路径
      required: true,
      type: String,
      default: '',
    },
    canvasHeight: {
      // 画布高度
      type: Number,
      default: 1,
    },
    canvasWidth: {
      // 画布高度
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    // 解构props中的路径
    const {
      picSrc,
      // picHeight, picWidth,
      // customStyle,
      screenResizeFn,
      mouseMoveFn,
      adaptive,
      strength,
      depthSrc,
      canvasWidth,
      canvasHeight,
      picLoadedFn,
    } = toRefs(props)
    //创建场景
    const scene = new Scene()
    //创建相机
    const camera = new PerspectiveCamera(
      90,
      window.screen.width / window.screen.height,
      0.1,
      1000
    )
    camera.position.set(0, 0, 6)
    //渲染器
    let renderer = new WebGLRenderer({ antialias: true })
    adaptive.value
      ? renderer.setSize(window.innerWidth, window.innerHeight)
      : renderer.setSize(window.screen.width, window.screen.height)
    // 加载纹理
    const textureLoader = new TextureLoader()
    // 加载图片
    const texture = textureLoader.load(
      picSrc.value,
      // 图片加载后的回调，读取图片比例重设画布比例
      function (texture) {
        picLoadedFn.value && picLoadedFn.value(texture.source)
        const { width, height } = texture.source.data
        if (window.innerWidth / window.innerHeight < width / height) {
          plane.scale.set(
            (width / height) * 12 * canvasWidth.value,
            12 * canvasHeight.value,
            0
          ) //plane.scale.set(x轴方向的缩放倍数, y轴方向的缩放倍数, z轴方向的缩放倍数);
        } else {
          plane.scale.set(
            26 * canvasWidth.value,
            (26 * height * canvasHeight.value) / width,
            0
          ) //plane.scale.set(x轴方向的缩放倍数, y轴方向的缩放倍数, z轴方向的缩放倍数);
        }
      }
    )

    // 添加深度图
    const depthTexture = textureLoader.load(depthSrc.value)
    // 创建平面
    const geometry = new PlaneGeometry(1, 1) //加载的图片比例
    // 鼠标坐标
    const mouse = new Vector2()
    //材质
    // const material = new MeshBasicMaterial({ map: texture })
    //更换成着色器材质
    const material = new ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uDepthTexture: { value: depthTexture },
        uMouse: { value: mouse },
      },
      vertexShader: `
        varying vec2 vUv;
        void main(){
          vUv =uv;
          gl_Position=projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }`,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform sampler2D uDepthTexture;
        uniform vec2 uMouse;
        varying vec2 vUv;
        void main(){
          vec4 color = texture2D(uTexture,vUv);
          vec4 depth = texture2D(uDepthTexture,vUv);
          float depthValue =depth.r;
          float x = vUv.x+uMouse.x*0.01*depthValue;
          float y = vUv.y+uMouse.y*0.01*depthValue;
          vec4 newColor = texture2D(uTexture,vec2(x,y));
          gl_FragColor =newColor;
        }`,
    })
    const plane = new Mesh(geometry, material)
    scene.add(plane)
    // 渲染
    requestAnimationFrame(function animate() {
      material.uniforms.uMouse.value = mouse
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
    })
    nextTick(() => {
      const container = document.getElementsByClassName('containerThree')[0]
      container.appendChild(renderer.domElement)
      // 根据页面大小重新渲染画布与模型
      // 防抖
      let timer = null
      window.addEventListener('resize', (e) => {
        screenResizeFn.value && screenResizeFn.value(e)
        if (adaptive.value === true) {
          if (timer !== null) {
            clearTimeout(timer)
            timer = null
          }
          timer = setTimeout(() => {
            // 调整摄像头宽高比
            camera.aspect = window.innerWidth / window.innerHeight
            // 更新摄像机的投影矩阵
            camera.updateProjectionMatrix()
            // 重置渲染器输出画布canvas尺寸
            renderer.setSize(window.innerWidth, window.innerHeight)
          }, 100)
        }
      })

      window.addEventListener('mousemove', (e) => {
        mouseMoveFn.value && mouseMoveFn.value(e)
        mouse.x =
          ((window.innerWidth / 2 - e.clientX) / window.innerWidth) *
            strength.value -
          1
        mouse.y =
          ((-window.innerHeight / 2 + e.clientY) / window.innerHeight) *
            strength.value +
          1
      })
    })
    return {}
  },
}
</script>

<style lang="scss" scoped>
@import url(../../../css/background2To3.scss);
</style>
