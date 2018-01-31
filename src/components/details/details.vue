<template>
  <div>
    <head-bar></head-bar>
    <detail-swiper :list='swiperInfo'></detail-swiper>
  </div>
</template>

<script>
import HeadBar from '../common/headBar'
import DetailSwiper from './swiper'
import axios from 'axios'
export default {
  name: 'Details',
  data () {
    return {
      swiperInfo: {}
    }
  },
  components: {
    HeadBar,
    DetailSwiper
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
</style>