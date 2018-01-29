<template>
  <div class="header">
    <div class="header-top">
      <a class="logo" href="javascript:;"></a>
      <div class="header-ipt">
        <span class="iconfont">搜索商品,共5989款好物</span>
      </div>
    </div>
    <div class="header-bottom">
      <div class="header-nav">
        <div class="tab active"><span class="txt" >推荐</span></div>
        <div class="tab"><span class="txt" >家居</span></div>
        <div class="tab"><span class="txt" >餐厨</span></div>
        <div class="tab"><span class="txt" >配件</span></div>
        <div class="tab"><span class="txt" >服装</span></div>
        <div class="tab"><span class="txt" >电器</span></div>
        <div class="tab"><span class="txt" >洗护</span></div>
        <div class="tab"><span class="txt" >杂货</span></div>
        <div class="tab"><span class="txt" >饮食</span></div>
        <div class="tab"><span class="txt" >婴童</span></div>
        <div class="tab"><span class="txt" >志趣</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus">
  .header-top
    padding: .21333rem .4rem
    display: flex
    flex-flow: row nowarp
    align-items: center
  .logo
    display: inline-block
    width: 1.84rem
    height: .5333rem
    margin-right: .26667rem
    background-size: cover
    background-position: center
    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
  .header-ipt
    text-align: center
    line-height: .5333rem
    display: flex
    justify-content: center
    flex-grow: 1
    flex-flow: row nowrap
    align-items: center
    height: .74667rem
    font-size: .37333rem
    background-color: #ededed
    border-radius: .10667rem
  .header-bottom
    position: relative
    height: 100%
    width: 100%
    overflow: hidden
  .header-nav
    display: flex
    transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1)
    transition-duration: 0ms
    transform: translate(0px, 0px) translateZ(0px)
    flex-shrink: 0
    padding: 0 .4rem
    background: #fff
  .tab:first-of-type
    margin-left: 0
  .tab
    flex-shrink: 0
    position: relative
    margin-left: .64rem
    display: flex
    flex-flow: row nowrap
    align-items: center
    text-align: center
  .active
    color: #b4282d
  .txt
    display: inline-block
    padding: 0 .21333rem
    line-height: .8rem
    font-size: .37333rem
    text-align: center
    box-sizing: border-box
    &:after
      content: ' '
      position: absolute
      left: 0
      bottom: 0
      width: 100%
      height: .05333rem
      background-color: #b4282d
</style>
