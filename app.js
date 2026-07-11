/* =========================================================
   カラーテーマ定義
/* =========================================================
========================================================= */
const THEMES=[
  /* ── パステル（淡・グラデーション） ── */
  {id:'mint',     name:'ミント',     g1:'#7ECFC0',g2:'#A8E6D8',pri:'#5DBBAA',prid:'#3FA090',pril:'#E4F7F4',prill:'#F0FBF9',icon:'🌿'},
  {id:'sky',      name:'スカイ',     g1:'#7AB8E8',g2:'#A8D4F5',pri:'#5BA3D9',prid:'#4487BD',pril:'#E3F2FC',prill:'#F0F8FE',icon:'☁️'},
  {id:'lavender', name:'ラベンダー', g1:'#B0A4EE',g2:'#CEC6F7',pri:'#9B8EE8',prid:'#7D6FD4',pril:'#EEEBFB',prill:'#F6F4FF',icon:'💜'},
  {id:'rose',     name:'ローズ',     g1:'#EEA0B8',g2:'#F7C4D4',pri:'#E88EA8',prid:'#D0708D',pril:'#FDEDF2',prill:'#FEF5F8',icon:'🌸'},
  {id:'peach',    name:'ピーチ',     g1:'#F2B48E',g2:'#F7CEB0',pri:'#EEA07A',prid:'#D9855A',pril:'#FDEFEA',prill:'#FEF6F2',icon:'🍑'},
  {id:'butter',   name:'バター',     g1:'#E2CC6A',g2:'#EEE099',pri:'#D4B84A',prid:'#BA9E35',pril:'#FAF4D6',prill:'#FEFAEE',icon:'🌼'},
  {id:'sage',     name:'セージ',     g1:'#96CC98',g2:'#BAE0BB',pri:'#7BBD7E',prid:'#5EA364',pril:'#E7F5E8',prill:'#F2FAF2',icon:'🍃'},
  {id:'powder',   name:'パウダー',   g1:'#94BEF0',g2:'#BBDAF7',pri:'#7AAEE8',prid:'#5C93D4',pril:'#E6F1FD',prill:'#F2F8FE',icon:'🫐'},
  {id:'lilac',    name:'ライラック', g1:'#CFA4E8',g2:'#E2C4F5',pri:'#C48EE0',prid:'#A870CA',pril:'#F5ECFC',prill:'#FAF4FF',icon:'🪻'},
  {id:'coral',    name:'コーラル',   g1:'#F0A090',g2:'#F7C0B2',pri:'#EE8877',prid:'#D96E5D',pril:'#FDECEA',prill:'#FEF5F3',icon:'🪸'},
  {id:'aqua',     name:'アクア',     g1:'#7AD4E0',g2:'#A8E8F0',pri:'#56C4D4',prid:'#3AABB8',pril:'#E2F7FA',prill:'#EFF9FB',icon:'🐳'},
  {id:'mauve',    name:'モーブ',     g1:'#C4A0C8',g2:'#DCC0E0',pri:'#B48CB8',prid:'#9870A0',pril:'#F4EEF6',prill:'#FAF5FB',icon:'🌂'},
  /* ── ビビッド系（鮮やか・グラデーション） ── */
  {id:'green',    name:'グリーン',   g1:'#3ECF9C',g2:'#7DE0BF',pri:'#2EBD8F',prid:'#239870',pril:'#E4F8F2',prill:'#F0FCF8',icon:'✅'},
  {id:'blue',     name:'ブルー',     g1:'#4E90D4',g2:'#82B8E8',pri:'#3B82C4',prid:'#2F6EA8',pril:'#E6F2FB',prill:'#F0F8FE',icon:'🔵'},
  {id:'purple',   name:'パープル',   g1:'#9B6CF8',g2:'#C4A0FC',pri:'#8B5CF6',prid:'#7C3AED',pril:'#F0EAFF',prill:'#F7F4FF',icon:'🔮'},
  {id:'pink',     name:'ピンク',     g1:'#F05AA8',g2:'#F79CCE',pri:'#EC4899',prid:'#DB2777',pril:'#FDE8F3',prill:'#FEF3F9',icon:'💗'},
  {id:'orange',   name:'オレンジ',   g1:'#FC8830',g2:'#FCBA80',pri:'#F97316',prid:'#EA6D0D',pril:'#FEF0E3',prill:'#FEF7F0',icon:'🍊'},
  {id:'teal',     name:'ティール',   g1:'#20C8B4',g2:'#60DED0',pri:'#14B8A6',prid:'#0D9488',pril:'#E0FBF8',prill:'#EDFCFA',icon:'🦋'},
  {id:'indigo',   name:'インディゴ', g1:'#7476F4',g2:'#A8A8F8',pri:'#6366F1',prid:'#4F46E5',pril:'#EBEBFF',prill:'#F3F4FF',icon:'🌌'},
  {id:'amber',    name:'アンバー',   g1:'#FCAB18',g2:'#FCCC60',pri:'#F59E0B',prid:'#D97706',pril:'#FEF6D8',prill:'#FFFAEC',icon:'🌟'},
  /* ── ピンク〜赤系（淡→濃の5色グラデーション用に追加） ── */
  {id:'sakura',   name:'さくら',     g1:'#F6B8D2',g2:'#FBDBE8',pri:'#F2A6C6',prid:'#E283AC',pril:'#FEF0F6',prill:'#FFF8FB',icon:'🌷'},
  {id:'raspberry',name:'ラズベリー', g1:'#E85A85',g2:'#F195B3',pri:'#DB3B6E',prid:'#BC2856',pril:'#FCE8EF',prill:'#FEF3F7',icon:'🍓'},
  {id:'red',      name:'レッド',     g1:'#E85C5C',g2:'#F29494',pri:'#D42B36',prid:'#B91C24',pril:'#FCEAEA',prill:'#FEF4F4',icon:'❤️'},
];
const DEFAULT_THEME='green';

// スワッチ表示順：色相環順（赤→橙→黄→緑→青緑→水→青→藍→紫→赤紫→ピンク）、
// 同系色は淡い色を左に。THEMES配列自体は変更しない（保存済みIDへの影響なし）
const THEME_DISPLAY_ORDER=[
  'coral','peach','orange',   // 赤橙系（淡→濃）
  'butter','amber',           // 黄系
  'sage','green',             // 緑系
  'mint','teal',              // 青緑系
  'aqua',                     // 水色系
  'powder','sky','blue',      // 青系（淡→濃）
  'lavender','indigo',        // 藍・菫系
  'lilac','purple',           // 紫系
  'mauve',                    // 赤紫系
  'sakura','rose','pink','raspberry','red'  // ピンク〜赤系（淡→濃の5色）
];
function themesInDisplayOrder(){
  const ordered=THEME_DISPLAY_ORDER.map(id=>THEMES.find(t=>t.id===id)).filter(Boolean);
  // 将来テーマを追加した場合、順序リスト未登録のものは末尾に表示
  THEMES.forEach(t=>{if(!THEME_DISPLAY_ORDER.includes(t.id))ordered.push(t);});
  return ordered;
}

/* ---- ユーザーアバター（CSS div方式・全環境対応） ---- */
const USER_AVATARS=[{id:'person',label:'ひと'}];
const AVATARS=USER_AVATARS.map(a=>a.id);

