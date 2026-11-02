# Elvee LP 開発ガイドライン

## 技術スタック
- Vite + React（JSX）+ Tailwind CSS による LP 開発

## スタイリング
- 原則 Tailwind CSS のユーティリティクラスのみを使用する
- カスタム CSS の追加は最小限にする
- 色・フォントは `tailwind.config.js` のテーマトークンを使う

## レスポンシブ
- モバイルファースト: スマホ表示（375px〜）を基本に書き、`md:` / `lg:` で PC 表示に拡張する

## コンポーネント設計
- 1 セクション = 1 コンポーネントとし、`src/components/sections/` 配下に配置する

## 検証ルール
- ファイルの作成・編集後は必ず `npm run build` を実行し、エラーがないことを自己検証する
