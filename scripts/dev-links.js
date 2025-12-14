import { spawn } from 'node:child_process'

const child = spawn(
  'npx vitepress dev docs',
  { stdio: ['inherit', 'pipe', 'inherit'], shell: true }
)

const stripAnsi = str => str.replace(/\x1B\[[0-9;]*m/g, '')

let printed = false

child.stdout.on('data', chunk => {
  const raw = chunk.toString()
  process.stdout.write(raw)

  if (printed) return

  const text = stripAnsi(raw)
  const match = text.match(/Local:\s+(http:\/\/[^\s]+)/)

  if (match) {
    printed = true
    const base = match[1].replace(/\/$/, '')
    console.log(`\n`)
    console.log(`➜ 中文:   ${base}/zh/`)
    console.log(`➜ English: ${base}/en/`)
    console.log(`\n`)
  }
})

process.on('SIGINT', () => {
  child.kill('SIGINT')
  process.exit()
})