function escAttr(s){return String(s).replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
// HTML出力用エスケープ（XSS防止）：ユーザー入力（メモ・名前等）をHTMLに埋め込む際は必ず通す
function esc(s){return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
// インラインonclick内のJS文字列リテラル用エスケープ（escAttrと併用する）
function escJs(s){return String(s??'').replace(/\\/g,'\\\\').replace(/'/g,"\\'").replace(/\r?\n/g,'\\n');}

// ユーザーアバター：背景=ユーザーカラーの円、中に白抜きの星
function renderAvatarSVG(avatarId, bgColor, size=40, gradEnd=null){
  const bg=gradEnd
    ? `linear-gradient(135deg,${bgColor},${gradEnd})`
    : bgColor;
  const starSize=Math.round(size*0.56);
  return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${bg};position:relative;flex:none;overflow:hidden;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle">
    <svg viewBox="0 0 24 24" width="${starSize}" height="${starSize}" style="display:block">
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.31l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94z" fill="#fff" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/>
    </svg>
  </div>`;
}

/* ---- ウィプル風 SVGアイコン定義 ---- */
// 各アイコン: {id, color, svg(白アウトラインのパス)}
const CAT_ICONS={
  // ── 収入 ──
  salary:  {color:'#4CAF8E', emoji:'💰', svg:'<rect x="4" y="2" width="16" height="20" rx="1.5" fill="none" stroke="#fff" stroke-width="1.6"/><path d="M7 7h5M7 10h4M7 13h3" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/><path d="M13.5 7l1.5 3M16.5 7l-1.5 3M15 10v6M13 11.5h4M13 13h4" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M7 18h10" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>'},
  invest:  {color:'#5B9BD5', emoji:'📈', svg:'<polyline points="3,17 8,11 13,14 21,5" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="16,5 21,5 21,10" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><path d="M3 20h18" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/>'},
  bonus:   {color:'#F5A623', emoji:'⭐', svg:'<path d="M12 5.4 L13.7 9.8 L18.4 10 L14.7 12.9 L16 17.4 L12 14.8 L8 17.4 L9.3 12.9 L5.6 10 L10.3 9.8 Z" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.8 6.2 L7.7 7.2" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M17.2 6.2 L16.3 7.2" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M3.7 12.4 L5.1 12.3" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M20.3 12.4 L18.9 12.3" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M12 19.4 L12 20.8" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>'},
  transfer:{color:'#7E78C9', emoji:'↗️', svg:'<path d="M4 16c0-5 4-8 9-8.2V4.5L20.5 11 13 17.5V14c-4 0-7 1-9 4z" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>'},
  rent_in: {color:'#7B68EE', emoji:'🏠', svg:'<path d="M3 12L12 3l9 9" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 10v11h12V10" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><path d="M9 10l3 4 3-4" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 15h4M10 17.5h4M12 15v3.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>'},
  side:    {color:'#26C6DA', emoji:'💼', svg:'<rect x="2" y="7" width="20" height="14" rx="2" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M2 13h20" stroke="#fff" stroke-width="1.2" opacity="0.6"/><path d="M10 13v2h4v-2" fill="none" stroke="#fff" stroke-width="1.3"/>'},
  gift_in: {color:'#EF5350', emoji:'🎁', svg:'<rect x="3" y="9" width="18" height="12" rx="1.5" fill="none" stroke="#fff" stroke-width="1.7"/><rect x="2" y="6" width="20" height="4" rx="1" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M12 6V21M3 14h18" stroke="#fff" stroke-width="1.3"/><path d="M12 6c-1-2.5-4-3.5-4-1.5S10 6 12 6z" fill="#fff" opacity="0.8"/><path d="M12 6c1-2.5 4-3.5 4-1.5S14 6 12 6z" fill="#fff" opacity="0.8"/>'},
  bank:    {color:'#42A5F5', emoji:'🏦', svg:'<path d="M2 10l10-8 10 8" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><rect x="2" y="10" width="20" height="2" rx="0.5" fill="#fff" opacity="0.85"/><rect x="4.5" y="12" width="2.8" height="7" rx="0.5" fill="none" stroke="#fff" stroke-width="1.5"/><rect x="9.1" y="12" width="2.8" height="7" rx="0.5" fill="none" stroke="#fff" stroke-width="1.5"/><rect x="13.6" y="12" width="2.8" height="7" rx="0.5" fill="none" stroke="#fff" stroke-width="1.5"/><rect x="18.2" y="12" width="0" height="0"/><rect x="17.7" y="12" width="2.8" height="7" rx="0.5" fill="none" stroke="#fff" stroke-width="1.5"/><rect x="2" y="19" width="20" height="1.5" rx="0.4" fill="#fff" opacity="0.85"/><rect x="1" y="20.5" width="22" height="1.5" rx="0.4" fill="#fff" opacity="0.85"/><circle cx="12" cy="7" r="1.5" fill="none" stroke="#fff" stroke-width="1.4"/>'},
  scholar: {color:'#66BB6A', emoji:'🎓', svg:'<path d="M2 10l10-5 10 5-10 5-10-5z" fill="#fff" fill-opacity="0.2" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/><path d="M6 12v5c0 2 2.7 3 6 3s6-1 6-3v-5" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M22 10v5" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><circle cx="22" cy="16" r="1.5" fill="#fff"/>'},
  other_in:{color:'#8D8D8D', emoji:'💵', svg:'<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M9 8l3 4 3-4" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 13h4M10 16h4M12 13v4" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>'},
  // ── 食費・グルメ ──
  food:    {color:'#FF7043', emoji:'🍽️', svg:'<path d="M6 3v5M8 3v5M10 3v5M12 3v5" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M6 8q3 1.5 6 0v1a3 3 0 0 1-3 3v8" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="18" cy="7" rx="2.5" ry="3.5" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M18 10.5v10.5" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/>'},
  eating:  {color:'#EF5350', emoji:'🍽️', svg:'<path d="M4 12h16" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M4 12c0 6 3 9 8 9s8-3 8-9" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M9 8c0-1.5 1.5-1.5 1.5-3M12 7.5c0-1.5 1.5-1.5 1.5-3M15 8c0-1.5 1.5-1.5 1.5-3" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity="0.8"/>'},
  coffee:  {color:'#6D4C41', emoji:'☕', svg:'<path d="M5 8h12l-1.5 9a2 2 0 0 1-2 1.5H8.5a2 2 0 0 1-2-1.5L5 8z" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><path d="M17 10h2a2 2 0 0 1 0 4h-2" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><ellipse cx="11" cy="19.5" rx="7" ry="1.5" fill="none" stroke="#fff" stroke-width="1.3" opacity="0.7"/><path d="M9 5c0-1.5 2-1.5 2-3M13 5c0-1.5 2-1.5 2-3" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity="0.7"/>'},
  burger:  {color:'#66BB6A', emoji:'🍔', svg:'<path d="M5 10.5c0-3.5 2.5-5.5 7-5.5s7 2 7 5.5" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M4 13h16" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M4.5 15.5c1-1.5 2.5 0.5 3.5 0s2-2 3.5 0 2.5 0.5 4 0 2 0.5 3 0" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><rect x="4" y="17" width="16" height="1.5" rx="0.7" fill="none" stroke="#fff" stroke-width="1.2"/><path d="M4.5 18.5c0 2 1.5 3.5 7.5 3.5s7.5-1.5 7.5-3.5" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>'},
  beer:    {color:'#66BB6A', emoji:'🍺', svg:'<path d="M7 11 H16 V19.8 C16 20.6 15.4 21 14.6 21 H8.4 C7.6 21 7 20.6 7 19.8 Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><path d="M16 13 H18 C19 13 19 17 18 17 H16" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 11 C5.6 11 5 9.6 6 8.6 C6 7 7.8 6.3 9 7.2 C10 5.7 12.6 5.7 13.6 7.2 C15 6.6 16.6 7.6 16.2 9.1 C17.4 9.4 17.1 11 15.7 11" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 13.2 H16 M7 18 H16" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>'},
  wine:    {color:'#7B1FA2', emoji:'🍷', svg:'<path d="M7 5 H17 C17.3 8.2 17 11.2 14.4 13.1 C13.6 13.7 12.8 14 12 14 C11.2 14 10.4 13.7 9.6 13.1 C7 11.2 6.7 8.2 7 5 Z" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><path d="M7.2 9.8 C9 11 11 9.4 13 9.9 C14.6 10.3 15.7 10.7 16.8 10.2" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M12 14 V20 M8.5 20.5 H15.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>'},
  cutlery: {color:'#66BB6A', emoji:'🍴', svg:'<path d="M7 2.5v5.5M5.5 2.5v4M8.5 2.5v4" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M5.5 6.5q1.5 2 3 0" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M7 8v13" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><ellipse cx="12" cy="6.5" rx="2" ry="3.5" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M12 10v12" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M17 2.5v19" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M17 2.5c2.5 2 2.5 5.5 0 7" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>'},
  chef:    {color:'#EC407A', emoji:'👨‍🍳', svg:'<path d="M7.5 18 V11.8 C5.2 11.8 3.3 10 3.3 7.7 C3.3 5.6 5 4 7 4 C7.2 3 8 2.3 9 2.3 C9.3 1 10.4 0.4 12 0.4 C13.6 0.4 14.7 1 15 2.3 C16 2.3 16.8 3 17 4 C19 4 20.7 5.6 20.7 7.7 C20.7 10 18.8 11.8 16.5 11.8 V18" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/><rect x="7.5" y="18" width="9" height="3.8" rx="1" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M9.8 12.8 C9 13.8 9 15.2 9.8 16.2 M12 12.6 V16.4 M14.2 12.8 C15 13.8 15 15.2 14.2 16.2" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>'},
  cake:    {color:'#66BB6A', emoji:'🎂', svg:'<ellipse cx="12" cy="20.3" rx="9.3" ry="1.7" fill="none" stroke="#fff" stroke-width="1.3"/><path d="M4.5 13.5 V18.5 C4.5 19.8 7.8 20.6 12 20.6 C16.2 20.6 19.5 19.8 19.5 18.5 V13.5" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><ellipse cx="12" cy="13.5" rx="7.5" ry="1.8" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M4.7 15 C6.6 16.8 8.1 14.5 10 15.8 C12 17.1 13.5 14.8 15.4 15.8 C16.9 16.6 18.4 15.3 19.3 14.6" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/><rect x="8.5" y="8" width="1.3" height="4.8" rx="0.3" fill="none" stroke="#fff" stroke-width="1.1"/><rect x="11.35" y="8" width="1.3" height="4.8" rx="0.3" fill="none" stroke="#fff" stroke-width="1.1"/><rect x="14.2" y="8" width="1.3" height="4.8" rx="0.3" fill="none" stroke="#fff" stroke-width="1.1"/><path d="M9.15 8 C8.35 7 9.15 5.4 9.15 5.4 C9.15 5.4 9.95 7 9.15 8 Z M12 8 C11.2 7 12 5.4 12 5.4 C12 5.4 12.8 7 12 8 Z M14.85 8 C14.05 7 14.85 5.4 14.85 5.4 C14.85 5.4 15.65 7 14.85 8 Z" fill="none" stroke="#fff" stroke-width="1.1" stroke-linejoin="round"/>'},
  apple:   {color:'#EF7C8E', emoji:'🍎', svg:'<path d="M12 9 C10.6 7.3 8.3 7 6.8 8.4 C5.2 9.9 4.7 12.6 5.2 15.3 C5.7 18.2 7.2 21 9.1 21.5 C10.5 21.9 11.3 21.2 12 21.2 C12.7 21.2 13.5 21.9 14.9 21.5 C16.8 21 18.3 18.2 18.8 15.3 C19.3 12.6 18.8 9.9 17.2 8.4 C15.7 7 13.4 7.3 12 9 Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><path d="M12.2 8.8 C12.2 6.5 13 5 14.8 4.3" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M11.8 8 C10.2 6.4 8 6.2 7 7 C7.2 9 9.3 9.6 11.5 8.6 C11.7 8.4 11.8 8.2 11.8 8 Z" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>'},
  // ── 住居・光熱費 ──
  housing: {color:'#26A69A', emoji:'🏠', svg:'<path d="M2 12L12 2l10 10" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 4.5V2.5h2.5v4" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 12v10h16V12" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="5.5" y="14" width="4" height="3.5" rx="0.5" fill="none" stroke="#fff" stroke-width="1.4"/><rect x="13" y="16" width="4" height="6" rx="0.5" fill="none" stroke="#fff" stroke-width="1.4"/>'},
  rent:    {color:'#AB47BC', emoji:'🔑', svg:'<circle cx="16.3" cy="7.7" r="4" fill="none" stroke="#fff" stroke-width="1.7"/><circle cx="16.3" cy="7.7" r="1.6" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M13.6 10.4 L5 19" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M7.3 16.7 L5.8 15.2 M9 15 L7.5 13.5" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/>'},
  util:    {color:'#FFA726', emoji:'💡', svg:'<path d="M9 21h6M10 18h4" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M8 13.5A5 5 0 1 1 16 13.5c0 1.5-1 2.5-1 3.5H9c0-1-1-2-1-3.5z" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M12 2v1.5M4.22 4.22l1.06 1.06M2 12h1.5M19.78 4.22l-1.06 1.06M22 12h-1.5" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity="0.7"/><path d="M10 15l1-2 2 1 1-2" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>'},
  electric:{color:'#FFA726', emoji:'⚡', svg:'<path d="M13 2L4.5 13.5H11L10 22l8.5-12H13L13 2z" fill="#fff" opacity="0.9" stroke="#fff" stroke-width="0.8" stroke-linejoin="round"/>'},
  repair:  {color:'#78909C', emoji:'🔧', svg:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'},
  sofa:    {color:'#9E9E9E', emoji:'🛋️', svg:'<rect x="4" y="11" width="16" height="8" rx="2" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M4 14.5H2.5a1.5 1.5 0 0 1 0-3V16M20 14.5h1.5a1.5 1.5 0 0 0 0-3V16" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M7 11V8.5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 17 8.5V11" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M12 11v8" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/><path d="M6.5 19v2.5M17.5 19v2.5" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>'},
  // ── 交通・移動 ──
  transit: {color:'#5C6BC0', emoji:'🚃', svg:'<rect x="5" y="2.5" width="14" height="17" rx="3" fill="none" stroke="#fff" stroke-width="1.5"/><rect x="7.2" y="5" width="9.6" height="5.2" rx="1.2" fill="none" stroke="#fff" stroke-width="1.3"/><circle cx="8.7" cy="13.2" r="1.3" fill="none" stroke="#fff" stroke-width="1.3"/><circle cx="15.3" cy="13.2" r="1.3" fill="none" stroke="#fff" stroke-width="1.3"/><path d="M6.5 16.5 H17.5" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M8 19.5 L6.5 22 M16 19.5 L17.5 22" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>'},
  car:     {color:'#5C6BC0', emoji:'🚗', svg:'<path d="M3.8 17.8 V11 C3.8 9.7 4.5 8.9 5.6 8.6 L6.6 5.6 C6.9 4.8 7.5 4.3 8.4 4.3 H15.6 C16.5 4.3 17.1 4.8 17.4 5.6 L18.4 8.6 C19.5 8.9 20.2 9.7 20.2 11 V17.8 C20.2 18.5 19.7 19 18.9 19 H5.1 C4.3 19 3.8 18.5 3.8 17.8 Z" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><path d="M7.2 8.4 L8.1 6 C8.2 5.7 8.4 5.6 8.7 5.6 H15.3 C15.6 5.6 15.8 5.7 15.9 6 L16.8 8.4 Z" fill="none" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/><circle cx="6.8" cy="12.8" r="1.7" fill="none" stroke="#fff" stroke-width="1.4"/><circle cx="17.2" cy="12.8" r="1.7" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M10.3 11.9 H13.7 M10.3 13.7 H13.7" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><rect x="5" y="18.6" width="2.6" height="1.8" rx="0.6" fill="none" stroke="#fff" stroke-width="1.3"/><rect x="16.4" y="18.6" width="2.6" height="1.8" rx="0.6" fill="none" stroke="#fff" stroke-width="1.3"/>'},
  taxi:    {color:'#F5A623', emoji:'🚕', svg:'<path d="M2.5 17.5 V14 C2.5 13.2 3.1 12.7 4 12.7 H7 L9 8.6 C9.3 8 9.7 7.8 10.3 7.8 H15.4 C16 7.8 16.5 8.1 16.8 8.6 L18.6 12.7 L20 13 C21 13.3 21.5 14 21.5 15 V17.5 C21.5 18 21.1 18.3 20.6 18.3 H3.4 C2.9 18.3 2.5 18 2.5 17.5 Z" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><rect x="10.3" y="5.9" width="3.4" height="1.9" rx="0.4" fill="none" stroke="#fff" stroke-width="1.3"/><path d="M9.8 12 L11.3 9.2 H11.8 V12 Z M12.6 12 V9.2 H15 L15.7 12 Z" fill="none" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/><circle cx="7.5" cy="18.3" r="2.6" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="16.5" cy="18.3" r="2.6" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M10.6 15.2 h0.5 M12.2 15.2 h0.5 M13.8 15.2 h0.5 M11.4 16.4 h0.5 M13 16.4 h0.5" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.85"/>'},
  bicycle: {color:'#26C6DA', emoji:'🚲', svg:'<circle cx="6" cy="15.5" r="4" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="18" cy="15.5" r="4" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M6 15.5 L7 9" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><path d="M4.7 9 H8" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><path d="M8.3 8.5 H10.8 M10 8.5 L11 15.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 9 L14 6.3 L18 15.5 M11 15.5 L14 6.3 M6 15.5 L11 15.5" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="11" cy="15.5" r="1.1" fill="#fff" opacity="0.85"/>'},
  travel:  {color:'#5B9BD5', emoji:'✈️', svg:'<g transform="rotate(-32 12 12)"><path d="M3.2 12.4 C3.2 11.5 4 11.1 5 11.2 L17.5 11.7 C19.5 11.8 21 12.1 21 12.5 C21 12.9 19.5 13.2 17.5 13.3 L5 13.6 C4 13.7 3.2 13.3 3.2 12.4 Z" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><path d="M18.6 11.9 L20.2 12.5" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/><path d="M11.5 11.7 L8 5.5 L9.8 5.4 L14.5 11.4 Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><path d="M11.5 13.1 L8 18.5 L9.8 18.6 L14.5 13.4 Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><path d="M5.5 11.4 L4 8.4 L5.1 8.3 L7.4 11.2 Z" fill="none" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/><path d="M7 12.5 L17 12.7" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-dasharray="0.2 1.7"/></g><path d="M16.2 6 C15.3 6 15.1 5 15.9 4.7 C15.8 3.6 17 3.1 17.8 3.8 C18.3 2.9 19.8 3.1 19.9 4.3 C20.9 4.3 21 5.6 20 6 Z" fill="none" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/><path d="M4.2 21 C3.3 21 3.1 20 3.9 19.7 C3.8 18.6 5 18.1 5.8 18.8 C6.3 17.9 7.8 18.1 7.9 19.3 C8.9 19.3 9 20.6 8 21 Z" fill="none" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/>'},
  leisure: {color:'#FF7043', emoji:'🎡', svg:'<circle cx="10.5" cy="10" r="6.8" fill="none" stroke="#fff" stroke-width="1.4"/><circle cx="10.5" cy="10" r="1" fill="none" stroke="#fff" stroke-width="1.2"/><path d="M10.5 10 L10.5 3.2 M10.5 10 L15.3 5.2 M10.5 10 L17.3 10 M10.5 10 L15.3 14.8 M10.5 10 L10.5 16.8 M10.5 10 L5.7 14.8 M10.5 10 L3.7 10 M10.5 10 L5.7 5.2" stroke="#fff" stroke-width="1.1" stroke-linecap="round"/><path d="M9.6 3.2 a0.9 0.9 0 1 0 1.8 0 a0.9 0.9 0 1 0 -1.8 0 M14.4 5.2 a0.9 0.9 0 1 0 1.8 0 a0.9 0.9 0 1 0 -1.8 0 M16.4 10 a0.9 0.9 0 1 0 1.8 0 a0.9 0.9 0 1 0 -1.8 0 M14.4 14.8 a0.9 0.9 0 1 0 1.8 0 a0.9 0.9 0 1 0 -1.8 0 M9.6 16.8 a0.9 0.9 0 1 0 1.8 0 a0.9 0.9 0 1 0 -1.8 0 M4.8 14.8 a0.9 0.9 0 1 0 1.8 0 a0.9 0.9 0 1 0 -1.8 0 M2.8 10 a0.9 0.9 0 1 0 1.8 0 a0.9 0.9 0 1 0 -1.8 0 M4.8 5.2 a0.9 0.9 0 1 0 1.8 0 a0.9 0.9 0 1 0 -1.8 0" fill="none" stroke="#fff" stroke-width="1.1"/><path d="M7.5 21 C9.5 19.5 11.5 21 13.5 20 C15.5 19 16.5 17 20.5 16.3" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M9 20.6 V22 M11 20.7 V22 M13 20.2 V22 M15 19.2 V22 M17 18 V22 M19 17 V22" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/>'},
  luggage: {color:'#26C6DA', emoji:'🧳', svg:'<rect x="4" y="7" width="16" height="14" rx="2" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M8.5 7V4.5h7V7" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.5 4.5h7" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M4 13h16" stroke="#fff" stroke-width="1.1" stroke-linecap="round" opacity="0.6"/><circle cx="8.5" cy="22" r="1.5" fill="none" stroke="#fff" stroke-width="1.3"/><circle cx="15.5" cy="22" r="1.5" fill="none" stroke="#fff" stroke-width="1.3"/><path d="M10.5 11h3" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>'},
  hotel:   {color:'#5B9BD5', emoji:'🏨', svg:'<rect x="5" y="2" width="14" height="20" rx="1" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M5 6h14" stroke="#fff" stroke-width="1.3" opacity="0.7"/><path d="M8 3.5v2M16 3.5v2M8 4.5h8" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><rect x="7" y="8" width="2.5" height="2.5" rx="0.4" fill="#fff" opacity="0.8"/><rect x="11" y="8" width="2.5" height="2.5" rx="0.4" fill="#fff" opacity="0.8"/><rect x="15" y="8" width="2.5" height="2.5" rx="0.4" fill="#fff" opacity="0.8"/><rect x="7" y="12" width="2.5" height="2.5" rx="0.4" fill="#fff" opacity="0.8"/><rect x="11" y="12" width="2.5" height="2.5" rx="0.4" fill="#fff" opacity="0.8"/><rect x="15" y="12" width="2.5" height="2.5" rx="0.4" fill="#fff" opacity="0.8"/><rect x="7" y="16" width="2.5" height="2.5" rx="0.4" fill="#fff" opacity="0.8"/><rect x="11" y="16" width="2.5" height="2.5" rx="0.4" fill="#fff" opacity="0.8"/><rect x="15" y="16" width="2.5" height="2.5" rx="0.4" fill="#fff" opacity="0.8"/><rect x="10" y="19.5" width="4" height="2.5" rx="0.4" fill="none" stroke="#fff" stroke-width="1.4"/>'},
  // ── お金・金融 ──
  wallet:  {color:'#66BB6A', emoji:'👛', svg:'<rect x="3.5" y="7.5" width="16" height="12.5" rx="1.6" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M8 7.5 L9.5 4.4 L16.8 6 L16.6 7.5 Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><rect x="14.5" y="12.5" width="6.5" height="4" rx="1.8" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M16.4 14.5 H17.6" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>'},
  money:   {color:'#66BB6A', emoji:'💵', svg:'<rect x="1" y="6" width="22" height="13" rx="2.5" fill="none" stroke="#fff" stroke-width="1.7"/><circle cx="12" cy="12" r="3.5" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M10.5 10.5l1.5 2 1.5-2M12 12.5v2" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/><circle cx="5" cy="9" r="1.2" fill="#fff" opacity="0.6"/><circle cx="19" cy="15" r="1.2" fill="#fff" opacity="0.6"/>'},
  yen:     {color:'#EF5350', emoji:'💴', svg:'<path d="M5 4l7 9 7-9" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 13h8M8 16.5h8" stroke="#fff" stroke-width="2" stroke-linecap="round"/><path d="M12 13v8" stroke="#fff" stroke-width="2" stroke-linecap="round"/>'},
  savings: {color:'#F5A623', emoji:'🐷', svg:'<rect x="6" y="10" width="12" height="12" rx="1" fill="none" stroke="#fff" stroke-width="1.8"/><ellipse cx="12" cy="10" rx="6" ry="2.2" fill="none" stroke="#fff" stroke-width="1.8"/><rect x="10.5" y="8.2" width="3" height="1.5" rx="0.6" fill="#fff" opacity="0.9"/><path d="M10 14l2 2.5 2-2.5" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 17h3M10.5 18.5h3M12 17v3" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><ellipse cx="16.5" cy="6" rx="2.5" ry="1.5" fill="none" stroke="#fff" stroke-width="1.5" transform="rotate(-30 16.5 6)"/>'},
  atm:     {color:'#FF9800', emoji:'🏧', svg:'<path d="M8.5 9 H2.5 V3.6 C2.5 3.2 2.8 3 3.2 3 H20.8 C21.2 3 21.5 3.2 21.5 3.6 V9 H15.5" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/><path d="M5.5 6.9 H18.5" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M8.5 7 V20.3 C8.5 20.6 8.7 20.8 9 20.8 H15 C15.3 20.8 15.5 20.6 15.5 20.3 V7" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><path d="M12.1 10 V17.8" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M13.9 12.2 C13.6 11.3 12.7 11 11.8 11.1 C10.9 11.2 10.3 11.8 10.4 12.6 C10.5 13.5 11.5 13.7 12.3 13.9 C13.1 14.1 14 14.4 14 15.4 C14 16.3 13.2 16.8 12.2 16.8 C11.2 16.8 10.4 16.4 10.1 15.5" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>'},
  fee:     {color:'#78909C', emoji:'📋', svg:'<rect x="4" y="4" width="16" height="18" rx="2" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M9 4V2.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V4" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><path d="M7 10h10M7 13.5h10M7 17h7" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity="0.8"/>'},
  tax:     {color:'#EF5350', emoji:'🧾', svg:'<path d="M4 2h16v20l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5V2z" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/><path d="M7 7h10M7 10.5h10M7 14h7" stroke="#fff" stroke-width="1.4" stroke-linecap="round" opacity="0.8"/><path d="M7 17.5h10" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>'},
  insurance:{color:'#26C6DA', emoji:'🛡️', svg:'<path d="M12 2l8 3v6c0 5-4 9-8 11C8 20 4 16 4 11V5l8-3z" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 12l3 3 5-5" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 11V7l6-2 6 2v4" fill="none" stroke="#fff" stroke-width="1" opacity="0.4"/>'},
  // ── ショッピング ──
  shopping:{color:'#FF7043', emoji:'🛒', svg:'<path d="M6 3l-2-1" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><path d="M6 3h14l-2 9H8L6 3z" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 6h9M9 9h9M10 3v9M13.5 3v9M17 3v9" stroke="#fff" stroke-width="1.1" stroke-linecap="round" opacity="0.8"/><circle cx="9" cy="20" r="2" fill="none" stroke="#fff" stroke-width="1.8"/><circle cx="18" cy="20" r="2" fill="none" stroke="#fff" stroke-width="1.8"/><path d="M8 12h12l-0.5 4H8.5z" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>'},
  bag:     {color:'#26C6DA', emoji:'🛍️', svg:'<path d="M6.8 7 L5.3 20 C5.25 20.7 5.8 21.3 6.5 21.3 H17.5 C18.2 21.3 18.75 20.7 18.7 20 L17.2 7 Z" fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M8.5 11 C7.2 8 7.8 3 11 3 M15.5 11 C16.8 8 16.2 3 13 3" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><circle cx="8.5" cy="11" r="0.9" fill="none" stroke="#fff" stroke-width="1.3"/><circle cx="15.5" cy="11" r="0.9" fill="none" stroke="#fff" stroke-width="1.3"/>'},
  bagstore:{color:'#7B68EE', emoji:'🛍️', svg:'<rect x="3" y="9" width="18" height="13" rx="1" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M1 9l3.5-6h15l3.5 6" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 9h22" stroke="#fff" stroke-width="1.2" opacity="0.6"/><rect x="9.5" y="15" width="5" height="7" rx="0.5" fill="none" stroke="#fff" stroke-width="1.3"/><rect x="4.5" y="11" width="3.5" height="3.5" rx="0.5" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.8"/><rect x="16" y="11" width="3.5" height="3.5" rx="0.5" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.8"/>'},
  tag:     {color:'#BA68C8', emoji:'🏷️', svg:'<path d="M20 4H13a2 2 0 0 0-1.5.7L3 13.5a2 2 0 0 0 0 2.8l4.7 4.7a2 2 0 0 0 2.8 0l8.8-8.8a2 2 0 0 0 .7-1.5V6a2 2 0 0 0-2-2z" fill="none" stroke="#fff" stroke-width="1.7" stroke-linejoin="round"/><circle cx="16.5" cy="7.5" r="1.8" fill="#fff" opacity="0.8"/><path d="M8 16l6-6M10 18l4-4" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.5"/>'},
  amazon:  {color:'#FF9900', emoji:'📦', svg:'<path d="M2 16.5 C5 21 8.5 22.5 12 22.5 C15.5 22.5 19 21 21 17.5" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><polygon points="18,13 22,17.5 18.5,20.5" fill="#fff"/>'},
  rakuten: {color:'#BF0000', emoji:'🛍️', svg:'<line x1="5" y1="2" x2="5" y2="22" stroke="#fff" stroke-width="2.8" stroke-linecap="round"/><path d="M5 2 H13 a6 6 0 0 1 0 12 H5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linejoin="round"/><path d="M10 14 L19 22" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>'},
  // ── ファッション・美容 ──
  clothes: {color:'#AB47BC', emoji:'👕', svg:'<path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" fill="none" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 14h6" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/><circle cx="12" cy="11.5" r="0.8" fill="#fff" opacity="0.8"/><circle cx="12" cy="15" r="0.8" fill="#fff" opacity="0.8"/>'},
  hair:    {color:'#EC407A', emoji:'✂️', svg:'<circle cx="6" cy="7" r="3" fill="none" stroke="#fff" stroke-width="1.7"/><circle cx="6" cy="17" r="3" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M8.5 9.5L19 20M8.5 14.5L19 4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/><circle cx="13.75" cy="12" r="1" fill="#fff" opacity="0.8"/>'},
  beauty:  {color:'#EC407A', emoji:'💄', svg:'<path d="M10.6 9 V5.6 C10.6 4 11.5 3 12.8 3.3 C13.3 3.45 13.4 4 13.4 4.8 V9 Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><rect x="10.6" y="9" width="2.8" height="5" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><rect x="9.2" y="14" width="5.6" height="7" rx="0.6" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/>'},
  bath:    {color:'#EC407A', emoji:'♨️', svg:'<path d="M4 14.3 C4 13.9 4.6 13.8 4.9 14.4 C5.7 16.2 8 17 12 17 C16 17 18.3 16.2 19.1 14.4 C19.4 13.8 20 13.9 20 14.3" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><path d="M8.6 12.5 C7.4 11 9.8 9.5 8.6 8 C7.4 6.5 9.8 5.4 8.8 4" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><path d="M12 12.5 C10.8 11 13.2 9.5 12 8 C10.8 6.5 13.2 5.4 12.2 4" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><path d="M15.4 12.5 C14.2 11 16.6 9.5 15.4 8 C14.2 6.5 16.6 5.4 15.6 4" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>'},
  ring:    {color:'#EF5350', emoji:'💍', svg:'<circle cx="12" cy="15.5" r="5.4" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M16.8 13 A5.4 5.4 0 0 1 14.2 20.3" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity="0.65"/><path d="M9.8 7 L14.2 7 L15.3 9.2 L12 11.4 L8.7 9.2 Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><path d="M8.7 9.2 L15.3 9.2 M10.9 7 L12 9.2 L13.1 7" fill="none" stroke="#fff" stroke-width="1.1" stroke-linejoin="round" opacity="0.8"/><path d="M9.6 5.2 L10 3.9 M12 4.7 L12 3.3 M14.4 5.2 L14 3.9" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/>'},
  // ── 健康・医療・スポーツ ──
  medical: {color:'#EF5350', emoji:'🏥', svg:'<rect x="3" y="5" width="18" height="16" rx="2.5" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M9 5V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M12 9v8M8 13h8" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><path d="M3 10h18" stroke="#fff" stroke-width="1.2" opacity="0.5"/>'},
  capsule: {color:'#AB47BC', emoji:'💊', svg:'<rect x="4" y="2.5" width="5.5" height="11.5" rx="2.75" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M4 8.2 H9.5" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/><circle cx="17.8" cy="7" r="3.9" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M15 9.8 L20.6 4.2" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/><g transform="rotate(-30 12 16.5)"><rect x="4.5" y="13.8" width="15" height="5.4" rx="2.7" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M12 13.8 V19.2" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/></g>'},
  dental:  {color:'#4FC3F7', emoji:'🦷', svg:'<path d="M8 4 C5.8 4 4.2 5.7 4.6 8.3 C4.85 10.3 6.3 11 6.6 13.4 L7.1 18.7 C7.3 20.4 9 20.4 9.2 18.7 L9.7 14.3 C9.85 13.1 11 13.1 11.3 14 C11.6 14.9 12.4 14.9 12.7 14 C13 13.1 14.15 13.1 14.3 14.3 L14.8 18.7 C15 20.4 16.7 20.4 16.9 18.7 L17.4 13.4 C17.7 11 19.15 10.3 19.4 8.3 C19.8 5.7 18.2 4 16 4 C14.5 4 13 5 12 5.6 C11 5 9.5 4 8 4 Z" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>'},
  fitness: {color:'#26A69A', emoji:'🏋️', svg:'<rect x="7" y="7" width="2.8" height="10" rx="1.3" fill="none" stroke="#fff" stroke-width="1.5"/><rect x="14.2" y="7" width="2.8" height="10" rx="1.3" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M9.8 12 H14.2" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><rect x="4.3" y="8.5" width="2.6" height="7" rx="1.2" fill="none" stroke="#fff" stroke-width="1.5"/><rect x="17.1" y="8.5" width="2.6" height="7" rx="1.2" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M4.3 12 H3.4 M19.7 12 H20.6" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>'},
  sport:   {color:'#26A69A', emoji:'⚾', svg:'<circle cx="12" cy="12" r="8.5" fill="none" stroke="#fff" stroke-width="1.6"/><path d="M8 4.8 C5.8 7.5 5.8 16.5 8 19.2" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M16 4.8 C18.2 7.5 18.2 16.5 16 19.2" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M6.2 8 L8 7.4 M6 10.8 L7.8 10.3 M6 13.5 L7.8 13 M6.2 16.2 L8 15.6" stroke="#fff" stroke-width="0.9" stroke-linecap="round"/><path d="M17.8 8 L16 7.4 M18 10.8 L16.2 10.3 M18 13.5 L16.2 13 M17.8 16.2 L16 15.6" stroke="#fff" stroke-width="0.9" stroke-linecap="round"/>'},
  // ── 教育・学習 ──
  edu:     {color:'#42A5F5', emoji:'📚', svg:'<polygon points="12,3 1,9 12,15 23,9" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><path d="M6 12v6c0 2.5 2.7 4 6 4s6-1.5 6-4v-6" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><path d="M21 9v5.5" stroke="#fff" stroke-width="1.8" stroke-linecap="round" opacity="0.8"/><circle cx="21" cy="15.5" r="1.5" fill="#fff" opacity="0.85"/>'},
  study:   {color:'#42A5F5', emoji:'✏️', svg:'<path d="M17 3l4 4-12 12H5v-4L17 3z" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 5l4 4" stroke="#fff" stroke-width="1.4" opacity="0.7"/><path d="M5 19l-1 2 2-1" fill="#fff" opacity="0.8"/>'},
  book:    {color:'#5C4DB1', emoji:'📖', svg:'<path d="M2 4h9a1 1 0 0 1 1 1v14a1 1 0 0 0-1-1H2V4z" fill="none" stroke="#fff" stroke-width="1.6"/><path d="M22 4h-9a1 1 0 0 0-1 1v14a1 1 0 0 1 1-1h9V4z" fill="none" stroke="#fff" stroke-width="1.6"/><path d="M12 4v15" stroke="#fff" stroke-width="1.4"/><path d="M4 8h6M4 11h6M4 14h4" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/><path d="M14 8h6M14 11h6M14 14h4" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>'},
  notebook:{color:'#EF5350', emoji:'📓', svg:'<rect x="5" y="2" width="15" height="20" rx="1.5" fill="none" stroke="#fff" stroke-width="1.7"/><rect x="3" y="2" width="4" height="20" rx="1.5" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="5" cy="7" r="1" fill="#fff" opacity="0.7"/><circle cx="5" cy="12" r="1" fill="#fff" opacity="0.7"/><circle cx="5" cy="17" r="1" fill="#fff" opacity="0.7"/><path d="M9 8h9M9 11h9M9 14h9M9 17h6" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>'},
  // ── エンタメ・趣味 ──
  game:    {color:'#7B68EE', emoji:'🕹️', svg:'<rect x="2" y="7" width="20" height="12" rx="5" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M8 10v6M5 13h6" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="16" cy="10.5" r="1.5" fill="#fff" opacity="0.8"/><circle cx="19.5" cy="13" r="1.5" fill="#fff" opacity="0.8"/><circle cx="16" cy="15.5" r="1.5" fill="#fff" opacity="0.6"/><circle cx="12.5" cy="13" r="1.5" fill="#fff" opacity="0.6"/><rect x="10" y="12" width="4" height="2" rx="1" fill="#fff" opacity="0.7"/>'},
  tv:      {color:'#26A69A', emoji:'📺', svg:'<path d="M9.5 10.5 L14.5 6 M14.5 10.5 L9.5 6" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><rect x="4" y="10" width="16" height="10" rx="2.2" fill="none" stroke="#fff" stroke-width="1.6"/><rect x="15.5" y="12.3" width="2.6" height="1.3" rx="0.65" fill="none" stroke="#fff" stroke-width="1.1" opacity="0.85"/>'},
  headphones:{color:'#26C6DA', emoji:'🎧', svg:'<path d="M5.5 14V10a6.5 6.5 0 0 1 13 0v4" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/><rect x="3" y="13" width="4.5" height="7" rx="2.2" fill="none" stroke="#fff" stroke-width="1.4"/><rect x="16.5" y="13" width="4.5" height="7" rx="2.2" fill="none" stroke="#fff" stroke-width="1.4"/>'},
  music:   {color:'#E91E8C', emoji:'🎵', svg:'<path d="M9 18 V7.2 L18 4.8 V16" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 10.2 L18 7.8" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="6.2" cy="18" rx="2.9" ry="2.2" transform="rotate(-18 6.2 18)" fill="none" stroke="#fff" stroke-width="1.6"/><ellipse cx="15.2" cy="16" rx="2.9" ry="2.2" transform="rotate(-18 15.2 16)" fill="none" stroke="#fff" stroke-width="1.6"/>'},
  piano:   {color:'#37474F', emoji:'🎹', svg:'<rect x="2.5" y="4.5" width="19" height="15" rx="2.5" fill="none" stroke="#fff" stroke-width="1.5"/><rect x="5.7" y="5" width="1.8" height="7.5" rx="0.8" fill="none" stroke="#fff" stroke-width="1.3"/><rect x="9.1" y="5" width="1.8" height="7.5" rx="0.8" fill="none" stroke="#fff" stroke-width="1.3"/><rect x="13.1" y="5" width="1.8" height="7.5" rx="0.8" fill="none" stroke="#fff" stroke-width="1.3"/><rect x="16.5" y="5" width="1.8" height="7.5" rx="0.8" fill="none" stroke="#fff" stroke-width="1.3"/><path d="M6.6 12.5 V19.5 M10 12.5 V19.5 M12 12.5 V19.5 M14 12.5 V19.5 M17.4 12.5 V19.5" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.85"/>'},
  camera:  {color:'#BA68C8', emoji:'📷', svg:'<rect x="1" y="8" width="22" height="14" rx="2.5" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M7 8V5h4l2 3" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="15" r="5" fill="none" stroke="#fff" stroke-width="1.7"/><circle cx="12" cy="15" r="2.5" fill="#fff" opacity="0.2"/><circle cx="13.5" cy="13.5" r="1" fill="#fff" opacity="0.8"/><rect x="17" y="10" width="3" height="2" rx="0.5" fill="#fff" opacity="0.7"/>'},
  camping: {color:'#795548', emoji:'🏕️', svg:'<path d="M2.5 22L9 8l6.5 14" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 22v-6.5c0-0.8 0 0 0 0" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity="0.7"/><path d="M16 10.5L13 18h6l-3-7.5z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 18l-1.5 4h3l-1.5-4z" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 22v1.5" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M21 5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 0 21 2z" fill="none" stroke="#fff" stroke-width="1.3"/>'},
  palette: {color:'#EF5350', emoji:'🎨', svg:'<path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2H17a5 5 0 0 0 5-5c0-4.4-4-8-10-8z" fill="none" stroke="#fff" stroke-width="1.4"/><circle cx="7.5" cy="12" r="1.5" fill="#fff"/><circle cx="9" cy="7.5" r="1.5" fill="#fff"/><circle cx="12.5" cy="6" r="1.5" fill="#fff"/><circle cx="16.5" cy="8" r="1.5" fill="#fff"/>'},
  // ── 通信・デジタル ──
  phone:   {color:'#26C6DA', emoji:'📱', svg:'<rect x="4" y="1.5" width="16" height="21" rx="3.5" fill="none" stroke="#fff" stroke-width="2"/><circle cx="12" cy="5" r="1.3" fill="#fff" opacity="0.85"/><rect x="6.5" y="8" width="11" height="10" rx="1" fill="none" stroke="#fff" stroke-width="1.3" opacity="0.7"/><rect x="9.5" y="20" width="5" height="1.5" rx="0.75" fill="#fff" opacity="0.9"/>'},
  laptop:  {color:'#BA68C8', emoji:'💻', svg:'<rect x="6" y="5" width="12" height="10" rx="1.3" fill="none" stroke="#fff" stroke-width="1.5"/><rect x="7.6" y="6.6" width="8.8" height="6.8" rx="0.6" fill="none" stroke="#fff" stroke-width="1.1" opacity="0.7"/><path d="M3.5 15.5 H20.5 C21.4 15.5 21.5 18 20.3 18 H3.7 C2.5 18 2.6 15.5 3.5 15.5 Z" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>'},
  delivery:{color:'#5B9BD5', emoji:'🚚', svg:'<rect x="2" y="6.5" width="12" height="11" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 17.5 V10 H17.6 C18 10 18.3 10.2 18.6 10.5 L21 13.5 V17.5 Z" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><path d="M15.6 10.7 H17.6 C17.8 10.7 17.9 10.8 18 10.9 L19.6 12.8 H15.6 Z" fill="none" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"/><circle cx="6.5" cy="18.8" r="2.2" fill="none" stroke="#fff" stroke-width="1.5"/><circle cx="17" cy="18.8" r="2.2" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M4 10.5 H11 M4 12.5 H11 M4 14.5 H11" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.85"/>'},
  mail:    {color:'#4CAF8E', emoji:'✉️', svg:'<rect x="2" y="5" width="20" height="15" rx="2" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M2 6l10 8 10-8" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 20l6-7M22 20l-6-7" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>'},
  // ── 子育て・ペット ──

  pet:     {color:'#66BB6A', emoji:'🐾', svg:'<path d="M12 21.5 C8 21.5 4.8 19.2 4.8 16 C4.8 12.8 8.2 11 12 11 C15.8 11 19.2 12.8 19.2 16 C19.2 19.2 16 21.5 12 21.5 Z" fill="none" stroke="#fff" stroke-width="1.7"/><ellipse cx="9.2" cy="6.3" rx="2.1" ry="2.9" fill="none" stroke="#fff" stroke-width="1.6"/><ellipse cx="14.8" cy="6.3" rx="2.1" ry="2.9" fill="none" stroke="#fff" stroke-width="1.6"/><ellipse cx="4.8" cy="9.8" rx="1.9" ry="2.6" transform="rotate(-20 4.8 9.8)" fill="none" stroke="#fff" stroke-width="1.6"/><ellipse cx="19.2" cy="9.8" rx="1.9" ry="2.6" transform="rotate(20 19.2 9.8)" fill="none" stroke="#fff" stroke-width="1.6"/>'},
  fish:    {color:'#7B68EE', emoji:'🐟', svg:'<ellipse cx="10" cy="12" rx="7" ry="5" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M17 12l4.5-4v8L17 12z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6.5" cy="10.5" r="1.5" fill="#fff"/><path d="M7 7.5c3-2.5 7-2.5 9.5 0" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M11 10a3.5 4 0 0 1 0 4" fill="none" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity="0.6"/>'},
  // ── 交際・イベント ──
  social:  {color:'#AB47BC', emoji:'🥂', svg:'<path d="M7 3l2 8a3 3 0 0 0 3 2" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><path d="M17 3l-2 8a3 3 0 0 1-3 2" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><path d="M12 13v5M9 21h6" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M8 5l-1.5-2M16 5l1.5-2M12 3V1.5" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity="0.7"/><path d="M7.5 7h4M12.5 7h4" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>'},
  gift:    {color:'#F5A623', emoji:'🎁', svg:'<rect x="3" y="9" width="18" height="12" rx="1.5" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M3 14h18M12 9V21" stroke="#fff" stroke-width="1.4"/><rect x="2" y="6" width="20" height="4" rx="1" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M12 6c-1.2-2.5-4.5-3-4.5-1S10.5 6 12 6z" fill="#fff" opacity="0.85"/><path d="M12 6c1.2-2.5 4.5-3 4.5-1S13.5 6 12 6z" fill="#fff" opacity="0.85"/>'},
  calendar:{color:'#4CAF8E', emoji:'📅', svg:'<rect x="2" y="4.5" width="20" height="17.5" rx="2" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M2 10.5h20" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><path d="M7 2.5v4M17 2.5v4" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><circle cx="7" cy="14.5" r="1.3" fill="#fff"/><circle cx="12" cy="14.5" r="1.3" fill="#fff"/><circle cx="17" cy="14.5" r="1.3" fill="#fff"/><circle cx="7" cy="19.5" r="1.3" fill="#fff"/><circle cx="12" cy="19.5" r="1.3" fill="#fff"/><circle cx="17" cy="19.5" r="1.3" fill="#fff"/>'},
  // ── 汎用・その他 ──
  smiley:  {color:'#F5C842', emoji:'😊', svg:'<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="1.4"/><circle cx="9" cy="10.5" r="1.4" fill="#fff"/><circle cx="15" cy="10.5" r="1.4" fill="#fff"/><path d="M8 14.5q4 5 8 0" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/>'},
  user:    {color:'#9E9E9E', emoji:'👤', svg:'<circle cx="12" cy="8.5" r="4.5" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M3.5 22c0-4.5 3.8-8 8.5-8s8.5 3.5 8.5 8" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>'},
  heart:   {color:'#E91E63', emoji:'❤️', svg:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/>'},
  flower:  {color:'#F06292', emoji:'🌸', svg:'<path d="M13.88 6.41 Q21.04 6.06 15.04 9.99 Q17.58 16.69 12 12.2 Q6.42 16.69 8.96 9.99 Q2.96 6.06 10.12 6.41 Q12 -0.5 13.88 6.41 Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><circle cx="12" cy="9" r="2.4" fill="none" stroke="#fff" stroke-width="1.3"/><path d="M12 12.3 C11.7 15 12.3 16.5 12 18 C11.7 19.5 12.1 21 12 23" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round"/>'},
  settings:{color:'#F5C842', emoji:'⚙️', svg:'<circle cx="12" cy="12" r="3.5" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>'},
  building:{color:'#FF9800', emoji:'🏢', svg:'<rect x="2.5" y="2.5" width="13" height="19.5" rx="1" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M15.5 8h4a1 1 0 0 1 1 1v13" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 22h18" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/><rect x="5" y="5.5" width="2.5" height="2.5" rx="0.3" fill="#fff" opacity="0.85"/><rect x="9.5" y="5.5" width="2.5" height="2.5" rx="0.3" fill="#fff" opacity="0.85"/><rect x="5" y="10" width="2.5" height="2.5" rx="0.3" fill="#fff" opacity="0.85"/><rect x="9.5" y="10" width="2.5" height="2.5" rx="0.3" fill="#fff" opacity="0.85"/><rect x="5" y="14.5" width="2.5" height="2.5" rx="0.3" fill="#fff" opacity="0.85"/><rect x="9.5" y="14.5" width="2.5" height="2.5" rx="0.3" fill="#fff" opacity="0.85"/><rect x="7" y="18.5" width="4.5" height="3.5" rx="0.5" fill="none" stroke="#fff" stroke-width="1.2"/>'},
  tree:    {color:'#26C6DA', emoji:'🌲', svg:'<path d="M6 4.5 L2.5 15 L9.5 15 Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><path d="M6 12 V21 M6 14.5 L4.7 13.4 M6 14.5 L7.3 13.4 M6 17 L4.7 15.9 M6 17 L7.3 15.9" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 4 C9 4 8 9.5 8.5 12.5 C9 15 11 15.5 12.5 15.5 C14 15.5 16 15 16.5 12.5 C17 9.5 16 4 12.5 4 Z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"/><path d="M12.5 12.5 V21 M12.5 14.5 L11.2 13.4 M12.5 14.5 L13.8 13.4 M12.5 17 L11.2 15.9 M12.5 17 L13.8 15.9" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18.5" cy="11" r="3.8" fill="none" stroke="#fff" stroke-width="1.3"/><path d="M18.5 13 V21 M18.5 15.5 L17.3 14.4 M18.5 15.5 L19.7 14.4 M18.5 17.8 L17.3 16.7 M18.5 17.8 L19.7 16.7" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>'},
  factory: {color:'#EC407A', emoji:'🏭', svg:'<rect x="2" y="13" width="14" height="9" rx="1" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M2 13L7.5 9v4L13 9v4" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><rect x="17" y="4" width="5" height="18" rx="1" fill="none" stroke="#fff" stroke-width="1.4"/><path d="M18.5 3c0-1.5 1.5-1.5 1.5-3" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity="0.8"/><rect x="4" y="16" width="3" height="3" rx="0.5" fill="none" stroke="#fff" stroke-width="1.2"/><rect x="9" y="16" width="3" height="3" rx="0.5" fill="none" stroke="#fff" stroke-width="1.2"/>'},
  church:  {color:'#26C6DA', emoji:'⛪', svg:'<path d="M3.5 22V12L12 7l8.5 5V22H3.5z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 2.5v6M10 5.5h4" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/><path d="M9.5 22v-6a2.5 2.5 0 0 1 5 0v6" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="15" r="1.3" fill="none" stroke="#fff" stroke-width="1.2"/><circle cx="16" cy="15" r="1.3" fill="none" stroke="#fff" stroke-width="1.2"/>'},
  // ── 追加アイコン ──
  umbrella:{color:'#42A5F5', emoji:'☂️', svg:'<path d="M12 4v17" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><path d="M12 21c0 0-3 0-3-2.5" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><path d="M3.5 12A8.5 8.5 0 0 1 20.5 12" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/><path d="M3.5 12c0.5-2 1.5-2 2.5-1.5s1.5 1.5 2.5 1 1.5-1.5 2.5-1 1.5 1.5 2.5 1 1.5-1.5 2.5-1 1.5 1.5 2 1.5" fill="none" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.7"/>'},
  watch:   {color:'#78909C', emoji:'⌚', svg:'<circle cx="12" cy="12" r="5.5" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M12 8.5V12l2.5 2" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 4h5l0.5 3.5h-6z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 20h5l0.5-3.5h-6z" fill="none" stroke="#fff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>'},
  other:   {color:'#8D8D8D', emoji:'📌', svg:'<circle cx="12" cy="12" r="9" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M12 8v4l3 3" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/>'},
};

// ストローク幅を全体的に細く (×0.78)
Object.values(CAT_ICONS).forEach(ic => {
  ic.svg = ic.svg.replace(/stroke-width="([\d.]+)"/g, (_, w) => {
    const nw = Math.max(0.8, parseFloat(w) * 0.78);
    return `stroke-width="${nw.toFixed(1)}"`;
  });
});

// カテゴリデータ: icon IDを持つ
const DEFAULT_INC_CATS=[
  {id:'salary', n:'給料'},{id:'invest', n:'投資'},{id:'bonus',  n:'ボーナス'},
  {id:'rent_in',n:'家賃収入'},{id:'side',n:'副業'},{id:'gift_in',n:'臨時収入'},
  {id:'bank',   n:'貯金引出'},{id:'scholar',n:'奨学金'},{id:'other_in',n:'その他'},
];
const DEFAULT_EXP_CATS=[
  {id:'food',   n:'食費'},{id:'transit',n:'交通費'},{id:'housing',n:'住居費'},
  {id:'clothes',n:'衣類'},{id:'medical',n:'医療'},{id:'edu',    n:'教育'},
  {id:'leisure',n:'娯楽'},{id:'util',   n:'光熱費'},{id:'phone', n:'通信費'},
  {id:'eating', n:'外食'},{id:'travel', n:'旅行'},{id:'pet',   n:'ペット'},
  {id:'beauty', n:'美容'},{id:'gift',   n:'贈り物'},{id:'repair',n:'修理'},
  {id:'fitness',n:'運動'},{id:'car',    n:'車'},{id:'social', n:'交際費'},
];

const ALL_ICON_IDS=Object.keys(CAT_ICONS);

// アクティブ帳簿オブジェクトを返す
function activeLedgerObj(){
  const u=activeUser();
  return u.ledgers.find(l=>l.id===UI.activeLedger)||u.ledgers[0];
}
// 費目管理モーダルで編集中の帳簿を返す
function catMgrLedgerObj(){
  const u=activeUser();
  return u.ledgers.find(l=>l.id===UI.catMgrLedgerId)||u.ledgers[0];
}
// 帳簿のcustomCatsを初期化して返す（未設定ならデフォルトで初期化）
function ensureLedgerCats(ledger){
  if(!ledger.customCats){
    ledger.customCats={
      income:JSON.parse(JSON.stringify(DEFAULT_INC_CATS)),
      expense:JSON.parse(JSON.stringify(DEFAULT_EXP_CATS))
    };
  }
  return ledger.customCats;
}
function getINC_CATS(){
  const l=activeLedgerObj();
  return l?.customCats?.income||JSON.parse(JSON.stringify(DEFAULT_INC_CATS));
}
function getEXP_CATS(){
  const l=activeLedgerObj();
  return l?.customCats?.expense||JSON.parse(JSON.stringify(DEFAULT_EXP_CATS));
}

// 費目アイコン：カラー丸 + SVGラインアイコン（インライン直接埋め込み）
// 費目のカラーを取得（カスタム色 > デフォルト色）
// SVGのwhiteストローク/fillをカラーに置換（ラインアートカラー化）
function svgColored(svg, color){
  return svg
    .replace(/stroke="#fff"/g, `stroke="${color}"`)
    .replace(/fill="#fff"/g, `fill="${color}"`);
}
// 後方互換: 旧データ(emoji)→iconIdに変換
const EMOJI_TO_ICON={'💰':'salary','📈':'invest','🎁':'gift_in','🏠':'housing','💼':'side','🎊':'other_in','🏦':'bank','🎓':'scholar','💵':'other_in','🛒':'food','🚃':'transit','👗':'clothes','💊':'medical','📚':'edu','🎮':'leisure','💡':'util','📱':'phone','🍽️':'eating','✈️':'travel','🐾':'pet','💇':'beauty','🔧':'repair','🏋️':'fitness','🚗':'car','🍺':'social'};
function resolveIconId(cat){
  if(cat.id&&CAT_ICONS[cat.id])return cat.id;
  if(cat.e&&EMOJI_TO_ICON[cat.e])return EMOJI_TO_ICON[cat.e];
  return 'other';
}
// 取引からアイコンIDを解決（旧データは絵文字から変換、不明は'other'）
function txIconId(t){return t.iconId||resolveIconId({id:t.iconId,e:t.emoji})||'other';}
const PAY_META={
  cash:{icon:'💴',label:'現金',cls:'pb-cash',chipCls:'cash',barcol:'#E07B2E'},
  bank:{icon:'🏦',label:'銀行',cls:'pb-bank',chipCls:'bank',barcol:'#3B82C4'},
  card:{icon:'💳',label:'カード',cls:'pb-card',chipCls:'card',barcol:'#E05252'}
};

/* =========================================================
   状態
/* =========================================================
========================================================= */
let DB={
  users:[
    {id:'u1',name:'ユーザー',avatar:'person',theme:'green',
     ledgers:[{id:'l1',name:'家計',theme:null}],
     payees:{bank:[],card:[]},transactions:[]}
  ],
  activeUser:'u1',
  mainUser:{           // ユーザーNo.0（マスター）
    enabled:true,      // 有効/無効（デフォルトON）
    name:'マスター',
    theme:'indigo'
  }
};

let UI={
  year:new Date().getFullYear(),
  month:new Date().getMonth(),
  activeLedger:'l1',
  selDay:null,
  expandList:false,   // 明細を「その日まで遡って」展開中か（日付見出しダブルタップで切替）
  payFilter:'all',
  txType:'expense',
  selEmoji:null,selEmojiName:null,
  selKind:null,selPayeeId:null,
  editingUserId:null,
  selAvatarIdx:0,
  selThemeId:'green',
  selLedgerTheme:{},
  catTab:'expense',
  selCatEmoji:null,
  editingCatIdx:null,
  catEditSelEmoji:null,
  editingTxId:null,
  txEditType:'expense',
  txEditEmoji:null,txEditEmojiName:null,
  txEditKind:null,txEditPayeeId:null,
  isMainMode:false,   // メインユーザー(No.0)として表示中か
  catMgrLedgerId:null // 費目管理モーダルで編集中の帳簿ID
};

/* =========================================================
   永続化
========================================================= */
function load(){
  let _raw=null;
  try{
    _raw=localStorage.getItem('kb-v5');
    if(_raw){const p=JSON.parse(_raw);DB=p.DB||DB;UI.year=p.UIyear||UI.year;UI.month=p.UImonth||UI.month;DB.activeUser=p.activeUser||DB.activeUser||DB.users[0].id;}
  }catch(e){
    // 破損データを退避してから初期状態で続行（次のsave()で上書き消失するのを防ぐ）
    try{if(_raw)localStorage.setItem('kb-v5-broken',_raw);}catch(_){}
  }
  // migration（tryの外で必ず実行）
  if(!DB.mainUser)DB.mainUser={enabled:true,name:'マスター',theme:'indigo'};
  if(DB.mainUser.startupMain===undefined)DB.mainUser.startupMain=false;
  // migration: 入力履歴を全体共有(DB.memoHistory)→ユーザーの帳簿ごと(ledger.memoHistory)へ。
  // 既存の履歴は各帳簿に引き継ぐ（移行後は共有履歴を削除）
  const _legacyHist=DB.memoHistory;
  DB.users.forEach(u=>{
    if(!u.payees)u.payees={bank:[],card:[]};
    if(!u.transactions)u.transactions=[];
    if(!u.ledgers)u.ledgers=[{id:'l1',name:'家計',theme:null}];
    // migration: ユーザーレベルのcustomCatsを最初の帳簿に移行
    if(u.customCats){
      if(u.ledgers[0]&&!u.ledgers[0].customCats)u.ledgers[0].customCats=u.customCats;
      delete u.customCats;
    }
    if(u.avatar&&!USER_AVATARS.find(a=>a.id===u.avatar))u.avatar='person';
    if(u.isMain){DB.mainUser.enabled=true;delete u.isMain;}
    // migration: CSVインポート等でアイコンを失った取引を費目名から復元
    u.transactions.forEach(t=>{
      if(t.iconId)return;
      const led=u.ledgers.find(l=>l.id===t.ledger);
      const cats=led?.customCats?.[t.type]||(t.type==='income'?DEFAULT_INC_CATS:DEFAULT_EXP_CATS);
      const cat=cats.find(c=>c.n===t.emojiName);
      t.iconId=cat?resolveIconId(cat):txIconId(t);
    });
    // migration: 各帳簿に入力履歴を用意（旧・全体共有の履歴があれば引き継ぐ）
    u.ledgers.forEach(l=>{
      if(!l.memoHistory)l.memoHistory=_legacyHist?JSON.parse(JSON.stringify(_legacyHist)):{memo:[],memo2:[]};
      if(!l.memoHistory.memo)l.memoHistory.memo=[];
      if(!l.memoHistory.memo2)l.memoHistory.memo2=[];
    });
  });
  delete DB.memoHistory;
  const u=activeUser();
  if(!u||!u.ledgers)return;
  if(!u.ledgers.find(l=>l.id===UI.activeLedger))UI.activeLedger=u.ledgers[0].id;
}
function save(){
  try{localStorage.setItem('kb-v5',JSON.stringify({DB,UIyear:UI.year,UImonth:UI.month,activeUser:DB.activeUser}));}
  catch(e){showToast('⚠️ 保存に失敗しました（空き容量を確認してください）','',4000);}
}

function activeUser(){return DB.users.find(u=>u.id===DB.activeUser)||DB.users[0];}
// 取引IDからオーナーユーザーを検索（No.0モード対応）
function findTxOwner(txId){
  for(const u of DB.users){if(u.transactions.find(x=>x.id===txId))return u;}
  return activeUser();
}
function getTheme(themeId){return THEMES.find(t=>t.id===(themeId||DEFAULT_THEME))||THEMES[0];}

/* =========================================================
   テーマ適用
========================================================= */
// HEX2色をratio:(1-ratio)で混合（ダークモード用の淡色生成）
function _mixHex(c1,c2,ratio){
  const a=c1.replace('#',''),b=c2.replace('#','');
  const f=i=>Math.round(parseInt(a.substr(i,2),16)*ratio+parseInt(b.substr(i,2),16)*(1-ratio)).toString(16).padStart(2,'0');
  return '#'+f(0)+f(2)+f(4);
}
const _darkMq=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
let _lastThemeId=null;
function applyTheme(themeId){
  _lastThemeId=themeId;
  const t=getTheme(themeId);
  const r=document.documentElement.style;
  r.setProperty('--pri',t.pri);
  r.setProperty('--pri-d',t.prid);
  if(_darkMq&&_darkMq.matches){
    // ダークモード：ライト用の淡色HEXで上書きすると白浮きするため、
    // テーマ色を暗背景(#121820)に溶かした色を生成して使う
    r.setProperty('--pri-l',_mixHex(t.pri,'#121820',0.22));
    r.setProperty('--pri-ll',_mixHex(t.pri,'#121820',0.13));
  }else{
    r.setProperty('--pri-l',t.pril);
    r.setProperty('--pri-ll',t.prill);
  }
  document.getElementById('meta-theme').setAttribute('content',t.pri);
}
// OSのライト/ダーク切り替え時にテーマ淡色を再計算
if(_darkMq&&_darkMq.addEventListener){
  _darkMq.addEventListener('change',()=>{if(_lastThemeId!==null)applyTheme(_lastThemeId);});
}

// ユーザーカラー（トップバー用）
function userTheme(){
  const u=activeUser();
  return getTheme(u.theme||DEFAULT_THEME);
}

// 帳簿カラー（帳簿バー以下用）。帳簿に設定がなければユーザーカラー
function ledgerTheme(){
  const u=activeUser();
  const l=u.ledgers.find(x=>x.id===UI.activeLedger);
  return getTheme(l?.theme||u.theme||DEFAULT_THEME);
}

// 後方互換
function currentTheme(){
  const u=activeUser();
  const l=u.ledgers.find(x=>x.id===UI.activeLedger);
  return l?.theme||u.theme||DEFAULT_THEME;
}

/* =========================================================
   フィルタ
/* =========================================================
========================================================= */
function monthTxs(){
  const u=activeUser();
  return u.transactions.filter(t=>{
    const d=new Date(t.date);
    return t.ledger===UI.activeLedger&&d.getFullYear()===UI.year&&d.getMonth()===UI.month;
  });
}
function filtered(){
  const txs=monthTxs();
  if(UI.payFilter==='all')return txs;
  if(UI.payFilter==='income')return txs.filter(t=>t.type==='income');
  if(UI.payFilter==='cash')return txs.filter(t=>t.type==='expense'&&(!t.payKind||t.payKind==='cash'));
  const[k,id]=UI.payFilter.split(':');
  return txs.filter(t=>t.type==='expense'&&t.payKind===k&&t.payeeId===id);
}
function fmt(n){return '¥'+Math.abs(n).toLocaleString('ja-JP')}
function fmtS(n){return n>=10000?'¥'+(n/10000).toFixed(1)+'万':'¥'+n.toLocaleString('ja-JP')}
// カレンダー用：数字のみカンマ区切り（¥なし・単位なし）
function fmtN(n){return Math.abs(n).toLocaleString('ja-JP')}
// 金額入力欄：入力中にカンマ区切りで整形（数字以外は除去）
function formatAmountInput(el){
  const raw=el.value.replace(/[^\d]/g,'');
  el.value=raw?parseInt(raw,10).toLocaleString('ja-JP'):'';
}
// カンマ付き入力値を数値に戻す
function parseAmountInput(id){
  return parseInt((document.getElementById(id)?.value||'').replace(/[^\d]/g,''),10)||0;
}

/* =========================================================
   レンダリング
/* =========================================================
========================================================= */
function renderAll(){
  // CSS変数は帳簿カラーで更新（カレンダー・グラフ等に反映）
  applyTheme(currentTheme());
  renderTopbar();      // トップバーはユーザーカラー
  renderLedgerBar();   // 帳簿バーは帳簿カラー
  renderSummary();
  renderPayMini();
  renderFilterBar();
  renderCalendar();
  renderTxArea();
  renderChart();
  renderCalInfoBar();
}

function renderTopbar(){
  const uaEl=document.getElementById('ua-avatar');
  // ユーザーが2人以上のとき∨を表示
  const showChevron=DB.users.length>=2||(DB.mainUser.enabled&&DB.users.length>=2);
  const chevron=showChevron?` <svg viewBox="0 0 12 8" width="12" height="8" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:inline-block;vertical-align:middle;margin-left:2px;opacity:0.85"><polyline points="1,1.5 6,6.5 11,1.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`:'';

  if(UI.isMainMode){
    const t=getTheme(DB.mainUser.theme||'indigo');
    const grad=`linear-gradient(135deg,${t.g1||t.pri},${t.g2||t.prid})`;
    uaEl.innerHTML=renderAvatarSVG('person',t.g1||t.pri,34,t.g2||null);
    document.getElementById('ua-name').innerHTML=DB.mainUser.name+chevron;
    document.getElementById('topbar').style.background=grad;
    document.getElementById('ledger-bar').style.background=t.prid;
    const cf=document.getElementById('cal-fab');if(cf)cf.style.background=t.pri;
    const sb=document.getElementById('add-submit-btn');if(sb)sb.style.background=grad;
    const uh=document.getElementById('ud-header');if(uh)uh.style.background=grad;
    applyTheme(DB.mainUser.theme||'indigo');
  } else {
    const u=activeUser();
    const ut=userTheme();
    const lt=ledgerTheme();
    const uGrad=`linear-gradient(135deg,${ut.g1||ut.pri},${ut.g2||ut.prid})`;
    uaEl.innerHTML=renderAvatarSVG(u.avatar||'person',ut.g1||ut.pri,34,ut.g2||null);
    document.getElementById('ua-name').innerHTML=u.name+chevron;
    document.getElementById('topbar').style.background=uGrad;
    document.getElementById('ledger-bar').style.background=lt.prid;
    const cf=document.getElementById('cal-fab');if(cf)cf.style.background=lt.pri;
    const sb=document.getElementById('add-submit-btn');if(sb)sb.style.background=uGrad;
    const uh=document.getElementById('ud-header');if(uh)uh.style.background=uGrad;
  }
}

function renderLedgerBar(){
  const bar=document.getElementById('ledger-bar');
  if(UI.isMainMode){bar.innerHTML='';bar.style.display='none';return;}
  bar.style.display='';
  const u=activeUser();
  bar.innerHTML=u.ledgers.map(l=>{
    const lTheme=getTheme(l.theme||u.theme);
    const dotStyle=`background:${l.theme?lTheme.pri:'rgba(255,255,255,0.5)'}`;
    return `<button class="ltab${l.id===UI.activeLedger?' active':''}" onclick="switchLedger('${l.id}')">
      <span class="ltab-dot" style="${dotStyle}"></span>${esc(l.name)}
    </button>`;
  }).join('');
}
function switchLedger(id){UI.activeLedger=id;UI.selDay=null;UI.payFilter='all';renderAll();}

function renderSummary(){
  const u=activeUser();
  document.getElementById('month-label').textContent=`${UI.year}年${UI.month+1}月`;

  let inc=0,exp=0,cashAmt=0,cardAmt=0,bankAmt=0;
  // 請求ベース集計：カードは請求月で計上（利用月は計上しない）。現金・銀行は取引日で計上。
  const mk=`${UI.year}-${String(UI.month+1).padStart(2,'0')}`;
  const tally=(usr,txs)=>{
    txs.forEach(t=>{
      if(t.type==='income'){ if(t.date.startsWith(mk))inc+=t.amount; return; }
      const ed=effectiveExpDate(t,usr);
      if(!ed.startsWith(mk))return;
      exp+=t.amount;
      if(t.payKind==='card')cardAmt+=t.amount;
      else if(t.payKind==='bank')bankAmt+=t.amount;
      else cashAmt+=t.amount;
    });
  };
  if(UI.isMainMode){
    DB.users.forEach(usr=>tally(usr,usr.transactions));
  } else {
    tally(u,u.transactions.filter(t=>t.ledger===UI.activeLedger));
  }

  const bal=inc-exp;
  document.getElementById('s-inc').textContent=fmt(inc);
  document.getElementById('s-exp').textContent=fmt(exp);
  const be=document.getElementById('s-bal');
  be.textContent=fmt(bal);be.className='sum-val '+(bal>=0?'bal':'exp');
  document.getElementById('s-cash').textContent=fmt(cashAmt);
  document.getElementById('s-card').textContent=fmt(cardAmt);
  document.getElementById('s-bank').textContent=fmt(bankAmt);
}

function renderPayMini(){
  const el=document.getElementById('pay-mini');
  if(!el)return; // pay-mini非表示時はスキップ
  if(UI.isMainMode){el.innerHTML='';return;}  // No.0モードでは非表示
  const u=activeUser();
  const txs=monthTxs().filter(t=>t.type==='expense');
  const billing=genBillingEntries(u);   // 請求ベース：カードは当月請求額
  const cashA=txs.filter(t=>!t.payKind||t.payKind==='cash').reduce((s,t)=>s+t.amount,0);
  let h=`<div class="pm-chip cash${UI.payFilter==='cash'?' active-f':''}" onclick="togglePF('cash')">💴 ${fmtS(cashA)}</div>`;
  u.payees.bank.forEach(b=>{
    const a=txs.filter(t=>t.payKind==='bank'&&t.payeeId===b.id).reduce((s,t)=>s+t.amount,0);
    const k=`bank:${b.id}`;
    h+=`<div class="pm-chip bank${UI.payFilter===k?' active-f':''}" onclick="togglePF('${k}')">🏦 ${esc(b.name)} ${fmtS(a)}</div>`;
  });
  u.payees.card.forEach(c=>{
    const a=billing.filter(e=>e.payeeId===c.id).reduce((s,e)=>s+e.amount,0);
    const k=`card:${c.id}`;
    h+=`<div class="pm-chip card${UI.payFilter===k?' active-f':''}" onclick="togglePF('${k}')">💳 ${esc(c.name)} ${fmtS(a)}</div>`;
  });
  el.innerHTML=h;
}
function togglePF(v){UI.payFilter=UI.payFilter===v?'all':v;renderAll();}

function renderFilterBar(){
  const el=document.getElementById('filter-bar');
  if(!el)return;
  if(UI.isMainMode){
    // No.0モード：全件/収入/支出のみ
    let h=`<button class="fb-btn${UI.payFilter==='all'?' active':''}" onclick="setFilter('all')">すべて</button>`;
    h+=`<button class="fb-btn${UI.payFilter==='income'?' active':''}" onclick="setFilter('income')">💚 収入</button>`;
    h+=`<button class="fb-btn${UI.payFilter==='expense'?' active':''}" onclick="setFilter('expense')">🔴 支出</button>`;
    el.innerHTML=h;
    return;
  }
  const u=activeUser();
  let h=`<button class="fb-btn${UI.payFilter==='all'?' active':''}" onclick="setFilter('all')">すべて</button>`;
  h+=`<button class="fb-btn${UI.payFilter==='income'?' active':''}" onclick="setFilter('income')">💚 収入</button>`;
  h+=`<button class="fb-btn${UI.payFilter==='cash'?' active':''}" onclick="setFilter('cash')">💴 現金</button>`;
  u.payees.bank.forEach(b=>{const k=`bank:${b.id}`;h+=`<button class="fb-btn${UI.payFilter===k?' active':''}" onclick="setFilter('${k}')">🏦 ${esc(b.name)}</button>`;});
  u.payees.card.forEach(c=>{const k=`card:${c.id}`;h+=`<button class="fb-btn${UI.payFilter===k?' active':''}" onclick="setFilter('${k}')">💳 ${esc(c.name)}</button>`;});
  el.innerHTML=h;
}
function setFilter(v){UI.payFilter=v;UI.selDay=null;renderCalendar();renderTxArea();renderPayMini();}

function renderCalendar(){
  const u=activeUser();
  const yr=UI.year,mo=UI.month;
  const first=new Date(yr,mo,1).getDay();
  const days=new Date(yr,mo+1,0).getDate();
  const today=new Date();
  const dm={};

  // 請求ベース表示：現金/銀行=取引日に通常字、カード利用=取引日に薄字、カード請求=請求日に通常字
  const cell=d=>(dm[d]=dm[d]||{inc:0,exp:0,use:0});
  const addMonthTxs=(usr,txs)=>{
    txs.forEach(t=>{
      const td=new Date(t.date);
      if(td.getFullYear()!==yr||td.getMonth()!==mo)return;
      const d=td.getDate();
      if(t.type==='income')cell(d).inc+=t.amount;
      else if(t.payKind==='card')cell(d).use+=t.amount;   // カード利用＝薄字
      else cell(d).exp+=t.amount;                          // 現金・銀行＝通常
    });
  };
  const addBilling=(usr,filterCb)=>{
    genBillingEntries(usr).forEach(e=>{
      if(filterCb&&!filterCb(e))return;
      const d=parseInt(e.date.split('-')[2]);
      cell(d).exp+=e.amount;                               // カード請求＝通常
    });
  };
  if(UI.isMainMode){
    DB.users.forEach(usr=>{addMonthTxs(usr,usr.transactions);addBilling(usr);});
  } else {
    addMonthTxs(u,filtered());
    addBilling(u,e=>{
      if(UI.payFilter==='all')return true;
      if(UI.payFilter==='income'||UI.payFilter==='cash')return false;
      const[k,id]=UI.payFilter.split(':');
      return k==='card'&&id===e.payeeId;
    });
  }

  const dows=['日','月','火','水','木','金','土'];
  let h=dows.map(d=>`<div class="cal-dow">${d}</div>`).join('');
  for(let i=0;i<first;i++)h+=`<div class="cal-day other"><div class="day-n"></div></div>`;
  for(let d=1;d<=days;d++){
    const dow=(first+d-1)%7;
    const isT=today.getFullYear()===yr&&today.getMonth()===mo&&today.getDate()===d;
    const isS=UI.selDay===d;
    const cls=(dow===0?' sun':dow===6?' sat':'')+(isT?' today':'')+(isS?' selected':'');
    const v=dm[d]||{};
    h+=`<div class="cal-day${cls}" onclick="selDay(${d})">
      <div class="day-n">${d}</div>
      <div class="day-amounts">
        ${v.inc?`<div class="day-amt inc">${fmtN(v.inc)}</div>`:''}
        ${v.exp?`<div class="day-amt exp">${fmtN(v.exp)}</div>`:''}
        ${v.use?`<div class="day-amt crd">${fmtN(v.use)}</div>`:''}
      </div>
    </div>`;
  }
  document.getElementById('cal-grid').innerHTML=h;
}
function selDay(d){UI.selDay=UI.selDay===d?null:d;UI.expandList=false;renderCalendar();renderTxArea();renderCalInfoBar();}

function renderCalInfoBar(){
  const dateEl=document.getElementById('cal-info-date');
  if(!dateEl)return;
  const bar=dateEl.closest('.cal-info-bar');
  const yr=UI.year, mo=UI.month;
  const d=UI.selDay||new Date().getDate();
  const dows=['日','月','火','水','木','金','土'];
  const dateLabel=`${mo+1}月${d}日（${dows[new Date(yr,mo,d).getDay()]}）`;

  // 請求ベースで集計：収入は取引日、支出はeffectiveExpDate（カードは請求日）でその月に計上
  let cumInc=0,cumExp=0,dayInc=0,dayExp=0;
  const flow=(usr,txs)=>{
    txs.forEach(t=>{
      if(t.type==='income'){
        const td=new Date(t.date);
        if(td.getFullYear()!==yr||td.getMonth()!==mo)return;
        const dd=td.getDate();
        if(dd<=d)cumInc+=t.amount; if(dd===d)dayInc+=t.amount;
      } else {
        const ed=effectiveExpDate(t,usr);
        const[ey,em,edd]=ed.split('-').map(Number);
        if(ey!==yr||em-1!==mo)return;
        if(edd<=d)cumExp+=t.amount; if(edd===d)dayExp+=t.amount;
      }
    });
  };
  if(UI.isMainMode){
    DB.users.forEach(usr=>flow(usr,usr.transactions));
    // No.0モードで当日に動きがなければバー非表示
    if(dayInc===0&&dayExp===0){bar?.classList.add('hidden');return;}
  } else {
    const u=activeUser();
    flow(u,u.transactions.filter(t=>t.ledger===UI.activeLedger));
  }
  bar?.classList.remove('hidden');

  const cumBal=cumInc-cumExp+carryoverBefore(yr,mo);
  const dayBal=dayInc-dayExp;

  // 1行目：選択日までの累計（収入・支出・残高）
  document.getElementById('cal-cum-inc').textContent=`収入 ${fmtN(cumInc)}`;
  document.getElementById('cal-cum-exp').textContent=`支出 ${fmtN(cumExp)}`;
  const cumBalEl=document.getElementById('cal-cum-bal');
  cumBalEl.textContent=`残高 ${(cumBal<0?'-':'')+fmt(cumBal)}`;
  cumBalEl.style.color=cumBal<0?'var(--red)':'var(--text)';

  // 2行目：その日（収入・支出・残高）。0の項目は非表示
  dateEl.textContent=dateLabel;
  const dInc=document.getElementById('cal-day-inc'), dExp=document.getElementById('cal-day-exp');
  if(dayInc>0){dInc.textContent=`収入 ${fmtN(dayInc)}`;dInc.classList.remove('hidden');}else dInc.classList.add('hidden');
  if(dayExp>0){dExp.textContent=`支出 ${fmtN(dayExp)}`;dExp.classList.remove('hidden');}else dExp.classList.add('hidden');
  const dayBalEl=document.getElementById('cal-day-bal');
  dayBalEl.textContent=`残高 ${(dayBal<0?'-':'')+fmt(dayBal)}`;
  dayBalEl.style.color=dayBal<0?'var(--red)':'var(--text-sub)';

  // 無支出日バッジ（その日の支出が0）
  const badge=document.getElementById('cal-info-badge');
  if(dayExp===0){badge.classList.remove('hidden');}else{badge.classList.add('hidden');}

  // 日付行の展開トグル（三角）。折りたたみ可能なとき(=focus日あり)のみ表示
  _updateExpandTri();
}

// 展開トグルの三角を現在の状態に合わせて更新（▶=折りたたみ / ▼=展開）。月全体表示中は非表示
function _updateExpandTri(){
  const tri=document.getElementById('cal-expand-tri');
  if(!tri)return;
  if(listFocusDay()==null){tri.style.visibility='hidden';}
  else{tri.style.visibility='visible';tri.textContent=UI.expandList?'▼':'▶';}
}

// 前月までの繰り越し残高。帳簿の「前月の残高を繰り越す」設定(carry)が有効な場合のみ計上、無効なら0
function carryoverBefore(yr,mo){
  const firstStr=`${yr}-${String(mo+1).padStart(2,'0')}-01`;
  // 請求ベース：収入は取引日、支出はeffectiveExpDate（カードは請求日）が当月より前なら計上
  const sumBefore=(usr,txs)=>{
    let s=0;
    txs.forEach(t=>{
      if(t.type==='income'){if(t.date<firstStr)s+=t.amount;}
      else if(effectiveExpDate(t,usr)<firstStr)s-=t.amount;
    });
    return s;
  };
  if(UI.isMainMode){
    // No.0モード：carry有効な帳簿の取引のみ全ユーザー横断で集計
    let total=0;
    DB.users.forEach(usr=>{
      const ids=new Set((usr.ledgers||[]).filter(l=>l.carry).map(l=>l.id));
      if(ids.size)total+=sumBefore(usr,usr.transactions.filter(t=>ids.has(t.ledger)));
    });
    return total;
  }
  const u=activeUser();
  const l=u.ledgers.find(x=>x.id===UI.activeLedger);
  if(!l||!l.carry)return 0;
  return sumBefore(u,u.transactions.filter(t=>t.ledger===UI.activeLedger));
}

// 日付グループの見出し：日付＋その日の収入・支出（残高は集計バー2行目に集約）
function dateHeaderHTML(label,di,de){
  return `<div class="tx-date-header"><span>${label}</span><span class="tdh-line"></span><span class="tdh-inout">${di?`<span class="tdh-inc">収入 ${fmtN(di)}</span>`:''}${de?`<span class="tdh-exp">支出 ${fmtN(de)}</span>`:''}</span></div>`;
}

// 明細の表示基準日（選択日 or 当月なら今日。他月で未選択なら null=月全体表示）
function listFocusDay(){
  const n=new Date();
  const isCur=n.getFullYear()===UI.year&&n.getMonth()===UI.month;
  return UI.selDay||(isCur?n.getDate():null);
}
// この日付を明細に表示するか（focus日だけ／遡って全部／月全体）
function dayInListFocus(dateStr){
  const fd=listFocusDay();
  if(fd==null)return true;
  const dd=parseInt(dateStr.split('-')[2],10);
  return UI.expandList?dd<=fd:dd===fd;
}
// 集計バーの日付行タップ：その日だけ ⇄ その日まで遡って表示 を切替
function toggleExpandList(){
  if(listFocusDay()==null)return; // 月全体表示中（他月・未選択）は切替不要
  UI.expandList=!UI.expandList;
  renderTxArea();
  _updateExpandTri();
}

function renderTxArea(){
  const u=activeUser();
  if(UI.isMainMode){
    renderMainUserList();
    return;
  }
  const fd=listFocusDay();
  // focus日が決まっていて折りたたみ中は、その日だけ表示で日付見出しを省略（集計バーが日付を兼ねる）
  const showHeaders=(fd==null||UI.expandList);

  let txs=filtered().filter(t=>dayInListFocus(t.date));
  let shownBilling=genBillingEntries(u).filter(e=>dayInListFocus(e.date));
  if(UI.payFilter!=='all'&&UI.payFilter!=='income'){
    const[fk,fid]=UI.payFilter.split(':');
    shownBilling=shownBilling.filter(e=>e.payKind===fk&&e.payeeId===fid);
  }
  if(UI.payFilter==='income')shownBilling=[];

  const el=document.getElementById('tx-area');

  if(!txs.length&&!shownBilling.length){
    el.innerHTML=`<div class="empty-msg"><span>${fd!=null&&!UI.expandList?'この日の取引はありません':'記録された取引はありません'}</span></div>`;
    return;
  }

  const allItems=[...txs.map(t=>({...t,_isBilling:false})),...shownBilling.map(e=>({...e,_isBilling:true}))];
  const groups={};
  allItems.forEach(t=>{groups[t.date]=groups[t.date]||[];groups[t.date].push(t);});
  const dates=Object.keys(groups).sort((a,b)=>b.localeCompare(a));
  el.innerHTML=dates.map(dt=>{
    const list=groups[dt];
    const ds=dt.split('-');
    const label=`${parseInt(ds[1])}月${parseInt(ds[2])}日（${['日','月','火','水','木','金','土'][new Date(dt).getDay()]}）`;
    const di=list.filter(t=>t.type==='income'&&!t._isBilling).reduce((s,t)=>s+t.amount,0);
    const de=list.filter(t=>t.type==='expense'&&!t._isBilling).reduce((s,t)=>s+t.amount,0);
    const header=showHeaders?dateHeaderHTML(label,di,de):'';
    return `${header}
    <div class="tx-list">${list.map(t=>t._isBilling?billingHTML(t):txHTML(t)).join('')}</div>`;
  }).join('');
}

// No.0専用：ユーザー＋帳簿ごとに集計した明細（費目=ユーザー名と帳簿、合計値）を日付別表示
function renderMainUserList(){
  const el=document.getElementById('tx-area');
  const yr=UI.year, mo=UI.month;

  // {date: {userId__ledgerId: {userId, ledgerId, userName, ledgerName, avatar, theme, inc, exp}}}
  const dateMap={};
  DB.users.forEach(usr=>{
    usr.transactions.forEach(t=>{
      const td=new Date(t.date);
      if(td.getFullYear()!==yr||td.getMonth()!==mo)return;
      // No.0は折りたたみ・日選択に関係なく、常にその月の全履歴を表示
      if(UI.payFilter==='income'&&t.type!=='income')return;
      if(UI.payFilter==='expense'&&t.type!=='expense')return;
      const lid=t.ledger||usr.ledgers[0]?.id||'';
      const key=`${usr.id}__${lid}`;
      if(!dateMap[t.date])dateMap[t.date]={};
      if(!dateMap[t.date][key]){
        const ledger=usr.ledgers.find(l=>l.id===lid);
        dateMap[t.date][key]={
          userId:usr.id, ledgerId:lid,
          userName:usr.name, ledgerName:ledger?.name||'',
          avatar:usr.avatar||'person', theme:usr.theme||'green',
          inc:0, exp:0, date:t.date
        };
      }
      if(t.type==='income')dateMap[t.date][key].inc+=t.amount;
      else dateMap[t.date][key].exp+=t.amount;
    });
  });

  const dates=Object.keys(dateMap).sort((a,b)=>b.localeCompare(a));
  if(!dates.length){
    el.innerHTML=`<div class="empty-msg"><span>記録された取引はありません</span></div>`;
    return;
  }

  el.innerHTML=dates.map(dt=>{
    const entries=Object.values(dateMap[dt]);
    const ds=dt.split('-');
    const label=`${parseInt(ds[1])}月${parseInt(ds[2])}日（${['日','月','火','水','木','金','土'][new Date(dt).getDay()]}）`;
    const totalInc=entries.reduce((s,e)=>s+e.inc,0);
    const totalExp=entries.reduce((s,e)=>s+e.exp,0);

    const rows=entries.map(e=>{
      const ut=getTheme(e.theme);
      const pri=ut.g1||ut.pri;
      const av=renderAvatarSVG(e.avatar, pri, 38, ut.g2||null);
      const incPart=e.inc>0?`<span style="color:var(--inc);font-size:12px;font-weight:700">${fmt(e.inc)}</span>`:'';
      const expPart=e.exp>0?`<span style="color:var(--red);font-size:12px;font-weight:700">${fmt(e.exp)}</span>`:'';
      const amounts=[incPart,expPart].filter(Boolean).join('<span style="color:var(--border-l);margin:0 3px">|</span>');
      return `<div class="tx-item tx-item-tap" style="padding:10px 14px;gap:10px;align-items:center"
        onclick="switchToUserLedgerOnDate('${e.userId}','${e.ledgerId}','${e.date}')">
        <div style="flex:none">${av}</div>
        <div style="flex:1;min-width:0;overflow:hidden">
          <div style="font-size:13px;font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(e.userName)}</div>
          <div style="font-size:11px;color:var(--text-sub);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(e.ledgerName)}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;flex:none">${amounts||`<span style="color:var(--text-hint);font-size:11px">-</span>`}</div>
        <svg viewBox="0 0 7 12" width="7" height="12" fill="none" style="flex:none;opacity:0.3"><polyline points="1,1 6,6 1,11" stroke="var(--text)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>`;
    }).join('');

    return `${dateHeaderHTML(label,totalInc,totalExp)}
    <div class="tx-list">${rows}</div>`;
  }).join('');
}


