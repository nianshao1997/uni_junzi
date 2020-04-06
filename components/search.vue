<template>
	<view class="container">
		<view class="wrapper">
			<view class="input-wrapper">
				<view class="input-content">
					<input type="text" class="input" :placeholder="content" v-model="search" />
					<button class="btn" type="primary" @click="handleSearch">&#xe602;</button>
				</view>
			</view>
			<view class="">
				
			</view>
		</view>
	</view>
</template>

<script>
	import av from '../comment/av.js'
	export default {
		data() {
			return {
				content:'输入您想搜索的作品、演员',
				search:''
			};
		},
		methods:{
			handleSearch(){
				console.log(this.search)
				if(this.search == false)return
				uni.navigateTo({
					url:'../../pages/searchRezult/searchRezult?id=' + this.search
				})
				// this.handleDatas()
			},
			async handleDatas(){
				let rel = await av(this.search)
				console.log(rel)
			}
		}
	}
</script>

<style scoped>
	
	.container{
		background-color:#FFFFFF;
		border-bottom: 10px solid #FFFFFF;
	}
	.input-wrapper{
		padding-top: 10px;
	}
	.input-content{
		margin-left: auto;
		margin-right: auto;
		display: flex;
		height: 42px;
		border-radius: 5px;
		border: 1px solid #007AFF;
		box-sizing: border-box;
	}
	.btn{
		font-family: 'iconfont';
		width: calc(100% / 6);
		cursor: pointer;
	}
	.input{
		flex-grow: 1;
		height: 40px;
		padding-left: 10px;
	}
</style>
