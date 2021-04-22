<template>
  <div>
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
            <Nuxt />
          </el-main>
          <el-footer class="text-center">
              冀ICP备18037780号  梦如南笙    2020 - 2021
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import myheader from './header'
  import sideBar from './sideBar'
  export default {
    data() {
      return {
        isCollapse: false
      };
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
  background-color: $mainBg;
  color: #333;
  height: $navHeight;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #eee;
  z-index: 9999999999;
}
.header-placeholder {
  height: $navHeight;
}
.el-footer {
  background-color: $mainBg;
  color: #333;
  height: $navHeight;
  line-height: $navHeight;
  border-bottom: 1px solid #eee;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  padding: 0;
  background-color: $mainBg;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}
::-webkit-scrollbar{
  display:none;/*ChromeSafari*/
}
</style>
