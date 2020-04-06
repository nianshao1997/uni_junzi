<template>
	<view class="container">
		<view class="mask animated slideInDown" @click="cancleMask" v-show="theMask">
			<view class="mask-content" @click.stop="ns">
				<view class="mask-content-top">
					<view class="mask-content-top-login" @click='handleColor(true)' :class="{'color':theSign}">
						登录
					</view>
					<view class="mask-content-top-register" @click="handleColor(false)" :class="{'color':!theSign}">
						注册
					</view>
					<view class="mask-content-top-unshow" @click="cancleMask">
						&#xe833;
					</view>
				</view>
				<view v-show="theSign" class="mask-content-login">
					<view class="mask-content-login-username">
						<input type="text" placeholder="用户名..." v-model="loginName" />
					</view>
					<view class="mask-content-login-password">
						<input type="text" placeholder="密码..." v-model="loginPassword"/>
					</view>
					<view class="mask-content-login-status">
						<label class="radio"><radio value="r1" checked="true" />保持登录</label>
						<text style="color: #999999;">？？忘记密码</text>
					</view>
					<button type="primary" form-type="submit" @click="handleLogin">登录</button>
					<view class="mask-content-login-bottom">
						<text>还没有账号</text>
						<text class="register-now">立即注册</text>
					</view>
				</view>
				<view v-show="!theSign" class="mask-content-register">
					<view class="mask-content-register-input">
						<input type="text" placeholder="用户名" v-model="name" />
					</view>
					<view class="mask-content-register-input">
						<input type="text" placeholder="邮箱" v-model="email"/>
					</view>
					<view class="mask-content-register-input">
						<input type="text" placeholder="密码" v-model="password" />
					</view>
					<view class="mask-content-register-input">
						<input type="text" placeholder="重复密码" v-model="rePassword"/>
					</view>
					<view class="mask-content-register-input">
						<input type="text" placeholder="邀请码" v-model="yaoqiu"/>
					</view>
					<view style="text-align: center;font-size: 16px;">
						<text style="font-size: 16px;">还没有激活码?</text>
						<text style="margin-left: 20px;font-size: 16px;color: #C0C0C0;">购买激活码</text>
					</view>
					<view class="bottom">
						<label style="font-size: 12px;" class="radio"><radio value="r1" checked="true" />同意注册协议</label>
						<button type="primary" style="width: 44%;" @click="handleRegister">注册</button>
					</view>
				</view>
		    </view>
		</view>
	</view>
</template>

<script>
	import showMessage from '@/feedback/message.js'
	
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				registerInfo:['用户名','密码','重复密码','电子邮件','激活码'],
				name:'',
				email:'',
				password:'',
				rePassword:'',
				yaoqiu:'',
				loginName:'',
				loginPassword:''
			}
		},
		methods:{
			ns(){},
			cancleMask(){
				this.$store.commit('handleMask',false)
			},
			handleColor(b){
				this.$store.commit('handleSign',b)
			},
			handleRegister(){
				if(this.name == '' || this.email == '' || this.password == '' || this.rePassword == '' || this.yaoqiu == ''){
					showMessage('error','请填入完整信息')
					return
				}
				if(this.password !== this.rePassword){
					showMessage('error','密码不一致')
					return
				}
				if(this.yaoqiu != 123){
					showMessage('error','请输入邀请码123')
					return
				}
				this.register()
			},
			handleLogin(){
				if(this.loginName == '' || this.loginPassword == ''){
					showMessage('error','用户名或密码不能为空')
					return
				}
				this.login()
			},
			login(){
				uniCloud.callFunction({
					name:'junziLogin',
					data:{
						username:this.loginName,
						password:this.loginPassword
					}
				}).then(res=>{
					console.log(res)
					if(res.result){
						showMessage('success','登陆成功')
					}else{
						showMessage('error','用户名或密码错误')
					}
				})
			},
			register(){
				uniCloud.callFunction({
					name:'junziRegister',
					data:{
						username:this.name,
						password:this.password
					}
				}).then(res=>{
					console.log((res))
					if(res.result == 1){
						showMessage('success','注册成功')
					}else if(res.result == -1){
						showMessage('error','用户名已存在')
					}
				})
			}
		},
		computed:{
			...mapState(['sign','mask','nIslogin']),
			theSign(){
				return this.sign
			},
			theMask(){
				return this.mask
			},
			theLogin(){
				return this.nIslogin
			}
		}
	}
</script>

<style scoped>
	.bottom{
		margin-top: 20px;
		display: flex;
		align-items: center;
	}
	.color{
		background-color: #4CD964;
		color: #FFFFFF;
		width: 50px;
		text-align: center;
		border-radius: 5px;
	}
	.mask{
		position: fixed;
		z-index: 99;
		left: 0;
		top: 0;
		bottom: 0;
	    background-color: rgba(0,0,0,.4);
		right: 0;
	}
	.mask-content{
		padding: 20px;
		background-color: #FFFFFF;
		margin-top: 40px;
		margin-left: auto;
		margin-right: auto;
		box-sizing: border-box;
		border-radius: 10px;
	}
	.mask-content-top{
		padding: 0 30px;
		font-size: 18px;
		display: flex;
		justify-content: space-between;
	}
	.mask-content-top-unshow{
		font-family: 'iconfont';
		color: #999999;
		cursor: pointer;
	}
	.mask-content-login-status{
		font-size: 16px;
		display: flex;
		justify-content: space-between;
	}
	.mask-content-login-bottom{
		font-size: 14px;
	}
	.mask-content-login-username,
	.mask-content-login-password{
		margin-top: 20px;
		padding-left: 20px;
		padding-top: 10px;
		padding-bottom: 10px;
		border-radius: 5px;
		border: 1px solid #C0C0C0;
	}
	.mask-content-login-status{
		margin: 20px;
	}
	.mask-content-login-bottom{
		text-align: center;
		margin-top: 20px;
	}
	.mask-content-register-input{
		height: 38px;
		padding-left: 10px;
		border: 1px solid #C0C0C0;
		border-radius: 8px;
		margin: 10px;
	}
	.mask-content-register-input>input{
		height: 38px;
	}
	.register-now{
		margin-left: 14px;
		color:#808080;
	}

</style>
