---
  head: [
    ['meta', { name: 'robots', content: 'noindex,nofollow' }]
  ]
---

<script>
const lang = (navigator.language || '').toLowerCase()

// 只在真正访问根路径时重定向
if (typeof window !== 'undefined' && window.location.pathname === '/') {
  if (lang.includes('zh')) {
    window.location.replace('/zh/')
  } else {
    window.location.replace('/en/')
  }
}
</script>

<style>
html, body {
  background: #1B1B1F;
}
</style>