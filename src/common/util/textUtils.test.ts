import { describe, expect, it } from 'vitest';

import { capitalizeFirstLetter, countWords, humanReadableHyphenated } from './textUtils';

describe('textUtils', () => {
  it('counts words, ignoring extra whitespace', () => {
    expect(countWords('  hello   world  ')).toBe(2);
  });

  it('returns 0 for empty text', () => {
    expect(countWords('')).toBe(0);
  });

  it('capitalizes the first letter', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  it('converts text to a human-readable hyphenated slug', () => {
    expect(humanReadableHyphenated('Hello World!')).toBe('hello-world');
  });
});
