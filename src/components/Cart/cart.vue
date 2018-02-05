<template>
  <div class="container">
    <div class="headCar">购物车<span class="compile">编辑</span></div>
    <div class="notice"><span>已满足免邮条件</span></div>
    <div class="group">
      <ul class="cartList">
        <li class="item hd">
          <div class="promotion">
            <span class="tag">全场加价购</span>
            <p class="promoTip">已满足满120元可超值换购</p>
            <i class="icon">></i>
          </div>
          <div class="promotGo">去换购</div>
        </li>
        <li class="item goods">
          <i class="check"></i>
          <div class="m">
            <div class="m-img" @click="goBack">
              <img src="http://yanxuan.nosdn.127.net/09c03d57ac2d430d9bf8cb6fc390558c.png?imageView&thumbnail=160x0&quality=75">
            </div>
            <div class="m-info">
              <p class="line-a">
                <em>AAA级淡水珍珠 可调节耳坠</em>
                <em>x{{count}}</em>
              </p>
              <p class="line-b">耳坠</p>
              <div class="line-c">
                <b class="price">￥329.00</b>
                <div class="num">
                  <i class="sym minus" :class="{limit: count <= 1}" @click="reduceCount">-</i>
                  <input type="text" name="" class="count" :value="count">
                  <i class="sym plus" @click="addCount">+</i>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <order></order>
    <foot></foot>
  </div>
</template>

<script>
import Order from './order'
import Foot from '../common/footer'
import { mapState } from 'vuex'
import { Toast } from 'mint-ui'

export default {

  name: 'Cart',

  data () {
    return {

    }
  },
  components: {
    Order,
    Foot
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    addCount () {
      this.$store.commit('increment')
    },
    reduceCount () {
      if (this.count <= 1) {
        Toast('本商品1件起售')
        return
      }
      this.$store.commit('reduce')
    },
    goBack () {
      this.$router.push('details')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  display: flex
  flex-direction: column
  position: absolute
  top: 0
  right: 0
  left: 0
  bottom: 0
  .headCar
    position: relative
    height: 1.173rem
    padding: 0 .4rem
    line-height: 1.173rem
    text-align: center
    background: #fff
    font-size: .48rem
    .compile
      position: absolute
      right: .4rem
      font-size: .4rem
  .notice
    display: flex
    align-items: center
    height: 1.07rem
    padding: 0 .4rem
    border-top: 1px solid #eee
    line-height: .8rem
    font-size: .32rem
    color: #f48f18
    background-color: #fff8d8
  .group
    flex: 1
    background: #f4f4f4
    .cartList
      background: #f4f4f4
      .hd
        display: flex
        align-items: center
        padding: 0 .4rem
        height: 1.2rem
        overflow: hidden
        color: #333
        background: #fff
        .promotion
          display: flex
          flex-grow: 1
          margin-right: .66667rem
          .tag
            margin-right: .13333rem
            white-space: nowrap
            border-radius: 4px
            padding: 0 .12rem
            line-height: .45333rem
            font-size: .32rem
            color: #f48f18
            border: 1px solid #f48f18
          .promoTip
            text-overflow: ellipsis
            white-space: nowrap
            overflow: hidden
            max-width: 4.66667rem
            font-size: .37333rem
            line-height: .53333rem
          .icon
            margin-left: .5rem
            text-align: center
            font-size: .5rem
            line-height: .5rem
        .promotGo
          padding: 0 0 0 .21333rem
          font-size: .37333rem
          line-height: .74667rem
          border-left: 1px solid #d9d9d9
      .item
        margin-bottom: .26667rem
      .goods
        position: relative
        padding-left: 1.2rem
        background: #fff
        .check
          position: absolute
          left: .4rem
          top: 0
          bottom: 0
          margin: auto
          width: .50667rem;
          height: .50667rem
          background: url('//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/checkbox-sed825af9d3-a6b8540d42.png') no-repeat
          background-size: .50667rem 6.48rem
          background-position: 0 -2.56rem
        .m
          display: flex
          height: 2.77333rem
          background-color: #fff
          padding: 0 .4rem 0 0
          .m-img
            width: 2.13333rem
            height: 2.13333rem
            margin-right: .26667rem
            border-radius: 4px
            overflow: hidden
            background-color: #f4f4f4
            position: relative
            top: 50%
            transform: translateY(-50%)
            img
              width: 2.13333rem
              height: 2.13333rem
          .m-info
            flex: 1
            height: 2.13333rem
            position: relative
            top: 50%
            transform: translateY(-50%)
            .line-a
              display: flex
              line-height: .42667rem
              font-size: .37333rem
              margin-bottom: .13333rem
              overflow: hidden
              justify-content: space-between
            .line-b
              margin-bottom: .37333rem
              font-size: .32rem
              line-height: .37333rem
              color: #666
              text-overflow: ellipsis
              white-space: nowrap
              overflow: hidden
            .line-c
              font-size: .37333rem
              line-height: .42667rem
              position: relative
              .num
                display: flex
                position: absolute
                right: 0
                top: 0
                text-align: center
                .count
                  width: .93333rem
                  height: .66667rem
                  line-height: .66667rem
                  text-align: center
                  border: 1px solid #bbb
                  font-size: .32rem
                  box-sizing: border-box
                .sym
                  font-size: .46rem
                  width: 1.06667rem
                  height: .66667rem
                  line-height: .66667rem
                  box-sizing: border-box
                  border: 1px solid #bbb
                .minus
                  border-right: none
                .plus
                  border-left: none
                .limit
                  border-color: #e0e0e0
                  color: #e0e0e0
</style>