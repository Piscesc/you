<template>
	<div class="login">
		<div class="topbar">
			<i class="u-icon-index"></i>
			
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
		<div class="login-banner">
			<img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
		</div>
		<div class="warpers">
			<div class="btnWarper">
				<button>网易邮箱账号登陆</button>
			</div>	
			<div class="otherWarper">
				<div class="warper-item" v-for="item in warper">
					<i class="icon">
						<img :src="item.icon"/>
					</i>
					<span class="name">{{item.name}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : "login",
		data (){
			return {
				warper : [
					{'icon':"//yanxuan.nosdn.127.net/bc022cb24519b44aae271981482a88ed.png", 'name':"微信"},
					{'icon':"//yanxuan.nosdn.127.net/0ff2d0f09d2003e9e32a0200ce3e32bc.png", 'name':"QQ"},
					{'icon':"//yanxuan.nosdn.127.net/3b4bf1201b74efeca582d2333368d297.png", 'name':"微博"}
				]
			}
		}
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
	.login-banner{
	    text-align: center;
	    margin-top: 2.28rem;
	    margin-bottom: 1.64rem;
	    img{
	    	width: 3.57333rem;
    		height: 1.2rem;
	    }
	}
	.warpers{
	    font-size: .37333rem;
	    text-align: center;
		.btnWarper{
			padding: 0 .53333rem;
		    display: block;
		    margin-bottom: 1.81333rem;
		    button{
		    	border-radius: .05333rem;
	    	    width: 100%;
			    height: 1.30667rem;
			    line-height: 1.30667rem;
			    background: #B4282D;
			    color: #fff;
			    font-weight: bold;
		    }
		}
		.otherWarper{
			box-sizing: border-box;
			padding: 0 .4rem;
    		height: .53333rem;
    		display: flex;
    		.warper-item{
    			box-sizing: border-box;
    			height: .53333rem;
			    border-right: 1px solid #979797;
			    display: inline-block;
			    width: 33%;
			    text-align: center;
			    position: relative;
			    .icon{
			    	position: relative;
				    display: inline-block;
				    width: .53333rem;
				    height: .53333rem;
				    img{
				    	width: 100%;
				    }
			    }
			    .name{
			    	font-size: .37333rem;
				    line-height: .53333rem;
				    height: .53333rem;
				    color: #7F7F7F;
				    margin-left: .06667rem;
			    }
    		}
    		.warper-item:last-child{
    			border-right: none;
    		}
		}
	}
	
</style>