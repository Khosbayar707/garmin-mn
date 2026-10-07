import express from 'express'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
const app = express()
const root = path.dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.join(root, 'dist')))
app.get('/api/health', (_req, res) => res.json({ ok: true }))
app.get('*path', (_req, res) => res.sendFile(path.join(root, 'dist', 'index.html')))
app.listen(process.env.PORT || 3000, () => console.log('Storefront ready'))
