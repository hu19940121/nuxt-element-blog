//1) 自定义函数
import requests from '@/api/index.js'
// const request = {
//   getArticleList: (data) => {
//     console.log('data',data);
//     return axios.post('/v2/blog/list', data)
//   },
//   getCateList: (params) => {
//     return axios.get('/v2/blogCate/list',{
//       params
//     })
//   },
//   getArticleDetail: (params) => {
//     return axios.get('/v2/blog/detail',{
//       params
//     })
//   },
//   getSettingDetail: (params) => {
//     return axios.get('/v2/blogSetting/detail',{
//       params
//     })
//   },
//   getMusicList: (params) => {
//     return axios.get('/v2/blogMusic/list',{
//       params
//     })
//   },
// }

//2) 定义axios变量等待接收axios,保证axios可用
var axios = null
export default ({ $axios }, inject) => {
  //3 保存内置的axios
  axios = $axios
  //4) 将自定义函数交于nuxt
  inject('request', requests(axios))
}