<template>
  <div class="category padding-lr-xs">
    <div class="cate-list padding-top flex">
      <cateItem :activeId="cateId" class="margin-right-sm" :info="cate" v-for="cate in cateList" :key="cate.id"/>
    </div>
    <div class="cate-article-list margin-top-sm">
      <articleCard :info="article" v-for="article in list" :key="article.id" />
    </div>
  </div>
</template>

<script>
  import articleCard from '@/components/article-card'
  import cateItem from '@/components/cate-item'
  import { mapState } from 'vuex'

  export default {
    async asyncData({ app, query }) {
      const cateId = query.id
      return {
        cateId,
        list:[]
      }
    },
    components: {
      cateItem,
      articleCard
    },
    
    computed: {
      ...mapState(['cateList','articleList']),
    },
    mounted () {
      this.filterList()
    },
    watch: {
      '$route.query.id'(newValue) {
        this.filterList(newValue)
        this.cateId = newValue
      }
    },
    methods: {
      filterList(cateId = this.cateId) {
        const arrayList =  this.articleList.filter((item)=>{
          const idList = item.cates.map(item=>item.id)
          return idList.includes(~~cateId)
        })
        this.list = arrayList
      }
    },
  }
</script>

<style lang="scss" scoped>
.category {
  min-height: 100vh;
  max-width: 750px;
  margin: 0 auto;
}
</style>