<template>
	<div class="login">
		<div class="topbar">
			<div class="logo">
				<i></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : "login"
	}
</script>

<style scoped lang="scss">
	*{
		margin:0;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
	.topbar{
		height: 1.16rem;
    	background-color: #fafafa;
    	position: relative;
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
	    		display: inline-block;
			    vertical-align: middle;
			    background-image: url(http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png);
			    background-repeat: no-repeat;
			    background-size: 2.29333rem 5.30667rem;
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