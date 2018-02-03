<template>
  <div>
    <div class="select">
      <p class="selected">已选择：{{product}}x1</p>
      <p>></p>
    </div>
    <div class="select">
      <p class="selected">积分：购买最高得<span>99积分</span></p>
    </div>
    <div class="server">
      <div class="server-l">服务：</div>
      <div class="server-r">
        <p>30天无忧退换货</p>
        <p>48小时快速退款</p>
        <p>满88元免邮费</p>
        <p>网易自营品牌</p>
        <p>国内部分地区无法配送</p>
      </div>
    </div>
    <div class="select">
      <p class="selected">用户评价(131)</p>
      <p>96.3% 好评 ></p>
    </div>
    <div class="estimate">
      <header class="es-head">
        <img class="avatar" src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png">
        <span>m****1</span>
        <i class="rank"></i>
      </header>
      <div class="es-time"><em>2018-01-26 13:13:37</em><span class="skus">珍珠项链</span></div>
      <div class="es-con">
        <p class="con-word">非常非常喜欢，就是没有想象之中的大，有一点小瑕疵，一直很喜欢严选，加油(ง •̀_•́)ง</p>
        <ul class="minImg"><li><img src="https://yanxuan.nosdn.127.net/215d9e80843ff0430d24e2a19a4175f3.jpg"></li></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectNum',
  props: {
    product: String
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .estimate
    padding: 0 .4rem .4rem
    border-bottom: .267rem solid #f4f4f4
    .es-head
      padding: .4rem 0 .053rem
      .avatar
        width: .853rem
        height: .853rem
        margin-right: .213rem
        border-radius: 50%
    .es-time
      margin-top: .24rem
      font-size: .32rem
      line-height: 1
      color: #7f7f7f
      .skus
        margin-left: .213rem
    .con-word
      margin-top: .24rem
      padding-right: .4rem
      font-size: .36rem
      line-height: 1.5
      color: #333
    .minImg 
      margin: .293rem 0 .08rem
      li
        display: flex
        position: relative
        width: 1.92rem
        height: 1.92rem
        overflow: hidden
        align-items: center
        img
          width: 100%
          position: absolute
  .select
    display: flex
    justify-content: space-between
    margin:0 .4rem
    border-bottom: 1px solid #d9d9d9
    align-items: center
    min-height: 1.387rem
    font-size: .373rem
  .server
    display: flex
    padding: .32rem 0 .107rem .4rem
    background: #fff
    border-bottom: .267rem solid #f4f4f4
    font-size: .37333rem
    min-height: .96rem
    .server-l
      line-height: 1
      color: #333
      margin-right: .267rem
    .server-r
      display: flex
      flex: 1
      flex-wrap: wrap
      p
        position: relative
        padding-left: .213rem
        margin-right: .533rem
        line-height: 1
        margin-bottom: .213rem
        color: #7f7f7f
        &:after
          content: ""
          position: absolute
          width: .10667rem
          height: .10667rem
          background: #b4282d
          border-radius: 100%
          left: 0
          top: .13333rem
</style>