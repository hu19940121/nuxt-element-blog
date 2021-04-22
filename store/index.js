

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  sideBarStatus: false,
  cateList:[],
  articleList: []
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
}

const actions = {
  changeSideBarStatus({ commit },status) {
    commit('CHANGE_SIDEBAR_STATUS',status)
  },
  async nuxtServerInit({ commit }, { app }) {
    let res = await app.$request.getCateList()
    let articleListRes = await app.$request.getArticleList()
    commit('CHANGE_ARTICLE_LIST', articleListRes.data.data);
    commit('CHANGE_CATE_LIST', res.data.data);
  },
}
const store = () => new Vuex.Store({

  state,
  mutations,
  actions
})

export default store