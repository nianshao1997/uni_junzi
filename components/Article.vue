<template>
	<view class="container">
		<view class="info-title" style="width: 100%;">
			<text style="cursor: pointer;">推荐文章>></text>
		</view>
		<view class="article-wrapper">
			<block v-for="(item,index) in aDatas" :key='index'>
				<view class="article">
					<view class="article-box">
						<view class="article-title">
							&#xe64f; 春原未来_春原未来2018年最新作品合集写真封面及个人资料
						</view>
						<view class="article-bottom">
							<view class="article-left">
								<image :src="item.img" mode="aspectFill"></image>
							</view>
							<view class="article-right">
								<text class="article-info">松本菜奈实_松本菜奈実资料简介松本菜奈实图解松本菜奈实1994年8月23日出生于广岛县，2015年11月20日推出首张...</text>
								<text class="article-time">&#xe7db; 2019-02-29</text>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<view class="more">
			更多文章...
		</view>
	</view>
</template>

<script>
	export default {
		name:'ns',
		props:{
			aDatas:{
				type:Array
			}
		},
		data() {
			return {
				articles:[1,2,3,4,5,6]
			}
		}
	}
</script>

<style scoped>
	.container{
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
	.article-wrapper{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.article-box{
		font-family: 'iconfont';
		display: flex;
		flex-direction: column;
		padding-bottom: 8px;
		border-bottom: 4px solid #F8F8F8;
		cursor: pointer;
	}
	.article-title{
		font-size: 12px;
	}
	.article-left>image{
		width: 150px;
		height: 100px;
		border-radius: 10px;
	}
	.article-right{
		height: 100px;
		font-size: 14px;
		margin-left: 14px;
		display: flex;
		flex-direction: column;
		color: #827970;
	}
	.article-info{
		height: 69px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3; //行数
		-webkit-box-orient: vertical;
		line-height: 23px;
		font-size: 15px;
	}
	.article-bottom{
		display: flex;
		align-items: center;
	}
	.info-title{
		line-height: 40px;
	}
	.more{
		margin: 10px auto;
		width: 275px;
		height: 32px;
		text-align: center;
		border: 1px solid #007AFF;
		border-radius: 5px;
		font-size: 14px;
		line-height: 32px;
		cursor: pointer;
		color: #007AFF;
	}
</style>
