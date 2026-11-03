// デザイン素材のカタログ。画像の差し替えは image のファイル、掲載の増減は items の行を編集するだけで反映される。
// 1枚の見開きに2カテゴリのページが載っている場合は、カテゴリごとに行を分け side でページ位置を示す。
// thumbnail は npm run build（または npm run thumbs）で image から生成される。

const LEFT = '左ページ'
const RIGHT = '右ページ'

function design(id, label, template, file, side) {
  const pad = (n) => String(n).padStart(2, '0')
  const name = `template-${pad(template)}-${pad(file)}`
  return {
    id,
    templateNo: `No.${template}`,
    image: `/images/designs/${name}.png`,
    thumbnail: `/images/designs/thumbs/${name}.webp`,
    title: `${label}デザイン ${id}`,
    side,
  }
}

export const designCategories = [
  {
    key: 'cover',
    label: '表紙・裏表紙',
    labelEn: 'Cover',
    desc: 'プロフィールブックの顔となる表紙と裏表紙。お二人の雰囲気に合わせたデザインをご提案します。',
    items: [
      design('A-1', '表紙', 1, 1),
      design('A-2', '表紙', 2, 1),
      design('A-3', '表紙', 3, 1),
      design('A-4', '表紙', 4, 1),
      design('A-5', '表紙', 5, 1),
      design('A-6', '表紙', 6, 1),
      design('A-7', '表紙', 7, 1),
      design('A-8', '表紙', 8, 1),
      design('A-9', '表紙', 11, 1),
    ],
  },
  {
    key: 'greeting',
    label: '挨拶',
    labelEn: 'Greeting',
    desc: 'ゲストへの感謝の気持ちを込めた挨拶ページ。お二人らしい言葉で彩ります。',
    items: [
      design('B-1', '挨拶', 1, 2, LEFT),
      design('B-2', '挨拶', 2, 2, RIGHT),
      design('B-3', '挨拶', 3, 2, LEFT),
      design('B-4', '挨拶', 4, 2, LEFT),
      design('B-5', '挨拶', 5, 2, LEFT),
      design('B-6', '挨拶', 6, 2),
      design('B-7', '挨拶', 7, 2, LEFT),
    ],
  },
  {
    key: 'profile',
    label: 'プロフィール',
    labelEn: 'Profile',
    desc: 'お二人それぞれのプロフィールをおしゃれなレイアウトで紹介するページです。',
    items: [
      design('C-1', 'プロフィール', 1, 2, RIGHT),
      design('C-2', 'プロフィール', 2, 3, LEFT),
      design('C-3', 'プロフィール', 3, 2, RIGHT),
      design('C-4', 'プロフィール', 4, 2, RIGHT),
      design('C-5', 'プロフィール', 5, 2, RIGHT),
      design('C-6', 'プロフィール', 6, 3),
      design('C-7', 'プロフィール', 7, 3),
      design('C-8', 'プロフィール', 8, 2, LEFT),
    ],
  },
  {
    key: 'qa',
    label: 'Q＆A',
    labelEn: 'Q&A',
    desc: 'ゲストに楽しんでもらえるQ&Aページ。お二人の意外な一面を披露しましょう。',
    items: [
      design('D-1', 'Q&A', 1, 3, LEFT),
      design('D-2', 'Q&A', 2, 3, RIGHT),
      design('D-3', 'Q&A', 3, 3, LEFT),
      design('D-4', 'Q&A', 4, 3, LEFT),
      design('D-5', 'Q&A', 5, 3, LEFT),
      design('D-6', 'Q&A', 6, 3),
      design('D-7', 'Q&A', 9, 1, LEFT),
      design('D-8', 'Q&A', 11, 2, LEFT),
    ],
  },
  {
    key: 'menu',
    label: 'MENU',
    labelEn: 'Menu',
    desc: '当日のお料理やドリンクをエレガントに紹介するメニューページです。',
    items: [
      design('E-1', 'メニュー', 1, 3, RIGHT),
      design('E-2', 'メニュー', 3, 3, RIGHT),
      design('E-3', 'メニュー', 4, 3, RIGHT),
      design('E-4', 'メニュー', 5, 3, RIGHT),
      design('E-5', 'メニュー', 7, 2, RIGHT),
      design('E-6', 'メニュー', 8, 2, RIGHT),
      design('E-7', 'メニュー', 11, 2, RIGHT),
    ],
  },
  {
    key: 'seating',
    label: '席次表',
    labelEn: 'Seating List',
    desc: 'ゲストのお席をわかりやすく案内する席次表。デザインに統一感を持たせます。',
    items: [
      design('F-1', '席次表', 1, 4),
      design('F-2', '席次表', 2, 4),
      design('F-3', '席次表', 3, 4),
      design('F-4', '席次表', 4, 4),
      design('F-5', '席次表', 5, 4),
      design('F-6', '席次表', 6, 4),
      design('F-7', '席次表', 11, 3),
    ],
  },
  {
    key: 'free',
    label: 'フリーページ',
    labelEn: 'Free Page',
    desc: 'ラブストーリーやフォトコラージュなど、お二人らしさを自由に表現できるページです。',
    items: [
      design('G-1', 'フリーページ', 7, 4),
      design('G-2', 'フリーページ', 8, 3),
      design('G-3', 'フリーページ', 9, 1, RIGHT),
      design('G-4', 'フリーページ', 9, 2),
    ],
  },
]
