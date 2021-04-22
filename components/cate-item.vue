<template>
  <div class="cate">
    <el-card class="margin-bottom-xs" :body-style="{ padding:'8px' }">
      <div class="flex justify-between align-center">
        <span> <a class="pointer">{{ info.name }}</a></span>
        <el-tag
          effect="dark">
          {{ info.articles.length }}
        </el-tag>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        default: ()=>({})
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>