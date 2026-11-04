// public/images/designs/ 配下の *.png（カテゴリ別サブディレクトリを含む）から一覧カード用のサムネイルを生成する（npm run build の前に自動実行）。
// thumbs/ には元画像と同じディレクトリ構成で出力する。差し替え・削除された画像が残らないよう、毎回 thumbs/ を作り直す。
import { mkdir, readdir, rm } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const SOURCE_DIR = 'public/images/designs'
const THUMB_DIR = path.join(SOURCE_DIR, 'thumbs')
const THUMB_WIDTH = 480 // カード幅（最大約230px）の2倍強

await rm(THUMB_DIR, { recursive: true, force: true })

const entries = await readdir(SOURCE_DIR, { recursive: true })
const files = entries.filter((file) => file.endsWith('.png'))

await Promise.all(
  files.map(async (file) => {
    const output = path.join(THUMB_DIR, file.replace(/\.png$/, '.webp'))
    await mkdir(path.dirname(output), { recursive: true })
    await sharp(path.join(SOURCE_DIR, file))
      .resize({ width: THUMB_WIDTH })
      .webp({ quality: 75 })
      .toFile(output)
  }),
)

console.log(`Generated ${files.length} thumbnails in ${THUMB_DIR}`)
