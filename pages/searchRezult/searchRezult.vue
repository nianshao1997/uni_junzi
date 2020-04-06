<template>
	<view class="container">
		<Nav :rect='rect'></Nav>
		<recommend :top="top" :showMore="false" :showTabs="false" :rDatas="rDatas"></recommend>
		<div v-show='showNone' style='position: fixed;top: 40%;right: 0;left: 0;text-align: center;font-size: 20px;'>
			<span style='color: #DD524D;font-size: 24px;'>{{originText}}</span>
			<span style='color: #999999;'>已经上天</span>
			<span style='color: #007AFF;'>..快换个老婆吧</span>
		</div>
	</view>
</template>

<script>
	import recommend from '../../components/recommend.vue'
	import getJson from '../../comment/rezult.js'
	import zui from '../../comment/zui.js'
	let pinyin = require('pinyin')
	export default {
		name:'searchRezult',
		components:{
			recommend
		},
		data() {
			return {
				rect:0,
				top:'搜索结果',
				rDatas:[],
				originText:'都昌四杰',
				showNone:false,
				num:1
			}
		},
		onPageScroll(e) {
			this.rect = e.scrollTop
		},
		onLoad(e) {
			this.originText = e.id
			this.pinyin(e.id)
		},
		methods: {
			async handleDatas(rel){
				try{
					this.rDatas = await getJson(rel)
					this.showNone = false
					console.log(this.rDatas)
				}catch(e){
					//TODO handle the exception
					this.showNone = true
				}
				console.log(this.rDatas)
			},
			pinyin(id){
				let rel = pinyin(id, {
				        style: pinyin.STYLE_FIRST_LETTER
				    }).map(c => c[0]).reduce((p, c) => p + c)
					console.log(rel)
					let theEnd = zui(rel)
				this.handleDatas(theEnd)
			}
		}
	}
</script>

<style>

</style>
