class BloomFilter {
  size
  storage;

  /**
   * @param {number} size - the size of the storage.
   */
  constructor(size) {
    this.size = size
    this.storage = this.createStore(size)
  }

  /**
   * @param {string} item
   */
  insert(item) {
    const hashValues = this.getHashValues(item)

    // Set each hashValue index to true
    hashValues.forEach((val) => this.storage.setValue(val))
  }

  /**
   * Runs all 3 hash functions on the input and returns an array of results.
   *
   * @param {string} item
   * @return {number[]}
   */
  getHashValues(item) {
    return [
      this.hash1(item),
      this.hash2(item),
      this.hash3(item),
    ]
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash1(item) {
    let hash = 0

    for (let charIndex = 0; charIndex < item.length; charIndex++) {
      const char = item.charCodeAt(charIndex)
      hash = (hash << 5) + hash + char;
      hash &= hash;
      hash = Math.abs(hash)
    }
    return hash % this.size;
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash2(item) {
    let hash = 5381;

    for (let charIndex = 0; charIndex < item.length; charIndex++) {
      const char = item.charCodeAt(charIndex)
      hash = (hash << 5) + hash + char;
    }

    return Math.abs(hash % this.size);
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash3(item) {
    let hash = 0

    for (let charIndex = 0; charIndex < item.length; charIndex++) {
      const char = item.charCodeAt(charIndex)
      hash = (hash << 5) - char;
      hash &= char;
      hash &= hash
    }

    return Math.abs(hash % this.size);
  }

  /**
   * Creates the data store for our filter.
   * We use this method to generate the store in order to
   * encapsulate the data itself and only provide access
   * to the necessary methods.
   *
   * @param {number} size
   * @return {Object}
   */
  createStore(size) {
    const storage = []

    // Initialize all indexes to false
    for (let storageCellIndex = 0; storageCellIndex < size; storageCellIndex++) {
      storage.push(false)
    }

    return {
      getValue(index) {
        return storage[index]
      },
      setValue(index) {
        storage[index] = true
      }
    }
  }

  /**
   * @param {string} item
   * @return {boolean}
   */
  mayContain(item) {
    const hashValues = this.getHashValues(item)

    for (let hashIndex = 0; hashIndex < hashValues.length; hashIndex++) {
      if (!this.storage.getValue(hashValues[hashIndex])) {
        // We know that the item was definitely not inserted.
        return false;
      }
    }

    // The item may or may not have been inserted.
    return true;
  }
}

/**
  let bloomFilter;
  const people = [
    'Bruce Wayne',
    'Clark Kent',
    'Barry Allen',
  ];

  beforeEach(() => {
    bloomFilter = new BloomFilter();
  });

  it('should have methods named "insert" and "mayContain"', () => {
    expect(typeof bloomFilter.insert).toBe('function');
    expect(typeof bloomFilter.mayContain).toBe('function');
  });

  it('should create a new filter store with the appropriate methods', () => {
    const store = bloomFilter.createStore(18);
    expect(typeof store.getValue).toBe('function');
    expect(typeof store.setValue).toBe('function');
  });

  it('should hash deterministically with all 3 hash functions', () => {
    const str1 = 'apple';

    expect(bloomFilter.hash1(str1)).toEqual(bloomFilter.hash1(str1));
    expect(bloomFilter.hash2(str1)).toEqual(bloomFilter.hash2(str1));
    expect(bloomFilter.hash3(str1)).toEqual(bloomFilter.hash3(str1));

    expect(bloomFilter.hash1(str1)).toBe(14);
    expect(bloomFilter.hash2(str1)).toBe(43);
    expect(bloomFilter.hash3(str1)).toBe(10);

    const str2 = 'orange';

    expect(bloomFilter.hash1(str2)).toEqual(bloomFilter.hash1(str2));
    expect(bloomFilter.hash2(str2)).toEqual(bloomFilter.hash2(str2));
    expect(bloomFilter.hash3(str2)).toEqual(bloomFilter.hash3(str2));

    expect(bloomFilter.hash1(str2)).toBe(0);
    expect(bloomFilter.hash2(str2)).toBe(61);
    expect(bloomFilter.hash3(str2)).toBe(10);
  });

  it('should create an array with 3 hash values', () => {
    expect(bloomFilter.getHashValues('abc').length).toBe(3);
    expect(bloomFilter.getHashValues('abc')).toEqual([66, 63, 54]);
  });

  it('should insert strings correctly and return true when checking for inserted values', () => {
    people.forEach((person) => bloomFilter.insert(person));

    expect(bloomFilter.mayContain('Bruce Wayne')).toBe(true);
    expect(bloomFilter.mayContain('Clark Kent')).toBe(true);
    expect(bloomFilter.mayContain('Barry Allen')).toBe(true);

    expect(bloomFilter.mayContain('Tony Stark')).toBe(false);
  });
*/
