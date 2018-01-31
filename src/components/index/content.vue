<template>
  <div class="content-box">
    <div class="content-top">
      <a href="" class="pipa">
        <span>品牌制造商提供</span>
        <i class="iconfont">&#xe610;</i>
      </a>
    </div>
    <div class="content-bottom">
      <ul class="conList">
        <li v-for="item of list" :key="item.id" class="items">
          <a href="" class="itema">
            <div class="itemp">
              <h4 class="itemH">Adidas制造商</h4>
              <div>
                <span class="price">{{item.price}}</span>
                <span class="price">元起</span>
              </div>
            </div>
            <img :src="item.imgUrl" class="itemImg">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index-content',
  props: {
    list: Array
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .content-box
    dispaly: flex
    flex: 1
  .content-top
    display: flex
    align-items: center
    justify-content: center
    height: 1.46667rem
    font-size: .42667rem
  .pipa
    color: #666
  .content-bottom
    padding-bottom: .106rem
  .conList
    position: relative
    margin: 0 .21333rem
    height: 6.24rem
    overflow: hidden
  .items
    display: inline-block
    position: relative
    margin-bottom: .10667rem
    width: 4.73333rem
    height: 3.14667rem
    overflow: hidden;
    background-color: #f4f4f4
  .itema
    width: 100%
    height: 100% 
  .itemImg
    width: 100%
    height: 80%
  .itemp
    position: absolute
    left: 0
    top: 0
    padding: .26667rem 0 0 .26667rem
    width: 100%
    z-index: 4
  .itemH
    text-overflow: ellipsis
    white-space: nowrap
    overflow: hidden
    color: #333
    font-size: .37333rem
    line-height: .45333rem
    margin-bottom: .08rem
  .price
    color: #333
    font-size: .37333rem
    line-height: .45333rem
</style>
