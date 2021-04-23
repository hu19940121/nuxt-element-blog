<template>
  <div class="header flex justify-between align-center">
      <div class="header-left flex align-center">
        <i @click="change" style="font-size:30px;" class="el-icon-menu margin-right-xs hidden-sm-and-up"></i>
        <!-- <el-avatar shape='square' size="medium" :src="avatar"></el-avatar> -->
        <a href="/" class="flex align-center">
          <el-avatar shape='square' size="medium" :src="settingDetail.avatar"></el-avatar>
          <h3 class="padding-left-xs">{{ settingDetail.nickname }}</h3>
        </a>
      </div>  
    <div class="header-right hidden-sm-and-down">
      <nuxt-link exact class="link margin-right-sm" to="/">
        <i class="el-icon-s-home"></i> Home
      </nuxt-link>
      <!-- <a class="link pointer margin-right-sm" to="/detail"> -->
        <el-dropdown>
          <span class="el-dropdown-link">
             <i class="el-icon-menu"></i> Category <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <nuxt-link :to="{path:'/category',query:{ id: cate.id }}" v-for="cate in cateList" :key="cate.id" >
              <el-dropdown-item    >
                {{ cate.name }}
              </el-dropdown-item>
            </nuxt-link>
          </el-dropdown-menu>
        </el-dropdown>
      <!-- </a> -->
      <!-- <a class="link pointer margin-right-sm"> -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <i class="el-icon-chat-line-square"></i> Contact <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a href="https://github.com/hu19940121" target="_blank">
              <el-dropdown-item>github</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>
      <!-- </a> -->
    </div>
  </div>
</template>

<script>
  import { mapActions,mapState } from 'vuex'
  export default {
    data() {
      return {
        avatar: require('@/static/avatar.jpg')
      }
    },
    mounted () {
    },
    computed: {
      ...mapState(['cateList','settingDetail'])
    },
    methods: {
      ...mapActions(['changeSideBarStatus']),
      change() {
        this.changeSideBarStatus(!this.$store.state.sideBarStatus)
      }
    },
  }
</script>

<style lang="scss" scoped>
.header {
  background-color: $mainBg;
  color: #333;
  height: $navHeight;
  border-bottom: 1px solid #eee;

}
.link {
  color: #333;
  text-decoration: none;
}
.nuxt-link-active {
  color: $titleAColor;
  border-bottom: 2px solid $titleAColor;
}
</style>