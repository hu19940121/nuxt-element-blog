<template>
  <div class="cate">
    <nuxt-link :to="{path:'/category',query:{ id: info.id }}">
      <el-card class="margin-bottom-xs" :class="[{ active: info.id == activeId }]" :body-style="{ padding:'8px' }">
        <div class="flex justify-between align-center">
          <span> <a class="pointer">{{ info.name }}</a></span>
          <el-tag
            class="margin-left-sm"
            size="mini"
            :type="roundType"
            effect="dark">
            {{ info.articles.length }}
          </el-tag>
        </div>
      </el-card>
    </nuxt-link>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        default: ()=>({})
      },
      activeId: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        typeList: [
          'success',
          'info',
          'warning',
          'danger'
        ]
      }
    },
    computed: {
      roundType() {
       return this.typeList[Math.floor(Math.random()*this.typeList.length + 1)] 
      }
    }
  }
</script>

<style lang="scss" scoped>
.cate {
  font-size: 12px;
  .active {
    
    background-color: $titleAColor;
   a {
      @include font_color('cate_item_active_color');
   }
  }
}
</style>