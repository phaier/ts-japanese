/**
 * テキストに含まれる全てのカタカナを平仮名に変換します
 * @param text 入力のテキスト
 */
export function katakanaToHiragana(text: string): string {
  return text.replace(/[\u30a1-\u30f6]/g, (match) => {
    const chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}

/**
 * テキストに含まれる全てのひらがなをカタカナに変換します
 * @param text 入力のテキスト
 */
export function hiraganaToKatakana(text: string): string {
  return text.replace(/[\u3041-\u3096]/g, (match) => {
    const chr = match.charCodeAt(0) + 0x60;
    return String.fromCharCode(chr);
  });
}

export function toHiragana(text: string): string {
  return katakanaToHiragana(text);
}

export function toKatakana(text: string): string {
  return hiraganaToKatakana(text);
}

/**
 * テキストに含まれる全ての文字がひらがなかどうか
 * @param text 入力のテキスト
 */
export function isAllHiragana(text: string): boolean {
  return !!text.match(/^[\u3041-\u3096\u30fc]*$/g);
}

/**
 * テキストに含まれる全ての文字がカタカナかどうか
 * @param text 入力のテキスト
 */
export function isAllKatakana(text: string): boolean {
  return !!text.match(/^[\u30a1-\u30f6\u30fc]*$/g);
}
