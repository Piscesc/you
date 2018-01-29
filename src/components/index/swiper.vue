<template>
  <div>
    <swiper :options="swiperOption" class="banner index-banner">
      <swiper-slide v-for="item of sights" :key="item.id">
          <img class="slider-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div>
      <ul class="grow">
        <li><a href="javascript:;">网易自营品牌</a></li>
        <li><a href="javascript:;">30天无忧退货</a></li>
        <li><a href="javascript:;">48小时快速退款</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-swiper',
  props: {
    sights: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .slider-img
    width:100%
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 56%
</style>
