class DoublyLinkedListNode {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  toString(cb) {
    return cb ? cb(this.value) : `${this.value}`
  }
}

class DoublyLinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(comparatorFunction)
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head)

    // If there is head, then it won't be head anymore.
    // Therefore, make its previous reference to be new node (new head).
    // Then mark the new node as head.
    if (this.head) {
      this.head.previous = newNode;
    }

    this.head = newNode;

    // If there is no tail yet let's make new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  append(value) {
    const newNode = new DoublyLinkedListNode(value)

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;

    // Attach current tail to the new node's previous reference.
    newNode.previous = this.tail

    // Set new node to be the tail of linked list.
    this.tail = newNode;

    return this;
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedListNode}
   */
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deleteNode = null
    let currentNode = this.head;

    while (currentNode) {
      if (this.compare.equals(currentNode.value, value)) {
        deleteNode = currentNode;

        if (deleteNode === this.head) {
          // If HEAD is going to be deleted...

          // Set head to second node, which will become new head.
          this.head = deleteNode.next;

          // Set new head's previous to null.
          if (this.head) {
            this.head.previous = null;
          }

          // If all the nodes in list has same value that is passed as argument
          // then all nodes will get deleted, therefore tail needs to be updated.
          if (deleteNode === this.tail) {
            this.tail = null;
          }
        } else if(deleteNode === this.tail) {
          // If TAIL is going to be deleted...

          // Set tail to second last node, which will become new tail.
          this.tail = deleteNode.previous
          this.tail.next = null;
        } else {
          // If MIDDLE node is going to be deleted...
          const previousNode = deleteNode.previous;
          const nextNode = deleteNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }
      currentNode = currentNode.next;
    }
    return deleteNode;
  }

  /**
   * @param {Object} findParams
   * @param {*} findParams.value
   * @param {function} [findParams.callback]
   * @return {DoublyLinkedListNode}
   */
  find({value = undefined, callback = undefined}) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while(currentNode) {
      // If callback is specified then try to find node by callback.
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      // If value is specified then try to compare by value ...
      if (value !== undefined && this.compare.equals(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * @return {DoublyLinkedListNode}
   */
  deleteTail() {
    if (!this.tail) {
      return null;
    }

    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // If there are many in linked list...
    const deletedTail = this.tail;

    this.tail = this.tail.previous;
    this.tail.next = null;

    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
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

  fromArray(values) {
    values.forEach((value) => this.append(value))

    return this;
  }

  /**
   * @param {function} [callback]
   * @return {string}
   */
  toString(callback) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      // store next node.
      nextNode = currNode.next;
      prevNode = currNode.previous;

      // Change next node of the current node so it would link to previous node.
      currNode.next = prevNode;
      currNode.previous = nextNode;

      // Move prevNode and currNode nodes one step forward.
      prevNode = currNode;
      currNode = nextNode
    }

    // reset head and tail
    this.tail = this.head;
    this.head = prevNode

    return this;
  }
}
