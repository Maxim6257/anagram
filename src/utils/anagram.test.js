import { compare } from './anagram';

describe('anagram', () => {
  it('compare should returns true for same characters in the same cases', () => {
    expect(compare('Friend', 'Finder')).toBe(true);
  });

  it('compare should returns true for same characters in the different cases', () => {
    expect(compare('Friend', 'fInder')).toBe(true);
  });

  it('compare should returns false for different characters', () => {
    expect(compare('Frisnd', 'Finder')).toBe(false);
  });

  it('compare should returns falce for one shorter string', () => {
    expect(compare('Friend', 'Find')).toBe(false);
  });

  it('compare should returns null for first empty strings', () => {
    expect(compare('Friend', '')).toBe(null);
  });

  it('compare should returns null for second empty strings', () => {
    expect(compare('', 'Finder')).toBe(null);
  });

  it('compare should returns null for empty strings', () => {
    expect(compare('', '')).toBe(null);
  });
  
});
