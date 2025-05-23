// reference https://www.w3schools.com/java/java_ref_string.asp

export class JavaString {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  // Returns the character at the specified index (position)
  charAt(index: number): string {
    return this.value.charAt(index);
  }

  // Returns the Unicode of the character at the specified index
  codePointAt(index: number): number {
    return this.value.codePointAt(index) ?? -1;
  }

  // Returns the Unicode of the character before the specified index
  codePointBefore(index: number): number {
    if (index <= 0 || index > this.value.length) return -1;
    return this.value.codePointAt(index - 1) ?? -1;
  }

  // Returns the number of Unicode values found in a string.
  codePointCount(beginIndex = 0, endIndex = this.value.length): number {
    return Array.from(this.value.slice(beginIndex, endIndex)).length;
  }

  // 	Compares two strings lexicographically
  compareTo(anotherString: string): number {
    if (this.value === anotherString) return 0;
    return this.value > anotherString ? 1 : -1;
  }

  // Compares two strings lexicographically, ignoring case differences
  compareToIgnoreCase(anotherString: string): number {
    const a = this.value.toLowerCase();
    const b = anotherString.toLowerCase();
    if (a === b) return 0;
    return a > b ? 1 : -1;
  }

  // Appends a string to the end of another string
  concat(suffix: string): string {
    return this.value + suffix;
  }

  // Checks whether a string contains a sequence of characters
  contains(sequence: string): boolean {
    return this.value.includes(sequence);
  }

  // Checks whether a string contains the exact same sequence of characters of the specified CharSequence or StringBuffer
  contentEquals(sequence: string | { toString(): string }): boolean {
    return this.value === sequence.toString();
  }

  // Returns a String that represents the characters of the character array	String
  public static copyValueOf(data: string[] | ArrayLike<string>, offset = 0, count?: number): string {
    if (count !== undefined) {
      return Array.from(data).slice(offset, offset + count).join('');
    }
    return Array.from(data).slice(offset).join('');
  }

  // Checks whether a string ends with the specified character(s)	boolean
  endsWith(suffix: string): boolean {
    return this.value.endsWith(suffix);
  }

  //Compares two strings. Returns true if the strings are equal, and false if not
  equals(value: string): boolean {
    return this.value === value;
  }

  // Compares two strings, ignoring case considerations	boolean
  equalsIgnoreCase(value: string): boolean {
    return this.value.toLowerCase() === value.toLowerCase();
  }

  // Returns a formatted string using the specified locale, format string, and arguments	String
  public static format(formatStr: string, ...args: any[]): string {
    return formatStr.replace(/%[sdif]/g, () => {
      const val = args.shift();
      return String(val);
    });
  }

  // Encodes this String into a sequence of bytes using the named charset, storing the result into a new byte array	byte[]
  getBytes(encoding: string = 'utf-8'): Uint8Array {
    return new TextEncoder().encode(this.value);
  }

  // Copies characters from a string to an array of chars	void
  getChars(srcBegin: number, srcEnd: number, dst: string[], dstBegin: number): void {
    const chars = this.value.slice(srcBegin, srcEnd).split('');
    for (let i = 0; i < chars.length; i++) {
      dst[dstBegin + i] = chars[i];
    }
  }

  // Returns the hash code of a string	int
  hashCode(): number {
    let hash = 0;
    for (let i = 0; i < this.value.length; i++) {
      hash = (hash * 31 + this.value.charCodeAt(i)) | 0; // "| 0" para forzar a 32-bit int
    }
    return hash;
  }

  // Returns the position of the first found occurrence of specified characters in a string	int
  indexOf(searchValue: string, fromIndex: number = 0): number {
    return this.value.indexOf(searchValue, fromIndex);
  }

  // Returns the canonical representation for the string object	String
  intern(): string {
    return this.value;
  }

  // Checks whether a string is empty or not	boolean
  isEmpty(): boolean {
    return this.value.length === 0;
  }

  //Returns the position of the last found occurrence of specified characters in a string	int
  lastIndexOf(searchValue: string, fromIndex?: number): number {
    return this.value.lastIndexOf(searchValue, fromIndex);
  }

  // Returns the length of a specified string	int
  length(): number {
    return this.value.length;
  }

  // Searches a string for a match against a regular expression, and returns the matches	boolean
  matches(regex: string | RegExp): boolean {
    const pattern = typeof regex === 'string' ? new RegExp(`^${regex}$`) : new RegExp(`^${regex.source}$`, regex.flags);
    return pattern.test(this.value);
  }

  // Returns the index within this String that is offset from the given index by codePointOffset code points	int
  offsetByCodePoints(index, codePointOffset) {
    const codePoints = Array.from(this.value);
    const targetIndex = index + codePointOffset;

    if (targetIndex < 0 || targetIndex > codePoints.length) {
      throw new RangeError("Index out of bounds");
    }

    // Sumamos la longitud total en UTF-16 de los code points hasta el índice deseado
    return codePoints
      .slice(0, targetIndex)
      .map(char => char.length)
      .reduce((sum, len) => sum + len, 0);
  }

  // Tests if two string regions are equal	boolean
  regionMatches(toffset: number, other: string, ooffset: number, len: number, ignoreCase = false): boolean {
    const part1 = this.value.substr(toffset, len);
    const part2 = other.substr(ooffset, len);
    return ignoreCase ? part1.toLowerCase() === part2.toLowerCase() : part1 === part2;
  }

  // Searches a string for a specified value, and returns a new string where the specified values are replaced	String
  replace(searchValue: string | RegExp, replacement: string): string {
    return this.value.replace(searchValue, replacement);
  }

  // Replaces the first occurrence of a substring that matches the given regular expression with the given replacement	String
  replaceFirst(regex: string | RegExp, replacement: string): string {
    const pattern = typeof regex === 'string' ? new RegExp(regex) : new RegExp(regex.source, regex.flags.replace('g', ''));
    return this.value.replace(pattern, replacement);
  }

  // replaceAll()	Replaces each substring of this string that matches the given regular expression with the given replacement	String
  replaceAll(searchValue: string | RegExp, replaceValue: string): string {
    const pattern = typeof searchValue === 'string' ? new RegExp(searchValue, 'g') : new RegExp(searchValue.source, searchValue.flags.includes('g') ? searchValue.flags : searchValue.flags + 'g');
    return this.value.replace(pattern, replaceValue);
  }

  // split()	Splits a string into an array of substrings	String[]
  split(separator: string | RegExp, limit?: number): string[] {
    return this.value.split(separator, limit);
  }

  // Checks whether a string starts with specified characters	boolean
  startsWith(searchString: string, position?: number): boolean {
    return this.value.startsWith(searchString, position);
  }

  // Returns a new character sequence that is a subsequence of this sequence	CharSequence
  subSequence(beginIndex: number, endIndex: number): string {
    return this.value.substring(beginIndex, endIndex);
  }

  // Returns a new string which is the substring of a specified string	String
  substring(start: number, end?: number): string {
    return this.value.substring(start, end);
  }

  // Converts this string to a new character array	char[]
  toCharArray(): string[] {
    return Array.from(this.value);
  }

  // Converts a string to lower case letters	String
  toLowerCase(): string {
    return this.value.toLowerCase();
  }

  // Returns the value of a String object
  toString(): string {
    return this.value;
  }

  // Converts a string to upper case letters	String
  toUpperCase(): string {
    return this.value.toUpperCase();
  }

  // Removes whitespace from both ends of a string	String
  trim(): string {
    return this.value.trim();
  }

  valueOf(): string {
    return this.value.valueOf();
  }
}
