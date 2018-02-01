<template>
  <div class="mian">
    <div ref="wrapper" class="scroller">
      <div>
        <swiper :recomList="recomList"></swiper>
        <recomation></recomation>
        <recom-foot></recom-foot>
      </div>
    </div>
    <recom-footer class="footer"></recom-footer>
  </div>
</template>

<script>

import Swiper from './swiper'
import recomFooter from '../common/footer'
import Recomation from './recommendation'
import RecomFoot from './recomfoot'
import axios from 'axios'
import BScroll from 'better-scroll'

export default {
  name: 'Recommend',
  data () {
    return {
      recomList: []
    }
  },
  components: {
    Swiper,
    recomFooter,
    Recomation,
    RecomFoot
  },
  methods: {
    getData () {
      axios.get('/api/recommend.json')
      .then(this.handleDataSucc.bind(this))
      .catch(this.handleDataError.bind(this))
    },
    handleDataSucc (res) {
       res = res ? res.data : null
      if (res && res.ret && res.data) {
        res.data.recomList && (this.recomList = res.data.recomList)
      } else {
        this.handleDataError()
      }
    },
    handleDataError () {
      console.log('error')
    },
    createScroll () {
      this.$nextTick(() => {
        this.wrapper = new BScroll(this.$refs.wrapper, {
          probeType: 3,
          scrollX: false,
          scrollY: true,
          click: true
        })
      })     
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    this.createScroll()
  }
}
</script>

<style lang="stylus" scoped>
  .mian
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    .scroller
      flex: 1
      overflow: hidden
</style>