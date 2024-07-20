import { hankakuKatakanaToZenkakuKatakana } from './hankaku';

describe.skip('hankakuKatakanaToZenkakuKatakana', () => {
  test.each<[string, string]>([
    ['', ''],

    ['ｱｲｳｴｵ', 'アイウエオ'],
    ['ｶｷｸｹｺ', 'カキクケコ'],
    ['ｻｼｽｾｿ', 'サシスセソ'],
    ['ﾀﾁﾂﾃﾄ', 'タチツテト'],
    ['ﾅﾆﾇﾈﾉ', 'ナニヌネノ'],
    ['ﾊﾋﾌﾍﾎ', 'ハヒフヘホ'],
    ['ﾏﾐﾑﾒﾓ', 'マミムメモ'],
    ['ﾔﾕﾖ', 'ヤユヨ'],
    ['ﾗﾘﾙﾚﾛ', 'ラリルレロ'],
    ['ﾜｦﾝ', 'ワヲン'],

    ['ｶﾞｷﾞｸﾞｹﾞｺﾞ', 'ガギグゲゴ'],
    ['ｻﾞｼﾞｽﾞｾﾞｿﾞ', 'ザジズゼゾ'],
    ['ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ', 'ダヂヅデド'],
    ['ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ', 'バビブベボ'],
    ['ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ', 'パピプペポ'],

    ['ｬｭｮ', 'ャュョ'],
    ['ｧｨｩｪｫ', 'ァィゥェォ'],
    ['ｳﾞﾜﾞｦﾞ', 'ヴヷヺ'],

    ['｡､･ｰ｢｣', '。、・ー「」'],
  ])('半角カタカナ : %s <==> %s', (hankaku, zenkaku) => {
    expect(hankakuKatakanaToZenkakuKatakana(hankaku)).toBe(zenkaku);
  });

  test.each<[string, string]>([
    ['アイウエオｱｲｳｴｵ', 'アイウエオアイウエオ'],
    ['ｱｲｳｴｵアイウエオ', 'アイウエオアイウエオ'],
    ['ｱｲｳｴｵアイウエオｱｲｳｴｵ', 'アイウエオアイウエオアイウエオ'],
  ])('混合 => 全角 : %s <==> %s', (mix, zenkaku) => {
    expect(hankakuKatakanaToZenkakuKatakana(mix)).toBe(zenkaku);
  });
});
