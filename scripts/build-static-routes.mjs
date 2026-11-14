import { copyFile, mkdir } from 'node:fs/promises'

await mkdir('dist/projects/anonix', { recursive: true })
await copyFile('dist/index.html', 'dist/projects/anonix/index.html')
