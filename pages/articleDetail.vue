<template>
  <div class="articleDetail flex">
    <div class="left padding-xs hidden-sm-and-down">
      大纲
      <div id="outline"></div>
    </div>
    <div class="placeholder hidden-sm-and-down">

    </div>
    <div class="right padding-sm">
      <div id="preview"></div>
    <!-- <client-only placeholder="loading...">
      <MarkdownPreview theme="oneDark" :initialValue="initValue"/>
    </client-only> -->
    </div>
  </div>
</template>

<script>
  import Vditor from 'vditor'
  import 'vditor/dist/index.css'

  export default {
    data() {
      return {
        initValue: '',
        articleDetail: {}
      }
    },
    async asyncData({ app, query }) {
      let res = await app.$request.getArticleDetail({ id: query.id })
      return {
        articleDetail : res.data.data || {}
      }
    },
    mounted () {
      // this.init()
      this.preview()
    },
    head() {
      return {
        title: this.articleDetail.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.articleDetail.title
          }
        ]
      }
    },
    methods: {
      preview() {
        Vditor.preview(document.getElementById('preview'),this.articleDetail.content, {
          speech: {
            enable: true,
          },
          anchor: 1,
          after () {
            // if (window.innerWidth <= 768) {
            //   return
            // }
            const outlineElement = document.getElementById('outline')
            Vditor.outlineRender(document.getElementById('preview'), outlineElement)
            if (outlineElement.innerText.trim() !== '') {
              outlineElement.style.display = 'block'
              this.initOutline()
            }
          },
        }) 
      },
  //     init() {
  //       this.initValue = '# P01:课程介绍和环境搭建\n' +
  // '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  // '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  //  '**这是加粗的文字**\n\n' +
  // '*这是倾斜的文字*`\n\n' +
  // '***这是斜体加粗的文字***\n\n' +
  // '~~这是加删除线的文字~~ \n\n'+
  // '\`console.log(111)\` \n\n'+
  // '# p02:来个Hello World 初始Vue3.0\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n'+
  // '***\n\n\n' +
  // '# p03:Vue3.0基础知识讲解\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n\n'+
  // '# p04:Vue3.0基础知识讲解\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n\n'+
  // '#5 p05:Vue3.0基础知识讲解\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n\n'+
  // '# p06:Vue3.0基础知识讲解\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n\n'+
  // '# p07:Vue3.0基础知识讲解\n' +
  // '> aaaaaaaaa\n' +
  // '>> bbbbbbbbb\n' +
  // '>>> cccccccccc\n\n'+
  // '``` var a=11; ```'
  //     },
      initOutline () {
        const headingElements = []
        Array.from(document.getElementById('preview').children).forEach((item) => {
          if (item.tagName.length === 2 && item.tagName !== 'HR' && item.tagName.indexOf('H') === 0) {
            headingElements.push(item)
          }
        })

        let toc = []
        window.addEventListener('scroll', () => {
          const scrollTop = window.scrollY
          toc = []
          headingElements.forEach((item) => {
            toc.push({
              id: item.id,
              offsetTop: item.offsetTop,
            })
          })

          const currentElement = document.querySelector('.vditor-outline__item--current')
          for (let i = 0, iMax = toc.length; i < iMax; i++) {
            if (scrollTop < toc[i].offsetTop - 30) {
              if (currentElement) {
                currentElement.classList.remove('vditor-outline__item--current')
              }
              let index = i > 0 ? i - 1 : 0
              document.querySelector('span[data-target-id="' + toc[index].id + '"]').classList.add('vditor-outline__item--current')
              break
            }
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
#preview {
  width: 100%;
}
.articleDetail {
  min-height: 100vh;
  .left {
    width:320px ;
    position: fixed;
    left: 0;
    border-right: 1px solid #eee;
  }
  .placeholder {
    width:320px ;
  }
  .right {
    flex: 1;
    /* width:100% ; */
  }
}
</style>