// メインユーザーから特定ユーザー・帳簿・日付に遷移（明細タップ用）
function switchToUserLedgerOnDate(userId,ledgerId,dateStr){
  UI.isMainMode=false;
  DB.activeUser=userId;
  UI.activeLedger=ledgerId;
  UI.selDay=parseInt(dateStr.split('-')[2]);
  UI.payFilter='all';
  save();
  applyTheme(activeUser().theme||DEFAULT_THEME);
  renderAll();
}


// クレジット請求エントリを生成
// 取引が実際に支払われる日（＝お金が動く日）。カードは請求日、それ以外は取引日。
// カードに締め日/請求日の設定がなければ取引日（即時扱い）。
function effectiveExpDate(t, u){
  if(t.type!=='expense'||t.payKind!=='card')return t.date;
  const card=(u.payees.card||[]).find(c=>c.id===t.payeeId);
  if(!card||!card.closeDay||!card.billingDay)return t.date;
  const d=new Date(t.date);
  let cy=d.getFullYear(), cm=d.getMonth();
  const closeDay=card.closeDay===31?new Date(cy,cm+1,0).getDate():card.closeDay;
  // 締め日を過ぎた利用は翌サイクル（翌月利用扱い）
  if(d.getDate()>closeDay){cm++;if(cm>11){cm=0;cy++;}}
  // 請求月 = 利用サイクル月 + billingMonth（翌月=1, 翌々月=2）
  let bm=cm+(card.billingMonth||1), by=cy;
  by+=Math.floor(bm/12); bm=((bm%12)+12)%12;
  const lastDay=new Date(by,bm+1,0).getDate();
  const bday=card.billingDay===31?lastDay:Math.min(card.billingDay,lastDay);
  return `${by}-${String(bm+1).padStart(2,'0')}-${String(bday).padStart(2,'0')}`;
}

