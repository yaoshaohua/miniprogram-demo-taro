<template>
  <view class="log">
    <text>log页参数id：{{query.id}}</text>
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { ref } from 'vue'

export default {
  setup () {
    const query = ref({})
    Taro.getStorage({
      key: 'query',
      success: function (res) {
        query.value = res.data
      }
    })
    return {
      query
    }
  }
}
</script>