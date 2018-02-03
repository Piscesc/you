<template>
    <div class="recomT">
      <div class="container">为你推荐</div>
      <a href="" class="mainPos">
        <div class="imgContainer"></div>
        <div class="topic">
          <div class="line1">
            <div class="title">严选知心起来，比女朋友更懂你</div>
            <div class="price">
              <span>45</span>
              <span>元起</span>
            </div>
          </div>
          <div class="line2">
            <div class="sunTitle">那些严选给男生的体贴</div>
          </div>
        </div>
      </a>
      <a href="" class="mainPos floa">
        <div class="topic">
          <div class="auther-container">
            <div class="auther">
              <div class="aviatar">
                <img src="../../../static/img/4.jpg">
              </div>
              <div class="nickname">王伟忠</div>
            </div>
          </div>
          <div class="line1">
            <div class="title">味道，是台时光机</div>
          </div>
          <div class="line2">
            <div class="sunTitle twolines">每次吃到炸排骨，那味道立刻把我带回</div>
          </div>
        </div>
        <div class="minorpic">
          <div class="imgContaine"></div>
        </div>
      </a>
      <a href="" class="mainPos floa">
        <div class="topic">
          <div class="auther-container">
            <div class="auther">
              <div class="aviatar">
                <img src="../../../static/img/5.png">
              </div>
              <div class="nickname">丁磊</div>
            </div>
          </div>
          <div class="line1">
            <div class="title">提升春节幸福感的13...</div>
          </div>
          <div class="line2">
            <div class="sunTitle twolines">过年的时候，走亲访友、闲话家常、吃</div>
          </div>
        </div>
        <div class="minorpic">
          <div class="imgContaines"></div>
        </div>
      </a>
    </div>
</template>

<script>

export default {
  name: 'Recomfoot' 
}
</script>

<style lang="stylus" scoped>
  .recomT
    padding: 0 .4rem .53333rem
    margin-bottom: .26667rem
    background-color: #fff
  .container
    background-color: #fff
    text-align: center
    font-size: .42667rem
    height: 1.6rem
    line-height: 1.6rem
  .mainPos
    display: block
    position: relative
    color: #333
    border: 1px solid #d9d9d9
    border-radius: .10667rem
    overflow: hidden
  .imgContainer
    background: url(../../../static/img/1.jpg) no-repeat
    background-size: cover
    background-position: center
    position: relative
    height: 4.8rem
    border-radius: .10667rem .10667rem 0 0
    overflow: hidden
  .topic
    overflow: hidden
    position: relative
    padding: .32rem .26667rem 0
    background-color: #fff
    padding-bottom: .5rem
  .line1
    margin-bottom: .25333rem
    display: flex
    justify-content: space-between
    align-items: center
    line-height: 1.2rem
  .title
    flex: 1
    margin-right: .4rem
    font-size: .48rem
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
  .price
    line-height: 1
    font-size: .42667rem
    text-align: center
    span
      font-size: .48rem
  .sunTitle
    position: relative
    font-size: .37333rem
    color: #7f7f7f
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
  .auther-container
    margin-bottom: .34rem
  .auther
    height: 0.64rem
    font-size: 0.26rem
    display: flex
    align-items: center
  .aviatar
    width: 0.64rem
    height: 0.64rem
    margin-right: 0.10666666666666667rem
    border-radius: 50%
    img
      display: block
      width: 100%
      height: 100%
  .nickname
    color: #333
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
  .twolines
    position: relative
    font-size: .32rem
    line-height: 1.5
    color: #7f7f7f
  .minorpic
    position: relative
    width: 3.73rem
    height: 3.6rem
  .imgContaine
    background: url(../../../static/img/2.jpg) no-repeat
    background-size: cover
    background-position: center
    position: relative
    width: 100%
    height: 100%
    background-color: #f4f4f4
  .floa
    display: flex
  .imgContaines
    background: url(../../../static/img/3.jpg) no-repeat
    background-size: cover
    background-position: center
    position: relative
    width: 100%
    height: 100%
    background-color: #f4f4f4
</style>