// 指定月(yr,mo)に請求される、カードごとの請求エントリ（effectiveExpDate基準で統一）
function genBillingEntries(u, yr=UI.year, mo=UI.month){
  const groups={};
  u.transactions.forEach(t=>{
    if(t.type!=='expense'||t.payKind!=='card')return;
    const card=(u.payees.card||[]).find(c=>c.id===t.payeeId);
    if(!card||!card.closeDay||!card.billingDay)return;
    const ed=effectiveExpDate(t,u);
    const[ey,em]=ed.split('-').map(Number);
    if(ey!==yr||em-1!==mo)return;
    const g=groups[card.id]||(groups[card.id]={card,total:0,date:ed,months:new Set()});
    g.total+=t.amount;
    const ud=t.date.split('-'); g.months.add(`${ud[0]}-${ud[1]}`);
  });
  return Object.values(groups).map(g=>{
    const ms=[...g.months].sort();
    const f=k=>{const[y,m]=k.split('-');return`${parseInt(y)}年${parseInt(m)}月`;};
    const label=ms.length<=1?`${f(ms[0]||`${yr}-${mo+1}`)}利用分`
      :`${f(ms[0])}〜${parseInt(ms[ms.length-1].split('-')[1])}月利用分`;
    return {id:`billing-${g.card.id}-${yr}-${mo}`, date:g.date, type:'expense', amount:g.total,
      payKind:'card', payeeId:g.card.id, cardName:g.card.name, usedMoLabel:label, _isBilling:true};
  });
}

// クレジット請求の薄字HTML
function billingHTML(e){
  const u=activeUser();
  const cardName=u.payees.card.find(c=>c.id===e.payeeId)?.name||e.cardName||'カード';
  // 請求ベース：カード請求は実際の支払い＝通常字で表示
  return `<div class="tx-item">
    <div style="width:42px;height:42px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-l);display:flex;align-items:center;justify-content:center;flex:none;font-size:20px">💳</div>
    <div class="tx-info">
      <div class="tx-name">クレジット請求</div>
      <div class="tx-meta">
        <span class="tx-cat">${esc(cardName)}</span>
        <span class="credit-tag">${e.usedMoLabel}</span>
      </div>
    </div>
    <div class="tx-right">
      <div class="tx-amount exp">${fmt(e.amount)}</div>
    </div>
  </div>`;
}
function txHTML(t){
  const isI=t.type==='income';
  const iid=txIconId(t);
  const ic=CAT_ICONS[iid]||CAT_ICONS['other'];
  // アイコンは費目のカスタム色（取引の帳簿の設定を優先）で表示。グラフ・費目管理と揃える
  const color=catColorOf(t.emojiName||'',iid,t.ledger);
  const iconEl=`<div style="width:42px;height:42px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-l);display:flex;align-items:center;justify-content:center;flex:none">
    <svg viewBox="-2 -2 28 28" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">${svgColored(ic.svg,color)}</svg>
  </div>`;

  // メインユーザーの場合、保存先バッジを表示（inputByがある場合＝メインユーザーが入力した取引）
  // ※メインユーザーのカレンダーでは実際の保存先ユーザー・帳簿を探して表示
  let destBadge='';
  if(activeUser().isMain){
    // この取引がどのユーザー・帳簿に属するか（txはactiveUserのものなので自分のlabel）
    const ledgerName=activeUser().ledgers.find(l=>l.id===t.ledger)?.name||'';
    if(ledgerName)destBadge=`<span style="font-size:10px;color:var(--text-hint);background:var(--bg);border-radius:10px;padding:1px 6px;border:1px solid var(--border-l)">${esc(ledgerName)}</span>`;
  }

  return `<div class="tx-item tx-item-tap tx-lp${!isI&&t.payKind==='card'?' tx-card-use':''}"
    data-txid="${t.id}"
    onclick="openTxEdit('${t.id}')">
    ${iconEl}
    <div class="tx-info">
      <div class="tx-name-row">
        <span class="tx-name">${esc(t.memo||t.emojiName||'')}</span>
        ${t.memo2?`<span class="tx-memo2">${esc(t.memo2)}</span>`:''}
      </div>
      <div class="tx-meta"><span class="tx-cat">${esc(t.emojiName||'')}</span>${isI?'':payBadge(t)}${destBadge}</div>
    </div>
    <div class="tx-right">
      <div class="tx-amount ${isI?'inc':'exp'}">${fmt(t.amount)}</div>
    </div>
  </div>`;
}
function payBadge(t){
  const k=t.payKind||'cash';const m=PAY_META[k];if(!m)return '';
  const u=activeUser();
  let name=k==='bank'?(u.payees.bank.find(x=>x.id===t.payeeId)||{name:m.label}).name
           :k==='card'?(u.payees.card.find(x=>x.id===t.payeeId)||{name:m.label}).name:m.label;
  return `<span class="pay-badge ${m.cls}">${m.icon} ${esc(name)}</span>`;
}

// 指定月(yr,mo)の支払別内訳を請求ベースで集計。scope=[{t,usr}]の対象取引。
// 返り値: {effExp:[{t,usr}], total, payItems(通常字), useItems(カード今月利用=薄字参考)}
function payBreakdownFor(yr,mo,scope){
  const mk=`${yr}-${String(mo+1).padStart(2,'0')}`;
  const effExp=[]; const cardUse={};
  (scope||scopeTxs('all')).forEach(({t,usr})=>{
    if(t.type!=='expense')return;
    if(t.payKind==='card'&&t.date.startsWith(mk)){
      const c=(usr.payees.card||[]).find(x=>x.id===t.payeeId);
      const k=t.payeeId||'card';
      (cardUse[k]=cardUse[k]||{name:c?c.name:'カード',amt:0}).amt+=t.amount;
    }
    if(effectiveExpDate(t,usr).startsWith(mk))effExp.push({t,usr});
  });

  const total=effExp.reduce((s,x)=>s+x.t.amount,0);
  const payItems=[];
  const cash=effExp.filter(x=>!x.t.payKind||x.t.payKind==='cash').reduce((s,x)=>s+x.t.amount,0);
  if(cash>0)payItems.push({label:'現金',amt:cash,color:'#E07B2E',emoji:'💴'});
  const bankMap={};
  effExp.filter(x=>x.t.payKind==='bank').forEach(x=>{
    const c=(x.usr.payees.bank||[]).find(b=>b.id===x.t.payeeId);
    const k=x.t.payeeId||'bank';(bankMap[k]=bankMap[k]||{name:c?c.name:'銀行',amt:0}).amt+=x.t.amount;
  });
  Object.values(bankMap).forEach(b=>{if(b.amt>0)payItems.push({label:b.name,amt:b.amt,color:'#3B82C4',emoji:'🏦'});});
  const cardBill={};
  effExp.filter(x=>x.t.payKind==='card').forEach(x=>{
    const c=(x.usr.payees.card||[]).find(cc=>cc.id===x.t.payeeId);
    const k=x.t.payeeId||'card';
    const g=cardBill[k]||(cardBill[k]={name:c?c.name:'カード',amt:0,months:new Set()});
    g.amt+=x.t.amount; g.months.add(x.t.date.slice(0,7));
  });
  Object.values(cardBill).forEach(g=>{
    const ms=[...g.months].sort();
    const lbl=ms.length<=1?`${g.name}（${ms[0]?parseInt(ms[0].split('-')[1]):mo+1}月利用分）`
      :`${g.name}（${parseInt(ms[0].split('-')[1])}〜${parseInt(ms[ms.length-1].split('-')[1])}月利用分）`;
    payItems.push({label:lbl,amt:g.amt,color:'#E05252',emoji:'💳'});
  });
  payItems.sort((a,b)=>b.amt-a.amt);
  const useItems=Object.values(cardUse).filter(c=>c.amt>0)
    .map(c=>({label:`${c.name}（今月利用）`,amt:c.amt,color:'#E05252',emoji:'💳',faint:true,noPct:true}));
  return {effExp,total,payItems,useItems};
}

// ホームの内訳グラフ（支払別＋カテゴリ別）
function renderChart(){
  const {effExp,total,payItems,useItems}=payBreakdownFor(UI.year,UI.month,scopeTxs('all',UI.isMainMode?null:UI.activeLedger));
  const el=document.getElementById('chart-body');
  if(!total&&!useItems.length){el.innerHTML=`<div style="text-align:center;color:var(--text-hint);font-size:13px;padding:12px">支出データなし</div>`;return;}
  const catItems=catBreakdownFromEff(effExp);
  let h='';
  if(payItems.length||useItems.length)h+=`<div class="chart-sub">支払別</div>${_chartRows(payItems,total)}${_chartRows(useItems,total)}`;
  if(catItems.length)h+=`<div class="chart-sub" style="margin-top:12px">カテゴリ別</div>${_chartRows(catItems,total)}`;
  el.innerHTML=h;
}
// effExpからカテゴリ別アイテムを生成
function catBreakdownFromEff(effExp){
  // 費目名で集計する（アイコンIDは複数費目で共用できるため、IDで括ると別費目が合算される）
  const map={};
  effExp.forEach(({t})=>{
    const iid=txIconId(t);
    const key=t.emojiName||iid;
    map[key]=map[key]||{n:t.emojiName||t.memo||iid,iid,amt:0};
    map[key].amt+=t.amount;
  });
  return Object.values(map).sort((a,b)=>b.amt-a.amt).slice(0,8).map(v=>{
    const ic=CAT_ICONS[v.iid]||CAT_ICONS['other'];
    return {iconId:v.iid,label:v.n,amt:v.amt,color:catColorOf(v.n,v.iid,UI.activeLedger),svg:ic.svg,emoji:ic.emoji||'💰'};
  });
}
function _chartRows(items,total){
  return items.map(v=>{
    const iconEl=v.iconId
      ? `<div style="width:28px;height:28px;border-radius:8px;background:var(--bg-card);border:1px solid var(--border-l);display:flex;align-items:center;justify-content:center;flex:none">
           <svg viewBox="-2 -2 28 28" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">${svgColored(CAT_ICONS[v.iconId]?.svg||'',v.color)}</svg>
         </div>`
      : `<div style="width:28px;height:28px;border-radius:8px;background:var(--bg-card);border:1px solid var(--border-l);display:flex;align-items:center;justify-content:center;flex:none;font-size:14px">${v.emoji||'💳'}</div>`;
    const pct=total?Math.round(v.amt/total*100):0;
    const bar=v.noPct?`<div class="chart-bar-bg"></div>`
      :`<div class="chart-bar-bg"><div class="chart-bar" style="width:${pct}%;background:${v.color}"></div></div>`;
    const right=v.noPct
      ?`<div style="font-size:12px;font-weight:700;color:var(--text-sub)">${fmt(v.amt)}</div><div class="chart-pct">参考</div>`
      :`<div style="font-size:12px;font-weight:700;color:var(--text)">${fmt(v.amt)}</div><div class="chart-pct">${pct}%</div>`;
    return `<div class="chart-row"${v.faint?' style="opacity:0.55"':''}>
      ${iconEl}
      <div class="chart-lbl">${esc(v.label)}</div>
      ${bar}
      <div style="text-align:right;flex:none;min-width:72px">${right}</div>
    </div>`;
  }).join('');
}
function changeMonth(d){
  UI.month+=d;
  if(UI.month<0){UI.month=11;UI.year--;}
  if(UI.month>11){UI.month=0;UI.year++;}
  UI.selDay=null;UI.expandList=false;UI.payFilter='all';renderAll();
}
function goToday(){const n=new Date();UI.year=n.getFullYear();UI.month=n.getMonth();UI.selDay=null;UI.expandList=false;UI.payFilter='all';renderAll();}

// ── カレンダー左右スワイプ ──
let calTouchX=null, calTouchY=null;
function calTouchStart(e){
  if(e.touches.length!==1){calTouchX=null;return;}
  calTouchX=e.touches[0].clientX;
  calTouchY=e.touches[0].clientY;
}
function calTouchEnd(e){
  if(calTouchX===null)return;
  const dx=e.changedTouches[0].clientX-calTouchX;
  const dy=e.changedTouches[0].clientY-calTouchY;
  calTouchX=null;
  // 横方向のスワイプのみ（縦移動が大きい場合は無視）
  if(Math.abs(dx)<50||Math.abs(dy)>Math.abs(dx))return;
  changeMonth(dx<0?1:-1); // 左スワイプ→翌月、右スワイプ→前月
}

// ── 月選択モーダル ──
let monthPickerYearVal=null;
function openMonthPicker(){
  monthPickerYearVal=UI.year;
  document.getElementById('monthpicker-overlay').classList.remove('hidden');
  renderMonthPicker();
}
function closeMonthPicker(){document.getElementById('monthpicker-overlay').classList.add('hidden');}
function monthPickerYear(d){monthPickerYearVal+=d;renderMonthPicker();}
function renderMonthPicker(){
  document.getElementById('monthpicker-year').textContent=`${monthPickerYearVal}年`;
  const now=new Date();
  const grid=document.getElementById('monthpicker-grid');
  grid.innerHTML=Array.from({length:12},(_,m)=>{
    const isCur=monthPickerYearVal===UI.year&&m===UI.month;
    const isThis=monthPickerYearVal===now.getFullYear()&&m===now.getMonth();
    const bg=isCur?'var(--pri)':'var(--bg)';
    const col=isCur?'#fff':'var(--text)';
    const bd=isThis&&!isCur?'1.5px solid var(--pri)':'1px solid var(--border-l)';
    return `<button onclick="pickMonth(${m})" style="padding:14px 0;border-radius:var(--r8);border:${bd};background:${bg};color:${col};font-family:var(--font);font-size:14px;font-weight:${isCur?'700':'500'};cursor:pointer">${m+1}月</button>`;
  }).join('');
}
function pickMonth(m){
  UI.year=monthPickerYearVal;UI.month=m;
  UI.selDay=null;UI.payFilter='all';
  closeMonthPicker();renderAll();
}

/* =========================================================
   ユーザードロワー
/* =========================================================
========================================================= */
function openUserDrawer(){
  const d=document.getElementById('user-drawer');
  d.classList.add('open');
  renderUserList();
}
function closeUserDrawer(){document.getElementById('user-drawer').classList.remove('open');}

function renderUserList(){
  const el=document.getElementById('ud-user-list');
  el.innerHTML='';

  // No.0メインユーザー（2人以上かつ有効時のみ表示）
  if(DB.mainUser.enabled && DB.users.length>=2){
    const t=getTheme(DB.mainUser.theme||'indigo');
    const item=document.createElement('div');
    item.className='ud-user-item'+(UI.isMainMode?' active':'');
    item.onclick=()=>switchToMainMode();
    const av=renderAvatarSVG('person',t.g1||t.pri,40,t.g2||null);
    item.innerHTML=`${av}
      <div class="ud-uinfo">
        <div class="ud-uname">${esc(DB.mainUser.name)} <span style="font-size:10px;background:${t.pri};color:#fff;border-radius:10px;padding:1px 6px;margin-left:4px">No.0</span></div>
        <div class="ud-ledger-count">全ユーザーの管理画面</div>
      </div>
      ${UI.isMainMode?'<span class="ud-check">✓</span>':''}`;
    el.appendChild(item);

    // 区切り線
    const sep=document.createElement('div');
    sep.style.cssText='height:1px;background:var(--border-l);margin:4px 0';
    el.appendChild(sep);
  }

  // 通常ユーザー
  DB.users.forEach(u=>{
    const t=getTheme(u.theme);
    const item=document.createElement('div');
    const isActive=!UI.isMainMode&&u.id===DB.activeUser;
    item.className='ud-user-item'+(isActive?' active':'');
    item.onclick=()=>switchUser(u.id);
    const avatarHTML=renderAvatarSVG(u.avatar||'person', t.g1||t.pri, 40, t.g2||null);
    item.innerHTML=`${avatarHTML}
      <div class="ud-uinfo">
        <div class="ud-uname">${esc(u.name)}</div>
        <div class="ud-ledger-count">${u.ledgers.length}帳簿 · ${u.transactions.length}件</div>
      </div>
      ${isActive?'<span class="ud-check">✓</span>':''}
      <button style="background:none;border:none;cursor:pointer;font-size:14px;color:var(--text-hint);padding:4px" onclick="event.stopPropagation();openEditUser('${u.id}')">✏️</button>`;
    el.appendChild(item);
  });
}

// メインモードに切り替え
function switchToMainMode(){
  UI.isMainMode=true;
  UI.selDay=null;UI.payFilter='all';
  closeUserDrawer();renderAll();
}

// 通常ユーザーに切り替え
function switchUser(id){
  UI.isMainMode=false;
  DB.activeUser=id;
  const u=activeUser();
  UI.activeLedger=u.ledgers[0]?.id||'';
  UI.selDay=null;UI.payFilter='all';
  exportSelLedgers=new Set();
  closeUserDrawer();
  save();
  applyTheme(u.theme||DEFAULT_THEME);
  renderAll();
}

function openAddUser(){
  closeUserDrawer();
  UI.editingUserId=null;
  document.getElementById('user-edit-title').textContent='ユーザーを追加';
  document.getElementById('ue-name').value='';
  document.getElementById('ue-del-btn').classList.add('hidden');
  UI.selAvatarIdx=0;UI.selThemeId='green';
  buildAvatarPicker();buildThemePicker('ue');
  document.getElementById('user-edit-overlay').classList.remove('hidden');
}
function openEditUser(id){
  closeUserDrawer();
  const u=DB.users.find(x=>x.id===id);if(!u)return;
  UI.editingUserId=id;
  document.getElementById('user-edit-title').textContent='ユーザーを編集';
  document.getElementById('ue-name').value=u.name;
  UI.selThemeId=u.theme||'green';
  UI.selAvatarIdx=USER_AVATARS.findIndex(a=>a.id===u.avatar);
  if(UI.selAvatarIdx<0)UI.selAvatarIdx=0;
  document.getElementById('ue-del-btn').classList.toggle('hidden',DB.users.length<=1);
  buildAvatarPicker();buildThemePicker('ue');
  document.getElementById('user-edit-overlay').classList.remove('hidden');
}
function closeUserEdit(){document.getElementById('user-edit-overlay').classList.add('hidden');}

function buildAvatarPicker(){
  const t=getTheme(UI.selThemeId);
  const avatarHTML=renderAvatarSVG('person', t.g1||t.pri, 56, t.g2||null);
  document.getElementById('avatar-picker').innerHTML=
    `<div style="display:flex;align-items:center;gap:12px;padding:8px 0">
      ${avatarHTML}
      <div style="font-size:13px;color:var(--text-sub);line-height:1.6">
        テーマカラーに合わせて<br>アイコンが自動で変わります
      </div>
    </div>`;
}

function buildThemePicker(prefix){
  const gridId=prefix+'-theme-grid';
  document.getElementById(gridId).innerHTML=themesInDisplayOrder().map(t=>
    `<div class="theme-swatch${t.id===UI.selThemeId?' active':''}"
      style="background:linear-gradient(135deg,${t.g1||t.pri},${t.g2||t.prid})"
      onclick="pickTheme('${t.id}','${prefix}')" title="${t.name}">
      <span style="font-size:14px">${t.icon}</span>
      <span class="ts-name">${t.name}</span>
      <div class="check">✓</div>
    </div>`
  ).join('');
}
function pickTheme(id,prefix){UI.selThemeId=id;buildThemePicker(prefix);if(prefix==='ue')buildAvatarPicker();}

function saveUser(){
  const name=document.getElementById('ue-name').value.trim();
  if(!name){alert('名前を入力してください');return;}
  const avatarId=USER_AVATARS[UI.selAvatarIdx]?.id||'person';
  if(UI.editingUserId){
    const u=DB.users.find(x=>x.id===UI.editingUserId);
    if(u){u.name=name;u.avatar=avatarId;u.theme=UI.selThemeId;}
  } else {
    const id='u'+Date.now();
    const newU={id,name,avatar:avatarId,theme:UI.selThemeId,
      ledgers:[{id:'l'+Date.now(),name:'家計',theme:null}],
      payees:{bank:[],card:[]},transactions:[]};
    DB.users.push(newU);
  }
  closeUserEdit();save();renderAll();
}
function deleteUser(){
  if(!confirm(`「${DB.users.find(u=>u.id===UI.editingUserId)?.name}」を削除しますか？\n全取引データも削除されます。`))return;
  DB.users=DB.users.filter(u=>u.id!==UI.editingUserId);
  if(DB.activeUser===UI.editingUserId)DB.activeUser=DB.users[0].id;
  const u=activeUser();UI.activeLedger=u.ledgers[0]?.id||'';
  closeUserEdit();save();renderAll();
}

