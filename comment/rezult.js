export default function(target){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:'https://ns1997.oss-cn-hangzhou.aliyuncs.com/junzi/json/input/'+target+'.json',
		}).then(res=>{
			if(Object.prototype.toString.call(res[1].data) == "[object Array]" && res[1].data.length > 0){
				resolve(res[1].data)
				console.log(res)
			}else{
				reject('数据不存在')
			}
			
		}).catch(err=>{
			uni.showToast({
				title:'请检查网络'
			})
		})
	})
}