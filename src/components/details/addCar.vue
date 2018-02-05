<template>
  <div class="add-car">
    <button class="btn server">O</button>
    <button class="btn buy">立即购买</button>
    <button class="btn add" @click="toCart">加入购物车</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'addCar',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['seleNum'])
  },
  methods: {
    toCart () {
      // this.$router.push('cart')
      this.$store.state.count += this.seleNum
      console.log(this.$store.state.count)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .add-car
    display: flex
    width: 100%
    position: fixed
    bottom: 0
    .btn
      justify-content: center
      height: 1.387rem
      border: 1px solid #c7c7c7
      background: #fff
      border-right: 0
      box-sizing: border-box
      font-size: .373rem
      color: #333
    .server
      width: 2.08rem
    .buy
      flex-grow: 1
      width: 3.36rem
    .add
      flex-grow: 1
      width: 3.36rem
      color: #fff
      border-color: #b4282d
      background-color: #b4282d
</style>