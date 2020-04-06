<template>
	<view class="container">
		<view class="top">
			<view class="register-login">
				<view class="register">
					{{freeRegister}}
				</view>
				<view class="login" v-if="!theLogin">
					<text @click="showMask(register)">{{register}}</text>
					<text @click="showMask(login)" class="qq icon">&#xe644;</text>
					<text @click='showMask(login)'>{{login}}</text>
				</view>
				<image src="../static/logo.png" mode="widthFix" class="login" style="width: 30px;height: 30px;border-radius: 50%;" v-if="theLogin"></image>
			</view>
		</view>
		<view class="nav" id="nav" :class="{'is-fixed':rect >= height}">
			<text class="menu icon" @click="handleList">&#xe647;</text>
			<text class="lewd">{{lewd}}</text>
			<view class="pc-list">
				<block v-for="(item,index) in list" :key='index'>
					<view class="pc-list-item">
						{{item}}
					</view>
				</block>
			</view>
			<text v-if="isSearch" v-show="!showSearch" @click="handleSearch" class="search-btn">&#xe602;</text>
			<text v-if="isSearch" v-show="showSearch" @click="handleSearch" class="search-btn">&#xe833;</text>
			<search class="search animated slideInDown" v-show="showSearch"></search>
			<view class="list animated slideInDown" v-show="showList">
				<block v-for="(item,index) in list" :key='index'>
					<view class="list-item" @click="turnTo(index)">
						{{item}}
					</view>
				</block>
			</view>
		</view>
		<Rl></Rl>
	</view>
</template>

<script>
	import search from './search.vue'
	import Rl from './Rl.vue'
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		name:'Nav',
		components:{
			search,
			Rl
		},
		props:{
			rect:{
				type:Number,
				default:0
			},
			isSearch:{
				type:Boolean,
				default:true
			},
			height:{
				type:Number,
				// #ifndef APP-PLUS
				default:30,
				// #endif
				// #ifdef APP-PLUS
				default:30
				// #endif
			}
		},
		data() {
			return {
				// isTop:false,
				showList:false,
				showSearch:false,
				register:'注册',
				login:'登录',
				lewd:'君子好色',
				list:['首页','作品','演员','分类'],
				freeRegister:'限时免费注册'
			};
		},
		methods:{
			...mapMutations(['handleMask','handleSign']),
			...mapMutations({
				aaa:'handleSign'
			}),
			handleList(){
				this.showList = !this.showList
				this.showSearch = false
			},
			handleSearch(){
				this.showSearch = !this.showSearch
				this.showList = false
			},
			showMask(kind){
				// this.$store.commit('handleMask',true)
				this.handleMask(true)
				if(kind == '登录'){
					// this.$store.commit('handleSign',true)
					this.aaa(true)
				}else{
					this.$store.commit('handleSign',false)
				}
			},
			turnTo(index){
				console.log(index)
				uni.navigateTo({
					url:'../../pages/index/index'
				})
				// let route = {
				// 	url:'../pages/index/index'
				// }
			}
		},
		computed:{
			...mapState(['nIslogin']),
			theLogin(){
				return this.nIslogin
			}
		},
		watch:{
			// rect(newValue,oldValue){
			// 	if(newValue >= 30){
			// 		this.isTop = true
			// 	}else{
			// 		this.isTop = false
			// 	}
			// }
		}
	}
</script>

<style scoped>
.icon{
	font-family: 'iconfont';
}
.qq{
	font-size: 20px;
}
.register-login{
	display: flex;
	justify-content: space-between;
	line-height: 30px;
	font-size: 10px;
}
.register{
	float: left;
	color: #FFFFFF;
}
.login{
	cursor: pointer;
	display: flex;
	align-items: center;
	color: yellowgreen;
	float: right;
}
.menu{
	color:#C8C7CC;
	margin-right: 15px;
	cursor: pointer;
	padding-top: 6px;
	font-size: 24px;
}
.top{
	height: 30px;
	padding: 0 20px;
	background-color: #827970;
}
.nav{
	height: 50px;
	padding: 0 20px;
	position: relative;
	background-color: #827970;
	display: flex;
}
.is-fixed{
	position: fixed !important;
	top: 0;
	z-index: 9;
}
.lewd{
	line-height: 50px;
	font-size: 28px;
	cursor: pointer;
}
.search-btn{
	font-family: 'iconfont';
	line-height: 50px;
	position: absolute;
	right: 10px;
	font-size: 18px;
	cursor: pointer;
	height: 50px;
}
.search-btn:hover{
	color: #007AFF;
}
.search{
	z-index: 9;
	position: absolute;
	left: 0;
	top: 50px;
	right: 0;
}
.list{
	z-index: 9;
	position: absolute;
	left: 0;
	right: 0;
	top: 50px;
	border-bottom: 8px solid #827970;
	border-top: 1px solid #F1F1F1;
}

.list-item{
	height: 41px;
	padding: 0 20px;
	line-height: 41px;
	font-weight: bold;
	background-color: #827970;
	border-bottom: 1px solid #F1F1F1;
}
.pc-list{
	display: flex;
	flex-direction: row;
	line-height: 50px;
	margin-left: 40px;
}
.pc-list-item{
	cursor: pointer;
	font-size: 20px;
	font-weight: bold;
	padding: 0 10px;
	color:#F8F8F8;
}
.pc-list-item:hover{
	background-color: #F8F8F8;
	color: #F0AD4E;
}
</style>
