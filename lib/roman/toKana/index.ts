import { toKanaTable, isDoubleConsonant } from './table';
import { isVowel } from '../helper';

/**
 * 半角のローマ字の文字列をひらがなの文字列に変換します
 * @param roman ローマ字の文字列、半角である必要があります。
 * @returns ひらがなの文字列
 */
export function toKana(roman: string): string {
  let result = '';
  let temp = '';
  let i = 0;
  const _roman = roman.toLowerCase();
  const len = _roman.length;

  while (true) {
    if (len <= i) {
      result = result + temp;
      break;
    }

    const c = _roman.charAt(i);
    const code = _roman.charCodeAt(i);

    if (code < 0x61 || 0x7a < code) {
      result = result + temp;
      temp = '';

      switch (c) {
        case '-':
          result = result + 'ー';
          break;
        default:
          result = result + c;
          break;
      }

      i++;
      continue;
    }

    // 残りの先頭部分をバッファーする
    temp = temp + c;

    const tabled = toKanaTable[temp];
    if (tabled) {
      // テーブルで変換可能 => 変換
      result = result + tabled;
      temp = '';
    }

    if (2 === temp.length) {
      // 二文字で始まっていい子音かどうか？
      if (isDoubleConsonant(temp)) {
        i++;
        continue;
      }

      if (temp.charAt(0) === 'n') {
        if (temp.charAt(1) === 'n') {
          // n + n => 『ん』
          result = result + 'ん';
          temp = temp.substring(2);
          i++;
          continue;
        }

        if (!isVowel(temp.charAt(1))) {
          // n + 子音 => 『ん』 + 子音
          result = result + 'ん';
          temp = temp.substring(1);
          i++;
          continue;
        }
      }

      if (temp.charAt(0) === 'n' && !isVowel(temp.charAt(1))) {
        // n + 子音 => 『ん』 + 子音
        result = result + 'ん';
        temp = temp.substring(1);
        i++;
        continue;
      }

      if (temp.charAt(0) === temp.charAt(1) && !isVowel(temp.charAt(0))) {
        // 同一子音 * 2 => 『っ』 + 子音
        result = result + 'っ';
        temp = temp.substring(1);
        i++;
        continue;
      }

      if (!isVowel(temp.charAt(0)) && !isVowel(temp.charAt(1))) {
        result = result + temp.charAt(0);
        temp = temp.substring(1);
        i++;
        continue;
      }
    }

    if (temp.length === 3) {
      result = result + temp.charAt(0);
      temp = temp.substring(1);
      i++;
      continue;
    }

    // バッファー中の文字数の確認
    // 1 文字
    // 次へ
    // 2 文字
    // 3 文字

    i++;
  }

  return result;
}
