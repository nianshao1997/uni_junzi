<template>
	<view class="container" style="font-size: 30px;">
		<Nav :rect='rect'></Nav>
		<view class="" style="font-size: 14px;">当前位置</view>
		<view class="top-info">
			<text style="font-size: 30px;">{{info.title}}</text>
			<view class="w-details">
				<view class="w-icon-wrapper">
					<view class="w-icon-box">
						<image class="w-icon" :src="info.icon" mode="aspectFill"></image>
					</view>
				</view>
				<view class="w-info">
					<text>{{info.avs}}</text>
					<text>中文名:{{info.cname}}</text>
					<text>日文名:{{info.jname}}</text>
					<text>别名:{{info.nickname}}</text>
					<text>出生地:{{info.birthspace}}</text>
					<text>出道时间:{{info.firstshow}}</text>
					<text>生日:{{info.birthday}}</text>
					<text>三围:{{info.sanwei}}</text>
					<text>魅力值:{{info.charm}}</text>
					<text>{{info.t}}</text>
					<text>{{info.b}}</text>
				</view>
			</view>
		</view>
		<recommend :tabsTop="false" :kind="info.kinds" :top="info.cname" :moreTitle="moreTitle" :rDatas="rDatas"></recommend>
	</view>
</template>

<script>
	import women from '../../comment/women.js'
	import recommend from '../../components/recommend.vue'
	export default {
		name:'women',
		components:{
			recommend
		},
		data() {
			return {
				rect:0,
				moreTitle:'下一个',
				rDatas:[],
				kinds:[
					['熟女','素人','人妻','美少女','女子校生'],
					['新番榜','人气榜','下载榜']],
				info:{}
			}
		},
		onPageScroll(e) {
			this.rect = e.scrollTop
		},
		onLoad(e) {
			console.log(e)
			this.handleDatas(e.id)
		},
		methods: {
			async handleDatas(target){
				let res = await women(target)
				this.rDatas = res.showavs
				this.info = res
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #F1F1F1;
	}
	.top-info{
		background-color:#FFFFFF;
		border-radius: 10px;
		box-shadow: 10px 10px 5px #888888;
		box-shadow: 0px 0px 8px #888888;
	}
	.w-icon-wrapper{
		float: left;
		margin-right: 12px;
		margin-top: 10px;
	}
	.w-icon-box{
		width: 100%;
		padding-top: 100%;
		position: relative;
		overflow: hidden;
	}
	.w-icon{
		border-radius: 50%;
		position: absolute;
		cursor: pointer;
		top: 0;
		width: 100%;
		height: 100%;
	}
	.w-info{
		font-size: 20px;
		padding-right: 15px;
	}
	.w-info>text{
		display: block;
		width: 100%;
		font-size: 14px;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 8px;
		color: #333333;
		}
</style>
