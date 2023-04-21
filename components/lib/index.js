// 引入所有组件
import Background2To3 from "./Background2To3/src"
import ModelHere from "./ModelHere/src"
const components = {
    Background2To3,
    ModelHere
}
const install = function (Vue) {
    if (install.installed) return //避免重复引入
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key])
    })

}

const THREEBG = { install }
export default THREEBG
export { Background2To3, ModelHere }