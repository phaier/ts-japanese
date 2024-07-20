import { flatConcat } from '../helper';
import { toRomansTable } from './table';

const mins: string = 'ゃゅょぁぃぅぇぉ';

/**
 * ひらがなの文字列をローマ字に変換します。
 * @param text ひらがなの文字列
 * @returns ローマ字変換された複数の文字列
 */
export function toRomans(text: string): ReadonlyArray<string> {
  const chars = Array.from(text);
  const len = chars.length;
  let results: string[] = [];
  let i = 0;

  if (len < 1) {
    return [''];
  }

  while (i < len) {
    const c = chars[i];
    const next = chars[i + 1];

    if (next && mins.includes(next)) {
      // ゃゅょぁぃぅぇぉ
      // が次にくる場合は
      // 先読みの必要がある
      const kana = c + next;
      const tabled = toRomansTable[kana];

      if (tabled) {
        results = flatConcat(
          results,
          tabled.map((ss) => ss.join(''))
        );
        i += 2;
      } else {
        results = flatConcat(results, [c]);
        i += 1;
      }
    } else if (c === 'っ') {
      // kokkai
      // こっかい
      const tabled = toRomansTable[next];
      if (tabled) {
        const heads: string[] = [];
        for (const ss of tabled) {
          const s = ss[0];
          if (heads.every((h) => s !== h)) {
            heads.push(s);
          }
        }

        results = flatConcat(results, heads);
        i += 1;
      } else {
        // c === っ
        // n === xxx
        const ts = toRomansTable['っ'];
        results = flatConcat(
          results,
          ts.map((ss) => ss.join(''))
        );
        i += 1;
      }
    } else if (c === 'ん') {
      if (next === 'あ' || next === 'い' || next === 'う' || next === 'え' || next === 'お') {
        // ん => nn
        results = flatConcat(results, ['nn']);
        i += 1;
      } else {
        // ん => n, nn
        results = flatConcat(results, ['n', 'nn']);
        i += 1;
      }
    } else {
      const tabled = toRomansTable[c];

      if (tabled) {
        results = flatConcat(
          results,
          tabled.map((ss) => ss.join(''))
        );
        i += 1;
      } else {
        results = flatConcat(results, [c]);
        i += 1;
      }
    }
  }

  return results;
}
