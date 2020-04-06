<template>
	<view class="container">
		<Nav :rect='rect' :isSearch='false'></Nav>
		<search></search>
		<view class="search-kind">
			<view class="search-kind-title">{{searchKindTitle}}</view>
			<view class="search-kind-content">
				<text>&#xe64f;</text>
				<text>&#xe604;</text>
				<text>&#xe605;</text>
				<text>&#xe603;</text>
			</view>
		</view>
		<view class="info-title">
			<text style="cursor: pointer;">演员榜单>></text>
		</view>
		<view class="container" style="background-color: #F8F8F8;text-align: center;color: #2B9AC7;font-size: 14px;">
			<view style="font-size: 14px;padding: 10px 0;">大家经常搜索的一些日本知名演员Top100</view>
			<view class="index-icons">
				<block v-for="(item,index) in imgs" :key='index'>
					<image @click="toWdtails(item.id)" class="icon-img" :src="item.img" mode="aspectFill"></image>
				</block>
			</view>
		</view>
		<view class="more">
			更多演员...
		</view>
		<recommend :kind="kinds[0]" :showMore="false" :rDatas="rDatas[0]" :top="tops[0]"></recommend>
		<recommend :kind="kinds[1]" :top="tops[1]" :rDatas="rDatas[1]"></recommend>
		<!-- <Article :aDatas='aDatas'></Article> -->
		<p style='font-size: 12px;line-height: 2;padding: 10px 0;text-align: center;background-color: #F8F8F8;'>君子好色，最新热门作品封面图片合集,作品大全为您收集知名演员最新作品合集,宅男老司机必备神器</p>
		<p style='font-size: 12px;padding-bottom: 10px;text-align: center;background-color: #F8F8F8;cursor: text;'>陕ICP备16018165号 </p>
	</view>
</template>

<script>
	import search from '../../components/search.vue'
	import recommend from '../../components/recommend.vue'
	import Article from '../../components/Article.vue'
	import getJson from '../../comment/ns.js'
	export default {
		name:'index',
		components:{
			search,
			recommend,
			Article
		},
		data() {
			return {
				imgs:[],
				rDatas:[],
				aDatas:[],
				tops:['精选推荐>>','榜单推荐>>'],
				rect:0,
				searchKindTitle:'可适用于各种搜索自是哦，日文搜索到的讯息更准确',
				kinds:[
					['熟女','素人','人妻','美少女','女子校生'],
					['新番榜','人气榜','下载榜']]
			}
		},
		onLoad() {
			this.ns()
		},
		onPageScroll(e) {
			this.rect = e.scrollTop
		},
		methods: {
			async ns(){
				this.imgs = await getJson('icon')
				this.rDatas[0] = await getJson('jing')
				this.rDatas[1] = await getJson('bang')
				this.aDatas = await getJson('article')
				console.log(this.imgs)
				console.log(this.rDatas)
				console.log(this.aDatas)
			},
			toWdtails(id){
				uni.navigateTo({
					url:'../womenDetails/womenDetails?id=' + id
				})
			}
		}
	}
</script>

<style scoped>
	.search-kind{
		padding: 10px 0;
		display: flex;
		flex-direction: column;
		justify-content:space-around;
	}
	.search-kind-title{
		font-size: 14px;
		text-align: center;
	}
	.search-kind-content{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		font-family: 'iconfont';
		font-size: 40px;
	}
	.search-kind-content>text{
		cursor: pointer;
	}
	.search-kind-content>image{
		cursor: pointer;
		height: 40px;
	}
	.info-title{
		font-size: 16px;
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
		color: #007AFF;
		cursor: pointer;
	}
	.icon-img{
		transition: transform 0.4s;
		cursor: pointer;
	}
	.icon-img:hover{
		transform: scale(1.1);
	}
	.index-icons{
		/* float: left; */
	}
</style>
