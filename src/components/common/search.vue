<template>
	<div class="search">
		<div class="searchbar">
			<div class="text-box">
				<span class="icon"></span>
				<input type="text" placeholder="经典羊绒围巾超低6折价仅139元" />
			</div>
			<span class="cancel">取消</span>
		</div>
		<div class="searchView">
			<div class="viewbar">
				<header>热门搜索</header>
				<nav class="list">
					<ul>
						<li v-for="(item,index) in keyWords">
							<router-link to="/classify">
								<span class="item" :class="{hot:index < 3}">{{item}}</span>
							</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name : 'search',
		data(){
			return {
				keyWords : [
					"海外好物满件78折",
					"100款新年穿搭特惠",
					"年货买3免1",
					"四件套",
					"男鞋",
					"保暖内衣",
					"围巾",
					"内裤"
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	.search{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #f4f4f4;
	}
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
	.searchView{
		.viewbar{
			margin-bottom: .26667rem;
			padding: 0 .4rem .4rem;
		    background-color: #fff;
		    overflow: hidden;
		    header{
		    	display: flex;
		    	align-items: center;
			    height: 1.2rem;
			    font-size: .37333rem;
			    color: #999;
			}
			.list{
				.item{
					float: left;
				    padding: 0 .2rem;
				    margin-right: .42667rem;
				    margin-bottom: .42667rem;
				    line-height: .61333rem;
				    border: 1px solid #999;
				    border-radius: 2px;
				    color: #333;
				    font-size: 12px;
				    box-sizing: border-box;
				}
				.hot{
					border-color: #b4282d;
    				color: #b4282d;
				}
			}
		}
	}
</style>