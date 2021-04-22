//1) 自定义函数
const request = {
  getArticleList: (params) => {
    return axios.get('/v2/blog/list',{
      params
    })
  },
  getCateList: (params) => {
    return axios.get('/v2/blogCate/list',{
      params
    })
  },
  getArticleDetail: (params) => {
    return axios.get('/v2/blog/detail',{
      params
    })
  },
}

//2) 定义axios变量等待接收axios,保证axios可用
var axios = null
export default ({ $axios }, inject) => {
  //3 保存内置的axios
  axios = $axios
  //4) 将自定义函数交于nuxt
  inject('request', request)
}