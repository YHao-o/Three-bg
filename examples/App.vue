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
    ></Background2To3
    >>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style></style>
