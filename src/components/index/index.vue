<template>
  <div>
    <index-header></index-header>
    <index-swiper :sights="sights"></index-swiper>
  </div>
</template>

<script>
import indexHeader from './header'
import indexSwiper from './swiper'
import axios from 'axios'
export default {

  name: 'Index',
  data () {
    return {
      sights: []
    }
  },
  components: {
    indexHeader,
    indexSwiper
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

<style lang="stylus" scoped></style>
