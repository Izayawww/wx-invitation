const baseUrl = 'http://49.232.173.220:3001/data/'

const request = (url) => {
  let promise = new Promise((resolve, reject) => {
    console.log(url)
    uni.showLoading({
      title: '加载中'
    });
    uni.request({
      url: baseUrl+url
    }).then((res) => {
      uni.hideLoading()
      resolve(res[1].data)
    }).catch((response) => {
      uni.hideLoading()
      reject(response)
    })
  })
  return promise
}

export default request;