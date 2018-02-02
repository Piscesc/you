<template>
  <div class="orders">
    <div class="left">
      <p class="left-cs">
        <i class="check"></i>
        <span class="selected">已选({{count}})</span>
      </p>
      <p class="price">￥{{329.00*count}}</p>
    </div>
    <div class="btn">下单</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Order',
  data () {
    return {

    }
  },
   computed: {
    ...mapState(['count'])
  }
}
</script>

<style lang="stylus" scoped>
  .orders
    display: flex
    bottom: 1.30667rem
    position: fixed
    z-index: 3
    left: 0
    width: 100%
    height: 1.28rem
    padding-right: 3.01333rem
    background: #fff
    .left
      display: flex
      flex: 1
      padding-left: .4rem
      justify-content: space-between
      align-items: center
      .left-cs
        display: flex
        .check
          width: .50667rem
          height: .50667rem
          margin-right: .32rem
          background: url('//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/checkbox-sed825af9d3-a6b8540d42.png') no-repeat
          background-size: .50667rem 6.48rem
          background-position: 0 -2.56rem
        .selected
          line-height: .50667rem
          font-size: .37333rem
    .price
      margin-right: .4rem
      font-size: .37333rem
      color: #b4282d
    .btn
      width: 3.01333rem
      line-height: 1.28rem
      height: 1.28rem
      font-size: .37333rem
      color: #fff
      text-align: center
      border: 1px solid #b4282d
      background: #b4282d
</style>