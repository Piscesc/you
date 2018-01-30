<template>
	<div class="classify">
		<div class="search-box">
			<router-link to="/search" style="width: 100%">
				<div class="search">
					<i></i>
					<span>搜索商品，共9930款好物</span>
				</div>
			</router-link>
		</div>
		<div class="navbar">
			<div class="good-class">
				<ul id="goodList">
					<li class="txt" v-for="(item,index) in goodName" @click="change(index)" :class="{cur:index === number}">
						<span></span>{{item}}
					</li>
					
				</ul>
			</div>
		</div>
		<div class="cartbar">
			<div class="cart-banner">
				<img :src="curBanner"/>
			</div>
			<div class="cart-list">
				<h1><span class="line left"></span><span>{{goodClass}}分类</span><span class="line right"></span></h1>
				<ul id="subCateList">
					<li v-for="items in goodList">
						<div class="good-pic">
							<img :src="items.wapBannerUrl">
						</div>
						<div class="good-name">{{items.name}}</div>
					</li>
					
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	
	
	
	export default {
		name : "classify",
		data(){
			return {
				goodName : [],
				number : 0,
				subCateList : [],
				banners : [],
				goodList : [],
				curBanner : "",
				goodClass : "",
				originalData:[],
				subList:[]
			}
		},
		watch: {
			originalData () {
				this.$nextTick(() => {
					this.goodList = this.subList[0];
					this.curBanner = this.banners[0];
					this.goodClass = this.goodName[0];
				})
			}
		},
		methods:{
			change(index){
				// console.log(this);
				this.number = index;
				this.goodList = this.subList[index];
				this.curBanner = this.banners[index];
				this.goodClass = this.goodName[index];
				// console.log(this.goodClass);
			},
			getData(){
				axios.get('/api/classify.json')
					.then(this.handleGetDataSucc.bind(this))
					.catch(this.handleGetDataErr.bind(this))
			},
			handleGetDataSucc(res){
				console.log(res.data);
				this.originalData = res.data.classify;
				this.goodName = this.secData("name");
				this.subList = this.secData("subCateList");
				this.banners = this.secData("wapBannerUrl");
			},
			handleGetDataErr(){
				console.log('err');
			},
			secData(collection){
				var data = this.originalData;
				var len = this.originalData.length;
				var arr = [];
				for(var i = 0;i < len;i ++){
					arr.push(data[i][collection]);
				}
				return arr;
			}
		},
		mounted(){
			this.getData();
		}
	}
</script>

<style scoped lang="scss">
	.search-box{
		position: fixed;
		z-index: 10;
		width: 100%;
		top: 0;
		left: 0;
		overflow: hidden;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	    height: 1.17333rem;
	    padding: 0 0.4rem;
	    background-color: #fff;	
	    border-bottom: 1px solid rgba(0,0,0,.15);
	    .search{
	    	width: 100%;
	    	display: flex;
    	    justify-content: center;
		    height: .74667rem;
		    font-size: .37333rem;
		    background-color: #ededed;
		    border-radius: .10667rem;
		    align-items: center;
		    i{
		    	background-image: url(//yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
    			width: .37333rem;
		    	display: inline-block;
			    vertical-align: middle;
			    background-repeat: no-repeat;
			    background-size: 100% 100%;
			    height: .37333rem;
			    margin-right: .13333rem;
		    }
		    span{
		    	color: #666;
		    }
	    }
	}
	.navbar{
	    position: fixed;
	    z-index: 1;
	    top: 1.17333rem;
	    left: 0;
	    bottom: 0;
	    z-index: 4;
	    width: 2.16rem;
	    background-color: #fff;
	    border-right:1px solid #d9d9d9;
	    .good-class{
    	    position: relative;
		    height: 100%;
		    width: 100%;
		    overflow: hidden;
		    #goodList{
		    	box-sizing: border-box;
		    	padding: .53333rem 0;
		    	padding-bottom: 1.84rem;
		    	li{
		    		width: 100%;
				    height: .66667rem;
				    text-align: center;
				    border: none;
				    margin-top: .53333rem;
			    	display: block;
				    color: #333;
				    font-size: .37333rem;
				    line-height: .66667rem;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    overflow: hidden;
				    font-weight: 500;
				    position: relative;
				}
		    	.cur{
	    		    font-size: .48rem;
    				color: #ab2b2b;
    				span{
						position: absolute;
					    top: 0;
					    left: 0;
					    bottom: 0;
					    width: .08rem;
					    background-color: #ab2b2b;
    				}
		    	}
		    	li:first-child{
		    		margin-top: 0;
		    	}
		    }
	    }
	}
	.cartbar{
		margin-left: 2.16rem;
    	padding: .4rem .4rem .28rem;
    	margin-top:1.18333rem;
    	.cart-banner{
    		position: relative;
		    width: 100%;
		    height: 2.56rem;
		    display: table;
		    background: center no-repeat #f4f4f4;
		    background-size: cover;
		    img{
		    	width: 100%;
		    }
    	}
    	.cart-list{
			h1{
    			position: relative;
			    height: 1.44rem;
			    line-height: 1.44rem;
			    text-align: center;
			    font-size: .32rem;
			    color: #333;
			    .line{
		    	    position: absolute;
				    content: '';
				    top: 0;
				    bottom: 0;
				    margin: auto;
				    height: 1px;
				    width: .53333rem;
				    background-color: #d9d9d9;
			    }
			    .left{
			    	left: 1.8rem;
			    }
			    .right{
			    	right: 1.8rem;
			    }
    		}
    		#subCateList{
    			li{
				    display: inline-block;
				    margin-right: .45333rem;
				    font-size: 0;
				    width: 1.92rem;
				    vertical-align: top;
				    .good-name{
		    	    	height: .96rem;
					    font-size: .32rem;
					    color: #333;
					    text-align: center;
					    line-height: .45333rem;
				    }
				    .good-pic{
				    	width: 1.92rem;
    					height: 1.92rem;
    					img{
    						width: 100%;
    					}
				    }
    			}
    			li:nth-child(3n){
				    margin-right: -.13333rem;
    			}
    		}
    	}
	}
</style>