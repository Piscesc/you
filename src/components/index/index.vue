<template>
  <div class="main">
    <index-header class="header"></index-header>
    <div class="scroll">
      <index-swiper :sights="sights"></index-swiper>
      <index-content :list="list"></index-content>
    </div>
    <index-footer class="footer"></index-footer>
  </div>
</template>

<script>
import indexHeader from './header'
import indexSwiper from './swiper'
import indexFooter from '../common/footer'
import indexContent from './content'
import axios from 'axios'
export default {

  name: 'Index',
  data () {
    return {
      sights: [],
      list: []
    }
  },
  components: {
    indexHeader,
    indexSwiper,
    indexFooter,
    indexContent
  },
  methods: {
    getIndexData () {
      axios.get('/api/index.json')
      .then(this.handleDataSucc.bind(this))
      .catch(this.handleDataError.bind(this))
    },
    handleDataSucc (res) {
      res = res ? res.data : null
      console.log(res)
      console.log(res.ret)
      if (res && res.ret && res.data) {
        res.data.sights && (this.sights = res.data.sights)
        res.data.list && (this.list = res.data.list)
      } else {
        this.handleDataError()
      }
    },
    handleDataError () {
      console.log('error')
    }
  },
  created () {
    this.getIndexData()
  }
}
</script>

<style lang="stylus" scoped>
  body
    height: 100%
  .main
    display: flex
    flex-direction: column
    width: 100%
    height: 100%
  .header
    width: 100%
    height: 2rem
    position: fixed
    z-index: 5
    top: 0
  .scroll
    width: 100%
    overflow-x: hidden
    top: 2rem
    position: absolute
    z-index: 10
  .footer
    width: 100%
    position: absolute
    z-index: 200
    bottom: 0

</style>