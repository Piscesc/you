<template>
	<div class="register">
		<!-- 这是注册页 -->
		<div class="main">
			<div class="email">
				<div class="address-title">
					<input type="text" placeholder="6-18位字母数字组合" id="e-address" v-model="userName">
				</div>
				<div class="domain">@163.com</div>
			</div>
			<p class="error email-err" :class="{show:flag1}">邮箱格式错误</p>
			<div class="password">
				<input type="password" placeholder="请输入密码" id="pwd1" v-model="psw">
				<div class="flags"></div>
			</div>
			<div class="password">
				<input type="password" placeholder="请确认密码" id="pwd2">
				<div class="flags"></div>
				<p class="error pwd-err" :class="{show:flag2}">两次密码输入不一致</p>
			</div>
			<div class="code">这里没有添加功能(canvas验证码)</div>
			<div class="next">
				<p @click="check()">立即注册</p>
			</div>
			<div class="tips">
				用户注册即代表同意<a href="//reg.163.com/agreement_wap.shtml?20160825">《服务条款》</a>和<a href="//reg.163.com/agreement_game_wap.shtml?20160825">《网易隐私政策》</a>
			</div>
			<div v-if="abled">
				<router-link to="/login">
					<button class="toLogin">去登陆</button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import axios from 'axios';
	export default {
		name : "register",
		data () {
			return {
				flag1 : false,
				flag2 : false,
	            userName:'',
	            psw:'',
	            abled : false
			}
		},
		methods:{
			check (){
				var emailAdd = document.getElementById('e-address').value;
				var pwd1 = document.getElementById('pwd1').value;
				var pwd2 = document.getElementById('pwd2').value;
				console.log(emailAdd);
				var collection1 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(emailAdd);
				collection1 ? this.flag1 = false : this.flag1 = true;
				pwd1 == pwd2 ? this.flag2 = false : this.flag2 = true;
				if(collection1 && (pwd1 == pwd2)){
					console.log(this.userName);
					console.log(this.psw);
					Toast('注册成功');
					this.abled = true;
					this.register();
				}
			},
			register(){
				axios.post("http://localhost:3000/regist4ajax",{
					'username' : this.userName + "@163.com",
					'psw' : this.psw
				})
				.then((res)=>{
					console.log(res);
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.main{
	    position: relative;
	    margin: 0 auto;
	    width: 86%;
	    max-width: 40rem;
	    padding: 1.55rem 0 1rem 0;
	    .email{
	    	overflow: hidden;
	    	position: relative;
	    }
	    .error{
	    	display: none;
	    	position: absolute;
	    	left: 0.3rem;
	    	margin-bottom:-0.52rem; 
	    	height: 0.52rem;
	    	font-size: .4rem;
	    	line-height: 0.52rem;
	    	color: red;
	    }
	    .pwd-err{
	    	top: 1.3rem;
	    }
	    .show{
	    	display: block;
	    }
	    .address-title{
	    	background: none;
		    position: relative;
		    height: 1.2rem;
		    border: solid 1px #d0d0d0;
		    border-radius: 4px;
		    float: left;
		    input{
		    	border: none;
		    	font-size: .42rem;
		    	line-height: 1.2rem;
		    	background: none;
		    	text-align: center;
		    	color: #333;
		    }
	    }
	    .domain{
    	    position: absolute;
		    right: 0;
		    width: 3rem;
		    height: 1.2rem;
		    z-index: 11;
		    overflow: hidden;
		    border: solid 1px #d0d0d0;
		    border-radius: 4px;
		    font-size: .44rem;
		    font-weight: bold;
		    color: #333;
		    text-align: left;
		    padding-left: .2rem; 
		    line-height: 1.2rem;
	    }
	    .password{
    	    background: none;
		    position: relative;
		    width: 99%;
		    height: 1.2rem;
		    border: solid 1px #d0d0d0;
		    border-radius: 4px;
		    margin-top: 0.6rem;
		    input{
		    	font-size: .42rem;
		    	line-height: 1.2rem;
		    	float: left;
		    	padding-left: .3rem;
		    }
		    .flags{
		    	float: left;
		    	width: .75rem;
		    	height: .545rem;
	    	    margin: .35rem 0 0 1.6rem;
	    	    background: url(../../../static/img/flag.png) no-repeat center center;
	    	    background-size: 100%; 
		    }
	    }
	    .code{
	    	margin-top: 0.6rem;
	    	position: relative;
		    width: 100%;
		    height: 34px;
		    border: 1px solid #cbcbcb;
		    -webkit-border-radius: 90px;
		    -moz-border-radius: 90px;
		    -webkit-tap-highlight-color: transparent;
		    border-radius: 90px;
		    text-align: center;
		    font-size: .44px;
			line-height: 34px;
	    }
	    .next{
		    background: #eee;
		    height: 1.2rem;
		    margin-top: 1.5rem;
		    overflow: hidden;
		    border-radius: 4px;
		    p{
			    background: #b7272d;
			    height: 1.2rem;
			    width: 100%;
			    text-align: center;
			    line-height: 1.2rem;
			    font-size: .44rem;
			    color: #fff;
		    }
	    }
	    .tips{
	    	margin: 0.5rem 0;
	    	font-size: 0.38rem;
	    	line-height: 1.5;
	    	a{
	    		color: #0095ff;
	    	}
	    }
	    .toLogin{
	    	display: block;
	    	width: 40%;
	    	height: 1rem;
	    	font-size: .4rem;
	    	margin:0 auto;
	    	background: none;
	    	border: 1px solid #000;
	    }
	}
</style>