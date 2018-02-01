<template>
  <div class="header">
    <div class="header-top">
      <a class="logo" href="javascript:;"></a>
        <div class="header-ipt">
          <router-link to="/search">
            <div>
              <i class="iconfont">&#xe612;</i>
              <span class="icon">搜索商品,共5989款好物</span>
            </div>
          </router-link>
        </div>
    </div>
    <div ref="wrapper">
      <ul class="content">
        <li class="tab active">推荐</li>
        <li class="tab"><span class="txt">家居</span></li>
        <li class="tab"><span class="txt">餐厨</span></li>
        <li class="tab"><span class="txt">配件</span></li>
        <li class="tab"><span class="txt">服装</span></li>
        <li class="tab"><span class="txt">电器</span></li>
        <li class="tab"><span class="txt">洗护</span></li>
        <li class="tab"><span class="txt">杂货</span></li>
        <li class="tab"><span class="txt">饮食</span></li>
        <li class="tab"><span class="txt">婴童</span></li>
        <li class="tab"><span class="txt">志趣</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Header',
  watch: {
    sights () {
      this.$nextTick(() => {
        this.wrapper.refresh()
      })
    }
  },
  mounted () {
    this.createScroll()
  },
  methods: {
    createScroll () {
      this.wrapper = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        scrollX: true,
        scrollY: false,
        click: true
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
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
  .icon
      color: #666
  .iconfont
    margin-right: .1rem
    font-size: .2rem
    color: #666
  .content
    width: 21rem
    padding: 0 .213rem
  .tab:first-of-type
    margin-left: .4rem
    border-bottom: .05333rem solid #b4282d
  .tab
    display: inline-block
    margin-left: .64rem
    align-items: center
    text-align: center
    font-size: .373rem
    height: .55rem
  .active
    color: #b4282d
  .txt
    display: inline-block
    padding: 0 .21333rem
    line-height: .8rem
    font-size: .37333rem
    text-align: center
    box-sizing: border-box
</style>
