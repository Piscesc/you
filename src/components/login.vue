<template>
	<div class="login">
		<headBar/>
		<div class="login-main" :class="{hide:deflag}">
			<div class="login-banner">
				<img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" />
			</div>
			<div class="warpers">
				<div class="btnWarper">
					<button @click="changeFlag()">网易邮箱账号登陆</button>
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
		<subLogin :class="{hide:flag}"/>
		<div class="otherlogin" :class="{hide:flag}" @click="changeFlag()">其他方式登录</div>	
	</div>
</template>

<script>
	import headBar from "./common/headBar";
	import subLogin from "./LoginRegister/subLogin";
	export default {
		name : "login",
		data (){
			return {
				warper : [
					{'icon':"//yanxuan.nosdn.127.net/bc022cb24519b44aae271981482a88ed.png", 'name':"微信"},
					{'icon':"//yanxuan.nosdn.127.net/0ff2d0f09d2003e9e32a0200ce3e32bc.png", 'name':"QQ"},
					{'icon':"//yanxuan.nosdn.127.net/3b4bf1201b74efeca582d2333368d297.png", 'name':"微博"}
				],
				flag: true,
				deflag : false
			}
		},
		components : {
			headBar,
			subLogin
		},
		methods:{
			changeFlag(){
				this.flag = !this.flag;
				this.deflag = !this.deflag;
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
	.hide{
		display : none !important;
	}
	.login-main{
		display: block;
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
	.otherlogin{
	    width: 8.93333rem;
	    height: 1.30667rem;
	    line-height: 1.30667rem;
	    border: 1px solid #B4282D;
	    color: #B4282D;
	    position: absolute;
	    top: 11.02667rem;
	    bottom: 0;
	    left: .53333rem;
	    background: #fff;
	    z-index: 5;
        border-radius: .05333rem;
	    font-size: .37333rem;
	    text-align: center;
	}
</style>