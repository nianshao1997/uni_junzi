<template>
	<view style="background-color: #F8F8F8;" class="container">
		<view class="info-title">
			<text style="cursor: pointer;">{{top}}</text>
		</view>
		<view class="tabs" v-if="tabsTop && showTabs">
			<block v-for="(item,index) in kind" :key='index'>
				<view class="tab">
					{{item}}
				</view>
			</block>
		</view>
		<view class="re-img-container">
			<block v-for="(item,index) in rDatas" :key='index'>
				<view class="re-img-box" @click="toDetails(item.id)">
					<image :src='item.img' mode="aspectFill"></image>
					<view class="title-t">{{item.t}}</view>
					<view class="title-b">{{item.b}}</view>
				</view>
			</block>
		</view>
		<view class="tabs" v-if="!tabsTop && showTabs">
			<block v-for="(item,index) in kind" :key='index'>
				<view class="tab">
					{{item}}
				</view>
			</block>
		</view>
		<view class="more" v-if="showMore">
			{{moreTitle}}
		</view>
	</view>
</template>

<script>
	export default {
		name:'recommend',
		props:{
			showMore:{
				type:Boolean,
				default:true
			},
			moreTitle:{
				type:String,
				default:'更多作品'
			},
			kind:{
				type:Array
			},
			rDatas:{
				type:Array
			},
			top:{
				type:String,
				default:'推荐'
			},
			tabsTop:{
				type:Boolean,
				default:true
			},
			showTabs:{
				type:Boolean,
				default:true
			}
		},
		data() {
			return {
				
			}
		},
		methods:{
			toDetails(id){
				console.log(id)
				uni.navigateTo({
					url:'../../pages/avDetails/avDetails?id=' + id
				})
			}
		}
	}
</script>

<style scoped>
	.info-title{
		font-size: 16px;
		line-height: 40px;
	}
	.more{
		margin: 10px auto;
		cursor: pointer;
		width: 275px;
		height: 32px;
		text-align: center;
		border: 1px solid #007AFF;
		border-radius: 5px;
		font-size: 14px;
		line-height: 32px;
		color: #007AFF;
	}
	
	.tabs{
		padding-bottom: 6px;
		padding-left: 10px;
		font-size: 14px;
	}
	.tab{
		display: inline-block;
		border: 1px solid #007AFF;
		border-radius: 2px;
		font-size: 14px;
		color: #007AFF;
		cursor: pointer;
	}
	.re-img-container{
		display: flex;
		flex-wrap: wrap;
		justify-content:space-evenly;
	}
	.re-img-box{
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}
	.title-b,
	.title-t{
		flex-grow: 1;
		white-space: nowrap;
		overflow:hidden;
		text-overflow:ellipsis;
	}
	.title-t{
		font-size: 14px;
		line-height: 19px;
		font-weight: bold;
		border-bottom: 2px solid #F1F1F1;
		box-sizing: border-box;
	}
	.title-b{
		font-size: 10px;
		line-height: 21px;
		color: #FFB2B2;
		padding-left: 5px;
		box-sizing: border-box;
	}
	.re-img-box>image{
		width: 100%;
	}
</style>
