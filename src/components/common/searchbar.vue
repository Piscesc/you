<template>
	<div class="searchbar">
		<div class="text-box">
			<span class="icon"></span>
			<input type="text" placeholder="经典羊绒围巾超低6折价仅139元" />
		</div>
		<span class="cancel" @click="reGo">取消</span>
	</div>
</template>

<script>
	export default {
		name : "searchbar",
		methods: {
			reGo () {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped lang="scss">
	.searchbar{
	    background-color: #fafafa;
	    box-sizing: border-box;
	    z-index: 10;
	    width: 100%;
	    margin: auto;
	    overflow: hidden;
	    height: 1.17333rem;
	    padding: 0 0.4rem;
	    border-bottom: 1px solid #d9d9d9;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    .text-box{
	    	padding-top: 0;
		    padding-left: .26667rem;
		    padding-bottom: 0;
		    border: 0;
		    background-color: #f4f4f4;
		    height: .74667rem;
		    border-radius: 2px;
		    display: flex;
		    align-items: center;
		    flex:1;
		    .icon{
			    margin-right: .21333rem;
			    display: inline-block;
			    vertical-align: middle;
			    background-repeat: no-repeat;
			    background-size: 100% 100%;
			    height: .37333rem;
		        background-image: url(//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
    			width: .37333rem;
		    }
		    input{
	    	    font-size: .37333rem;
			    border: none;
			    color: rgba(0,0,0,.8);
			    background-color: transparent;
			    line-height: .53333rem;
			    flex:1;
		    }
	    }
	    .cancel{
	    	margin-left: .4rem;
   			font-size: .37333rem;
   			font-size: 16px;
	    }
	}
</style>