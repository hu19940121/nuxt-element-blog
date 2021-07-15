<template>
  <div>
    <BgMusic :audio="musicList" />
    <KanBanNiang :message="{
        info:'啦啦啦啦',
        welcome: `欢迎来到 ${settingDetail.nickname}`,
        home: '心里的花，我想要带你回家。',
        theme: '好吧，希望你能喜欢我的其他小伙伴。',
        close: '你知道我喜欢吃什么吗？痴痴地望着你。'
    }" />
    <el-backtop></el-backtop>

    <el-container>
      <el-header>
        <myheader />
      </el-header>
      <div class="header-placeholder">

      </div>
      <el-container>
        <sideBar v-model="$store.state.sideBarStatus" />
        <el-container>
          <el-main>
            <Nuxt   />
          </el-main>
          <el-footer class="foo flex justify-center align-center">
            <a href="https://beian.miit.gov.cn/" target="_blank">
              <span>
                <svg-icon icon-class="beian" /> <a>{{settingDetail.icp}} </a> 
              </span>     
              <span class="margin-left-xs">
                <svg-icon icon-class="copyright" />  <a>{{ settingDetail.nickname }} </a>
              </span> 
            </a>
  
            <span>
              <a> 2020 - 2021 </a>
            </span>   

          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import myheader from './header'
  import sideBar from './sideBar'
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        ooo: '',
        isCollapse: false
      };
    },

    computed: {
      ...mapState(['settingDetail','musicList'])
    },
    mounted () {
      console.log('route.fullpath',this.$route.fullPath);
    },
    components: {
      myheader,
      sideBar
    },
  }
</script>

<style lang="scss">
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.el-header {
  width: 100%;
  @include background_color('main_background');
  color: #333;
  height: $navHeight;
  position: fixed;
  top: 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  @include border_bottom_color('header_border_bottom');
  z-index: 9999999999;
}
.header-placeholder {
  height: $navHeight;
}
.el-footer {
  @include background_color('main_background');
  color: #333;
  min-height: $navHeight;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  @include border_bottom_color('header_border_bottom');
  flex-wrap: wrap;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  padding: 0;
  @include background_color('main_background');
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
::-webkit-scrollbar{
  display:none;/*ChromeSafari*/
}
</style>
