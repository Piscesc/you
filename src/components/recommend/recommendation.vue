<template>
    <div class="recommends" ref="wrapper">
      <ul class="content">
        <li class="slides">
          <div class="bg"></div>
          <div class="wenz">286篇文章</div>
          <div class="tuij">严选推荐</div>
        </li>
        <li class="slides">
          <div class="bg1"></div>
          <div class="wenz">207篇文章</div>
          <div class="tuij">挑款师推荐</div>
        </li>
        <li class="slides">
          <div class="bg2"></div>
          <div class="wenz">224篇文章</div>
          <div class="tuij">丁磊推荐</div>
        </li>
        <li class="slides">
          <div class="bg3"></div>
          <div class="wenz">604篇文章</div>
          <div class="tuij">严选LOOK</div>
        </li>
        <li class="slides">
          <div class="bg4"></div>
          <div class="wenz">13篇文章</div>
          <div class="tuij">口碑商品</div>
        </li>
        <li class="slides">
          <div class="bg5"></div>
          <div class="wenz">26篇文章</div>
          <div class="tuij">特色系列</div>
        </li>
        <li class="slides">
          <div class="bg6"></div>
          <div class="wenz">6篇文章</div>
          <div class="tuij">严选全球</div>
        </li>
      </ul>
    </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {

  name: 'Recommendation',
  mounted () {
    this.createScroll()
  },
  methods: {
    createScroll () {
      this.$nextTick(() => {
        this.wrapper = new BScroll(this.$refs.wrapper, {
          probeType: 3,
          scrollX: true,
          scrollY: false,
          click: true
        })
      })     
    }   
  }  
}
</script>

<style lang="stylus">
  .recommends
    overflow: hidden
    padding: 0 0 .72rem
    height: 3.16rem
    background-color: #fff
    margin-bottom: .26667rem
  .content
    width:18.7rem
  .slides
    display: inline-block
    position: relative
    width: 2.18667rem
    height: 2.8rem
    margin-right: .4rem
  .bg
    width: 2.18667rem
    height: 2.8rem
    background: url(../../../static/img/bg1.png) no-repeat
    background-size: 100%
  .bg1
    width: 2.18667rem
    height: 2.8rem
    background: url(../../../static/img/bg2.png) no-repeat
    background-size: 100%
  .bg2
    width: 2.18667rem
    height: 2.8rem
    background: url(../../../static/img/bg3.png) no-repeat
    background-size: 100%
  .bg3
    width: 2.18667rem
    height: 2.8rem
    background: url(../../../static/img/bg4.png) no-repeat
    background-size: 100%
  .bg4
    width: 2.18667rem
    height: 2.8rem
    background: url(../../../static/img/bg5.png) no-repeat
    background-size: 100%
  .bg5
    width: 2.18667rem
    height: 2.8rem
    background: url(../../../static/img/bg6.png) no-repeat
    background-size: 100%
  .bg6
    width: 2.18667rem
    height: 2.8rem
    background: url(../../../static/img/bg7.png) no-repeat
    background-size: 100%
  .wenz
    position: absolute
    top: .1rem
    right: 0
    color: #fff
    font-weight: 900
  .tuij
    position: absolute
    bottom: 0
    padding-left: .4rem
    color: #000
</style>