// 引入所有组件
import Background2To3 from "./Background2To3/src"

const components = {
    Background2To3,
}
const install =function(Vue) {
    if(install.installed) return //避免重复引入
    Object.keys(components).forEach(key=>{
        Vue.component(components[key].name,components[key])
    })

}

const API = {install}

export default API