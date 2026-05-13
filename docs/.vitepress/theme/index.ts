// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'

// 主页默认样式
import './style.css'

// 主页修改样式
import './styles/index.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  setup() {
    const route = useRoute()
    const initZoom = () => {
      // 对 .vp-doc 内的图片启用放大，排除已有链接包裹的图片
      mediumZoom('.vp-doc img:not(a img)', {
        background: 'var(--vp-c-bg)',
        margin: 24,
      })
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme

if (typeof window !== 'undefined') {
  // 统计访问量
  fetch(`https://api.counterapi.dev/v2/ceshis-team-1553/first-counter-1553/up`)
    .then(res => res.json())
    .catch(err => console.error('CounterAPI Error:', err))
}

console.log("")
console.log('  \u001b[96m$$$$$$\\ \u001b[93m         \u001b[92m              \u001b[96m$$$$$$$$\\ \u001b[93m$$\\ \u001b[92m           \u001b[91m          \u001b[95m          ')
console.log('  \u001b[96m\\_$$  _|\u001b[93m         \u001b[92m              \u001b[96m$$  _____|\u001b[93m$$ |\u001b[92m           \u001b[91m          \u001b[95m          ')
console.log('  \u001b[96m  $$ |  \u001b[93m$$$$$$$\\ \u001b[92m $$$$$$\\      \u001b[96m$$ |      \u001b[93m$$ |\u001b[92m$$\\    $$\\ \u001b[91m $$$$$$\\  \u001b[95m $$$$$$$\\ ')
console.log('  \u001b[96m  $$ | \u001b[93m$$  _____|\u001b[92m$$  __$$\\     \u001b[96m$$$$$\\    \u001b[93m$$ |\u001b[92m\\$$\\  $$  |\u001b[91m$$  __$$\\ \u001b[95m$$  _____|')
console.log('  \u001b[96m  $$ | \u001b[93m$$ /      \u001b[92m$$$$$$$$ |    \u001b[96m$$  __|   \u001b[93m$$ |\u001b[92m \\$$\\$$  / \u001b[91m$$$$$$$$ |\u001b[95m\\$$$$$$\\  ')
console.log('  \u001b[96m  $$ | \u001b[93m$$ |      \u001b[92m$$   ____|    \u001b[96m$$ |      \u001b[93m$$ |\u001b[92m  \\$$$  /  \u001b[91m$$   ____|\u001b[95m \\____$$\\ ')
console.log('  \u001b[96m$$$$$$ \u001b[93m\\$$$$$$$\\ \u001b[92m\\$$$$$$$\\     \u001b[96m$$$$$$$$\\ \u001b[93m$$ |\u001b[92m   \\$  /   \u001b[91m\\$$$$$$$\\ \u001b[95m$$$$$$$  |')
console.log('  \u001b[96m\\______|\u001b[93m\\_______|\u001b[92m \\_______|    \u001b[96m\\________|\u001b[93m\\__|\u001b[92m    \\_/    \u001b[91m \\_______|\u001b[95m\\_______/ ')
console.log("")