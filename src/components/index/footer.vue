<template>
  <nav class="footerBott">
    <a href="javascript:;" class="iconfont active">
      <i class="icon">&#xe65f;</i>
      <span class="list">首页</span>
    </a>
    <a href="javascript:;" class="iconfont">
      <i class="icon">&#xe60a;</i>
      <span class="list">识物</span>
    </a>
    <a href="javascript:;" class="iconfont">
      <i class="icon">&#xe602;</i>
      <span class="list">分类</span>
    </a>
    <a href="javascript:;" class="iconfont">
      <i class="icon">&#xe609;</i>
      <span class="list">购物车</span>
    </a>
    <a href="javascript:;" class="iconfont">
      <i class="icon">&#xe689;</i>
      <span class="list">个人</span>
    </a>
  </nav>
</template>

<script>
export default {

  name: 'Footer',

  data () {
    return {

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
    position: fixed
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
  .icon
    font-size: .5rem
  .list
    font-size: .3rem
    padding: .1rem 0
  .active
    color: #b4282d
</style>
