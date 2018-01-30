<template>
	<div class="subLogin">
		<div class="container">
			<div class="user-msg">
				<div style="overflow: hidden;">
					<div class="input-box">
						<input type="text" name="" id="username" placeholder="邮箱账号" v-model='userName'>
						<div class="clearbar" v-if="userName">
							<div class="close" @click="clearText">X</div>
						</div>
					</div>
					<div class="input-box">
						<input type="password" name="" id="userpwd" placeholder="密码" v-model='password'>
						<div class="clearbar" v-if="password">
							<div class="close" @click="clearPwd">X</div>
						</div>
					</div>
				</div>
				<div class="submitbar">
					<a href="#" id="dologin">登录</a>
				</div>
				<div class="unlogin">
					<a href="javascript:;" id="toRegister">注册账号</a><a>忘记密码</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	var umsg = document.getElementById("username");
	var upwd = document.getElementById("pwd");
	export default {
		name : "subLogin",
		data(){
			return {
				userName : "",
				password : ""
			}
		},
		methods:{
			clearText(){
				this.userName = "";
			},
			clearPwd(){
				this.password = "";
			},
		}
	}
</script>

<style scoped lang="scss">
	.container{
		width: 100%;
		box-sizing: border-box;
		padding: 0 0.555556rem;
		.user-msg{
			max-width: 540px;
	    	margin: 0 auto;
	    	padding-top: 1.11111rem;
	    	.input-box{
    		    position: relative;
    		    height: 1.28rem;
    			line-height: 1.28rem;
    			padding-bottom:1px; 
    			float: left;
    			width: 100%;
    			box-sizing: border-box;
    			border-bottom: 1px solid #d9d9d9;
    			overflow: hidden;
    			input{
				    width: 100%;
				    height: 0.6rem;
				    font-size: 0.4rem;
				    line-height: 0.6rem;
				    margin: 0.39rem 0;
				    padding-left: 0;
				    -webkit-tap-highlight-color: transparent;
				    letter-spacing: normal;
    			}
    			.clearbar{
				    position: absolute;
				    top: 0;
				    right: 0;
				    width: 44px;
				    height: 100%;
				    margin: 0;
				    padding: 0;
				    .close{
						width: 0.88rem;
					    height: 0.88rem;
					    position: absolute;
					    top: 50%;
					    left: 50%;
					    -webkit-transform: translate3d(-50%, -50%, 0);
					    margin:0;
    					background-size: 0.6rem 0.6rem;
				    }
    			}
	    	}
	    	.submitbar{
    		    margin: 0.8rem 0 0.53333rem;
    		    clear: both;
    		    overflow: hidden;
    		    #dologin{
    		    	display: block;
		    	    height: 1.28rem;
				    font-size: 0.4rem;
				    line-height: 1.28rem;
				    border-radius: 3px;
		        	color: #cb7a7a;
	        	    position: relative;
				    background: #b4282d;
				    text-align: center;
    		    }
	    	}
	    	.unlogin{
			    height: 16px;
			    line-height: 16px;
			    a{
			    	float: right;
				    position: relative;
				    font-size: 0.375rem;
				    color: #666;
				    text-decoration: none;
			    }
			    #toRegister{
			    	float: left;
			    }
	    	}
		}
	}
</style>