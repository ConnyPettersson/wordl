import { describe, expect, it } from '@jest/globals';

import wordl from './wordl.js';

describe('wordl()', () => {
  it('does nothing with an empty string', () => {
    const output = wordl('');
    expect(output).toBe('');
  });
});