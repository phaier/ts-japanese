import { toKana } from '../roman/toKana';
import { BACK_SPACE, HANKAKU, isAlphabet, isNumber, isSymbol } from './key';

export interface KeyboardEventLike {
  altKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  repeat: boolean;
  shiftKey: boolean;

  key: string;
}

export class AutoRuby {
  private _buffer: string[];

  private _raw: string;

  private _ruby: string;

  public constructor() {
    this._buffer = [];
    this._raw = '';
    this._ruby = '';
  }

  public keypress(e: KeyboardEventLike, input: string) {
    if (!e.key) {
      return;
    } else if (isAlphabet(e.key) || isNumber(e.key) || isSymbol(e.key)) {
      this._buffer.push(e.key);
    } else if (e.key === BACK_SPACE) {
      if (input) {
        this._buffer = this._buffer.slice(0, -1);
      } else {
        this._buffer = [];
      }
    } else if (e.key === HANKAKU) {
      // 全角に切り替えたときだけこれが出る
      // 半角に切り替えたときにはなぜか出ない？
      return;
    } else {
      return;
    }

    const raw = this._buffer.join('');

    this._raw = raw;
    this._ruby = toKana(raw);
  }

  public getRaw(): string {
    return this._raw;
  }

  public getRuby(): string {
    return this._ruby;
  }
}