/* =========================================================
   取引追加
/* =========================================================
========================================================= */
function openAddModal(){
  document.getElementById('add-overlay').classList.remove('hidden');
  // 前回のスクロール位置を引き継がず、必ず先頭から表示
  const _sheet=document.querySelector('#add-overlay .sheet');
  if(_sheet)_sheet.scrollTop=0;
  setType('expense');
  document.getElementById('f-amount').value='';
  document.getElementById('f-memo').value='';
  document.getElementById('f-memo2').value='';
  const n=new Date(),yr=UI.year,mo=UI.month;
  const dd=UI.selDay||(yr===n.getFullYear()&&mo===n.getMonth()?n.getDate():1);
  document.getElementById('f-date').value=`${yr}-${String(mo+1).padStart(2,'0')}-${String(dd).padStart(2,'0')}`;

  const destEl=document.getElementById('f-save-dest');
  const ledgerRow=document.getElementById('f-ledger')?.closest('.field');
  if(UI.isMainMode){
    // No.0：保存先選択を表示、f-ledger行を非表示
    destEl.classList.remove('hidden');
    if(ledgerRow)ledgerRow.style.display='none';
    const destUser=document.getElementById('f-dest-user');
    destUser.innerHTML=DB.users.map(x=>`<option value="${x.id}">${esc(x.name)}</option>`).join('');
    onDestUserChange();
  } else {
    destEl.classList.add('hidden');
    if(ledgerRow)ledgerRow.style.display='';
    const u=activeUser();
    document.getElementById('f-ledger').innerHTML=u.ledgers.map(l=>`<option value="${l.id}"${l.id===UI.activeLedger?' selected':''}>${esc(l.name)}</option>`).join('');
  }
  // 履歴は保存先（ユーザー・帳簿）が確定した後に描画
  renderAddMemoHist();
}
function closeAddModal(){document.getElementById('add-overlay').classList.add('hidden');}

// 保存先ユーザー変更時：帳簿リスト・費目グリッド・支払い方法をそのユーザーに合わせて更新
function onDestUserChange(){
  const uid=document.getElementById('f-dest-user')?.value;
  const u=DB.users.find(x=>x.id===uid);
  if(!u)return;
  // 帳簿セレクト更新
  const sel=document.getElementById('f-dest-ledger');
  if(sel)sel.innerHTML=u.ledgers.map(l=>`<option value="${l.id}">${esc(l.name)}</option>`).join('');
  // 費目グリッドを保存先ユーザー・帳簿のカテゴリで再構築
  const destLid=document.getElementById('f-dest-ledger')?.value||u.ledgers[0]?.id||'';
  const savedId=DB.activeUser, savedLid=UI.activeLedger;
  DB.activeUser=u.id; UI.activeLedger=destLid;
  buildCatGrid('cat-grid',UI.txType,null,null,'pickCat');
  DB.activeUser=savedId; UI.activeLedger=savedLid;
  // 支払い方法リセット
  UI.selKind='cash';UI.selPayeeId=null;
  ['pk-cash','pk-bank','pk-card'].forEach(id=>{const el=document.getElementById(id);if(el)el.className='pk-btn';});
  const pkc=document.getElementById('pk-cash');if(pkc)pkc.className='pk-btn sel-cash';
  const pw=document.getElementById('f-payee-wrap');if(pw)pw.classList.add('hidden');
  // 履歴も保存先ユーザーの帳簿のものに切替
  renderAddMemoHist();
}

// 保存先帳簿変更時：その帳簿の費目で費目グリッドを再構築
function onDestLedgerChange(){
  const uid=document.getElementById('f-dest-user')?.value;
  const u=DB.users.find(x=>x.id===uid);
  if(!u)return;
  const destLid=document.getElementById('f-dest-ledger')?.value||u.ledgers[0]?.id||'';
  const savedId=DB.activeUser, savedLid=UI.activeLedger;
  DB.activeUser=u.id; UI.activeLedger=destLid;
  buildCatGrid('cat-grid',UI.txType,null,null,'pickCat');
  DB.activeUser=savedId; UI.activeLedger=savedLid;
  UI.selEmoji=null;UI.selEmojiName=null;
  // 履歴も保存先帳簿のものに切替
  renderAddMemoHist();
}

function setType(t){
  UI.txType=t;UI.selEmoji=null;UI.selEmojiName=null;UI.selKind='cash';UI.selPayeeId=null;
  document.getElementById('tb-inc').className='tt-btn'+(t==='income'?' a-inc':'');
  document.getElementById('tb-exp').className='tt-btn'+(t==='expense'?' a-exp':'');
  // isMainMode時は保存先ユーザーのカテゴリで構築
  if(UI.isMainMode){
    const uid=document.getElementById('f-dest-user')?.value;
    const destUser=DB.users.find(x=>x.id===uid);
    const destLid=document.getElementById('f-dest-ledger')?.value||destUser?.ledgers[0]?.id||'';
    if(destUser){
      const savedId=DB.activeUser, savedLid=UI.activeLedger;
      DB.activeUser=destUser.id; UI.activeLedger=destLid;
      buildCatGrid('cat-grid',t,null,null,'pickCat');
      DB.activeUser=savedId; UI.activeLedger=savedLid;
    } else {
      buildCatGrid('cat-grid',t,null,null,'pickCat');
    }
  } else {
    buildCatGrid('cat-grid',t,null,null,'pickCat');
  }
  document.getElementById('f-pay-section').style.display=t==='expense'?'block':'none';
  // 支払い方法はデフォルトで現金を選択状態（枠表示）に統一
  document.getElementById('pk-cash').className='pk-btn sel-cash';
  document.getElementById('pk-bank').className='pk-btn';
  document.getElementById('pk-card').className='pk-btn';
  document.getElementById('f-payee-wrap').classList.add('hidden');
}
function buildCatGrid(gridId,type,selIconId,selName,pickFn){
  const cats=type==='income'?getINC_CATS():getEXP_CATS();
  document.getElementById(gridId).innerHTML=cats.map(c=>{
    const iid=resolveIconId(c);
    const ic=CAT_ICONS[iid]||CAT_ICONS['other'];
    const color=c.color||ic.color;
    // 費目の同一判定は「名前」で行う（アイコンは複数費目で共用できるため、IDだけだと同時選択になる）
    const isSel=selName?c.n===selName:iid===selIconId;
    return `<button class="cat-btn${isSel?' sel':''}" onclick="${pickFn}('${iid}','${escAttr(escJs(c.n))}',this,'${color}')" style="${isSel?'border-color:'+color:''}">
      <div class="cat-icon-wrap" style="width:44px;height:44px;background:var(--bg-card);border:1px solid ${isSel?'transparent':'var(--border-l)'};display:flex;align-items:center;justify-content:center;border-radius:10px;flex:none">
        <svg viewBox="-1 -1 26 26" style="width:30px;height:30px;flex:none" fill="none" xmlns="http://www.w3.org/2000/svg">${svgColored(ic.svg,color)}</svg>
      </div>
      <span class="cn">${esc(c.n)}</span>
    </button>`;
  }).join('');
}
function pickCat(iconId,n,btn,color){
  UI.selEmoji=iconId;UI.selEmojiName=n;
  document.querySelectorAll('#cat-grid .cat-btn').forEach(b=>{b.classList.remove('sel');b.style.borderColor='';});
  btn.classList.add('sel');
  // 選択枠は費目のカスタム色（グリッド描画と同じ色）を使う。アイコン標準色だと枠だけ違う色になる
  btn.style.borderColor=color||(CAT_ICONS[iconId]||CAT_ICONS['other']).color;
  const m=document.getElementById('f-memo');if(!m.value)m.value=n;
}
function selectKind(k){
  UI.selKind=k;UI.selPayeeId=null;
  document.getElementById('pk-cash').className='pk-btn'+(k==='cash'?' sel-cash':'');
  document.getElementById('pk-bank').className='pk-btn'+(k==='bank'?' sel-bank':'');
  document.getElementById('pk-card').className='pk-btn'+(k==='card'?' sel-card':'');
  const wrap=document.getElementById('f-payee-wrap');
  if(k==='cash'){wrap.classList.add('hidden');return;}
  // No.0モードでは保存先ユーザー、通常は activeUser の支払い方法を参照
  let u=activeUser();
  if(UI.isMainMode){
    const uid=document.getElementById('f-dest-user')?.value;
    u=DB.users.find(x=>x.id===uid)||u;
  }
  const list=u.payees[k]||[];
  if(!list.length){wrap.classList.add('hidden');alert(`先に「💳」から${k==='bank'?'銀行口座':'クレジットカード'}を登録してください`);return;}
  document.getElementById('f-payee-lbl').textContent=k==='bank'?'🏦 口座を選択':'💳 カードを選択';
  document.getElementById('f-payee-chips').innerHTML=list.map(p=>`<button class="payee-chip" id="py-${p.id}" onclick="pickPayee('${p.id}')">${esc(p.name)}</button>`).join('');
  wrap.classList.remove('hidden');
}
function pickPayee(id){
  UI.selPayeeId=id;
  document.querySelectorAll('.payee-chip').forEach(b=>b.classList.remove('sel'));
  const el=document.getElementById('py-'+id);if(el)el.classList.add('sel');
}
function addTx(){
  const amount=parseAmountInput('f-amount');
  if(!amount){alert('金額を入力してください');return;}
  const iconId=UI.selEmoji||'other';
  const emojiName=UI.selEmojiName||(UI.txType==='income'?'収入':'支出');
  const memo=document.getElementById('f-memo').value||emojiName;
  const memo2=document.getElementById('f-memo2').value||'';
  const date=document.getElementById('f-date').value;
  if(!date){alert('日付を選択してください');return;}

  // 保存先ユーザー・帳簿を決定
  let targetUser, ledger;
  if(UI.isMainMode){
    const destUserId=document.getElementById('f-dest-user')?.value;
    const destLedgerId=document.getElementById('f-dest-ledger')?.value;
    targetUser=DB.users.find(x=>x.id===destUserId);
    if(!targetUser){alert('保存先ユーザーを選択してください');return;}
    ledger=destLedgerId||targetUser.ledgers[0]?.id;
  } else {
    targetUser=activeUser();
    ledger=document.getElementById('f-ledger').value;
  }

  const tx={
    id:'t'+Date.now()+Math.random().toString(36).slice(2),
    ledger, type:UI.txType, amount, iconId, emoji:iconId, emojiName, memo, memo2, date
  };
  if(UI.txType==='expense'){
    tx.payKind=UI.selKind||'cash';
    if((tx.payKind==='bank'||tx.payKind==='card')&&!UI.selPayeeId){
      alert('支払い先を選択してください');return;
    }
    tx.payeeId=UI.selPayeeId||null;
  }
  targetUser.transactions.push(tx);
  pushMemoHistory(targetUser, ledger, 'memo', document.getElementById('f-memo').value);
  pushMemoHistory(targetUser, ledger, 'memo2', document.getElementById('f-memo2').value);
  // 追加した取引が明細に見えるよう、その日付にフォーカスを合わせる
  const[ay,am,ad]=date.split('-').map(Number);
  UI.year=ay;UI.month=am-1;UI.selDay=ad;UI.expandList=false;
  save();closeAddModal();renderAll();
}

/* =========================================================
   帳簿管理
/* =========================================================
========================================================= */
function openLedgerMgr(){
  document.getElementById('ledger-overlay').classList.remove('hidden');
  renderLedgerUI();renderLedgerColorUI();
}
function closeLedgerMgr(){document.getElementById('ledger-overlay').classList.add('hidden');}

function renderLedgerUI(){
  const u=activeUser();
  const el=document.getElementById('ledger-ui');
  el.innerHTML='';
  u.ledgers.forEach(l=>{
    const wrap=document.createElement('div');
    wrap.style.cssText='border-bottom:1px solid var(--border-l)';
    const row=document.createElement('div');
    row.style.cssText='display:flex;align-items:center;gap:8px;padding:10px 0 4px';

    // アイコン
    const icon=document.createElement('span');
    icon.textContent='📒';
    icon.style.cssText='font-size:16px;width:24px;text-align:center;flex:none';
    row.appendChild(icon);

    // 表示部
    const disp=document.createElement('div');
    disp.id='ledger-display-'+l.id;
    disp.style.cssText='flex:1;display:flex;align-items:center;gap:6px;min-width:0;overflow:hidden';
    const nameSpan=document.createElement('span');
    nameSpan.textContent=l.name;
    nameSpan.style.cssText='flex:1;font-size:14px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap';
    const editBtn=document.createElement('button');
    editBtn.textContent='✏️';
    editBtn.style.cssText='background:none;border:none;cursor:pointer;font-size:14px;padding:4px;flex:none';
    editBtn.addEventListener('click',()=>startLedgerEdit(l.id));
    disp.appendChild(nameSpan);
    disp.appendChild(editBtn);
    row.appendChild(disp);

    // 編集部
    const editDiv=document.createElement('div');
    editDiv.id='ledger-edit-'+l.id;
    editDiv.style.cssText='flex:1;display:none;align-items:center;gap:6px';
    const inp=document.createElement('input');
    inp.id='ledger-inp-'+l.id;
    inp.value=l.name;
    inp.className='ledger-name-inp';
    inp.style.flex='1';
    inp.addEventListener('keydown',e=>{if(e.key==='Enter')saveLedgerName(l.id);});
    const saveBtn=document.createElement('button');
    saveBtn.textContent='保存';
    saveBtn.className='ledger-save-btn';
    saveBtn.addEventListener('click',()=>saveLedgerName(l.id));
    editDiv.appendChild(inp);
    editDiv.appendChild(saveBtn);
    row.appendChild(editDiv);

    // 削除ボタン
    const delBtn=document.createElement('button');
    delBtn.textContent='🗑️';
    delBtn.style.cssText='background:none;border:none;cursor:pointer;font-size:20px;padding:8px;flex:none;color:var(--text-hint);min-width:40px;min-height:40px;display:flex;align-items:center;justify-content:center';
    delBtn.addEventListener('click',()=>delLedger(l.id));
    row.appendChild(delBtn);
    wrap.appendChild(row);

    // 前月繰り越しオプション（帳簿ごと）
    const carryRow=document.createElement('label');
    carryRow.style.cssText='display:flex;align-items:center;gap:7px;padding:2px 0 10px 32px;cursor:pointer;font-size:12px;color:var(--text-sub);user-select:none';
    const cb=document.createElement('input');
    cb.type='checkbox';
    cb.checked=!!l.carry;
    cb.style.cssText='width:16px;height:16px;accent-color:var(--pri);margin:0;flex:none';
    cb.addEventListener('change',()=>{
      l.carry=cb.checked;
      save();renderAll();
      showToast(cb.checked?`📒 ${l.name}：前月の残高を繰り越します`:`📒 ${l.name}：繰り越しをオフにしました`);
    });
    carryRow.appendChild(cb);
    carryRow.appendChild(document.createTextNode('前月の残高を繰り越す'));
    wrap.appendChild(carryRow);

    el.appendChild(wrap);
  });
}

function startLedgerEdit(id){
  const disp=document.getElementById('ledger-display-'+id);
  const edit=document.getElementById('ledger-edit-'+id);
  if(disp)disp.style.display='none';
  if(edit)edit.style.display='flex';
  const inp=document.getElementById('ledger-inp-'+id);
  if(inp)inp.focus();
}

function saveLedgerName(id){
  const inp=document.getElementById('ledger-inp-'+id);
  const name=inp?.value.trim();if(!name)return;
  const u=activeUser();const l=u.ledgers.find(x=>x.id===id);
  if(l)l.name=name;
  save();renderLedgerUI();renderLedgerColorUI();renderLedgerBar();
}
function addLedger(){
  const inp=document.getElementById('nl-name');const name=inp.value.trim();if(!name)return;
  const u=activeUser();u.ledgers.push({id:'l'+Date.now(),name,theme:null});
  inp.value='';save();renderLedgerUI();renderLedgerColorUI();renderLedgerBar();
}
function delLedger(id){
  const u=activeUser();
  if(u.ledgers.length<=1){
    alert('帳簿は最低1つ必要なため削除できません。');
    return;
  }
  if(!confirm('データも削除されますが、帳簿を削除しますか？'))return;
  u.ledgers=u.ledgers.filter(l=>l.id!==id);
  u.transactions=u.transactions.filter(t=>t.ledger!==id);
  if(UI.activeLedger===id)UI.activeLedger=u.ledgers[0]?.id||'';
  save();
  try{renderLedgerUI();}catch(e){}
  try{renderLedgerColorUI();}catch(e){}
  renderAll();
}

function renderLedgerColorUI(){
  const u=activeUser();
  const el=document.getElementById('ledger-color-ui');
  if(!el)return;
  el.innerHTML=u.ledgers.map(l=>{
    return `<div style="margin-bottom:12px">
      <div style="font-size:13px;font-weight:600;margin-bottom:6px">📒 ${esc(l.name)}</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">
        <div class="theme-swatch${!l.theme?' active':''}" style="background:var(--border);width:36px;height:36px" onclick="setLedgerTheme('${l.id}',null)" title="ユーザー設定に従う">
          <span style="font-size:12px">自動</span><div class="check">✓</div>
        </div>
        ${themesInDisplayOrder().map(t=>`<div class="theme-swatch${l.theme===t.id?' active':''}" style="background:linear-gradient(135deg,${t.g1||t.pri},${t.g2||t.prid});width:36px;height:36px" onclick="setLedgerTheme('${l.id}','${t.id}')" title="${t.name}">
          <span style="font-size:12px">${t.icon}</span><div class="check">✓</div>
        </div>`).join('')}
      </div>
    </div>`;
  }).join('');
}
function setLedgerTheme(ledgerId,themeId){
  const u=activeUser();
  const l=u.ledgers.find(x=>x.id===ledgerId);if(l)l.theme=themeId;
  save();renderLedgerColorUI();if(UI.activeLedger===ledgerId)renderAll();
}

/* =========================================================
   支払い管理
/* =========================================================
========================================================= */
function openPayMgr(){document.getElementById('pay-overlay').classList.remove('hidden');renderPayUI();}
function closePayMgr(){document.getElementById('pay-overlay').classList.add('hidden');}

function renderPayUI(){
  const u=activeUser();
  // 銀行
  document.getElementById('bank-ui').innerHTML=u.payees.bank.length
    ?u.payees.bank.map(p=>`
      <div class="pay-mgr-item">
        <span class="mgr-icon">🏦</span>
        <div class="pay-mgr-info">
          <div class="pay-mgr-name">${esc(p.name)}</div>
        </div>
        <button class="cat-mgr-btn" onclick="openBankEdit('${p.id}')">✏️</button>
      </div>`).join('')
    :`<div style="font-size:13px;color:var(--text-hint);padding:8px 0">未登録</div>`;

  // カード
  document.getElementById('card-ui').innerHTML=u.payees.card.length
    ?u.payees.card.map(p=>{
      const sub=[];
      if(p.closeDay) sub.push(`締め日: ${p.closeDay===31?'末日':p.closeDay+'日'}`);
      if(p.billingDay) sub.push(`請求日: ${p.billingMonth===2?'翌々月':'翌月'}${p.billingDay===31?'末日':p.billingDay+'日'}`);
      return `<div class="pay-mgr-item">
        <span class="mgr-icon">💳</span>
        <div class="pay-mgr-info">
          <div class="pay-mgr-name">${esc(p.name)}</div>
          ${sub.length?`<div class="pay-mgr-sub">${sub.join('　')}</div>`:''}
        </div>
        <button class="cat-mgr-btn" onclick="openCardEdit('${p.id}')">✏️</button>
      </div>`;
    }).join('')
    :`<div style="font-size:13px;color:var(--text-hint);padding:8px 0">未登録</div>`;
}

function addPayee(k){
  const inp=document.getElementById(k==='bank'?'nb-name':'nc-name');
  const name=inp.value.trim();if(!name)return;
  const obj={id:k[0]+Date.now(),name};
  if(k==='card'){obj.closeDay='';obj.billingMonth=1;obj.billingDay='';}
  activeUser().payees[k].push(obj);
  inp.value='';save();renderPayUI();renderAll();
}

/* ---- 銀行 編集 ---- */
let editingBankId=null;
function openBankEdit(id){
  const u=activeUser();const p=u.payees.bank.find(x=>x.id===id);if(!p)return;
  editingBankId=id;
  document.getElementById('be-name').value=p.name;
  document.getElementById('bank-edit-overlay').classList.remove('hidden');
}
function closeBankEdit(){document.getElementById('bank-edit-overlay').classList.add('hidden');editingBankId=null;}
function saveBankEdit(){
  const name=document.getElementById('be-name').value.trim();if(!name)return;
  const u=activeUser();const p=u.payees.bank.find(x=>x.id===editingBankId);
  if(p)p.name=name;
  closeBankEdit();save();renderPayUI();renderAll();
}
function deleteBankFromEdit(){
  if(!confirm('登録情報も消えますが削除しますか？'))return;
  const u=activeUser();
  const id=editingBankId;
  document.getElementById('bank-edit-overlay').classList.add('hidden');
  editingBankId=null;
  u.payees.bank=u.payees.bank.filter(p=>p.id!==id);
  u.transactions.forEach(t=>{if(t.payKind==='bank'&&t.payeeId===id){t.payKind='cash';t.payeeId=null;}});
  save();renderPayUI();renderAll();
}

/* ---- カード 編集 ---- */
let editingCardId=null;

// 日付selectのオプションHTML生成
function dayOptions(selVal){
  let h=`<option value="">設定しない</option>`;
  for(let d=1;d<=28;d++) h+=`<option value="${d}"${selVal==d?' selected':''}>${d}日</option>`;
  h+=`<option value="31"${selVal==31?' selected':''}>末日</option>`;
  return h;
}

function openCardEdit(id){
  const u=activeUser();const p=u.payees.card.find(x=>x.id===id);if(!p)return;
  editingCardId=id;
  document.getElementById('ce2-name').value=p.name;
  // selectオプションをJSで生成してから値をセット
  document.getElementById('ce2-close').innerHTML=dayOptions(p.closeDay||'');
  document.getElementById('ce2-billing-month').value=p.billingMonth||1;
  document.getElementById('ce2-billing-day').innerHTML=dayOptions(p.billingDay||'');
  document.getElementById('card-edit-overlay').classList.remove('hidden');
}
function closeCardEdit(){document.getElementById('card-edit-overlay').classList.add('hidden');editingCardId=null;}
function saveCardEdit(){
  const name=document.getElementById('ce2-name').value.trim();if(!name)return;
  const u=activeUser();const p=u.payees.card.find(x=>x.id===editingCardId);
  if(p){
    p.name=name;
    p.closeDay=parseInt(document.getElementById('ce2-close').value)||'';
    p.billingMonth=parseInt(document.getElementById('ce2-billing-month').value)||1;
    p.billingDay=parseInt(document.getElementById('ce2-billing-day').value)||'';
  }
  closeCardEdit();save();renderPayUI();renderAll();
}
function deleteCardFromEdit(){
  if(!confirm('登録情報も消えますが削除しますか？'))return;
  const u=activeUser();
  const id=editingCardId;
  document.getElementById('card-edit-overlay').classList.add('hidden');
  editingCardId=null;
  u.payees.card=u.payees.card.filter(p=>p.id!==id);
  u.transactions.forEach(t=>{if(t.payKind==='card'&&t.payeeId===id){t.payKind='cash';t.payeeId=null;}});
  save();renderPayUI();renderAll();
}

/* =========================================================
   設定 / CSV
/* =========================================================
========================================================= */
// エクスポート対象の帳簿ID集合
let exportSelLedgers = new Set(); // 'all' or ledgerId set

function closeSettings(){document.getElementById('settings-overlay').classList.add('hidden');}

function buildExportLedgerList(){
  const u = activeUser();
  // 初回は全帳簿を選択済みにする
  if(exportSelLedgers.size === 0){
    exportSelLedgers = new Set(['__all__', ...u.ledgers.map(l=>l.id)]);
  }
  const el = document.getElementById('export-ledger-list');
  const allChecked = exportSelLedgers.has('__all__');
  const totalTx = u.transactions.length;

  let html = `<div class="export-check-item all-item${allChecked?' checked':''}" onclick="toggleExportAll()">
    <div class="export-chk">${allChecked?'✓':''}</div>
    <span class="export-chk-label">📋 全部を選択</span>
    <span class="export-chk-count">${totalTx}件</span>
  </div>`;

  u.ledgers.forEach(l=>{
    const cnt = u.transactions.filter(t=>t.ledger===l.id).length;
    const chk = exportSelLedgers.has(l.id);
    html += `<div class="export-check-item${chk?' checked':''}" onclick="toggleExportLedger('${l.id}')">
      <div class="export-chk">${chk?'✓':''}</div>
      <span class="export-chk-label">📒 ${esc(l.name)}</span>
      <span class="export-chk-count">${cnt}件</span>
    </div>`;
  });
  el.innerHTML = html;
}

function toggleExportAll(){
  const u = activeUser();
  if(exportSelLedgers.has('__all__')){
    // 全解除
    exportSelLedgers = new Set();
  } else {
    // 全選択
    exportSelLedgers = new Set(['__all__', ...u.ledgers.map(l=>l.id)]);
  }
  buildExportLedgerList();
}

function toggleExportLedger(id){
  const u = activeUser();
  if(exportSelLedgers.has(id)){
    exportSelLedgers.delete(id);
    exportSelLedgers.delete('__all__');
  } else {
    exportSelLedgers.add(id);
    // 全帳簿が選択されたら __all__ も立てる
    if(u.ledgers.every(l=>exportSelLedgers.has(l.id))){
      exportSelLedgers.add('__all__');
    }
  }
  buildExportLedgerList();
}

