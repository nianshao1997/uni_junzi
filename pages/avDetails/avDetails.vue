<template>
	<view class="container" style="font-size: 30px;">
		<Nav :rect='rect'></Nav>
		<view class="" style="font-size: 14px;">当前位置</view>
		<view class="top-info">
			<text style="font-size: 30px;">{{info.title}}</text>
			<view class="a-details">
				<view class="a-icon-wrapper">
					<image class="a-icon" :src="info.poster" mode="aspectFill"></image>
				</view>
				<view class="a-info">
					<text>编号:{{info.num}}</text>
					<text>编码:{{info.code}}</text>
					<text>发行:{{info.selltime}}</text>
					<text>时长:{{info.long}}</text>
					<text>主演:{{info.actressname}}</text>
					<text>日文名:{{info.jname}}</text>
					<text>{{info.t}}</text>
					<text>{{info.b}}</text>
					<view class="btns-box">
						<button type="primary">磁力链接</button>
						<button type="primary">迅雷下载</button>
					</view>
				</view>
			</view>
		</view>
		<view class="info-title">
			<text style="cursor: pointer;">演员资料</text>
		</view>
			<view class="actress-wrapper">
				<view class="actress-box">
					<image @click="toRen(info.actressname)" class="actress" :src="info.icon" mode="aspectFill"></image>
				</view>
			</view>
		<view style="font-size: 16px;text-align: center;" class='actress-wrapper'>{{info.actressname}}</view>
		<recommend :tabsTop="false" :showMore="false" :rDatas="info.guesslike"></recommend>
		<recommend :tabsTop="false" :showMore="false" :rDatas="info.actress" :kind="info.kinds" :top="info.retitle"></recommend>
	</view>
</template>

<script>
	import women from '../../comment/women.js'
	import recommend from '../../components/recommend.vue'
	import av from '../../comment/av.js'
	let pinyin = require('pinyin')
	export default {
		name:'avdetails',
		components:{
			recommend
		},
		data() {
			return {
				rect:0,
				info:{}
			}
		},
		onPageScroll(e) {
			this.rect = e.scrollTop
		},
		onLoad(o) {
			console.log(o)
			this.handleDatas(o.id)
			// av('YMDD-184').then(res=>{
			// 	console.log(res)
			// }).catch(err=>{
			// 	console.log(err)
			// })
		},
		methods: {
			async handleDatas(target){
				let res = await av(target)
				// this.rDatas = res.showavs.filter((c,i)=>{
				// 	return i < 6
				// })
				this.info = res
				console.log(res)
				// this.guessLike = res.guesslike
				// this.actress = res.actress 
			},
			toRen(id){
				let rel = pinyin(id, {
				        style: pinyin.STYLE_FIRST_LETTER
				    }).map(c => c[0]).reduce((p, c) => p + c)
				uni.navigateTo({
					url:'../womenDetails/womenDetails?id=' + rel
				})
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
	.a-icon-wrapper{
		float: left;
		margin-right: 12px;
		margin-top: 10px;
	}
	.a-icon{
		border-radius: 14px;
		cursor: pointer;
		width: 100%;
		height: 100%;
	}
	.a-info{
		font-size: 20px;
		padding-right: 15px;
	}
	.a-info>text{
		display: block;
		width: 100%;
		font-size: 14px;
		padding-top: 10px;
		padding-bottom: 10px;
		padding-left: 8px;
		color: #333333;
		}
	.btns-box{
		display: flex;
		justify-content: center;
		font-size: 22px
	}
	.icon-img{
		border-radius: 50%;
	}
	.actress-box{
		padding-top: 100%;
		width: 100%;
		position: relative;
	}
	.actress{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.actress-container{
		font-size: 16px;
		line-height: 0;
		/* display: flex;
		flex-direction: column;
		align-items: center; */
	}
	.info-title{
		line-height: 40px;
	}
</style>
