<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './comment/animate.min.css';
	.container{
		margin: 0 auto;
	}
	.icon-img{
		border-radius: 50%;
	}
	@media (min-width:1120px){
		.container{
			width: 1170px;
		}
		.icon-img{
			width: calc(100% / 6);
			height: 180px;
		}
		.menu{
			display: none;
		}
		.is-fixed,
		.input-wrapper{
			width: 1170px;
			box-sizing: border-box;
		}
		.input-content{
			width: 50%;
		}
		.search-kind{
			height: 113px;
		}
		.mask-content{
			width: 366px;
		}
		.tab{
			padding: 6px 8px;
			margin-right: 10px;
		}
		.tabs{
			padding-bottom: 10px;
		}
		.re-img-box{
			width: 16%;
			height: 300px;
		}
		.re-img-box>image{
			height: 260px;
		}
		.article-wrapper{
			width: 100%;
		}
		.article{
			width: 48%;
		}
		.w-icon-wrapper,
		.a-icon-wrapper{
			width: 280px;
		}
		.a-icon-wrapper{
			height: 350px;
		}
		.actress-wrapper{
			width: calc(100% / 6);
		}
	}
	@media (min-width:992px) and (max-width:1199px) {
		.container{
			width: 970px;
		}
		.icon-img{
			width: 15%;
			height: 150px;
		}
		.menu{
			display: none;
		}
		.is-fixed,
		.input-wrapper{
			width: 970px;
			box-sizing: border-box;
		}
		.input-content{
			width: 50%;
		}
		.search-kind{
			height: 113px;
		}
		.mask-content{
			width: 366px;
		}
		.tab{
			padding: 6px 8px;
			margin-right: 10px;
		}
		.tabs{
			padding-bottom: 10px;
		}
		.re-img-box{
			width: 16%;
			height: 260px;
		}
		.re-img-box>image{
			height: 200px;
		}
		.article-wrapper{
			width: 100%;
		}
		.article{
			width: 48%;
		}
		.w-icon-wrapper,
		.a-icon-wrapper{
			width: 280px;
		}
		.a-icon-wrapper{
			height: 350px;
		}
		.actress-wrapper{
			width: calc(100% / 6);
		}
	}
	@media (min-width:768px) and (max-width:991px) {
		.container{
			width: 750px;
		}
		.icon-img{
			width: calc(100% / 6);
			height: 120px;
		}
		.list-item{
			font-size: 22px;
		}
		.menu{
			display: none;
		}
		.is-fixed,
		.input-wrapper{
			width: 750px;
			box-sizing: border-box;
		}
		.input-content{
			width: 50%;
		}
		.search-kind{
			height: 113px;
		}
		.mask-content{
			width: 366px;
		}
		.tab{
			padding: 6px 8px;
			margin-right: 10px;
		}
		.tabs{
			padding-bottom: 10px;
		}
		.re-img-box{
			width: 16%;
			height: 192px;
		}
		.re-img-box>image{
			height: 150px;
		}
		.article-wrapper{
			width: 100%;
		}
		.article{
			width: 48%;
		}
		.w-icon-wrapper,
		.a-icon-wrapper{
			width: 280px;
		}
		.a-icon-wrapper{
			height: 300px;
		}
		.actress-wrapper{
			width: calc(100% / 6);
		}
	}
	@media (min-width:376px) and (max-width:767px) {
		.icon-img{
			width: calc(100% / 4);
			height: 100px;
		}
		.list-item{
			font-size: 18px;
		}
		.is-fixed,
		.input-wrapper{
			right: 0;
			left: 0;
		}
		.input-content{
			width: 100%;
		}
		.pc-list{
			display: none !important;
		}
		.search-kind{
			height: 83px;
		}
		.mask-content{
			width: 366px;
		}
		.tab{
			margin-right: 10px;
			height: 20px;
			line-height: 20px;
		}
		.tabs{
			padding-bottom: 10px;
		}
		.re-img-box{
			width: 32%;
			height: 192px;
		}
		.re-img-box>image{
			height: 150px;
		}
		.article-wrapper{
			width: 90%;
		}
		.w-icon-wrapper,
		.a-icon-wrapper{
			width: 50%;
		}
		.a-icon-wrapper{
			height: 280px;
		}
		.actress-wrapper{
			width: calc(100% / 4);
		}
	}
	@media (max-width:375px) {
		.icon-img{
			width: calc(100% / 4);
			height: 90px;
		}
		.list-item{
			font-size: 14px;
		}
		.is-fixed,
		.input-wrapper{
			right: 0;
			left: 0;
		}
		.input-content{
			width: 100%;
		}
		.pc-list{
			display: none !important;
		}
		.search-kind{
			height: 83px;
		}
		.mask-content{
			width: 360px;
		}
		.tab{
			margin-right: 10px;
			height: 20px;
			line-height: 20px;
		}
		.tabs{
			padding-bottom: 6px;
		}
		.re-img-box{
			width: 32%;
			height: 192px;
		}
		.re-img-box>image{
			height: 150px;
		}
		.article-wrapper{
			width: 90%;
		}
		.w-icon-wrapper,
		.a-icon-wrapper{
			width: 50%;
		}
		.a-icon-wrapper{
			height: 280px;
		}
		.actress-wrapper{
			width: calc(100% / 4);
		}
	}
	@font-face {
	  font-family: 'iconfont';  /* project id 1618340 */
	  src: url('//at.alicdn.com/t/font_1618340_30tb8t44axe.eot');
	  src: url('//at.alicdn.com/t/font_1618340_30tb8t44axe.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1618340_30tb8t44axe.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1618340_30tb8t44axe.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1618340_30tb8t44axe.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1618340_30tb8t44axe.svg#iconfont') format('svg');
	}
	.info-title{
		height: 40px;
		border-left: 4px solid #007AFF;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		padding-left: 10px;
		font-size: 16px;
		box-sizing: border-box;
		background-color: #F1F1F1;
	}
</style>
