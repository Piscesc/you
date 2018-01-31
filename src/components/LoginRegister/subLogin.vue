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
					<button class="dologin" @click="login()" :class="{able:userName}">登录</button>
				</div>
				<div class="unlogin">
					<router-link to="/register" id="toRegister">注册账号</router-link>
					<a href="#">忘记密码</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import axios from 'axios';
	var umsg = document.getElementById("username");
	var upwd = document.getElementById("pwd");
	export default {
		name : "subLogin",
		data(){
			return {
				userName : "",
				password : "",
				message : ""
			}
		},
		methods:{
			clearText(){
				this.userName = "";
			},
			clearPwd(){
				this.password = "";
			},
			login(){
				axios.post("http://localhost:3000/login4ajax",{
					'username' : this.userName,
					'psw' : this.password
				})
				.then((res)=>{
					console.log(res);
					this.message = res.data.message;
					Toast(this.message);
					console.log(res.data.code);
					if(res.data.code == 100){
						this.$router.push({ path: '/', params: { userId: this.userName }});
					}
				})
			}
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
    		    .dologin{
    		    	display: block;
    		    	width: 100%;
		    	    height: 1.28rem;
				    font-size: 0.5rem;
				    font-weight: bold;
				    line-height: 1.28rem;
				    border-radius: 3px;
		        	color: #cb7a7a;
	        	    position: relative;
				    background: #b4282d;
				    text-align: center;
    		    }
    		    .able{
    		    	color: white;
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