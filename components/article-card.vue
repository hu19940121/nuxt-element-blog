<template>
  <div>
    <el-card class="box-card margin-bottom-xs">
      <div slot="header">
        <nuxt-link :to="{path:'/articleDetail',query:{ id: info.id }}">
          <h3><a class="title pointer">{{ info.title }}</a></h3>
        </nuxt-link>
      </div>
      <div class="article-info align-center">
        <div class="label margin-right-sm"><i class="el-icon-user-solid"></i> 梦如南笙</div>
        <div class="label margin-right-sm"><i class="el-icon-time"></i> {{ info.createAt | parseTime('YYYY-MM-DD HH:mm:ss') }}</div>
        <div class="label "><i class="el-icon-paperclip"></i> 
          {{ info.cates.map((item)=>item.name).join(',') }}
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        default: ()=>({
          cates:[]
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

.box-card {
  .title {
    position: relative;
    &:after {
      content: "";/*单引号双引号都可以，但必须是英文*/
      width: 0;
      height: 2px; /*下划线高度*/
      background: $titleAColor; /*下划线颜色*/
      position: absolute;
      top: 100%;
      left: 50%;
      // transition: all .8s ; /*css动画效果，0.8秒完成*/
    }
    &:hover:after {
      left: 0;
      transition: all .5s;
      width: 100%;
    }
  }
  .article-info {
    color: #888;
    font-size: 14px;
  }
  .label {
    display: inline-block;
  }
}
</style>