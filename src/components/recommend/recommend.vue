<template>
  <div>
    <swiper :recomList="recomList"></swiper>
    <recomation></recomation>
    <recom-footer class="footer"></recom-footer>
  </div>
</template>

<script>

import Swiper from './swiper'
import recomFooter from '../common/footer'
import Recomation from './recommendation'
import axios from 'axios'

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
    Recomation
  },
  methods: {
    getData () {
      axios.get('/api/recommend.json')
      .then(this.handleDataSucc.bind(this))
      .catch(this.handleDataError.bind(this))
    },
    handleDataSucc (res) {
       res = res ? res.data : null
      console.log(res)
      console.log(res.ret)
      if (res && res.ret && res.data) {
        res.data.recomList && (this.recomList = res.data.recomList)
      } else {
        this.handleDataError()
      }
    },
    handleDataError () {
      console.log('error')
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>

</style>