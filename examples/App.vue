<template>
  <div>
    examples
    <input />
    <button>click</button>
    <Background2To3
      picSrc="2dto3d.jpg"
      depthSrc="2dto3d_depth.jpg"
      :strength="1"
      :adaptive="true"
      :canvasHeight="1"
      :canvasWidth="1"
      :picLoadedFn="mouseFn"
      :refreshRate="100"
    ></Background2To3>
    <ModelHere :modelList="modelList"></ModelHere>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  setup() {
    const modelList = [
      {
        modelSrc: './model/X7.gltf',
        // modelSrc: './model/小汽车.gltf',
        scale: { x: 0.1, y: 0.1, z: 0.1 },
        position: { x: 3, y: 0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        delayTime: 1,
        strength: 1,
        axial: 'x',
      },
      {
        modelSrc: './model/B1.gltf',
        scale: { x: 0.08, y: 0.08, z: 0.08 },
        position: { x: 3, y: -8, z: 0 },
        rotation: { x: 0, y: -2, z: 0 },
        delayTime: 1,
        strength: 2,
        axial: '',
      },
      {
        modelSrc: './model/Q6.gltf',
        scale: {
          x: 0.05,
          y: 0.05,
          z: 0.05,
        },
        position: { x: 3, y: -16, z: 0 },
        rotation: { x: 0, y: 0, z: 0 },
        delayTime: 1,
        strength: 1,
        axial: '',
      },
    ]
    function mouseFn() {
      // console.log(e)
    }
    return { mouseFn, modelList }
  },
}
</script>

<style></style>
