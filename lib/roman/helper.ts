export function isVowel(char: string): boolean {
  return char === 'a' || char === 'i' || char === 'u' || char === 'e' || char === 'o';
}

export function flatConcat(prefixes: ReadonlyArray<string>, suffixes: ReadonlyArray<string>): string[] {
  if (prefixes.length === 0) {
    return [...suffixes];
  }

  if (suffixes.length === 0) {
    return [...prefixes];
  }

  const results: string[] = [];

  for (let i = 0; i < prefixes.length; i++) {
    for (let j = 0; j < suffixes.length; j++) {
      results.push(prefixes[i] + suffixes[j]);
    }
  }

  return results;
}
