import { createApp } from 'vue'
import './app.less'
import Taro from "@tarojs/taro"
import { getCurrentInstance } from '@tarojs/taro'

const App = createApp({
  onShow (options) {
    const query = getCurrentInstance()?.router?.params
    Taro.setStorage({
      key:"query",
      data:query
    })
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
