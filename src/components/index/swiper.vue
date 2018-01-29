<template>
  <swiper :options="swiperOption" class="banner index-banner">
    <swiper-slide>
        <img class="slider-img">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'index-swiper',
  props: {

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