function doExportCSV(){
  const u = activeUser();
  // 対象帳簿IDを取得
  const targetLedgerIds = u.ledgers.filter(l=>exportSelLedgers.has(l.id)).map(l=>l.id);

  if(targetLedgerIds.length === 0){
    alert('帳簿を1つ以上選択してください');
    return;
  }

  const allTx = [];
  u.transactions.forEach(t=>{
    if(!targetLedgerIds.includes(t.ledger)) return;
    const l = u.ledgers.find(x=>x.id===t.ledger)?.name||'';
    const k = t.payKind||'cash';
    const pLabel = PAY_META[k]?.label||k;
    let pName = '';
    if(k==='bank') pName = u.payees.bank.find(p=>p.id===t.payeeId)?.name||'';
    if(k==='card') pName = u.payees.card.find(p=>p.id===t.payeeId)?.name||'';
    allTx.push([t.date, t.type==='income'?'収入':'支出', t.amount,
      t.emojiName||t.emoji, t.memo, pLabel, pName, l, u.name]);
  });

  if(!allTx.length){
    alert('保存するデータがありません');
    return;
  }

  allTx.sort((a,b)=>a[0].localeCompare(b[0]));
  const rows = [['日付','種別','金額','カテゴリ','メモ','支払い方法','支払い先','帳簿','ユーザー'], ...allTx];
  const bom = '\uFEFF';
  const csv = bom + rows.map(r=>r.map(c=>`"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], {type:'text/csv;charset=utf-8'});

  // ファイル名に帳簿名＋日時を入れ、保存のたびに一意にする（上書き・重複ダイアログ防止）
  const ledgerNames = u.ledgers.filter(l=>targetLedgerIds.includes(l.id)).map(l=>l.name);
  const ledgerPart = ledgerNames.length===1 ? safeName(ledgerNames[0]) : `${ledgerNames.length}帳簿`;
  const fname = `家計簿_${ledgerPart}_${nowStamp()}.csv`;

  saveFile(blob, fname, 'CSVファイル', {'text/csv':['.csv']}, `✅ ${allTx.length}件をエクスポートしました`);
}

// ファイル名用：YYYYMMDD_HHMMSS（保存のたびに一意になり上書き・重複ダイアログを防ぐ）
function nowStamp(){
  const d=new Date(), p=n=>String(n).padStart(2,'0');
  return `${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
}
// ファイル名に使えない文字を除去
function safeName(s){return String(s).replace(/[\\/:*?"<>|\n\r]/g,'_').trim().slice(0,30);}

// ファイル保存ヘルパー：保存先選択API(showSaveFilePicker)を試し、未対応・失敗時は通常ダウンロードにフォールバック
function downloadBlob(blob, fname){
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');
  a.href=url; a.download=fname;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 1500);
}
function saveFile(blob, fname, desc, accept, doneMsg){
  if(window.showSaveFilePicker){
    window.showSaveFilePicker({suggestedName:fname, types:[{description:desc, accept}]})
      .then(async fh=>{const ws=await fh.createWritable(); await ws.write(blob); await ws.close(); if(doneMsg)alert(doneMsg);})
      .catch(err=>{
        if(err&&err.name==='AbortError')return;     // ユーザーがキャンセルしただけ
        downloadBlob(blob, fname); if(doneMsg)alert(doneMsg);  // 非対応・内部エラー時は通常DLへ
      });
  }else{
    downloadBlob(blob, fname); if(doneMsg)alert(doneMsg);
  }
}

// ===== バックアップ（JSONで保存／復元） =====
// 全体バックアップ（No.0＝管理者用）：登録ユーザー・帳簿すべてを1ファイルに保存
function exportBackup(){
  const backup={app:'kakeibo', type:'full-backup', version:APP_VERSION, exportedAt:new Date().toISOString(), DB};
  const blob=new Blob([JSON.stringify(backup)],{type:'application/json'});
  const fname=`家計簿_全体バックアップ_${nowStamp()}.json`;
  saveFile(blob, fname, 'バックアップファイル', {'application/json':['.json']}, `✅ 全ユーザー（${DB.users.length}人）のバックアップを保存しました`);
}
// 個人バックアップ（各ユーザー用）：今表示中のユーザーの設定・帳簿・取引を1ファイルに保存
function exportUserBackup(){
  const u=activeUser();
  const user=JSON.parse(JSON.stringify(u));   // ディープコピー
  const backup={app:'kakeibo', type:'user-backup', version:APP_VERSION, exportedAt:new Date().toISOString(), user};
  const blob=new Blob([JSON.stringify(backup)],{type:'application/json'});
  const fname=`家計簿_${safeName(u.name)}_バックアップ_${nowStamp()}.json`;
  const tx=(u.transactions||[]).length;
  saveFile(blob, fname, 'バックアップファイル', {'application/json':['.json']}, `✅ 「${u.name}」のバックアップを保存しました（取引${tx}件）`);
}
// 復元：ファイル種別（全体／個人）を自動判別
function importBackup(ev){
  const file=ev.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const obj=JSON.parse(e.target.result);
      // 個人バックアップ
      if(obj && obj.type==='user-backup' && obj.user && obj.user.name && Array.isArray(obj.user.ledgers)){
        restoreUserBackup(obj.user); ev.target.value=''; return;
      }
      // 全体バックアップ
      const db=obj&&obj.DB;
      if(db&&Array.isArray(db.users)&&db.users.length){
        const userCount=db.users.length;
        const txCount=db.users.reduce((s,u)=>s+((u.transactions||[]).length),0);
        if(!confirm(`全体バックアップ（ユーザー${userCount}人 / 取引${txCount}件）で現在のデータをすべて置き換えます。\n今の端末のデータは消えます。よろしいですか？`)){ev.target.value='';return;}
        // localStorageへ書いてリロード → load()のマイグレーションを通して安全に初期化
        const cur=new Date();
        localStorage.setItem('kb-v5',JSON.stringify({DB:db,UIyear:cur.getFullYear(),UImonth:cur.getMonth(),activeUser:db.users[0].id}));
        alert('✅ 全体を復元しました。画面を更新します。');
        location.reload();
        return;
      }
      alert('バックアップファイルの形式が正しくありません');ev.target.value='';
    }catch(err){alert('読み込みエラー：'+err.message);ev.target.value='';}
  };
  reader.readAsText(file,'UTF-8');
}
// 個人バックアップの復元：同名ユーザーがいれば上書き／いなければ新規作成
function restoreUserBackup(imp){
  imp.id='u'+Date.now()+Math.random().toString(36).slice(2,6);  // 他ユーザーとのID衝突を避け一意に
  const tx=(imp.transactions||[]).length;
  const led=(imp.ledgers||[]).length;
  const idx=DB.users.findIndex(u=>u.name===imp.name);
  const msg = idx>=0
    ? `「${imp.name}」は既に存在します。このユーザーを個人バックアップ（帳簿${led} / 取引${tx}件）で上書きします。よろしいですか？`
    : `個人バックアップ「${imp.name}」（帳簿${led} / 取引${tx}件）を新規ユーザーとして復元します。よろしいですか？`;
  if(!confirm(msg))return;
  if(idx>=0){ DB.users[idx]=imp; } else { DB.users.push(imp); }
  DB.activeUser=imp.id;
  save();
  alert(`✅ 「${imp.name}」を復元しました。画面を更新します。`);
  location.reload();
}

function importCSV(ev){
  const file=ev.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const text=e.target.result.replace(/^\uFEFF/,'');
      const lines=text.split(/\r?\n/).filter(l=>l.trim());
      if(lines.length<2){alert('データが見つかりません');return;}
      let added=0;
      const u=activeUser();
      for(let i=1;i<lines.length;i++){
        const cols=parseCSV(lines[i]);
        if(cols.length<5)continue;
        const[date,typeStr,amtStr,catName,memo,payLabel='',payeeName='',ledgerName='']=cols;
        const amount=parseInt(amtStr)||0;if(!amount||!date)continue;
        const type=typeStr==='収入'?'income':'expense';
        let ledger=u.ledgers.find(l=>l.name===ledgerName)?.id||UI.activeLedger;
        // 費目名から帳簿の費目を探してアイコンを復元（見つからなければ「その他」）
        const ledgerObj=u.ledgers.find(l=>l.id===ledger);
        const cats=ledgerObj?.customCats?.[type]||(type==='income'?DEFAULT_INC_CATS:DEFAULT_EXP_CATS);
        const cat=cats.find(c=>c.n===catName);
        const iconId=cat?resolveIconId(cat):'other';
        let payKind='cash',payeeId=null;
        if(payLabel==='銀行'){payKind='bank';if(payeeName){let p=u.payees.bank.find(x=>x.name===payeeName);if(!p){p={id:'b'+Date.now()+i,name:payeeName};u.payees.bank.push(p);}payeeId=p.id;}}
        else if(payLabel==='カード'){payKind='card';if(payeeName){let p=u.payees.card.find(x=>x.name===payeeName);if(!p){p={id:'c'+Date.now()+i,name:payeeName};u.payees.card.push(p);}payeeId=p.id;}}
        u.transactions.push({id:'t'+Date.now()+i+Math.random().toString(36).slice(2),ledger,type,amount,iconId,emoji:iconId,emojiName:catName,memo:memo||catName,date,payKind,payeeId});
        added++;
      }
      save();renderAll();alert(`${added}件インポートしました`);
    }catch(err){alert('読み込みエラー：'+err.message);}
    ev.target.value='';
  };
  reader.readAsText(file,'UTF-8');
}
function parseCSV(line){
  const r=[];let cur='';let q=false;
  for(let i=0;i<line.length;i++){
    const c=line[i];
    if(c==='"'){if(q&&line[i+1]==='"'){cur+='"';i++;}else q=!q;}
    else if(c===','&&!q){r.push(cur);cur='';}
    else cur+=c;
  }
  r.push(cur);return r;
}
function clearAll(){
  if(!confirm('⚠️ 全データを削除します。取り消せません。\nCSVエクスポートを先に行ってください。'))return;
  // 保存データを消してリロード → 冒頭のデフォルトDB＋load()の初期化パスに一本化
  localStorage.removeItem('kb-v5');
  alert('削除しました');
  location.reload();
}

/* =========================================================
   取引編集
/* =========================================================
========================================================= */
function openTxEdit(id){
  const u=findTxOwner(id);  // No.0モード対応：オーナーユーザーを検索
  const t=u.transactions.find(x=>x.id===id);if(!t)return;
  UI.editingTxId=id;
  UI.txEditType=t.type;
  UI.txEditEmoji=txIconId(t);
  UI.txEditEmojiName=t.emojiName;
  UI.txEditKind=t.payKind||'cash';UI.txEditPayeeId=t.payeeId||null;
  // type toggle
  document.getElementById('te-tb-inc').className='tt-btn'+(t.type==='income'?' a-inc':'');
  document.getElementById('te-tb-exp').className='tt-btn'+(t.type==='expense'?' a-exp':'');
  // 金額・メモ・日付
  document.getElementById('te-amount').value=Number(t.amount).toLocaleString('ja-JP');
  document.getElementById('te-memo').value=t.memo;
  document.getElementById('te-memo2').value=t.memo2||'';
  renderMemoHistory('te-memo-hist','memo','te-memo',u,t.ledger);
  renderMemoHistory('te-memo2-hist','memo2','te-memo2',u,t.ledger);
  document.getElementById('te-date').value=t.date;
  // 帳簿（オーナーユーザーの帳簿リスト）
  document.getElementById('te-ledger').innerHTML=u.ledgers.map(l=>`<option value="${l.id}"${l.id===t.ledger?' selected':''}>${esc(l.name)}</option>`).join('');
  // カテゴリグリッド
  buildTxEditCatGrid(t.type, UI.txEditEmoji, UI.txEditEmojiName);
  // 支払い方法（オーナーユーザーの支払い先を参照）
  setTxEditKindUI(t.type,t.payKind||'cash',t.payeeId,u);
  document.getElementById('tx-edit-overlay').classList.remove('hidden');
  const _sheet=document.querySelector('#tx-edit-overlay .sheet');
  if(_sheet)_sheet.scrollTop=0;
}
function closeTxEdit(){document.getElementById('tx-edit-overlay').classList.add('hidden');}

function setTxEditType(type){
  UI.txEditType=type;UI.txEditEmoji=null;UI.txEditEmojiName=null;
  document.getElementById('te-tb-inc').className='tt-btn'+(type==='income'?' a-inc':'');
  document.getElementById('te-tb-exp').className='tt-btn'+(type==='expense'?' a-exp':'');
  buildTxEditCatGrid(type,null);
  setTxEditKindUI(type,'cash',null);
}
function buildTxEditCatGrid(type,selIconId,selName){
  buildCatGrid('te-cat-grid',type,selIconId,selName,'pickTxEditCat');
  document.getElementById('te-pay-section').style.display=type==='expense'?'block':'none';
}
function pickTxEditCat(iconId,n,btn,color){
  UI.txEditEmoji=iconId;UI.txEditEmojiName=n;
  document.querySelectorAll('#te-cat-grid .cat-btn').forEach(b=>{b.classList.remove('sel');b.style.borderColor='';});
  btn.classList.add('sel');
  // 選択枠は費目のカスタム色（グリッド描画と同じ色）を使う
  btn.style.borderColor=color||(CAT_ICONS[iconId]||CAT_ICONS['other']).color;
}
function setTxEditKind(k){
  UI.txEditKind=k;UI.txEditPayeeId=null;
  const owner=UI.editingTxId?findTxOwner(UI.editingTxId):null;
  setTxEditKindUI(UI.txEditType,k,null,owner);
}
function setTxEditKindUI(type,k,payeeId,ownerUser=null){
  if(type!=='expense'){document.getElementById('te-pay-section').style.display='none';return;}
  document.getElementById('te-pay-section').style.display='block';
  document.getElementById('te-pk-cash').className='pk-btn'+(k==='cash'?' sel-cash':'');
  document.getElementById('te-pk-bank').className='pk-btn'+(k==='bank'?' sel-bank':'');
  document.getElementById('te-pk-card').className='pk-btn'+(k==='card'?' sel-card':'');
  UI.txEditKind=k;
  const wrap=document.getElementById('te-payee-wrap');
  if(k==='cash'){wrap.classList.add('hidden');return;}
  const u=ownerUser||activeUser();const list=u.payees[k]||[];
  if(!list.length){wrap.classList.add('hidden');return;}
  document.getElementById('te-payee-lbl').textContent=k==='bank'?'🏦 口座を選択':'💳 カードを選択';
  document.getElementById('te-payee-chips').innerHTML=list.map(p=>`<button class="payee-chip${p.id===payeeId?' sel':''}" id="te-py-${p.id}" onclick="pickTxEditPayee('${p.id}')">${esc(p.name)}</button>`).join('');
  wrap.classList.remove('hidden');
  if(payeeId)UI.txEditPayeeId=payeeId;
}
function pickTxEditPayee(id){
  UI.txEditPayeeId=id;
  document.querySelectorAll('#te-payee-chips .payee-chip').forEach(b=>b.classList.remove('sel'));
  const el=document.getElementById('te-py-'+id);if(el)el.classList.add('sel');
}
function saveTxEdit(){
  const amount=parseAmountInput('te-amount');
  if(!amount){alert('金額を入力してください');return;}
  const memo=document.getElementById('te-memo').value;
  const memo2=document.getElementById('te-memo2').value||'';
  const date=document.getElementById('te-date').value;
  if(!date){alert('日付を選択してください');return;}
  const ledger=document.getElementById('te-ledger').value;
  const u=findTxOwner(UI.editingTxId);  // No.0モード対応
  const t=u.transactions.find(x=>x.id===UI.editingTxId);if(!t)return;
  t.amount=amount;
  t.memo=memo;t.memo2=memo2;
  t.date=date;
  t.ledger=ledger;
  t.type=UI.txEditType;
  t.iconId=UI.txEditEmoji||t.iconId||'other';
  t.emoji=t.iconId;
  t.emojiName=UI.txEditEmojiName||t.emojiName;
  if(UI.txEditType==='expense'){
    t.payKind=UI.txEditKind||'cash';
    if((t.payKind==='bank'||t.payKind==='card')&&!UI.txEditPayeeId){alert('支払い先を選択してください');return;}
    t.payeeId=UI.txEditPayeeId||null;
  } else {
    t.payKind=null;t.payeeId=null;
  }
  pushMemoHistory(u, ledger, 'memo', memo);
  pushMemoHistory(u, ledger, 'memo2', memo2);
  save();closeTxEdit();renderAll();refreshCatDetailIfOpen();
}

// ── メモ・内訳 入力履歴（ユーザーの帳簿ごとに保持。同名帳簿でもユーザーが違えば別履歴） ──
// 対象帳簿の履歴配列を取得（未初期化なら作る）。返すのは実体への参照
function memoHistOf(u, ledgerId, field){
  const l=(u.ledgers||[]).find(x=>x.id===ledgerId)||u.ledgers[0];
  if(!l)return [];
  if(!l.memoHistory)l.memoHistory={memo:[],memo2:[]};
  if(!l.memoHistory[field])l.memoHistory[field]=[];
  return l.memoHistory[field];
}
function pushMemoHistory(u, ledgerId, field, value){
  if(!value||!value.trim())return;
  value=value.trim();
  const arr=memoHistOf(u,ledgerId,field);
  const i=arr.indexOf(value);
  if(i>=0)arr.splice(i,1);
  arr.unshift(value);
  if(arr.length>10)arr.length=10;
}

function renderMemoHistory(containerId, field, inputId, u, ledgerId){
  const el=document.getElementById(containerId);
  if(!el)return;
  const arr=memoHistOf(u,ledgerId,field);
  if(!arr.length){el.innerHTML='';el.style.display='none';return;}
  el.style.display='flex';
  el.innerHTML=arr.map(v=>{
    return `<button type="button" class="memo-hist-chip" data-field="${field}" data-container="${containerId}" data-input="${inputId}" data-uid="${u.id}" data-lid="${ledgerId}" data-word="${esc(v)}" onclick="applyMemoHistory('${inputId}','${escAttr(escJs(v))}')">${esc(v)}</button>`;
  }).join('');
}

// 追加モーダルの保存先（ユーザー＋帳簿）を取得
function addModalTarget(){
  if(UI.isMainMode){
    const uid=document.getElementById('f-dest-user')?.value;
    const u=DB.users.find(x=>x.id===uid)||activeUser();
    const lid=document.getElementById('f-dest-ledger')?.value||u.ledgers[0]?.id;
    return {u, lid};
  }
  const u=activeUser();
  return {u, lid:document.getElementById('f-ledger')?.value||UI.activeLedger};
}
// 追加モーダルの内訳・メモ履歴を保存先に合わせて表示
function renderAddMemoHist(){
  const {u,lid}=addModalTarget();
  renderMemoHistory('f-memo-hist','memo','f-memo',u,lid);
  renderMemoHistory('f-memo2-hist','memo2','f-memo2',u,lid);
}
// 追加モーダルで帳簿（通常モード）を変えたとき
function onAddLedgerChange(){renderAddMemoHist();}
// 取引編集で帳簿を変えたとき
function onTxEditLedgerChange(){
  const u=findTxOwner(UI.editingTxId);
  const lid=document.getElementById('te-ledger').value;
  renderMemoHistory('te-memo-hist','memo','te-memo',u,lid);
  renderMemoHistory('te-memo2-hist','memo2','te-memo2',u,lid);
}

function applyMemoHistory(inputId, value){
  // 長押し削除の直後はタップ適用を無効化
  if(_memoLP.fired){_memoLP.fired=false;return;}
  const inp=document.getElementById(inputId);
  if(inp){inp.value=value;inp.focus();}
}

// --- メモ・内訳履歴チップ：長押しで個別削除 ---
const _memoLP={timer:null,fired:false};
function _memoChipDown(e){
  const chip=e.target.closest('.memo-hist-chip');
  if(!chip)return;
  _memoLP.fired=false;
  clearTimeout(_memoLP.timer);
  _memoLP.timer=setTimeout(()=>{
    _memoLP.fired=true;
    const word=chip.dataset.word, field=chip.dataset.field;
    if(confirm(`「${word}」を履歴から削除しますか？`)){
      const owner=DB.users.find(x=>x.id===chip.dataset.uid)||activeUser();
      const arr=memoHistOf(owner,chip.dataset.lid,field);
      const i=arr.indexOf(word);
      if(i>=0)arr.splice(i,1);
      save();
      renderMemoHistory(chip.dataset.container,field,chip.dataset.input,owner,chip.dataset.lid);
    }
  },550);
}
function _memoChipCancel(){clearTimeout(_memoLP.timer);}
document.addEventListener('touchstart',_memoChipDown,{passive:true});
document.addEventListener('touchend',_memoChipCancel);
document.addEventListener('touchmove',_memoChipCancel,{passive:true});
document.addEventListener('mousedown',_memoChipDown);
document.addEventListener('mouseup',_memoChipCancel);
// 長押し時にOS標準のコンテキストメニューを出さない
document.addEventListener('contextmenu',e=>{if(e.target.closest('.memo-hist-chip'))e.preventDefault();});

function delTxFromEdit(){
  if(!confirm('この取引を削除しますか？'))return;
  const u=findTxOwner(UI.editingTxId);  // No.0モード対応
  u.transactions=u.transactions.filter(t=>t.id!==UI.editingTxId);
  save();closeTxEdit();renderAll();refreshCatDetailIfOpen();
}

/* =========================================================
   費目 並び替え
/* =========================================================
========================================================= */
function moveCat(idx, dir){
  const cats=ensureLedgerCats(catMgrLedgerObj())[UI.catTab];
  const to=idx+dir;
  if(to<0||to>=cats.length)return;
  [cats[idx],cats[to]]=[cats[to],cats[idx]];
  save();renderCatList();
}

// --- ドラッグ＆ドロップ（PC） ---
let catDragIdx=null;
function catDragStart(e,i){
  catDragIdx=i;
  e.currentTarget.classList.add('dragging');
  e.dataTransfer.effectAllowed='move';
}
function catDragOver(e,i){
  e.preventDefault();
  e.dataTransfer.dropEffect='move';
  document.querySelectorAll('.cat-mgr-item').forEach(el=>el.classList.remove('drag-over'));
  if(i!==catDragIdx) e.currentTarget.classList.add('drag-over');
}
function catDrop(e,i){
  e.preventDefault();
  if(catDragIdx===null||catDragIdx===i)return;
  const cats=ensureLedgerCats(catMgrLedgerObj())[UI.catTab];
  const moved=cats.splice(catDragIdx,1)[0];
  cats.splice(i,0,moved);
  catDragIdx=null;
  save();renderCatList();
}
function catDragEnd(e){
  catDragIdx=null;
  document.querySelectorAll('.cat-mgr-item').forEach(el=>{
    el.classList.remove('dragging','drag-over');
  });
}

// --- タッチ並び替え（スマートフォン） ---
let touchDragIdx=null, touchStartY=0, touchClone=null;
function catTouchStart(e,i){
  if(!e.target.closest('.drag-handle'))return;
  touchDragIdx=i;
  touchStartY=e.touches[0].clientY;
  const src=e.currentTarget;
  // 視覚的クローン作成
  touchClone=src.cloneNode(true);
  const rect=src.getBoundingClientRect();
  Object.assign(touchClone.style,{
    position:'fixed',top:rect.top+'px',left:rect.left+'px',
    width:rect.width+'px',opacity:'0.85',zIndex:999,
    background:'var(--bg-card)',borderRadius:'var(--r8)',
    boxShadow:'0 4px 16px rgba(0,0,0,0.15)',pointerEvents:'none'
  });
  document.body.appendChild(touchClone);
  src.classList.add('dragging');
  e.preventDefault();
}
function catTouchMove(e){
  if(touchDragIdx===null||!touchClone)return;
  const dy=e.touches[0].clientY-touchStartY;
  touchClone.style.transform=`translateY(${dy}px)`;
  // 下にある要素を特定
  touchClone.style.display='none';
  const el=document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY);
  touchClone.style.display='';
  const target=el?.closest('.cat-mgr-item');
  document.querySelectorAll('.cat-mgr-item').forEach(x=>x.classList.remove('drag-over'));
  if(target){
    const ti=parseInt(target.dataset.idx);
    if(ti!==touchDragIdx) target.classList.add('drag-over');
  }
  e.preventDefault();
}
function catTouchEnd(e,i){
  if(touchDragIdx===null)return;
  if(touchClone){touchClone.remove();touchClone=null;}
  document.querySelectorAll('.cat-mgr-item').forEach(el=>el.classList.remove('dragging','drag-over'));
  // ドロップ先を取得
  const el=document.elementFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY);
  const target=el?.closest('.cat-mgr-item');
  if(target){
    const to=parseInt(target.dataset.idx);
    if(to!==touchDragIdx&&!isNaN(to)){
      const cats=ensureLedgerCats(catMgrLedgerObj())[UI.catTab];
      const moved=cats.splice(touchDragIdx,1)[0];
      cats.splice(to,0,moved);
      save();
    }
  }
  touchDragIdx=null;
  renderCatList();
}
let catMgrCaller=null; // 'add' | 'edit' | null

function renderCatLedgerSel(){
  const u=activeUser();
  const wrap=document.getElementById('cat-ledger-sel');
  const sel=document.getElementById('cat-ledger-select');
  if(!wrap||!sel)return;
  if(u.ledgers.length<=1){wrap.style.display='none';return;}
  wrap.style.display='block';
  sel.innerHTML=u.ledgers.map(l=>`<option value="${l.id}"${l.id===UI.catMgrLedgerId?' selected':''}>${esc(l.name)}</option>`).join('');
}
function setCatMgrLedger(id){
  UI.catMgrLedgerId=id;
  renderCatList();
  buildCatEmojiGrid('cat-emoji-grid');
  document.getElementById('nc-catname').value='';
  UI.selCatEmoji=null;
}

function openCatMgr(){
  catMgrCaller=null;
  document.getElementById('cat-back-bar').classList.add('hidden');
  document.getElementById('cat-overlay').classList.remove('hidden');
  UI.selCatEmoji=null;
  UI.catMgrLedgerId=UI.activeLedger;
  renderCatLedgerSel();
  setCatTab('expense');
}

function openCatMgrFromTx(caller){
  catMgrCaller=caller;
  const type=caller==='edit'?UI.txEditType:UI.txType;
  document.getElementById('cat-back-bar').classList.remove('hidden');
  document.getElementById('cat-overlay').classList.remove('hidden');
  UI.selCatEmoji=null;
  // isMainMode時は保存先帳簿、通常はアクティブ帳簿
  if(UI.isMainMode&&caller==='add'){
    const destLid=document.getElementById('f-dest-ledger')?.value;
    UI.catMgrLedgerId=destLid||UI.activeLedger;
  } else if(UI.isMainMode&&caller==='edit'){
    const t=activeUser().transactions.find(x=>x.id===UI.editingTxId)||findTxOwner(UI.editingTxId)?.transactions.find(x=>x.id===UI.editingTxId);
    UI.catMgrLedgerId=t?.ledger||UI.activeLedger;
  } else {
    UI.catMgrLedgerId=UI.activeLedger;
  }
  renderCatLedgerSel();
  setCatTab(type);
}

function closeCatMgr(){
  document.getElementById('cat-overlay').classList.add('hidden');
  catMgrCaller=null;
}

function closeCatMgrToTx(){
  document.getElementById('cat-overlay').classList.add('hidden');
  const caller=catMgrCaller;
  catMgrCaller=null;
  if(caller==='add'){
    buildCatGrid('cat-grid', UI.txType, UI.selEmoji, UI.selEmojiName, 'pickCat');
  } else if(caller==='edit'){
    buildCatGrid('te-cat-grid', UI.txEditType, UI.txEditEmoji, UI.txEditEmojiName, 'pickTxEditCat');
  }
}

function setCatTab(type){
  UI.catTab=type;UI.selCatEmoji=null;
  document.getElementById('cat-tab-exp').className='cat-type-tab'+(type==='expense'?' active':'');
  document.getElementById('cat-tab-inc').className='cat-type-tab'+(type==='income'?' active':'');
  renderCatList();
  buildCatEmojiGrid('cat-emoji-grid');
  document.getElementById('nc-catname').value='';
}

function renderCatList(){
  const l=catMgrLedgerObj();
  const cats=l.customCats?.[UI.catTab]||JSON.parse(JSON.stringify(UI.catTab==='income'?DEFAULT_INC_CATS:DEFAULT_EXP_CATS));
  const el=document.getElementById('cat-list-ui');
  if(!cats.length){el.innerHTML=`<div style="color:var(--text-hint);font-size:13px;padding:8px 0">費目がありません</div>`;return;}
  el.innerHTML=cats.map((c,i)=>{
    const iid=resolveIconId(c);
    const ic=CAT_ICONS[iid]||CAT_ICONS['other'];
    const color=c.color||ic.color;
    return `<div class="cat-mgr-item" data-idx="${i}" draggable="true"
      ondragstart="catDragStart(event,${i})" ondragover="catDragOver(event,${i})" ondrop="catDrop(event,${i})" ondragend="catDragEnd(event)"
      ontouchstart="catTouchStart(event,${i})" ontouchmove="catTouchMove(event)" ontouchend="catTouchEnd(event,${i})">
      <span class="drag-handle" title="ドラッグして並び替え">⠿</span>
      <div style="width:36px;height:36px;border-radius:10px;background:var(--bg-card);border:1px solid var(--border-l);display:flex;align-items:center;justify-content:center;flex:none">
        <svg viewBox="-1 -1 26 26" style="width:24px;height:24px;flex:none" fill="none" xmlns="http://www.w3.org/2000/svg">${svgColored(ic.svg,color)}</svg></div>
      <span class="cat-mgr-name">${esc(c.n)}</span>
      <div class="cat-mgr-btns">
        <button class="cat-mgr-btn" onclick="moveCat(${i},-1)" ${i===0?'disabled style="opacity:0.25"':''} title="上へ">↑</button>
        <button class="cat-mgr-btn" onclick="moveCat(${i},1)" ${i===cats.length-1?'disabled style="opacity:0.25"':''} title="下へ">↓</button>
        <button class="cat-mgr-btn" onclick="openCatEdit(${i})">✏️</button>
        <button class="cat-mgr-btn" onclick="delCat(${i})" style="color:var(--red)">🗑️</button>
      </div>
    </div>`;
  }).join('');
}

// アイコン選択グリッドの共通HTML（費目追加／費目編集で共用）
function iconGridHTML(selId, onclickOf){
  return ALL_ICON_IDS.map(iid=>{
    const ic=CAT_ICONS[iid];
    const isSel=iid===selId;
    return `<button class="isb${isSel?' sel':''}" onclick="${onclickOf(iid)}" title="${iid}">
      <div class="isb-inner" style="${isSel?`border-color:${ic.color};border-width:2px`:''}">
        <svg viewBox="-2 -2 28 28" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">${svgColored(ic.svg,ic.color)}</svg>
      </div>
    </button>`;
  }).join('');
}
function buildCatEmojiGrid(gridId){
  const el=document.getElementById(gridId);if(!el)return;
  el.innerHTML=iconGridHTML(UI.selCatEmoji, iid=>`pickCatEmoji('${iid}','${gridId}')`);
}
// アイコン選択の切替：グリッド全体を再構築せず選択マークだけ付け替える（低速端末対策）
function updateIconGridSel(gridEl, selId){
  gridEl.querySelectorAll('button.isb').forEach(b=>{
    const iid=b.title;
    const sel=iid===selId;
    b.classList.toggle('sel',sel);
    const inner=b.querySelector('.isb-inner');
    if(inner){
      if(sel){const ic=CAT_ICONS[iid];inner.style.borderColor=ic?ic.color:'';inner.style.borderWidth='2px';}
      else{inner.style.borderColor='';inner.style.borderWidth='';}
    }
  });
}
function pickCatEmoji(id,gridId){
  UI.selCatEmoji=id;
  const el=document.getElementById(gridId);
  if(el)updateIconGridSel(el,id);
}

function addCat(){
  const name=document.getElementById('nc-catname').value.trim();
  if(!name){alert('費目名を入力してください');return;}
  const iconId=UI.selCatEmoji||'other';
  ensureLedgerCats(catMgrLedgerObj())[UI.catTab].push({id:iconId,n:name});
  document.getElementById('nc-catname').value='';
  UI.selCatEmoji=null;
  save();renderCatList();buildCatEmojiGrid('cat-emoji-grid');
}

function delCat(idx){
  if(!confirm('この費目を削除しますか？'))return;
  ensureLedgerCats(catMgrLedgerObj())[UI.catTab].splice(idx,1);
  save();renderCatList();
}

function resetCats(){
  if(!confirm('費目をデフォルトに戻しますか？\n追加した費目はすべて削除されます。'))return;
  ensureLedgerCats(catMgrLedgerObj())[UI.catTab]=JSON.parse(JSON.stringify(UI.catTab==='income'?DEFAULT_INC_CATS:DEFAULT_EXP_CATS));
  save();renderCatList();
}

/* ===== 費目編集 ===== */
// カラーピッカー用プリセット色（36色：ビビッド・ミディアム・パステルの3段）
const CAT_COLOR_PRESETS=[
  // ビビッド（彩度高め）
  '#EF5350','#E91E63','#AB47BC','#7B68EE','#3F51B5',
  '#2196F3','#00BCD4','#009688','#4CAF50','#8BC34A',
  '#FFC107','#FF7043',
  // ミディアム（中間）
  '#EF9A9A','#F48FB1','#CE93D8','#B39DDB','#9FA8DA',
  '#90CAF9','#80DEEA','#80CBC4','#A5D6A7','#C5E1A5',
  '#FFE082','#FFAB91',
  // パステル（淡い）
  '#FFCDD2','#FCE4EC','#F3E5F5','#EDE7F6','#E8EAF6',
  '#E3F2FD','#E0F7FA','#E0F2F1','#E8F5E9','#F1F8E9',
  '#FFF9C4','#FBE9E7',
];

