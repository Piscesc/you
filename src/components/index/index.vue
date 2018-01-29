<template>
  <div>
    <index-header></index-header>
    <index-swipe></index-swipe>
  </div>
</template>

<script>
import indexHeader from './header'
import indexSwipe from './swiper'
import axios from 'axios'
export default {

  name: 'Index',

  components: {
    indexHeader,
    indexSwipe
  }
}
</script>

<style lang="scss" scoped></style>
