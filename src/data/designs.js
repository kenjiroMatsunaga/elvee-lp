// デザイン素材のカタログ。画像の差し替えは image のファイル、掲載の増減は items の行を編集するだけで反映される。
// thumbnail は npm run build（または npm run thumbs）で image から生成される。

// 片側1ページの縦長画像（public/images/designs/<dir>/<id>.png）
function page(id, label, dir) {
  const name = `${dir}/${id.toLowerCase()}`
  return {
    id,
    image: `/images/designs/${name}.png`,
    thumbnail: `/images/designs/thumbs/${name}.webp`,
    title: `${label}デザイン ${id}`,
    orientation: 'portrait',
  }
}

// 横長の見開き画像（public/images/designs/<name>.png。name はカテゴリ配下なら '<dir>/<id>' 形式）
function spread(id, label, name) {
  return {
    id,
    image: `/images/designs/${name}.png`,
    thumbnail: `/images/designs/thumbs/${name}.webp`,
    title: `${label}デザイン ${id}`,
    orientation: 'landscape',
  }
}

export const designCategories = [
  {
    key: 'cover',
    label: '表紙・裏表紙',
    labelEn: 'Cover',
    desc: 'プロフィールブックの顔となる表紙と裏表紙。お二人の雰囲気に合わせたデザインをご提案します。',
    items: [
      spread('A-1', '表紙', 'template-01-01'),
      spread('A-2', '表紙', 'template-02-01'),
      spread('A-3', '表紙', 'template-03-01'),
      spread('A-4', '表紙', 'template-04-01'),
      spread('A-5', '表紙', 'template-05-01'),
      spread('A-6', '表紙', 'template-06-01'),
      spread('A-7', '表紙', 'template-07-01'),
      spread('A-8', '表紙', 'template-08-01'),
      spread('A-9', '表紙', 'template-11-01'),
    ],
  },
  {
    key: 'greeting',
    label: '挨拶',
    labelEn: 'Greeting',
    desc: 'ゲストへの感謝の気持ちを込めた挨拶ページ。お二人らしい言葉で彩ります。',
    items: [
      page('B-1', '挨拶', 'greeting'),
      page('B-2', '挨拶', 'greeting'),
      page('B-3', '挨拶', 'greeting'),
      page('B-4', '挨拶', 'greeting'),
      spread('B-5', '挨拶', 'greeting/b-5'),
      page('B-6', '挨拶', 'greeting'),
    ],
  },
  {
    key: 'profile',
    label: 'プロフィール',
    labelEn: 'Profile',
    desc: 'お二人それぞれのプロフィールをおしゃれなレイアウトで紹介するページです。',
    items: [
      page('C-1', 'プロフィール', 'profile'),
      page('C-2', 'プロフィール', 'profile'),
      page('C-3', 'プロフィール', 'profile'),
      page('C-4', 'プロフィール', 'profile'),
      page('C-5', 'プロフィール', 'profile'),
      page('C-6', 'プロフィール', 'profile'),
      spread('C-7', 'プロフィール', 'profile/c-7'),
    ],
  },
  {
    key: 'qa',
    label: 'Q＆A',
    labelEn: 'Q&A',
    desc: 'ゲストに楽しんでもらえるQ&Aページ。お二人の意外な一面を披露しましょう。',
    items: [
      page('D-1', 'Q&A', 'qa'),
      page('D-2', 'Q&A', 'qa'),
      page('D-3', 'Q&A', 'qa'),
      page('D-4', 'Q&A', 'qa'),
      page('D-5', 'Q&A', 'qa'),
      page('D-6', 'Q&A', 'qa'),
      page('D-7', 'Q&A', 'qa'),
    ],
  },
  {
    key: 'menu',
    label: 'MENU',
    labelEn: 'Menu',
    desc: '当日のお料理やドリンクをエレガントに紹介するメニューページです。',
    items: [
      page('E-1', 'メニュー', 'menu'),
      page('E-2', 'メニュー', 'menu'),
      page('E-3', 'メニュー', 'menu'),
      page('E-4', 'メニュー', 'menu'),
      page('E-5', 'メニュー', 'menu'),
      page('E-6', 'メニュー', 'menu'),
      page('E-7', 'メニュー', 'menu'),
    ],
  },
  {
    key: 'seating',
    label: '席次表',
    labelEn: 'Seating List',
    desc: 'ゲストのお席をわかりやすく案内する席次表。デザインに統一感を持たせます。',
    items: [
      spread('F-1', '席次表', 'template-01-04'),
      spread('F-2', '席次表', 'template-02-04'),
      spread('F-3', '席次表', 'template-03-04'),
      spread('F-4', '席次表', 'template-04-04'),
      spread('F-5', '席次表', 'template-05-04'),
      spread('F-6', '席次表', 'template-06-04'),
      spread('F-7', '席次表', 'template-11-03'),
    ],
  },
  {
    key: 'free',
    label: 'フリーページ',
    labelEn: 'Free Page',
    desc: 'ラブストーリーやフォトコラージュなど、お二人らしさを自由に表現できるページです。',
    items: [
      page('G-1', 'フリーページ', 'free'),
      page('G-2', 'フリーページ', 'free'),
      page('G-3', 'フリーページ', 'free'),
      page('G-4', 'フリーページ', 'free'),
      page('G-5', 'フリーページ', 'free'),
      spread('G-6', 'フリーページ', 'template-09-02'),
    ],
  },
]
