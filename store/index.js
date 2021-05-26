

import Vue from 'vue'
import Vuex from 'vuex'
import requests from '@/api/index.js'
import axios from 'axios'
const { getArticleList } =  requests(axios, 'client')
Vue.use(Vuex)
const state = {
  sideBarStatus: false,
  cateList:[],
  articleList: [],
  settingDetail: {},
  articleCount: 0,
  currentTheme: 'light' //主题
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
  },
  CHANGE_ARTICLE_COUNT: (state, count)=>{
    state.articleCount = count
  },
  CHANGE_CURRENT_THEME: (state, theme)=>{
    state.currentTheme = theme
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
    let articleListRes = await app.$request.getArticleList({ pageSize:6, pageIndex:1 })
    commit('CHANGE_ARTICLE_LIST', articleListRes.data.data.list);
    commit('CHANGE_ARTICLE_COUNT', articleListRes.data.data.count);
    commit('CHANGE_CATE_LIST', res.data.data);
    let musicRes = await app.$request.getMusicList()
    let musicList = musicRes.data?.data || []
    musicList.sort((a,b)=>a.sort - b.sort) //排序 升序 数字越小越靠前
    commit('CHANGE_MUSIC_LIST', musicRes.data.data);
  },
  async getArticleList({ commit }, payload) {
    getArticleList(payload).then((res)=>{
      commit('CHANGE_ARTICLE_LIST', res.data.data.list);

    })
  }
}
const store = () => new Vuex.Store({

  state,
  mutations,
  actions
})

export default store