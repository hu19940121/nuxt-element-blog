

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  sideBarStatus: false,
  cateList:[],
  articleList: [],
  settingDetail: {}
}

const mutations = {
  CHANGE_SIDEBAR_STATUS: (state, status) => {
    state.sideBarStatus = status
  },
  CHANGE_CATE_LIST: (state, list)=>{
    state.cateList = list
  },
  CHANGE_ARTICLE_LIST: (state, list)=>{
    state.articleList = list
  },
  CHANGE_SETTING_DETAIL: (state, detail)=>{
    state.settingDetail = detail
  },
  CHANGE_MUSIC_LIST: (state, list)=>{
    state.musicList = list

  }
}

const actions = {
  changeSideBarStatus({ commit },status) {
    commit('CHANGE_SIDEBAR_STATUS',status)
  },
  async nuxtServerInit({ commit }, { app }) {
    const settingDetailRes =  await app.$request.getSettingDetail()
    commit('CHANGE_SETTING_DETAIL', settingDetailRes.data.data);
    let res = await app.$request.getCateList()
    let articleListRes = await app.$request.getArticleList()
    commit('CHANGE_ARTICLE_LIST', articleListRes.data.data);
    commit('CHANGE_CATE_LIST', res.data.data);
    let musicRes = await app.$request.getMusicList()
    let musicList = musicRes.data?.data || []
    musicList.sort((a,b)=>a.sort - b.sort) //排序 升序 数字越小越靠前
    commit('CHANGE_MUSIC_LIST', musicRes.data.data);
  },
}
const store = () => new Vuex.Store({

  state,
  mutations,
  actions
})

export default store