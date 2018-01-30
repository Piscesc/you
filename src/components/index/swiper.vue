<template>
  <div class="swiper-mar">
    <swiper :options="swiperOption" class="banner index-banner">
      <swiper-slide v-for="item of sights" :key="item.id">
          <img class="slider-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div>
      <ul class="grow">
        <li class="growL">
          <i class="iconfont">&#xe610;</i>
          <a class="grow-a" href="javascript:;">网易自营品牌</a>
        </li>
        <li class="growL">
          <i class="iconfont">&#xe610;</i>
          <a class="grow-a" href="javascript:;">30天无忧退货</a>
        </li>
        <li class="growL">
          <i class="iconfont">&#xe610;</i>
          <a class="grow-a" href="javascript:;">48小时快速退款</a>
        </li>
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
  .swiper-mar
    margin-bottom: .27rem
    background-color: #fff
  .slider-img
    width:100%
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 56%
  .grow
    display: flex
    justify-content: space-around
    align-items: center
    width: 100%
    height: .66rem
    padding: 0 .4rem
    flex-flow: row nowrap
    -webkit-box-align: center
    align-items: center
    zoom: 1
  .growL
    flex: 1
  .grow-a
    color: #000
  .iconfont
    color: red
</style>
