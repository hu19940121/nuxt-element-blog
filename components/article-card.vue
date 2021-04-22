<template>
  <div>
    <el-card class="box-card margin-bottom-xs">
      <div slot="header">
        <nuxt-link :to="{path:'/articleDetail',query:{ id: info.id }}">
          <h3><a class="pointer">{{ info.title }}</a></h3>
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
  .article-info {
    color: #888;
    font-size: 14px;
  }
  .label {
    display: inline-block;
  }
}
</style>