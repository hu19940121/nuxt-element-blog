<template>
  <div class="wrapper">
    <div class="banner">
      <p>
        昔日玫瑰以其名流芳,今人所持唯玫瑰之名
      </p>
    </div>
    <div class="main-container padding-top-xs padding-lr-xs">
      <div class="main flex">
        <div class="main-left">
          <articleCard :info="article" v-for="article in articleList" :key="article.id" />
        </div>
        <el-card :body-style="{ padding:'0px' }" class="margin-left-xs main-right hidden-sm-and-down padding-xs">
          <userInfo />
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  import articleCard from '@/components/article-card'
  import userInfo from '@/components/user-info'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        // articleList:[]
      }
    },
    // async asyncData({ $axios, app }) {
    //   let res = await app.$request.getArticleList()
    //   return {
    //     articleList : res.data.data || []
    //   }
    // },
    computed: {
      ...mapState(['articleList'])
    },
    head: {
      title: '梦如南笙',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '昔日玫瑰以其名流芳,今人所持唯玫瑰之名'
        }
      ],
    },
    components: {
      articleCard,
      userInfo
    },
  }
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  .banner {
    height: 450px;
    position: relative;
    text-align: center;
    background: url('/bg.jpg') center center / cover no-repeat;
    padding-top: 20px;
    &::after {
      display: block;
      content: " ";
      background: #888;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 0;
      opacity: .2;
    }
    p {
      width: 100%;
      font-size: 24px;
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      z-index: 1;
    }
  }
  .main-container {
    .main {
      max-width: 1126px;
      min-height: 100px;
      margin: 0 auto;
      &-left {
        flex:1;
      }
      &-right {
        width: 300px;
      }
    }
  }
}
</style>