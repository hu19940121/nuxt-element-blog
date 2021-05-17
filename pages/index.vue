<template>
  <div class="wrapper">
    <div class="banner" :style="{ backgroundImage: `url(${ settingDetail.banner })`  }">
      <p>
        昔日玫瑰以其名流芳,今人所持唯玫瑰之名
      </p>
    </div>
    <div class="main-container padding-top-xs padding-lr-xs">
      <div class="main flex">
        <div class="main-left">
          <articleCard :info="article" v-for="article in articleList" :key="article.id" />
          <client-only placeholder="loading...">
            <Pagination
              :total="articleCount"
              :limit="pageSize"
              :pageSizes="[6,12,18]"
              :page="pageIndex"
              @pagination="handlePagination"
            />
          </client-only>

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
  import { mapState, mapActions} from 'vuex'
  export default {
    data() {
      return {
        loading: false,
        pageIndex: 1,
        pageSize: 6,
        // total: 30,
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
      ...mapState(['articleList','articleCount','settingDetail'])
    },
    mounted () {
      console.log('settingDetail',this.settingDetail);
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
      userInfo,
    },
    methods: {
      ...mapActions(['getArticleList']),
      handlePagination(val) {
        this.pageIndex = val.page
        if (this.pageSize !== val.limit) {
          this.pageIndex = 1
        }
        this.pageSize = val.limit
        this.getArticleList({ pageSize: this.pageSize,pageIndex: this.pageIndex })
      }
    },
  }
</script>
<style lang="scss">
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: $titleAColor;  
  color: #fff;
}
.el-backtop {
  color: $titleAColor;
}
</style>
<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  .banner {
    height: 450px;
    position: relative;
    text-align: center;
    /* background: url('/bg.jpg') center center / cover no-repeat; */
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
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