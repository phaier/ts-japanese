export const BACK_SPACE = 'Backspace';
export const ENTER = String.fromCharCode(13);
export const TAB = String.fromCharCode(9);

export const HANKAKU = 'Hankaku';
export const NUM_LOCK = 'NumLock';

// export const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// export const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function isAlphabet(c: string): boolean {
  if (c.length === 1) {
    return ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z');
  } else {
    return false;
  }
}

export function isNumber(c: string): boolean {
  if (c.length === 1) {
    return '0' <= c && c <= '9';
  } else {
    return false;
  }
}

export function isSymbol(c: string): boolean {
  return c === '-'; // || c === "+" || c === "*" || c === "/" || c === "=" || c === "?" || c === "+" || c === "+" || c === "+";
}
