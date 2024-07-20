import { BACK_SPACE, HANKAKU, isAlphabet, isNumber, isSymbol } from './key';
import { toKana } from '../roman/toKana';

export interface KeyboardEventLike {
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  repeat: boolean;
  shiftKey: boolean;

  key: string;
}

export class AutoRuby {
  private buffer: string[];

  private raw: string;

  private ruby: string;

  public constructor() {
    this.buffer = [];
    this.raw = '';
    this.ruby = '';
  }

  public keypress(e: KeyboardEventLike, input: string) {
    if (!e.key) {
      return;
    }

    if (isAlphabet(e.key) || isNumber(e.key) || isSymbol(e.key)) {
      this.buffer.push(e.key);
    } else if (e.key === BACK_SPACE) {
      if (input) {
        this.buffer = this.buffer.slice(0, -1);
      } else {
        this.buffer = [];
      }
    } else if (e.key === HANKAKU) {
      // 全角に切り替えたときだけこれが出る
      // 半角に切り替えたときにはなぜか出ない？
      return;
    } else {
      return;
    }

    const raw = this.buffer.join('');

    this.raw = raw;
    this.ruby = toKana(raw);
  }

  public getRaw(): string {
    return this.raw;
  }

  public getRuby(): string {
    return this.ruby;
  }
}
