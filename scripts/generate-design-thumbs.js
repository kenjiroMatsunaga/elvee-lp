// public/images/designs/*.png から一覧カード用のサムネイルを生成する（npm run build の前に自動実行）。
// 差し替え・削除された画像が残らないよう、毎回 thumbs/ を作り直す。
import { mkdir, readdir, rm } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = 'public/images/designs'
const THUMB_DIR = path.join(SOURCE_DIR, 'thumbs')
const THUMB_WIDTH = 480 // カード幅（最大約230px）の2倍強

const files = (await readdir(SOURCE_DIR)).filter((file) => file.endsWith('.png'))

await rm(THUMB_DIR, { recursive: true, force: true })
await mkdir(THUMB_DIR, { recursive: true })

await Promise.all(
  files.map((file) =>
    sharp(path.join(SOURCE_DIR, file))
      .resize({ width: THUMB_WIDTH })
      .webp({ quality: 75 })
      .toFile(path.join(THUMB_DIR, file.replace(/\.png$/, '.webp'))),
  ),
)

console.log(`Generated ${files.length} thumbnails in ${THUMB_DIR}`)
