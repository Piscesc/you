<template>
  <div class="container">
    <swiper :options="swiperOption">
        <swiper-slide v-for="item of list.swiperlist" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="character">
      <div class="chara-con" v-for="chara of list.character" :key="chara.id">
        <img :src="chara.imgUrl" class="chara-img">
        <div class="chara-info">
          <p>{{chara.first}}</p>
          <p>{{chara.second}}</p>
        </div>
      </div>
    </div>
    <div class="describe" v-for="info of list.des">
      <div class="des-lfet">
        <h1 class="title">{{info.title}}</h1>
        <p class="desc">{{info.desc}}</p>
        <p class="price">&yen;{{info.price}}</p>
        <ul class="taglist">
          <li class="tag">{{info.tag}}</li>
        </ul>
      </div>
      <div class="des-right">
        <p class="num">{{info.comment}}</p>
        <p class="com">用户评价</p>
        <p class="more">查看</p>
      </div>
    </div>
    <div class="select">
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail-swiper',
  props: {
    list: Object
  },
  data () {
    return {
      swiperOption: {
        paginationType: 'fraction',
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position: relative
  .describe
    padding: .533rem 0 .533rem .4rem
    border-bottom: .267rem solid #f4f4f4
    display: flex
  .character
    display: flex
    padding: .32rem .4rem .1rem
    background-color: #F9F9F9
    .chara-con
      display: flex
      flex: 1
      .chara-img
        width: .96rem
        height: .96rem
        border-radius: 100%
        margin-right: .16rem
      .chara-info p
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
        width: 1.52rem
        font-size: .37333rem
        line-height: .42667rem
        margin-bottom: .21333rem
  .swiper-img
    width: 100%
  .swiper-pagination
    display: flex
    position: absolute
    left: auto
    right: .4rem
    bottom: .4rem
    width: .72rem
    border: 1px solid #ccc
    border-radius: 2px
    font-size: .26rem
    line-height: .36rem
    padding-top: .02rem
    background: #fff
    justify-content: center
</style>