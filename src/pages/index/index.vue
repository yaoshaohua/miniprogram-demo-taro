<template>
  <view class="index">
     <text>index页面的参数id：{{query.id}}</text>
     <button type="primary" @tap="handleClick">点我跳转log页面</button>
  </view>
</template>

<script>
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { ref } from 'vue'
import './index.less'

export default {
  setup () {
    const query = ref({})
    Taro.getStorage({
      key: 'query',
      success: function (res) {
        query.value = res.data
      }
    })
    const handleClick = () => {
      Taro.navigateTo({
        url: '/pages/log/index'
      })
    }
    return {
      query,
      handleClick
    }
  }
}
</script>
