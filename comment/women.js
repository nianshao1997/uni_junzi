export default function(target){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:'https://ns1997.oss-cn-hangzhou.aliyuncs.com/junzi/json/w_details/'+target+'.json'
		}).then(res=>{
			resolve(res[1].data)
		}).catch(err=>{
			uni.showToast({
				title:'请检查网络'
			})
		})
	})
}