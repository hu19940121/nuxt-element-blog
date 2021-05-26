<template>
  <transition name="fade">
    <div class="sideBar-container" v-if="show" @click.stop="$emit('input',false)">
      <div class="bar padding-xs" @click.stop>
        <userInfo @cateClick="$emit('input',false)" />
      </div>
    </div>
  </transition>
</template>

<script>
  import userInfo from '@/components/user-info'
  import { stopScroll,allowScroll } from '@/utils'
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        show: this.value
      }
    },

    watch: {
      value: {
        immediate: false,
        handler(newValue, oldValue) {
          this.$emit('input',newValue)
          if (newValue) {
            stopScroll()
          } else {
            console.log('allowScroll');
            allowScroll()
          }
          this.show = newValue
        }
      }
    },
    components: {
      userInfo,
    },
  }
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  /* opacity: 0; */
  transform: translateX(-100%);
}
.sideBar-container {
  width: 100vw;
  height: 100vh;
  background:rgba(0,0,0,0.8);
  position: fixed;
  top: $navHeight;
  z-index: 998;
  .bar {
    width: 70%;
    height: 100%;
    @include background_color('main_background');
    z-index: 999;
    overflow-y: scroll;
  }
}
</style>