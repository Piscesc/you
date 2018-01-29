<template>
  <swiper :options="swiperOption" class="banner index-banner">
    <swiper-slide v-for="item of sights" :key="item.id">
        <img class="slider-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
        autoplay: 1000,
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
