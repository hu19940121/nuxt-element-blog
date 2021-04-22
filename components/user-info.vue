<template>
  <div class="userinfo">
    <div class="text-center">
      <img class="avatar" src="~@/static/avatar.jpg" alt="">
      <h3 class="margin-top-sm">梦如南笙</h3>
      <div class="wb-wrap flex">
        <div class="flex-sub w">
          <h3 class="padding-bottom-xs">{{ articleList.length }}</h3>
          <h3>文章</h3>
        </div>
        <div class="flex-sub b">
          <h3 class="padding-bottom-xs">{{ cateList.length }}</h3>
          <h3>分类</h3>
        </div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="list">
      <h4 class="list-title margin-bottom-xs">
        <i class="el-icon-menu"></i> 分类
      </h4>
      <cateItem :info="cate" v-for="cate in cateList" :key="cate.id"/>
      <!-- <cateItem />
      <cateItem /> -->
    </div>
    <!-- <el-divider></el-divider>
    <div class="list">
      <h4 class="list-title margin-bottom-xs">
        <i class="el-icon-paperclip"></i> 标签
      </h4>
      <el-tag class="margin-bottom-xs margin-right-xs" effect="dark" v-for="(item,index) in 18" :key="index">全部</el-tag>
    </div> -->
  </div>
</template>

<script>
  import cateItem from '@/components/cate-item'
  import { mapState } from 'vuex'
  export default {
    components: {
      cateItem,
    },
    computed: {
      ...mapState(['cateList', 'articleList'])
    },
  }
</script>

<style lang="scss" scoped>
.userinfo {
  .avatar {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
  .wb-wrap {
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    .w {
      border-right: 1px solid #000;
      h3:nth-child(2) {
        font-size: 14px;
      }
    }
    .b {
      h3:nth-child(2) {
        font-size: 14px;
      }
    }
  }
}

</style>