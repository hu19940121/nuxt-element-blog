<template>
  <div class="header flex justify-between align-center">
      <div class="header-left flex align-center">
        <i @click="change" style="font-size:30px;" class="el-icon-menu margin-right-xs hidden-sm-and-up"></i>
        <!-- <el-avatar shape='square' size="medium" :src="avatar"></el-avatar> -->
        <nuxt-link to="/" style="border-bottom:none;">
          <div class="flex align-center">
            <el-avatar shape='square' size="medium" :src="settingDetail.avatar"></el-avatar>
            <h3 class="padding-left-xs">{{ settingDetail.nickname }}</h3>
          </div>
        </nuxt-link>
      </div>  
    <div class="header-right hidden-sm-and-down flex align-center">
      <el-popover
        placement="bottom"
        width="200"
        trigger="click"
        >
        <div>
          <el-radio-group v-model="currentTheme" size="small">
            <el-radio-button label="dark"></el-radio-button>
            <el-radio-button label="light"></el-radio-button>
            <!-- <el-radio-button label="auto"></el-radio-button> -->
          </el-radio-group>
        </div>
        <div  slot="reference">
          <svg-icon class="margin-right-xs pointer" style="font-size:24px;" icon-class="sepan" /> 
        </div>
      </el-popover>
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
        avatar: require('@/static/avatar.jpg'),
      }
    },
    mounted () {
      this.changeTheme()
    },
    watch: {
      currentTheme() {
        this.changeTheme()
      }
    },
    computed: {
      ...mapState(['cateList','settingDetail']),
      currentTheme: {
        // custome get() and set() of this local computed property
        get () {
          // get stored message
          return this.$store.state.currentTheme
        },
        set (value) {
          // commit a mutation to set message
          this.$store.commit('CHANGE_CURRENT_THEME', value)
        }
      },
    },
    methods: {
      ...mapActions(['changeSideBarStatus']),
      changeTheme() {
        window.document.documentElement.setAttribute('data-theme', this.currentTheme)
      },
      change() {
        this.changeSideBarStatus(!this.$store.state.sideBarStatus)
      }
    },
  }
</script>

<style lang="scss" scoped>
.header {
  color: #333;
  height: $navHeight;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  @include border_bottom_color('header_border_bottom');

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