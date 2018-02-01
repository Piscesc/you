<template>
  <div class="recommends">
    <div class="recommendat">
      <a href="" class="slides">
        <div class="bg"></div>
        <div class="wenz">286篇文章</div>
        <div class="tuij">严选推荐</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Recommendation',

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .recommends
    overflow: hidden
    padding: 0 .4rem .72rem
    height: 3.16rem
    background-color: #fff
    margin-bottom: .26667rem
  .recommendat
    margin-left: auto
    margin-right: auto
    position: relative
    overflow: hidden
    z-index: 1
  .slides
    display: block
    position: relative
    width: 2.18667rem
    height: 2.8rem
    margin-right: .4rem
  .bg
    width: 2.18667rem
    height: 2.8rem
    background: url(../../../static/img/bg1.png) no-repeat
    background-size: 100%
  .wenz
    position: absolute
</style>