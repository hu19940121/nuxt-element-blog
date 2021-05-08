
export default function (axios, isClient) {
  // const url = 'http://127.0.0.1:7002/api'
  const url = 'https://kaier001.com/api'
  const domain = isClient === 'client' ?  url : ''
  return {
    getArticleList: (data) => {
      return axios.post(domain + '/v2/blog/list', data)
    },
    getCateList: (params) => {
      return axios.get( domain + '/v2/blogCate/list',{
        params
      })
    },
    getArticleDetail: (params) => {
      return axios.get( domain + '/v2/blog/detail',{
        params
      })
    },
    getSettingDetail: (params) => {
      return axios.get( domain +'/v2/blogSetting/detail',{
        params
      })
    },
    getMusicList: (params) => {
      return axios.get( domain + '/v2/blogMusic/list',{
        params
      })
    }
  }
}