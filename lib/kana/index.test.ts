import { hiraganaToKatakana, isAllHiragana, isAllKatakana, katakanaToHiragana, toHiragana } from '.';

describe('toHiragana => isAllHiragana', () => {
  test.each<[string, boolean]>([['ローカル', true]])('%s', (source, result) => {
    expect(isAllHiragana(toHiragana(source))).toBe(result);
  });
});

describe('ひらがな <==> カタカナ', () => {
  test.each<[string, string]>([
    ['', ''],

    ['あいうえお', 'アイウエオ'],
    ['かきくけこ', 'カキクケコ'],
    ['さしすせそ', 'サシスセソ'],
    ['たちつてと', 'タチツテト'],
    ['はひふへほ', 'ハヒフヘホ'],
    ['まみむめも', 'マミムメモ'],
    ['やゆよ', 'ヤユヨ'],
    ['らりるれろ', 'ラリルレロ'],
    ['わをん', 'ワヲン'],

    ['がぎぐげご', 'ガギグゲゴ'],
    ['ざじずぜぞ', 'ザジズゼゾ'],
    ['だぢづでど', 'ダヂヅデド'],
    ['ばびぶべぼ', 'バビブベボ'],
    ['ぱぴぷぺぽ', 'パピプペポ'],

    ['ゃゅょぁぃぅぇぉっ', 'ャュョァィゥェォッ'],

    ['ゔ', 'ヴ'],
  ])('%s <==> %s', (hiragana, katakana) => {
    expect(hiraganaToKatakana(hiragana)).toBe(katakana);
    expect(katakanaToHiragana(katakana)).toBe(hiragana);
  });
});

describe('isAllHiragana', () => {
  test.each<[string, boolean]>([
    ['', true],

    ['あいうえお', true],
    ['かきくけこ', true],
    ['さしすせそ', true],
    ['たちつてと', true],
    ['なにぬねの', true],
    ['はひふへほ', true],
    ['まみむめも', true],
    ['やゆよ', true],
    ['らりるれろ', true],
    ['わをん', true],

    ['ろーま', true],

    ['漢字あいうえお', false],
    ['あいうえお漢字', false],
    ['漢字あいうえお漢字', false],

    ['あいうえおアイウエオ', false],
    ['アイウエオあいうえお', false],
    ['アイウエオあいうえおアイウエオ', false],
  ])('%s', (text, result) => {
    expect(isAllHiragana(text)).toBe(result);
  });
});

describe('isAllKatakana', () => {
  test.each<[string, boolean]>([
    ['', true],

    ['アイウエオ', true],

    ['ローマ', true],

    ['漢字アイウエオ', false],
    ['アイウエオ漢字', false],
    ['漢字アイウエオ漢字', false],

    ['アイウエオあいうえお', false],
    ['あいうえおアイウエオ', false],
    ['あいうえおアイウエオあいうえお', false],
  ])('%s', (text, result) => {
    expect(isAllKatakana(text)).toBe(result);
  });
});
