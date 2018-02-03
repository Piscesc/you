<template>
  <nav class="footerBott">
    <router-link to="/">
      <a href="javascript:;" class="iconfont" :class="{acitve:true}">
        <i class="icon">&#xe65f;</i>
        <span class="list">首页</span>
      </a>
    </router-link>
    <router-link to="/recommend">
      <a href="javascript:;" class="iconfont">
        <i class="icon">&#xe60a;</i>
        <span class="list">识物</span>
      </a>
    </router-link>
    <router-link to="/classify">
      <a href="javascript:;" class="iconfont">
        <i class="icon">&#xe602;</i>
        <span class="list">分类</span>
      </a>
    </router-link>
    <router-link to="/cart">
      <a href="javascript:;" class="iconfont">
        <i class="icon">&#xe609;</i>
        <span class="list">购物车</span>
        <em class="num">{{count}}</em>
      </a>
    </router-link>
    <router-link to="/login">
      <a href="javascript:;" class="iconfont">
        <i class="icon">&#xe689;</i>
        <span class="list">个人</span>
      </a>
    </router-link>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: 'Footer',

  data () {
    return {

    }
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    changeColor () {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .footerBott
    width: 100%
    position: fixed
    bottom: 0
    display: flex
    flex-flow: row nowrap
    align-items: center
    justify-content: space-around
    z-index: 5
    left: 0
    bottom: 0
    width: 100%
    height: 1.30667rem
    background-color: #fafafa
    border-top: 1px solid #d9d9d9
  .iconfont
    display: flex
    flex-direction: column
    align-items: center
    color: #666
    position: relative
  .icon
    font-size: .5rem
  .list
    font-size: .3rem
    padding: .1rem 0
  .active
    color: #b4282d
  .num
    position: absolute
    top: -.01333rem
    right: -.08rem
    display: inline-block
    width: .37333rem
    height: .37333rem
    border-radius: .18667rem
    background-color: #b4282d
    text-align: center
    line-height: .37333rem
    font-size: .24rem
    color: #fff
</style>
