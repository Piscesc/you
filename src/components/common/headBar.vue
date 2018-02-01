<template>
	<div class="topbar">
		<router-link to="/">
			<i class="u-icon-index"></i>
		</router-link>
		<div class="logo">
			<i></i>
		</div>
		<div class="right">
			<router-link to="/search">
				<i class="u-icon-search"></i>
			</router-link>
			<i class="u-icon-cart"></i>
		</div>
	</div>
</template>

<script>
	export default {
		name : "headBar"
	}
</script>

<style scoped lang="scss">
	*{
		padding: 0;
		margin:0;
	}
	.topbar{
		height: 1.16rem;
    	background-color: #fafafa;
    	box-sizing: border-box;
    	position: relative;
    	overflow: hidden;
    	padding: 0 .21333rem 0 .32rem;
    	overflow: hidden;
    	display: flex;
    	align-items: center;
    	i{
    		display: inline-block;
		    vertical-align: middle;
		    background-image: url(//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png);
		    background-repeat: no-repeat;
		    background-size: 2.29333rem 5.30667rem;
    	}
		.u-icon-index{
			width: .64rem;
		    height: .58667rem;
		    background-position: 0 -.98667rem;
		}
    	
    	.logo{
    		position: absolute;
		    top: 0;
		    right: 0;
		    bottom: 0;
		    left: 0;
		    margin: auto;
		    height: auto;
		    width: 2.29333rem;
	    	height: .72rem;
	    	i{
    		    width: 2.29333rem;
    			height: .72rem;
    			background-position: 0 -1.70667rem;
	    	}
    	}
    	.right{
		    margin-left: auto;
    		margin-right: .06667rem;
    		.u-icon-search{
				width: .85333rem;
			    height: .85333rem;
			    background-position: 0 -4.45333rem;
			    margin-right: .26667rem;
    		}
    		.u-icon-cart{
			    width: .85333rem;
			    height: .85333rem;
			    background-position: 0 0;
    		}
    	}
	}
	.topbar:after{
		content: '';
    	position: absolute;
    	left: 0;
		bottom: 0;
		width: 100%;
		height:1px;
		background: #d9d9d9; 
	}
</style>