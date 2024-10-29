class Comparator {
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction
  }

  static defaultCompareFunction(a, b) {
    if (a === b) return 0
    return a < b ? -1 : 1;
  }

  equals(a, b) {
    return this.compare(a, b) === 0;
  }
}

class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null

    this.compare = new Comparator(comparatorFunction)
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // If there is no tail yet let's make new node a tail
    if (!this.tail) {
      this.tail = newNode
    }
    return this;
  }

  append(value) {
    const newNode = new LinkedListNode(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  insert(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    if (index === 0) {
      this.prepend(value)
    } else {
      let count = 1;
      let currentNode = this.head;

      const newNode = new LinkedListNode(value)
      while (currentNode) {
        if (count === index) break;
        currentNode = currentNode.next;
        count += 1;
      }

      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      } else {
        if (this.tail) {
          this.tail.next = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }
    return this;
  }

  delete(value) {
    if (!this.head) {
      return null
    }

    let deletedNode = null;

    // If the head must be deleted then make next node that is different
    // from the head to be a new head.
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        // If next node must be deleted then make next node to be a next next one.
        if (this.compare.equals(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Check if tail must be deleted.
    if (this.compare.equals(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  find({value = undefined, callback = undefined}) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified then try to compare by value
      if (value !== undefined && this.compare.equals(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // If there are many nodes in linked list...
    // Rewind to the last node and delete "next" link for the node before the last one.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   * @param {*[]} values - Array of values that need to be converted to linked list.
   * @return {LinkedList}
   */
  fromArray(values) {
    values.forEach((value) => this.append(value))
    return this;
  }

  toArray() {
    const nodes = []

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next;
    }

    return nodes;
  }

  /**
   * @param {function} [cb]
   * @return {string}
   */
  toString(cb) {
    return this.toArray().map((node) => node.toString(cb)).toString()
  }
}

// should create list node with value
// const node = new LinkedListNode(1);
// console.log(node.value) // 1
// console.log(node.next) // null

// should create list node with object as a value
// const nodeValue = {value: 1, key: 'test'}
// const node = new LinkedListNode(nodeValue)
// console.log(node.value.value) // 1
// console.log(node.value.key) // test
// console.log(node.next) // null

// const node2 = new LinkedListNode(2)
// const node1 = new LinkedListNode(1, node2)
//
// console.log(node1.next) // defined
// console.log(node2.next) // null
//
// console.log(node1.value) // 1
// console.log(node1.next.value) // 2

// const node = new LinkedListNode(1)
// console.log(node.toString()) // 1
//
// node.value = 'string value'
// console.log(node.toString()) // string value

// const nodeValue = {value: 1, key: 'test'}
// const node = new LinkedListNode(nodeValue)
// const toStringCallback = (v) => `value: ${v.value}, key: ${v.key}`
// console.log(node.toString(toStringCallback)) // value: 1, key: test


// LinkedList
const linkedList = new LinkedList()
// console.log(linkedList.toString()) // ''
// console.log(linkedList.head) // null
// console.log(linkedList.tail) // null
// linkedList.append(1)
// linkedList.append(2)
// console.log(linkedList.toString()) // 1,2
// console.log(linkedList.tail.next)  // null

// linkedList.prepend(2)
// console.log(linkedList.head.toString()) // 2
// console.log(linkedList.tail.toString()) // 2
// linkedList.append(1)
// linkedList.prepend(3)
// console.log(linkedList.toString()) // 3,2,1

// linkedList.insert(4,3)
// console.log(linkedList.head.toString()) // 4
// console.log(linkedList.tail.toString()) // 4
//
// linkedList.insert(3,4)
// linkedList.insert(2,1)
// linkedList.insert(1,-7)
// linkedList.insert(10,9)
//
// console.log(linkedList.toString()) // 1,4,2,3,10

// should delete node by value from linked list
// console.log(linkedList.delete(5)) // null
//
// linkedList.append(1)
// linkedList.append(1)
// linkedList.append(2)
// linkedList.append(3)
// linkedList.append(3)
// linkedList.append(3)
// linkedList.append(4)
// linkedList.append(5)
//
// console.log(linkedList.head.toString()) // 1
// console.log(linkedList.tail.toString()) // 5
//
// const deletedNode = linkedList.delete(3)
// console.log(deletedNode.value) // 3
// console.log(linkedList.toString()) // 1,1,2,4,5
//
// linkedList.delete(3)
// console.log(linkedList.toString()) // 1,1,2,4,5
//
// linkedList.delete(1)
// console.log(linkedList.toString()) // 2,4,5
// console.log(linkedList.head.toString()) // 2
// console.log(linkedList.tail.toString()) // 5
//
// linkedList.delete(5)
// console.log(linkedList.toString()) // 2,4
// console.log(linkedList.head.toString()) // 2
// console.log(linkedList.tail.toString())  // 4
//
// linkedList.delete(4)
// console.log(linkedList.toString()) // 2
// console.log(linkedList.head.toString()) // 2
// console.log(linkedList.tail.toString()) // 2
//
// linkedList.delete(2)
// console.log(linkedList.toString())  // ''

// should delete linked list head
// console.log(linkedList.deleteHead()) // .toBeNull();
//
// linkedList.append(1);
// linkedList.append(2);
//
// console.log(linkedList.head.toString()) // .toBe('1');
// console.log(linkedList.tail.toString()) // .toBe('2');
//
// const deletedNode1 = linkedList.deleteHead();
//
// console.log(deletedNode1.value) // .toBe(1);
// console.log(linkedList.toString()) // .toBe('2');
// console.log(linkedList.head.toString()) // .toBe('2');
// console.log(linkedList.tail.toString()) // .toBe('2');
//
// const deletedNode2 = linkedList.deleteHead();
//
// console.log(deletedNode2.value) // .toBe(2);
// console.log(linkedList.toString()) // .toBe('');
// console.log(linkedList.head) // .toBeNull();
// console.log(linkedList.tail) // .toBeNull();

/**
 * should be possible to store objects in the list and to print them out
 */
// const nodeValue1 = {value: 1, key: 'key1'};
// const nodeValue2 = {value: 2, key: 'key2'};
// linkedList.append(nodeValue1).prepend(nodeValue2);
// const nodeStringifier = (value) => `${value.key}:${value.value}`;
// console.log(linkedList.toString(nodeStringifier)) // .toBe('key2:2,key1:1');

// console.log(linkedList.find({ value: 5 })) //.toBeNull();
//
// linkedList.append(1);
// console.log(linkedList.find({ value: 1 })) //.toBeDefined();
//
// linkedList.append(2).append(3);
// const node = linkedList.find({ value: 2 });
//
// console.log(node.value) //.toBe(2);
// console.log(linkedList.find({ value: 5 })) //.toBeNull();

/**
 * should find node by callback
 */
/*
linkedList
  .append({ value: 1, key: 'test1' })
  .append({ value: 2, key: 'test2' })
  .append({ value: 3, key: 'test3' });

const node = linkedList.find({ callback: (value) => value.key === 'test2' });

console.log(node) // .toBeDefined();
console.log(node.value.value) // .toBe(2);
console.log(node.value.key) // .toBe('test2');
console.log(linkedList.find({ callback: (value) => value.key === 'test5' })) // .toBeNull();
*/

/**
 * Create linked list from array
 */
// linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);
// console.log(linkedList.toString()) // ('1,1,2,3,3,3,4,5');

/**
 * find node by means of custom compare function
 */
/*
const comparatorFunction = (a, b) => {
  if (a.customValue === b.customValue) {
    return 0;
  }

  return a.customValue < b.customValue ? -1 : 1;
};

const linkedList1 = new LinkedList(comparatorFunction);

linkedList1
  .append({ value: 1, customValue: 'test1' })
  .append({ value: 2, customValue: 'test2' })
  .append({ value: 3, customValue: 'test3' });

const node = linkedList1.find({
  value: { value: 2, customValue: 'test2' },
});

console.log(node) // .toBeDefined();
console.log(node.value.value) // .toBe(2);
console.log(node.value.customValue) // .toBe('test2');
console.log(linkedList1.find({ value: { value: 2, customValue: 'test5' } })) // .toBeNull();
*/

/**
 * find preferring callback over compare function
 */
// const greaterThan = (value, compareTo) => (value > compareTo ? 0 : 1);
//
// const linkedList1 = new LinkedList(greaterThan);
// linkedList1.fromArray([1, 2, 3, 4, 5]);
//
// let node = linkedList1.find({value: 3});
// console.log(node.value) // .toBe(4);
//
// node = linkedList1.find({callback: (value) => value < 3});
// console.log(node.value) // .toBe(1);

/**
 *  it('should convert to array', () => {
 *     const linkedList = new LinkedList();
 *     linkedList.append(1);
 *     linkedList.append(2);
 *     linkedList.append(3);
 *     expect(linkedList.toArray().join(',')).toBe('1,2,3');
 *   });
 * */

/**
 *  it('should reverse linked list', () => {
 *     const linkedList = new LinkedList();
 *
 *     // Add test values to linked list.
 *     linkedList
 *       .append(1)
 *       .append(2)
 *       .append(3);
 *
 *     expect(linkedList.toString()).toBe('1,2,3');
 *     expect(linkedList.head.value).toBe(1);
 *     expect(linkedList.tail.value).toBe(3);
 *
 *     // Reverse linked list.
 *     linkedList.reverse();
 *     expect(linkedList.toString()).toBe('3,2,1');
 *     expect(linkedList.head.value).toBe(3);
 *     expect(linkedList.tail.value).toBe(1);
 *
 *     // Reverse linked list back to initial state.
 *     linkedList.reverse();
 *     expect(linkedList.toString()).toBe('1,2,3');
 *     expect(linkedList.head.value).toBe(1);
 *     expect(linkedList.tail.value).toBe(3);
 *   });
 */
