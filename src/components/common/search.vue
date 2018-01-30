<template>
	<div class="search">
		<searchbar/>
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
	import searchbar from './searchbar';
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
		},
		components : {
			searchbar
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