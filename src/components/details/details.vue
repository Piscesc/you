<template>
  <div class="main">
    <head-bar></head-bar>
    <div class="content" ref="scroller">
      <div>
        <detail-swiper :list='swiperInfo'></detail-swiper>
        <select-num :product='product'></select-num>
      </div>
    </div>
    <add-car></add-car>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import HeadBar from '../common/headBar'
import DetailSwiper from './swiper'
import SelectNum from './selectNum'
import AddCar from './addCar'

import axios from 'axios'

export default {
  name: 'Details',
  data () {
    return {
      swiperInfo: {},
      product: null
    }
  },
  components: {
    HeadBar,
    DetailSwiper,
    SelectNum,
    AddCar
  },
  methods: {
    getData () {
      axios.get('/api/details.json')      
        .then(this.handleGetDataSucc.bind(this))
        .catch(this.handleGetDataErr.bind(this))
    },
    handleGetDataSucc (res) {
      res = res ? res.data : null
      if (res && res.ret && res.data) {
        this.swiperInfo = res.data
        this.product = res.data.des[0].select
        this.$nextTick(() => {
          this.scroller = new BScroll(this.$refs.scroller, {
            probeType: 2,
            scrollX: true
          })
        })
      }
    },
    handleGetDataErr () {
      console.log(error)
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>
  .main
    display: flex
    flex-direction: column
    position: absolute
    left: 0
    right: 0
    bottom: 0
    top: 0
    .content
      flex: 1
      overflow: hidden
</style>