function openCatEdit(idx){
  // ensureLedgerCatsで初期化してから参照する（未カスタマイズの帳簿では
  // customCatsが無く、リストはデフォルト表示なのに✏️が無反応になっていた）
  const cats=ensureLedgerCats(catMgrLedgerObj())[UI.catTab];
  const c=cats[idx];if(!c)return;
  UI.editingCatIdx=idx;
  UI.catEditSelEmoji=resolveIconId(c);
  // カラー初期値（保存済み or デフォルト）
  UI.catEditSelColor=c.color||null;
  document.getElementById('ce-name').value=c.n;
  // 先にモーダルを表示し、重いグリッド構築は次フレームに回す（タップの反応を即時に）
  document.getElementById('cat-edit-overlay').classList.remove('hidden');
  requestAnimationFrame(()=>{
    buildCatEditEmojiGrid();
    buildCatColorUI();
  });
}
function closeCatEdit(){document.getElementById('cat-edit-overlay').classList.add('hidden');}

function buildCatColorUI(){
  const defaultColor=CAT_ICONS[UI.catEditSelEmoji]?.color||'#8D8D8D';
  const currentColor=UI.catEditSelColor||defaultColor;
  // プレビュー（ラインアートアイコンで表示）
  const prevEl=document.getElementById('ce-color-preview');
  prevEl.style.background='var(--bg-card)';
  prevEl.style.border=`2px solid ${currentColor}`;
  const prevIc=CAT_ICONS[UI.catEditSelEmoji||'other']||CAT_ICONS['other'];
  prevEl.innerHTML=`<svg viewBox="-1 -1 26 26" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">${svgColored(prevIc.svg,currentColor)}</svg>`;
  const hexEl=document.getElementById('ce-hex-input');
  if(hexEl&&document.activeElement!==hexEl) hexEl.value=currentColor;
  // OS標準カラーピッカーと同期
  const nativeEl=document.getElementById('ce-native-color');
  if(nativeEl) nativeEl.value=currentColor;
  // プリセット（3段×12色）
  const labels=['ビビッド','ミディアム','パステル'];
  const rows=[
    CAT_COLOR_PRESETS.slice(0,12),
    CAT_COLOR_PRESETS.slice(12,24),
    CAT_COLOR_PRESETS.slice(24,36),
  ];
  document.getElementById('ce-color-presets').innerHTML=rows.map((row,ri)=>`
    <div style="margin-bottom:4px">
      <div style="font-size:10px;color:var(--text-hint);margin-bottom:4px">${labels[ri]}</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">
        ${row.map(col=>{
          const isSel=currentColor.toLowerCase()===col.toLowerCase();
          return `<button onclick="onCatColorPick('${col}')" style="width:26px;height:26px;border-radius:50%;background:${col};border:${isSel?'3px solid rgba(0,0,0,0.35)':'1.5px solid rgba(0,0,0,0.12)'};cursor:pointer;flex-shrink:0;transform:${isSel?'scale(1.25)':'scale(1)'};transition:transform 0.1s"></button>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function onCatColorPick(color){
  UI.catEditSelColor=color;
  buildCatColorUI();
}

function resetCatColor(){
  UI.catEditSelColor=null;
  buildCatColorUI();
}

// ── カスタムカラー ──
// 旧: 自作キャンバス式ピッカー → 現在はOS標準の <input type="color"> を使用
// （iOSではシステムのカラーピッカーシートが開く）
function onHexInput(val){
  if(/^#[0-9a-fA-F]{6}$/.test(val)){
    onCatColorPick(val);
  }
}

/* =========================================================
   年間予測
========================================================= */
function openForecast(){
  renderForecast();
  document.getElementById('forecast-overlay').classList.remove('hidden');
}
function closeForecast(){document.getElementById('forecast-overlay').classList.add('hidden');}

function _forecastFromTxs(txs){
  const months={};
  txs.forEach(t=>{
    const d=new Date(t.date);
    if(isNaN(d))return;
    const key=d.getFullYear()+'-'+d.getMonth();
    if(!months[key])months[key]={inc:0,exp:0};
    if(t.type==='income')months[key].inc+=t.amount;
    else months[key].exp+=t.amount;
  });
  const keys=Object.keys(months);
  const mCount=keys.length;
  if(mCount===0)return{months:0,incY:0,expY:0,balY:0,incAvg:0,expAvg:0,balAvg:0};
  let incSum=0,expSum=0;
  keys.forEach(k=>{incSum+=months[k].inc;expSum+=months[k].exp;});
  const incAvg=incSum/mCount, expAvg=expSum/mCount;
  return{
    months:mCount,
    incAvg:Math.round(incAvg), expAvg:Math.round(expAvg), balAvg:Math.round(incAvg-expAvg),
    incY:Math.round(incAvg*12), expY:Math.round(expAvg*12), balY:Math.round((incAvg-expAvg)*12)
  };
}

function _forecastCard(title, sub, fc, accent){
  const balColor=fc.balY>=0?'var(--blue)':'var(--red)';
  return `<div style="border:1.5px solid var(--border);border-radius:var(--r12);padding:14px;margin-bottom:12px;background:var(--bg-card)">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
      <span style="width:8px;height:8px;border-radius:50%;background:${accent};flex:none"></span>
      <span style="font-size:15px;font-weight:700">${title}</span>
    </div>
    <div style="font-size:11px;color:var(--text-hint);margin-bottom:10px;padding-left:16px">${sub} ・ 実績${fc.months}ヶ月から予測</div>
    ${fc.months===0
      ? `<div style="font-size:13px;color:var(--text-hint);padding:6px 0 2px 16px">まだ取引データがありません</div>`
      : `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center">
          <div><div style="font-size:10px;color:var(--text-hint)">年間収入</div><div style="font-size:14px;font-weight:700;color:var(--blue)">${fmt(fc.incY)}</div></div>
          <div><div style="font-size:10px;color:var(--text-hint)">年間支出</div><div style="font-size:14px;font-weight:700;color:var(--red)">${fmt(fc.expY)}</div></div>
          <div><div style="font-size:10px;color:var(--text-hint)">年間収支</div><div style="font-size:14px;font-weight:700;color:${balColor}">${fc.balY>=0?'+':'-'}${fmt(Math.abs(fc.balY))}</div></div>
        </div>
        <div style="margin-top:8px;padding-top:8px;border-top:1px dashed var(--border);font-size:11px;color:var(--text-sub);text-align:center">
          月平均：収入 ${fmt(fc.incAvg)} / 支出 ${fmt(fc.expAvg)} / 収支 ${fc.balAvg>=0?'+':'-'}${fmt(Math.abs(fc.balAvg))}
        </div>`
    }
  </div>`;
}

const FC_PALETTE=['#5B9BD5','#FF7043','#66BB6A','#AB47BC','#26C6DA','#F5A623','#EC407A','#78909C'];
// 1ユーザー分の予測HTML（総合＋帳簿別）
function userForecastHTML(u){
  let h=`<div style="font-size:12px;font-weight:700;color:var(--text-sub);margin:4px 0 8px">${esc(u.name)} の年間予測</div>`;
  h+=_forecastCard('総合（全帳簿）', '帳簿すべての合算', _forecastFromTxs(u.transactions), 'var(--pri)');
  u.ledgers.forEach((lg,i)=>{
    h+=_forecastCard(lg.name, '帳簿別', _forecastFromTxs(u.transactions.filter(t=>t.ledger===lg.id)), FC_PALETTE[i%FC_PALETTE.length]);
  });
  return h;
}
function renderForecast(){
  const body=document.getElementById('forecast-body');
  let html='';
  if(UI.isMainMode&&DB.users.length>=2){
    html+=graphUserChipsHTML('setForecastUser');
    if(gUser!=='all'&&!DB.users.some(u=>u.id===gUser))gUser='all';
    if(gUser==='all'){
      const allTxs=[];DB.users.forEach(u=>allTxs.push(...u.transactions));
      html+=`<div style="font-size:12px;font-weight:700;color:var(--text-sub);margin:4px 0 8px">全体の年間予測</div>`;
      html+=_forecastCard('全体（全ユーザー合算）', '全ユーザー合算', _forecastFromTxs(allTxs), 'var(--pri)');
      DB.users.forEach((u,i)=>{
        html+=_forecastCard(u.name, 'ユーザー別', _forecastFromTxs(u.transactions), FC_PALETTE[i%FC_PALETTE.length]);
      });
    } else {
      html+=userForecastHTML(DB.users.find(x=>x.id===gUser)||DB.users[0]);
    }
  } else {
    html+=userForecastHTML(activeUser());
  }
  body.innerHTML=html;
}
function setForecastUser(id){gUser=id;renderForecast();}

function buildCatEditEmojiGrid(){
  document.getElementById('cat-edit-emoji-grid').innerHTML=iconGridHTML(UI.catEditSelEmoji, iid=>`pickCatEditEmoji('${iid}')`);
}
function pickCatEditEmoji(id){
  UI.catEditSelEmoji=id;
  // デフォルト色未設定時はアイコン変更に追従
  if(!UI.catEditSelColor) buildCatColorUI();
  const el=document.getElementById('cat-edit-emoji-grid');
  if(el)updateIconGridSel(el,id);
}

function saveCatEdit(){
  const name=document.getElementById('ce-name').value.trim();
  if(!name){alert('費目名を入力してください');return;}
  const defaultColor=CAT_ICONS[UI.catEditSelEmoji]?.color||'#8D8D8D';
  const cat={id:UI.catEditSelEmoji||'other',n:name};
  if(UI.catEditSelColor && UI.catEditSelColor.toLowerCase()!==defaultColor.toLowerCase()){
    cat.color=UI.catEditSelColor;
  }
  ensureLedgerCats(catMgrLedgerObj())[UI.catTab][UI.editingCatIdx]=cat;
  save();closeCatEdit();renderCatList();
}

/* =========================================================
   バージョン管理・更新通知
/* =========================================================
========================================================= */
const APP_VERSION='3.12.0';  // ← 更新するたびここを上げる（sw.jsのCACHE_NAMEも合わせて上げる）
const VER_KEY='kb-app-ver';

function showToast(msg, type='', duration=3000){
  const el=document.getElementById('toast');
  el.textContent=msg;
  el.className='toast'+(type?' '+type:'');
  requestAnimationFrame(()=>{
    el.classList.add('show');
    setTimeout(()=>el.classList.remove('show'), duration);
  });
}

function checkVersion(){
  const prev=localStorage.getItem(VER_KEY);
  localStorage.setItem(VER_KEY, APP_VERSION);
  const el=document.getElementById('ver-lbl');
  if(el) el.textContent=`v${APP_VERSION}`;
  if(prev && prev!==APP_VERSION){
    setTimeout(()=>{
      showToast(`🎉 v${APP_VERSION} に更新されました`, 'updated', 4000);
    }, 800);
  }
}

async function hardReload(){
  // SWとキャッシュを破棄して最新版を取得（データはlocalStorageなので消えない）
  try{
    if('serviceWorker' in navigator){
      const regs=await navigator.serviceWorker.getRegistrations();
      await Promise.all(regs.map(r=>r.unregister()));
    }
    if(window.caches){
      const keys=await caches.keys();
      await Promise.all(keys.map(k=>caches.delete(k)));
    }
  }catch(e){}
  location.reload();
}

function openSettings(){
  buildExportLedgerList();
  updateSecurityUI();
  updateMainUserSettingUI();
  updateBackupSectionUI();
  const el=document.getElementById('ver-lbl');
  if(el) el.textContent=`v${APP_VERSION}`;
  document.getElementById('settings-overlay').classList.remove('hidden');
}

// バックアップ／CSVセクションの出し分け：No.0（管理者）=全体バックアップのみ、各ユーザー=個人バックアップ＋CSV
function updateBackupSectionUI(){
  const main=UI.isMainMode;
  const set=(id,show)=>{const el=document.getElementById(id); if(el)el.style.display=show?'block':'none';};
  set('backup-user-section', !main);   // 個人バックアップ：各ユーザーのみ
  set('backup-full-section',  main);   // 全体バックアップ：No.0のみ
  set('csv-export-section',  !main);   // CSV：各ユーザーのみ
  set('csv-import-section',  !main);
}

function updateMainUserSettingUI(){
  const sec=document.getElementById('main-user-setting');
  if(!sec)return;
  // ユーザーが2人以上のときのみ表示
  sec.style.display=DB.users.length>=2?'block':'none';
  const chk=document.getElementById('setting-main-enabled');
  const track=document.getElementById('smu-track');
  const thumb=document.getElementById('smu-thumb');
  const nameInp=document.getElementById('main-user-name-inp');
  const nameRow=document.getElementById('main-user-name-row');
  if(!chk)return;
  const en=DB.mainUser.enabled;
  chk.checked=en;
  if(track)track.style.background=en?'var(--pri)':'var(--border)';
  if(thumb)thumb.style.left=en?'23px':'3px';
  if(nameInp)nameInp.value=DB.mainUser.name||'マスター';
  if(nameRow)nameRow.style.display=en?'flex':'none';
  // 起動時No.0トグル（メインユーザー有効時のみ表示）
  const startupRow=document.getElementById('main-user-startup-row');
  const sChk=document.getElementById('setting-startup-main');
  const sTrack=document.getElementById('sms-track');
  const sThumb=document.getElementById('sms-thumb');
  if(startupRow)startupRow.style.display=en?'flex':'none';
  const su=!!DB.mainUser.startupMain;
  if(sChk)sChk.checked=su;
  if(sTrack)sTrack.style.background=su?'var(--pri)':'var(--border)';
  if(sThumb)sThumb.style.left=su?'23px':'3px';
  // No.0のカラー選択（メインユーザー有効時のみ表示）
  const colorRow=document.getElementById('main-user-color-row');
  if(colorRow)colorRow.style.display=en?'block':'none';
  if(en)buildMainThemePicker();
}

// No.0（管理ユーザー）のテーマカラー選択
function buildMainThemePicker(){
  const grid=document.getElementById('main-theme-grid');
  if(!grid)return;
  const cur=DB.mainUser.theme||'indigo';
  grid.innerHTML=themesInDisplayOrder().map(t=>
    `<div class="theme-swatch-sm${t.id===cur?' active':''}" style="background:linear-gradient(135deg,${t.g1||t.pri},${t.g2||t.prid})" onclick="pickMainTheme('${t.id}')" title="${t.name}"><div class="check">✓</div></div>`
  ).join('');
}
function pickMainTheme(id){
  DB.mainUser.theme=id;
  save();
  buildMainThemePicker();
  // No.0表示中ならテーマを即反映
  if(UI.isMainMode){applyTheme(id);renderTopbar();}
}

function toggleMainUser(){
  const chk=document.getElementById('setting-main-enabled');
  DB.mainUser.enabled=chk?.checked||false;
  // 無効にしたときメインモード中なら通常ユーザーに戻す
  if(!DB.mainUser.enabled&&UI.isMainMode){
    UI.isMainMode=false;
    renderAll();
  }
  save();updateMainUserSettingUI();renderUserList();
}

function toggleStartupMain(){
  const chk=document.getElementById('setting-startup-main');
  DB.mainUser.startupMain=chk?.checked||false;
  save();updateMainUserSettingUI();
}

function saveMainUserName(){
  const v=document.getElementById('main-user-name-inp')?.value.trim();
  if(v)DB.mainUser.name=v;
  save();renderUserList();
  if(UI.isMainMode)renderTopbar();
}

/* =========================================================
   セキュリティ: PIN・暗号化・自動ロック
/* =========================================================
========================================================= */
const SEC={
  PIN_KEY:'kb-pin-v1',       // PINハッシュ保存キー
  CFG_KEY:'kb-sec-cfg',      // セキュリティ設定キー
  MAX_FAIL:5,                // 失敗許容回数
  LOCKOUT_SEC:30,            // ロックアウト秒数
};

let secState={
  pinHash:null,              // PINハッシュ（hex）
  pinSalt:null,              // ソルト（hex）。nullなら旧形式（無ソルトSHA-256）
  autoLockSec:60,            // 自動ロック秒数（-1=しない）
  failCount:0,
  lockedUntil:0,             // ロックアウト解除時刻（ms）
  lastActivity:Date.now(),
  isLocked:false,
  setupStep:0,               // 0=入力なし 1=確認入力
  setupFirst:'',
  pinInput:'',
  mode:'unlock'              // 'unlock'|'setup'|'change'|'disable'
};

// --- SHA-256ハッシュ ---
async function sha256(str){
  const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

// --- ソルト付きPINハッシュ（PBKDF2: オフライン総当たり対策） ---
function makeSalt(){
  return Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b=>b.toString(16).padStart(2,'0')).join('');
}
async function pinHashOf(pin,salt){
  const km=await crypto.subtle.importKey('raw',new TextEncoder().encode(pin),'PBKDF2',false,['deriveBits']);
  const bits=await crypto.subtle.deriveBits(
    {name:'PBKDF2',hash:'SHA-256',salt:new TextEncoder().encode(salt),iterations:150000},km,256);
  return Array.from(new Uint8Array(bits)).map(b=>b.toString(16).padStart(2,'0')).join('');
}
// PIN照合。旧形式（無ソルト）で一致した場合はソルト付きへ自動移行
async function verifyPin(pin){
  if(secState.pinSalt){
    return (await pinHashOf(pin,secState.pinSalt))===secState.pinHash;
  }
  const ok=(await sha256(pin))===secState.pinHash;
  if(ok){
    secState.pinSalt=makeSalt();
    secState.pinHash=await pinHashOf(pin,secState.pinSalt);
    saveSecCfg();
  }
  return ok;
}

// --- セキュリティ設定の保存・読込 ---
function loadSecCfg(){
  try{
    const d=JSON.parse(localStorage.getItem(SEC.CFG_KEY)||'{}');
    secState.pinHash=d.pinHash||null;
    secState.pinSalt=d.pinSalt||null;
    secState.autoLockSec=d.autoLockSec??60;
    secState.failCount=d.failCount||0;
    secState.lockedUntil=d.lockedUntil||0;
  }catch(e){}
}
function saveSecCfg(){
  localStorage.setItem(SEC.CFG_KEY,JSON.stringify({
    pinHash:secState.pinHash,
    pinSalt:secState.pinSalt,
    autoLockSec:secState.autoLockSec,
    failCount:secState.failCount,
    lockedUntil:secState.lockedUntil
  }));
}


// --- PINロック画面の表示制御 ---
function showPinScreen(mode='unlock'){
  secState.mode=mode;
  secState.pinInput='';
  secState.setupStep=0;
  secState.setupFirst='';
  const screen=document.getElementById('pin-screen');
  screen.classList.remove('hidden');
  // テーマカラーのグラデーション背景
  const t=getTheme(secState.pinHash?currentTheme():'green');
  screen.style.background=`linear-gradient(160deg,${t.g1||t.pri} 0%,${t.g2||t.prid} 100%)`;
  document.body.classList.add('locked');
  secState.isLocked=true;
  _updatePinUI();
}
function hidePinScreen(){
  document.getElementById('pin-screen').classList.add('hidden');
  document.body.classList.remove('locked');
  secState.isLocked=false;
  secState.pinInput='';
  secState.lastActivity=Date.now();
}

function _updatePinUI(){
  const dots=document.getElementById('pin-dots');
  const sub=document.getElementById('pin-sub');
  const title=document.getElementById('pin-title');
  const forgot=document.getElementById('pin-forgot');
  const setupStep=document.getElementById('pin-setup-step');

  // ドット更新
  for(let i=0;i<4;i++){
    const d=document.getElementById('pd'+i);
    d.className='pin-dot'+(i<secState.pinInput.length?' filled':'');
  }

  // ロックアウト中
  const now=Date.now();
  if(secState.lockedUntil>now){
    const rem=Math.ceil((secState.lockedUntil-now)/1000);
    sub.textContent=`${rem}秒後に再試行できます`;
    setTimeout(_updatePinUI,1000);
    return;
  }

  if(secState.mode==='unlock'){
    title.textContent='PINを入力';
    const rem=SEC.MAX_FAIL-secState.failCount;
    sub.textContent=secState.failCount>0?`残り${rem}回`:'';
    forgot.classList.toggle('hidden',secState.failCount<3);
    setupStep.classList.add('hidden');
  } else if(secState.mode==='setup'||secState.mode==='change'){
    const isChange=secState.mode==='change';
    if(secState.setupStep===0){
      title.textContent=isChange?'新しいPINを入力':'PINを設定';
      sub.textContent='4桁のPINを入力してください';
      setupStep.classList.add('hidden');
    } else {
      title.textContent='もう一度入力';
      sub.textContent='確認のため同じPINを入力してください';
    }
    forgot.classList.add('hidden');
  } else if(secState.mode==='disable'){
    title.textContent='現在のPINを入力';
    sub.textContent='PINを解除するには現在のPINが必要です';
    forgot.classList.add('hidden');
    setupStep.classList.add('hidden');
  }
}

// --- キー入力 ---
function pinKey(k){
  const now=Date.now();
  if(secState.lockedUntil>now)return;
  if(secState.pinInput.length>=4)return;
  secState.pinInput+=k;
  _updatePinUI();
  if(secState.pinInput.length===4) setTimeout(_pinSubmit,120);
}
function pinDel(){
  secState.pinInput=secState.pinInput.slice(0,-1);
  _updatePinUI();
}

async function _pinSubmit(){
  const pin=secState.pinInput;

  if(secState.mode==='unlock'){
    if(await verifyPin(pin)){
      secState.failCount=0;secState.lockedUntil=0;
      saveSecCfg();hidePinScreen();
    } else {
      secState.failCount++;
      if(secState.failCount>=SEC.MAX_FAIL){
        secState.lockedUntil=Date.now()+SEC.LOCKOUT_SEC*1000;
        secState.failCount=0;
      }
      saveSecCfg();
      // エラーアニメーション
      for(let i=0;i<4;i++)document.getElementById('pd'+i).className='pin-dot error';
      secState.pinInput='';
      setTimeout(_updatePinUI,500);
    }

  } else if(secState.mode==='setup'||secState.mode==='change'){
    if(secState.setupStep===0){
      secState.setupFirst=pin;secState.setupStep=1;secState.pinInput='';_updatePinUI();
    } else {
      if(pin===secState.setupFirst){
        secState.pinSalt=makeSalt();
        secState.pinHash=await pinHashOf(pin,secState.pinSalt);
        secState.failCount=0;secState.lockedUntil=0;
        saveSecCfg();closePinSetup();hidePinScreen();
        updateSecurityUI();alert('PINを設定しました');
      } else {
        for(let i=0;i<4;i++)document.getElementById('pd'+i).className='pin-dot error';
        secState.pinInput='';secState.setupStep=0;secState.setupFirst='';
        setTimeout(()=>{_updatePinUI();document.getElementById('pin-sub').textContent='PINが一致しません。最初から入力してください';},500);
      }
    }

  } else if(secState.mode==='disable'){
    if(await verifyPin(pin)){
      secState.pinHash=null;secState.pinSalt=null;secState.failCount=0;secState.lockedUntil=0;
      saveSecCfg();closePinSetup();hidePinScreen();
      updateSecurityUI();alert('PINロックを解除しました');
    } else {
      for(let i=0;i<4;i++)document.getElementById('pd'+i).className='pin-dot error';
      secState.pinInput='';
      setTimeout(_updatePinUI,500);
    }
  }
}

function pinForgot(){
  if(!confirm('PINを忘れた場合、全データを削除して初期化します。よろしいですか？'))return;
  localStorage.clear();
  location.reload();
}

// --- PIN設定UI ---
function openPinSetup(){
  const body=document.getElementById('pin-setup-body');
  const hasPIN=!!secState.pinHash;
  if(hasPIN){
    body.innerHTML=`
      <p style="font-size:14px;color:var(--text-sub);margin-bottom:16px">現在PINロックが設定されています。</p>
      <button class="submit-btn" onclick="startPinChange()" style="margin-bottom:10px">🔄 PINを変更する</button>
      <button class="submit-btn" onclick="startPinDisable()" style="background:var(--red)">🔓 PINロックを解除する</button>
    `;
  } else {
    body.innerHTML=`
      <p style="font-size:14px;color:var(--text-sub);margin-bottom:16px">4桁のPINを設定するとアプリ起動時にロックがかかります。</p>
      <button class="submit-btn" onclick="startPinSetupFlow()">🔐 PINを設定する</button>
    `;
  }
  document.getElementById('pin-setup-overlay').classList.remove('hidden');
}
function closePinSetup(){document.getElementById('pin-setup-overlay').classList.add('hidden');}
function startPinSetupFlow(){closePinSetup();showPinScreen('setup');}
function startPinChange(){closePinSetup();showPinScreen('change');}
function startPinDisable(){closePinSetup();showPinScreen('disable');}

function updateSecurityUI(){
  const hasPIN=!!secState.pinHash;
  const lbl=document.getElementById('pin-status-lbl');
  const btn=document.getElementById('pin-toggle-btn');
  const row=document.getElementById('auto-lock-row');
  if(lbl)lbl.textContent=hasPIN?'設定済み':'未設定';
  if(btn){btn.textContent=hasPIN?'変更・解除':'設定する';}
  if(row)row.style.display=hasPIN?'flex':'none';
  const sel=document.getElementById('auto-lock-sel');
  if(sel)sel.value=String(secState.autoLockSec);
}

function saveAutoLock(){
  secState.autoLockSec=parseInt(document.getElementById('auto-lock-sel').value);
  saveSecCfg();
}

// --- 自動ロック ---
function touchActivity(){
  secState.lastActivity=Date.now();
}
function checkAutoLock(){
  if(!secState.pinHash||secState.isLocked||secState.autoLockSec===-1)return;
  if(Date.now()-secState.lastActivity>secState.autoLockSec*1000){
    showPinScreen('unlock');
  }
}
// バックグラウンド復帰時にロック
document.addEventListener('visibilitychange',()=>{
  if(document.visibilityState==='visible'&&secState.pinHash&&!secState.isLocked){
    if(secState.autoLockSec===0||(secState.autoLockSec>0&&Date.now()-secState.lastActivity>secState.autoLockSec*1000)){
      showPinScreen('unlock');
    }
  }
});
// タッチ・クリックで最終操作時刻を更新
document.addEventListener('touchstart',touchActivity,{passive:true});
document.addEventListener('mousedown',touchActivity);
// 30秒ごとに自動ロックチェック
setInterval(checkAutoLock,30000);

/* =========================================================
   タブ切り替え
/* =========================================================
========================================================= */
let currentTab='home';

function switchTab(tab){
  currentTab=tab;
  document.querySelectorAll('.tab-page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  const page=document.getElementById('tab-'+tab);
  const btn=document.getElementById('navBtn-'+tab);
  if(page)page.classList.add('active');
  if(btn)btn.classList.add('active');
  if(tab==='graph')renderGraphTab();
  // グラフタブでは上部の帳簿バーを隠す（グラフ内に帳簿チップがあるため二重表示を防ぐ）
  const lb=document.getElementById('ledger-bar');
  if(lb)lb.style.display=(tab==='graph')?'none':'';
}

/* =========================================================
   グラフタブ
/* =========================================================
========================================================= */
let barMode='both';
let catGraphType='expense';
let gSelY=null, gSelM=null; // グラフタブで選択中の月（ホームの表示月には影響しない）
let gUser='all'; // No.0モードでグラフ/予測に表示するユーザー（'all'=全体合算 or ユーザーid）
let gLedger='all'; // グラフタブで表示中の帳簿（'all'=全帳簿 or 帳簿id）。単一ユーザーのときのみ有効

// 対象取引 [{t,usr}] を返す。userFilter: 'all'/userId（No.0のみ）。ledgerFilter: 帳簿id（指定時のみ絞り込み）
function scopeTxs(userFilter, ledgerFilter){
  let users;
  if(!UI.isMainMode){ users=[activeUser()]; }
  else { users=(userFilter&&userFilter!=='all')?DB.users.filter(u=>u.id===userFilter):DB.users; }
  const out=[];
  users.forEach(u=>u.transactions.forEach(t=>{
    if(ledgerFilter && t.ledger!==ledgerFilter)return;
    out.push({t,usr:u});
  }));
  return out;
}
// グラフタブの対象取引（gUser＋gLedgerを反映）。帳簿フィルタは単一ユーザーのときだけ効く
function graphScope(){
  const single = !UI.isMainMode || (gUser!=='all');
  const lf = (single && gLedger && gLedger!=='all') ? gLedger : null;
  return scopeTxs(gUser, lf);
}
// 帳簿チップを出す対象ユーザー（通常=activeUser、No.0で特定ユーザー選択時=そのユーザー）。なければnull
function ledgerScope(){
  if(!UI.isMainMode)return activeUser();
  if(gUser!=='all')return DB.users.find(x=>x.id===gUser)||null;
  return null;
}
// No.0モードのユーザー選択チップ（全体＋各ユーザー）。通常モードや1人のときは空
function graphUserChipsHTML(selectFn){
  if(!UI.isMainMode||DB.users.length<2)return '';
  if(gUser!=='all'&&!DB.users.some(u=>u.id===gUser))gUser='all'; // 削除済みidの保険
  const chip=(id,label)=>`<button class="guser-chip${gUser===id?' active':''}" onclick="${selectFn}('${esc(id)}')">${esc(label)}</button>`;
  return `<div class="guser-chips">${chip('all','全体')}${DB.users.map(u=>chip(u.id,u.name)).join('')}</div>`;
}

function setBarMode(m){
  barMode=m;
  ['both','exp','inc'].forEach(x=>{
    document.getElementById('gtt-'+x).className='gtt-btn'+(m===x?' active':'');
  });
  renderBarChart();
}
function setCatGraphType(t){
  catGraphType=t;
  document.getElementById('gcat-exp').className='gtt-btn'+(t==='expense'?' active':'');
  document.getElementById('gcat-inc').className='gtt-btn'+(t==='income'?' active':'');
  renderDonutAndList();
  renderPayBreakdown();
}

function renderGraphTab(){
  // タブを開くたびにホームの表示月へ同期（以降の月◀▶・バータップはホームに影響しない）
  gSelY=UI.year; gSelM=UI.month;
  // 帳簿の初期値：通常モードは現在の帳簿、No.0は全帳簿
  gLedger = UI.isMainMode ? 'all' : UI.activeLedger;
  renderGraphUserChips();
  renderGraphLedgerChips();
  renderGraphMonthLabel();
  renderBarChart();
  renderDonutAndList();
  renderPayBreakdown();
}
// No.0モード：グラフタブのユーザー選択チップ
function renderGraphUserChips(){
  const el=document.getElementById('graph-user-chips');
  if(!el)return;
  el.innerHTML=graphUserChipsHTML('setGraphUser');
  el.style.display=(UI.isMainMode&&DB.users.length>=2)?'block':'none';
}
function setGraphUser(id){
  gUser=id;
  gLedger='all';            // ユーザーを変えたら帳簿は全帳簿に戻す
  renderGraphUserChips();
  renderGraphLedgerChips();
  renderBarChart();
  renderDonutAndList();
  renderPayBreakdown();
}
// グラフタブの帳簿選択チップ（対象ユーザーが帳簿2つ以上のときだけ表示）
function renderGraphLedgerChips(){
  const el=document.getElementById('graph-ledger-chips');
  if(!el)return;
  const u=ledgerScope();
  const ledgers=u?(u.ledgers||[]):[];
  if(ledgers.length<2){el.style.display='none';el.innerHTML='';return;}
  el.style.display='block';
  const chip=(id,label)=>`<button class="guser-chip${gLedger===id?' active':''}" onclick="setGraphLedger('${esc(id)}')">📒 ${esc(label)}</button>`;
  el.innerHTML=`<div class="guser-chips">${chip('all','全帳簿')}${ledgers.map(l=>chip(l.id,l.name)).join('')}</div>`;
}
function setGraphLedger(id){
  gLedger=id;
  renderGraphLedgerChips();
  renderBarChart();
  renderDonutAndList();
  renderPayBreakdown();
}

// グラフタブの月◀▶ナビ（前月/翌月）。ホームの表示月(UI.year/month)は変えない
function gChangeMonth(d){
  let y=(gSelY??UI.year), m=(gSelM??UI.month)+d;
  if(m<0){m=11;y--;} if(m>11){m=0;y++;}
  gSelY=y;gSelM=m;
  renderGraphMonthLabel();
  renderBarChart();
  renderDonutAndList();
  renderPayBreakdown();
}
function renderGraphMonthLabel(){
  const y=(gSelY??UI.year), m=(gSelM??UI.month);
  const last=new Date(y,m+1,0).getDate();
  const lbl=document.getElementById('graph-month-label');
  const rng=document.getElementById('graph-month-range');
  if(lbl)lbl.textContent=`${m+1}月`;
  if(rng)rng.textContent=`${m+1}.1 - ${m+1}.${last}`;
}
// グラフタブの支払別（請求ベース）。支出のときだけ表示
function renderPayBreakdown(){
  const el=document.getElementById('graph-pay-breakdown');
  const sec=document.getElementById('graph-pay-section');
  if(!el)return;
  if(catGraphType!=='expense'){if(sec)sec.style.display='none';el.innerHTML='';return;}
  if(sec)sec.style.display='';
  const {total,payItems,useItems}=payBreakdownFor(gSelY??UI.year, gSelM??UI.month, graphScope());
  el.innerHTML=(payItems.length||useItems.length)
    ? _chartRows(payItems,total)+_chartRows(useItems,total)
    : `<div class="empty-msg" style="padding:8px"><span>支払いデータなし</span></div>`;
}

/* ---- 月次棒グラフ ---- */
function renderBarChart(){
  const yr=(gSelY??UI.year);
  const now=new Date();
  const scope=graphScope();
  // 表示年の1月〜12月（請求ベース：収入=取引日、支出=effectiveExpDate）
  const data=[];
  for(let m=0;m<12;m++){
    const mk=`${yr}-${String(m+1).padStart(2,'0')}`;
    let inc=0,exp=0;
    scope.forEach(({t,usr})=>{
      if(t.type==='income'){if(t.date.startsWith(mk))inc+=t.amount;}
      else if(effectiveExpDate(t,usr).startsWith(mk))exp+=t.amount;
    });
    data.push({y:yr,m,inc,exp,label:`${m+1}`});
  }

  const maxVal=Math.max(...data.map(d=>Math.max(barMode!=='exp'?d.inc:0,barMode!=='inc'?d.exp:0)),1);
  const maxH=110;

  const el=document.getElementById('bar-chart');
  el.innerHTML=data.map(d=>{
    const isToday=d.y===now.getFullYear()&&d.m===now.getMonth();
    const isSel=d.y===gSelY&&d.m===gSelM;
    const incH=barMode!=='exp'?Math.max(Math.round(d.inc/maxVal*maxH),d.inc?2:0):0;
    const expH=barMode!=='inc'?Math.max(Math.round(d.exp/maxVal*maxH),d.exp?2:0):0;
    const cls='bar-group'+(isToday?' cur':'')+(isSel?' sel':'');
    return `<div class="${cls}" onclick="selectBarMonth(${d.y},${d.m})">
      <div class="bar-cols">
        ${barMode!=='exp'?`<div class="bar-col inc-col" style="height:${incH}px"></div>`:''}
        ${barMode!=='inc'?`<div class="bar-col exp-col" style="height:${expH}px"></div>`:''}
      </div>
      <div class="bar-month">${d.label}</div>
    </div>`;
  }).join('');

  updateBarSummary(data);
}

// 棒グラフのタップ：グラフタブ内の選択月（ドーナツ・支払別）だけ変更し、ホームには影響しない
function selectBarMonth(y,m){
  gSelY=y;gSelM=m;
  renderGraphMonthLabel();
  renderBarChart();
  renderDonutAndList();
  renderPayBreakdown();
}

function updateBarSummary(data){
  const cur=data.find(d=>d.y===gSelY&&d.m===gSelM)||data[data.length-1];
  const lbl=document.getElementById('bar-sel-label');
  if(lbl&&cur){
    const bal=cur.inc-cur.exp;
    const sign=bal>=0?'+':'';
    lbl.innerHTML=`<span style="font-weight:700;color:var(--text)">${cur.m+1}月</span>　<span style="color:#3B82C4">収入 ${fmt(cur.inc)}</span>　<span style="color:var(--red)">支出 ${fmt(cur.exp)}</span>　<span style="color:${bal>=0?'var(--pri)':'var(--red)'}">残高 ${sign}${fmt(bal)}</span>`;
  }
}

/* ---- ドーナツ＋費目別リスト ---- */

// 費目名から表示色を解決：帳簿のカスタム費目色 > アイコン標準色
// （費目管理でカラーを変えると、ドーナツ・棒グラフ・アイコンが全て連動する）
// prefLedgerId: 表示中の帳簿。同名費目が複数帳簿にある場合、その帳簿の色を優先する
// ※「カスタム色を持つ定義」を探し切るのが重要：No.0の全体表示などでは同名費目が
//   複数ユーザー・複数帳簿にあり、色未設定の定義に先に当たった時点で打ち切ると
//   別のユーザー・帳簿で設定した色が一切反映されなくなる
function catColorOf(name, iid, prefLedgerId){
  const ic=CAT_ICONS[iid]||CAT_ICONS['other'];
  const users=UI.isMainMode?DB.users:[activeUser()];
  const customIn=l=>{
    const cc=l.customCats;if(!cc)return null;
    for(const arr of [cc.expense||[],cc.income||[]]){
      const c=arr.find(x=>x.n===name);
      if(c&&c.color)return c.color;   // カスタム色を持つ定義だけを採用
    }
    return null;
  };
  // 表示中の帳簿にカスタム色があれば最優先
  if(prefLedgerId){
    for(const u of users){
      const l=(u.ledgers||[]).find(x=>x.id===prefLedgerId);
      if(l){const col=customIn(l);if(col)return col;}
    }
  }
  // どこかの帳簿にカスタム色があればそれを使う
  for(const u of users)for(const l of (u.ledgers||[])){
    const col=customIn(l);if(col)return col;
  }
  return ic.color;
}

function renderDonutAndList(){
  const yy=(gSelY??UI.year), mm=(gSelM??UI.month);
  const mk=`${yy}-${String(mm+1).padStart(2,'0')}`;
  // 請求ベース：支出はeffectiveExpDate（カードは請求月）、収入は取引日で選択月分を抽出
  const txs=graphScope().filter(({t,usr})=>{
    if(t.type!==catGraphType)return false;
    return catGraphType==='income'?t.date.startsWith(mk):effectiveExpDate(t,usr).startsWith(mk);
  }).map(x=>x.t);

  const total=txs.reduce((s,t)=>s+t.amount,0);
  document.getElementById('donut-total').textContent=fmt(total);
  document.getElementById('donut-lbl').textContent=catGraphType==='expense'?'支出合計':'収入合計';

  // 費目別集計（費目名で括る。アイコンIDは共用できるためIDだと別費目が合算される）
  const map={};
  txs.forEach(t=>{
    const iid=txIconId(t);
    const ic=CAT_ICONS[iid]||CAT_ICONS['other'];
    const key=t.emojiName||iid;
    map[key]=map[key]||{name:t.emojiName||ic.emoji||iid,color:ic.color,svg:ic.svg,iid,amt:0};
    map[key].amt+=t.amount;
  });
  const items=Object.values(map).sort((a,b)=>b.amt-a.amt).slice(0,8);
  const prefLedger=(gLedger&&gLedger!=='all')?gLedger:null;
  items.forEach(v=>{v.color=catColorOf(v.name,v.iid,prefLedger);});  // カスタム費目色を反映（表示中の帳簿優先）

  // ドーナツ SVG
  renderDonut(items, total);

  // 凡例
  const leg=document.getElementById('donut-legend');
  leg.innerHTML=items.slice(0,6).map((v,i)=>`
    <div class="legend-row">
      <div class="legend-dot" style="background:${v.color}"></div>
      <span class="legend-name">${esc(v.name)}</span>
      <span class="legend-pct">${total?Math.round(v.amt/total*100):0}%</span>
    </div>`).join('');

  // 費目別リスト（タップでその費目の明細を開く）
  const list=document.getElementById('cat-sum-list');
  if(!items.length){list.innerHTML=`<div class="empty-msg" style="padding:12px">データなし</div>`;return;}
  list.innerHTML=items.map((v,i)=>`
    <div class="cat-sum-item" onclick="openCatDetail('${escAttr(escJs(v.name))}')" style="cursor:pointer">
      <div style="width:40px;height:40px;border-radius:11px;background:var(--bg-card);border:1px solid var(--border-l);display:flex;align-items:center;justify-content:center;flex:none">
        <svg viewBox="-2 -2 28 28" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">${svgColored(v.svg||'',v.color)}</svg>
      </div>
      <div style="flex:1;min-width:0">
        <div class="cat-sum-name">${esc(v.name)}</div>
        <div class="cat-sum-bar-bg"><div class="cat-sum-bar" style="width:${total?Math.round(v.amt/total*100):0}%;background:${v.color}"></div></div>
      </div>
      <div class="cat-sum-right">
        <div class="cat-sum-amt" style="color:${catGraphType==='expense'?'var(--red)':'var(--pri)'}">${fmt(v.amt)}</div>
        <div class="cat-sum-pct">${total?Math.round(v.amt/total*100):0}%</div>
      </div>
      <span class="cd-chev">›</span>
    </div>`).join('');
}

/* ---- 費目タップ→明細（月別棒グラフ＋一覧、棒タップで月切替・明細タップで編集） ---- */
let catDetailName=null;
let cdSelY=null, cdSelM=null;   // モーダル内で選択中の月（棒グラフのタップで変わる）

// グラフの費目別集計と同じ条件（スコープ・請求月ベース）で、指定費目の指定月の取引を抽出
// scope: graphScope()の結果を渡すと再計算しない（renderCatDetailは6ヶ月分呼ぶため）
function catDetailTxs(yy,mm,scope){
  const mk=`${yy}-${String(mm+1).padStart(2,'0')}`;
  return (scope||graphScope()).filter(({t,usr})=>{
    if(t.type!==catGraphType)return false;
    const iid=txIconId(t);
    if((t.emojiName||iid)!==catDetailName)return false;
    return catGraphType==='income'?t.date.startsWith(mk):effectiveExpDate(t,usr).startsWith(mk);
  });
}

// 棒グラフの表示ウィンドウ（6ヶ月）：今日を含む直近6ヶ月に選択月が入っていればそれ、外れていれば選択月を右端に
function cdWindow(){
  const now=new Date();
  const idx=(y,m)=>y*12+m;
  let ey=now.getFullYear(), em=now.getMonth();
  if(idx(cdSelY,cdSelM)>idx(ey,em)||idx(cdSelY,cdSelM)<idx(ey,em)-5){ey=cdSelY;em=cdSelM;}
  const arr=[];
  for(let i=5;i>=0;i--){const d=new Date(ey,em-i,1);arr.push({y:d.getFullYear(),m:d.getMonth()});}
  return arr;
}

function openCatDetail(name){
  catDetailName=name;
  cdSelY=(gSelY??UI.year); cdSelM=(gSelM??UI.month);
  renderCatDetail();
  document.getElementById('cat-detail-overlay').classList.remove('hidden');
  const sheet=document.querySelector('#cat-detail-overlay .sheet');
  if(sheet)sheet.scrollTop=0;
}
function cdSelectMonth(y,m){
  cdSelY=y; cdSelM=m;
  renderCatDetail();
}
function closeCatDetail(){
  document.getElementById('cat-detail-overlay').classList.add('hidden');
  catDetailName=null;
}
// 費目明細モーダルを開いたまま編集・削除したとき、明細と背後のグラフを最新化
function refreshCatDetailIfOpen(){
  const ov=document.getElementById('cat-detail-overlay');
  if(!ov||ov.classList.contains('hidden'))return;
  const graphTab=document.getElementById('tab-graph');
  if(graphTab&&graphTab.classList.contains('active')){
    renderBarChart();renderDonutAndList();renderPayBreakdown();
  }
  renderCatDetail();
}

function renderCatDetail(){
  if(catDetailName===null)return;
  // 月別合計（6ヶ月分）と選択月の取引（スコープの全取引走査は1回だけ）
  const months=cdWindow();
  const scope=graphScope();
  const monthData=months.map(({y,m})=>{
    const p=catDetailTxs(y,m,scope);
    return {y,m,pairs:p,total:p.reduce((s,x)=>s+x.t.amount,0)};
  });
  const cur=monthData.find(d=>d.y===cdSelY&&d.m===cdSelM)||monthData[monthData.length-1];
  const pairs=cur.pairs;
  const txs=pairs.map(x=>x.t);
  const total=cur.total;

  // ヘッダ（アイコン＋費目名／対象月・件数／合計）
  const anyTx=monthData.flatMap(d=>d.pairs)[0]?.t;
  const iid=anyTx?txIconId(anyTx):'other';
  const ic=CAT_ICONS[iid]||CAT_ICONS['other'];
  const catColor=catColorOf(catDetailName,iid,(gLedger&&gLedger!=='all')?gLedger:null);   // 費目色（カスタム色優先・表示中の帳簿優先）でグラフ・アイコンを統一
  document.getElementById('cd-title').innerHTML=
    `<span style="display:inline-flex;align-items:center;gap:8px">
      <svg viewBox="-2 -2 28 28" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">${svgColored(ic.svg,catColor)}</svg>
      ${esc(catDetailName)}
    </span>`;
  document.getElementById('cd-sub').textContent=`${cdSelY}年${cdSelM+1}月・${txs.length}件`;
  const totalEl=document.getElementById('cd-total');
  totalEl.textContent=fmt(total);
  totalEl.style.color=catGraphType==='expense'?'var(--red)':'var(--pri)';

  // 月別棒グラフ（タップで月切替）
  const max=Math.max(...monthData.map(d=>d.total),1);
  const BARMAX=88;
  document.getElementById('cd-bars').innerHTML='<div class="cd-bars">'+monthData.map(d=>{
    const h=d.total?Math.max(4,Math.round(d.total/max*BARMAX)):0;
    const sel=d.y===cdSelY&&d.m===cdSelM;
    const lbl=(d.m===0||d===monthData[0])?`${d.y}年${d.m+1}月`:`${d.m+1}月`;
    return `<div class="cd-bar-col${sel?' sel':''}" onclick="cdSelectMonth(${d.y},${d.m})">
      <span class="cd-bar-amt">${d.total?fmtN(d.total):''}</span>
      <div class="cd-bar" style="height:${h}px;background:${catColor};opacity:${sel?1:0.45}"></div>
      <span class="cd-bar-lbl">${lbl}</span>
    </div>`;
  }).join('')+'</div>';

  // 発生日（支出のカードは請求日）ごとにグループ化
  const byDate={};
  pairs.forEach(({t,usr})=>{
    const d=catGraphType==='income'?t.date:effectiveExpDate(t,usr);
    (byDate[d]=byDate[d]||[]).push({t,usr});
  });

  // 明細リスト（タップで編集）
  const listEl=document.getElementById('cd-list');
  const dates=Object.keys(byDate).sort();
  if(!dates.length){listEl.innerHTML=`<div class="empty-msg" style="padding:16px">この月の明細はありません</div>`;return;}
  const WD=['日','月','火','水','木','金','土'];
  const sign=catGraphType==='expense'?'-':'+';
  listEl.innerHTML=dates.map(d=>{
    const dt=new Date(d);
    const daySum=byDate[d].reduce((s,x)=>s+x.t.amount,0);
    const head=`<div class="cd-date-head"><span>${dt.getMonth()+1}月${dt.getDate()}日（${WD[dt.getDay()]}）</span><span class="cd-dh-amt">${sign}${fmt(daySum)}</span></div>`;
    const rows=byDate[d].map(({t,usr})=>{
      const k=t.payKind||'cash';
      const isCardShift=t.date!==d;   // カード請求で購入日と発生日がズレている
      return `<div class="cd-row" onclick="openTxEdit('${t.id}')">
        <div style="width:30px;height:30px;border-radius:8px;background:var(--bg-card);border:1px solid var(--border-l);display:flex;align-items:center;justify-content:center;flex:none">
          <svg viewBox="-2 -2 28 28" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">${svgColored(ic.svg,catColor)}</svg>
        </div>
        <div style="flex:1;min-width:0">
          <div class="cd-row-memo"><span class="cd-rm-name">${esc(t.memo||t.emojiName||'')}</span>${t.memo2?`<span class="cd-rm-m2">${esc(t.memo2)}</span>`:''}</div>
          <div class="cd-row-sub">${PAY_META[k]?.label||k}${isCardShift?`・購入 ${parseInt(t.date.slice(5,7))}/${parseInt(t.date.slice(8))}`:''}${UI.isMainMode?`・${esc(usr.name)}`:''}</div>
        </div>
        <div class="cd-row-amt" style="color:${t.type==='expense'?'var(--red)':'var(--pri)'}">${fmt(t.amount)}</div>
        <span class="cd-chev">›</span>
      </div>`;
    }).join('');
    return head+rows;
  }).join('');
}

function renderDonut(items, total){
  const svg=document.getElementById('donut-svg');
  const cx=55,cy=55,r=42,ir=26;
  const circ=2*Math.PI*r;
  if(!total||!items.length){
    svg.innerHTML=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--border)" stroke-width="${r-ir}"/>`;
    return;
  }
  let offset=0;
  const SLICE_GAP=items.length>1?1.6:0;   // スライス間の白い区切り（隣接費目が似た色でも見分けられる）
  const slices=items.map((v,i)=>{
    const pct=v.amt/total;
    const dash=Math.max(pct*circ-SLICE_GAP,0.5);
    const gap=circ-dash;
    const rot=offset*360-90;
    offset+=pct;
    // スライスは費目と同じ色（凡例・リスト・アイコンと対応が分かるように）
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${v.color}"
      stroke-width="${r-ir}" stroke-dasharray="${dash.toFixed(2)} ${gap.toFixed(2)}"
      transform="rotate(${rot.toFixed(2)} ${cx} ${cy})" style="transition:all 0.4s"/>`;
  }).join('');
  svg.innerHTML=slices;
}

/* =========================================================
   費目の長押し：コピー・移動
/* =========================================================
========================================================= */
let _lpTimer=null;
let _lpMoved=false;
let ctxTxId=null;
let ctxAction_='';
let dateselY=null,dateselM=null,dateselD=null;

// イベント委譲で tx-area の長押しを検出
document.addEventListener('touchstart',function(e){
  const el=e.target.closest('.tx-lp');
  if(!el)return;
  const id=el.dataset.txid;
  if(!id)return;
  _lpMoved=false;
  _lpTimer=setTimeout(()=>{
    if(!_lpMoved){
      _lpTimer=null;
      openCtxMenu(e,id);
    }
  },500);
},{passive:true});

document.addEventListener('touchmove',function(){
  _lpMoved=true;
  if(_lpTimer){clearTimeout(_lpTimer);_lpTimer=null;}
},{passive:true});

document.addEventListener('touchend',function(){
  if(_lpTimer){clearTimeout(_lpTimer);_lpTimer=null;}
},{passive:true});

// PC向け右クリック
document.addEventListener('contextmenu',function(e){
  const el=e.target.closest('.tx-lp');
  if(!el)return;
  e.preventDefault();
  openCtxMenu(e,el.dataset.txid);
});

// 長押しメニューを開く
function openCtxMenu(e,id){
  e.preventDefault&&e.preventDefault();
  const u=activeUser();
  const t=u.transactions.find(x=>x.id===id);
  if(!t)return;
  ctxTxId=id;
  const label=t.memo||t.emojiName||'取引';
  document.getElementById('ctx-title').textContent=`${label}  ${t.type==='income'?'+':'-'}${fmt(t.amount)}`;
  document.getElementById('ctx-overlay').classList.remove('hidden');
}
function closeCtxMenu(){
  document.getElementById('ctx-overlay').classList.add('hidden');
  ctxTxId=null;ctxAction_='';
}

// メニュー項目選択 → 日付選択モーダルへ
function ctxAction(action){
  const savedId=ctxTxId; // closeCtxMenuより前に退避
  ctxAction_=action;
  document.getElementById('ctx-overlay').classList.add('hidden'); // ctxTxIdをリセットせずに閉じる
  ctxTxId=savedId; // 退避したIDを復元

  const u=activeUser();
  const t=u.transactions.find(x=>x.id===ctxTxId);
  if(!t){ctxTxId=null;return;}
  const d=new Date(t.date);
  dateselY=d.getFullYear();dateselM=d.getMonth();dateselD=d.getDate();
  document.getElementById('datesel-title').textContent=action==='copy'?'コピー先の日付を選択':'移動先の日付を選択';
  buildDateSelCal();
  document.getElementById('datesel-overlay').classList.remove('hidden');
}
function closeDateSel(){
  document.getElementById('datesel-overlay').classList.add('hidden');
}

// 日付選択カレンダー描画
function buildDateSelCal(){
  document.getElementById('datesel-month').textContent=`${dateselY}年${dateselM+1}月`;
  const first=new Date(dateselY,dateselM,1).getDay();
  const days=new Date(dateselY,dateselM+1,0).getDate();
  const today=new Date();
  const dows=['日','月','火','水','木','金','土'];
  let h=dows.map(d=>`<div class="datesel-dow">${d}</div>`).join('');
  for(let i=0;i<first;i++)h+=`<div class="datesel-day empty"></div>`;
  for(let d=1;d<=days;d++){
    const isT=today.getFullYear()===dateselY&&today.getMonth()===dateselM&&today.getDate()===d;
    const isS=dateselD===d;
    h+=`<div class="datesel-day${isT?' today':''}${isS?' selected':''}" onclick="dateselPick(${d})">${d}</div>`;
  }
  document.getElementById('datesel-cal').innerHTML=h;
}
function dateselPrev(){
  dateselM--;if(dateselM<0){dateselM=11;dateselY--;}
  dateselD=null;buildDateSelCal();
}
function dateselNext(){
  dateselM++;if(dateselM>11){dateselM=0;dateselY++;}
  dateselD=null;buildDateSelCal();
}
function dateselPick(d){
  dateselD=d;buildDateSelCal();
}

// 決定ボタン
function confirmDateSel(){
  if(!dateselD){alert('日付を選択してください');return;}
  if(!ctxTxId){closeDateSel();return;}
  const u=activeUser();
  const t=u.transactions.find(x=>x.id===ctxTxId);
  if(!t){closeDateSel();return;}
  const newDate=`${dateselY}-${String(dateselM+1).padStart(2,'0')}-${String(dateselD).padStart(2,'0')}`;
  if(ctxAction_==='copy'){
    // コピー：同じ内容で新しいIDの取引を作成
    const copy={...t, id:'t'+Date.now()+Math.random().toString(36).slice(2), date:newDate};
    u.transactions.push(copy);
    showToast(`📋 ${t.memo||t.emojiName||'取引'} を ${dateselM+1}月${dateselD}日にコピーしました`);
  } else {
    // 移動：日付を変更
    t.date=newDate;
    showToast(`→ ${t.memo||t.emojiName||'取引'} を ${dateselM+1}月${dateselD}日に移動しました`);
  }
  ctxTxId=null;ctxAction_='';
  closeDateSel();
  save();renderAll();
}
/* =========================================================
   起動
/* =========================================================
========================================================= */
loadSecCfg();
load();
// 起動時にNo.0（管理画面）を開く設定（メインユーザー有効＋2人以上のときのみ）
if(DB.mainUser.enabled && DB.mainUser.startupMain && DB.users.length>=2){
  UI.isMainMode=true;
}
renderAll();
updateSecurityUI();
checkVersion();
// 起動時ホームをactive
const _nb=document.getElementById('navBtn-home');
if(_nb)_nb.classList.add('active');
// PIN設定済みなら起動時にロック画面を表示
if(secState.pinHash){
  showPinScreen('unlock');
}
// トップバーのユーザー切替：タップ／クリックで開く、または長押しのままスライドして選択
// （タップ・長押しどちらでもOK。ヒット領域は星〜「ユーザー▼」の行全体）
(function bindUserSwitch(){
  const el=document.getElementById('topbar-user');
  if(!el)return;
  let timer=null, sliding=false, sx=0, sy=0, suppressClick=false;
  // 指の位置にあるユーザー項目をハイライトして返す
  const highlightAt=(x,y)=>{
    const target=document.elementFromPoint(x,y);
    const item=target?target.closest('.ud-user-item'):null;
    document.querySelectorAll('.ud-user-item').forEach(i=>i.classList.toggle('slide-hover',i===item));
    return item;
  };
  const clearHover=()=>document.querySelectorAll('.ud-user-item').forEach(i=>i.classList.remove('slide-hover'));

  el.addEventListener('touchstart',e=>{
    sliding=false;
    const t=e.touches[0]; sx=t.clientX; sy=t.clientY;
    clearTimeout(timer);
    timer=setTimeout(()=>{sliding=true;openUserDrawer();},500);
  },{passive:true});
  el.addEventListener('touchmove',e=>{
    const t=e.touches[0];
    if(!sliding){
      // 長押し成立前に大きく動いたらスクロール等とみなしキャンセル
      if(Math.hypot(t.clientX-sx,t.clientY-sy)>10)clearTimeout(timer);
      return;
    }
    highlightAt(t.clientX,t.clientY);
    e.preventDefault();   // スライド中のスクロールを抑止
  },{passive:false});
  el.addEventListener('touchend',e=>{
    clearTimeout(timer);
    if(sliding){
      // 長押し→スライド：指の位置のユーザーを選択（ドロワーは開いたまま、その位置で確定）
      const t=e.changedTouches[0];
      const item=highlightAt(t.clientX,t.clientY);
      clearHover();
      if(item)item.click();   // switchUser/switchToMainModeがドロワーを閉じる
      sliding=false;
      suppressClick=true;     // 長押し直後のゴーストクリックを無視
      e.preventDefault();
    }
    // 短タップ（長押し未成立）の場合は後続のclickでドロワーを開く
  });
  el.addEventListener('touchcancel',()=>{clearTimeout(timer);clearHover();sliding=false;});

  // タップ／クリックでドロワーを開く（PC・モバイル共通）。長押しスライド直後のみ抑止
  el.addEventListener('click',()=>{
    if(suppressClick){suppressClick=false;return;}
    openUserDrawer();
  });
  el.addEventListener('contextmenu',e=>e.preventDefault());
  el.style.cursor='pointer';
})();

// グラフタブの費目セクションを左右スワイプで前月/翌月（ホームと同じ向き）
(function bindGraphSwipe(){
  const el=document.getElementById('graph-cat-section');
  if(!el)return;
  let sx=null, sy=null;
  el.addEventListener('touchstart',e=>{
    if(e.touches.length!==1){sx=null;return;}
    sx=e.touches[0].clientX; sy=e.touches[0].clientY;
  },{passive:true});
  el.addEventListener('touchend',e=>{
    if(sx===null)return;
    const dx=e.changedTouches[0].clientX-sx, dy=e.changedTouches[0].clientY-sy;
    sx=null;
    if(Math.abs(dx)<50||Math.abs(dy)>Math.abs(dx))return;
    gChangeMonth(dx<0?1:-1);  // 左スワイプ→翌月、右スワイプ→前月
  });
})();

// Service Worker登録（オフライン対応・ホーム画面アプリ化）
if('serviceWorker' in navigator && location.protocol.startsWith('http')){
  navigator.serviceWorker.register('sw.js').catch(()=>{});
}
