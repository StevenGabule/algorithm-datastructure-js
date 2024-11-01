class DisjointSetItem {
  constructor(value, keyCallback) {
    this.value = value;
    this.keyCallback = keyCallback;
    this.parent = null;
    this.children = {}
  }

  getKey() {
    if (this.keyCallback) {
      return this.keyCallback(this.value)
    }

    return this.value;
  }

  getRoot() {
    return this.isRoot ? this : this.parent.getRoot()
  }

  isRoot() {
    return this.parent === null
  }

  getRank() {
    if (this.getChildren().length === 0) {
      return 0
    }
    let rank = 0;
    this.getChildren().forEach((child) => {
      rank += 1;

      rank += child.getRank()
    })
    return rank;
  }

  getChildren() {
    return Object.values(this.children)
  }

  setParent(parentItem, forceSettingParentChild = true) {
    this.parent = parentItem;

    if (forceSettingParentChild) {
      parentItem.addChild(this)
    }

    return this;
  }

  addChild(childItem) {
    this.children[childItem.getKey()] = childItem
    childItem.setParent(this, false)

    return this;
  }
}

/**
 it('should do basic manipulation with disjoint set item', () => {
   const itemA = new DisjointSetItem('A');
   const itemB = new DisjointSetItem('B');
   const itemC = new DisjointSetItem('C');
   const itemD = new DisjointSetItem('D');

   expect(itemA.getRank()).toBe(0);
   expect(itemA.getChildren()).toEqual([]);
   expect(itemA.getKey()).toBe('A');
   expect(itemA.getRoot()).toEqual(itemA);
   expect(itemA.isRoot()).toBe(true);
   expect(itemB.isRoot()).toBe(true);

   itemA.addChild(itemB);
   itemD.setParent(itemC);

   expect(itemA.getRank()).toBe(1);
   expect(itemC.getRank()).toBe(1);

   expect(itemB.getRank()).toBe(0);
   expect(itemD.getRank()).toBe(0);

   expect(itemA.getChildren().length).toBe(1);
   expect(itemC.getChildren().length).toBe(1);

   expect(itemA.getChildren()[0]).toEqual(itemB);
   expect(itemC.getChildren()[0]).toEqual(itemD);

   expect(itemB.getChildren().length).toBe(0);
   expect(itemD.getChildren().length).toBe(0);

   expect(itemA.getRoot()).toEqual(itemA);
   expect(itemB.getRoot()).toEqual(itemA);

   expect(itemC.getRoot()).toEqual(itemC);
   expect(itemD.getRoot()).toEqual(itemC);

   expect(itemA.isRoot()).toBe(true);
   expect(itemB.isRoot()).toBe(false);
   expect(itemC.isRoot()).toBe(true);
   expect(itemD.isRoot()).toBe(false);

   itemA.addChild(itemC);

   expect(itemA.isRoot()).toBe(true);
   expect(itemB.isRoot()).toBe(false);
   expect(itemC.isRoot()).toBe(false);
   expect(itemD.isRoot()).toBe(false);

   expect(itemA.getRank()).toEqual(3);
   expect(itemB.getRank()).toEqual(0);
   expect(itemC.getRank()).toEqual(1);
 });

 it('should do basic manipulation with disjoint set item with custom key extractor', () => {
   const keyExtractor = (value) => {
    return value.key;
   };

   const itemA = new DisjointSetItem({ key: 'A', value: 1 }, keyExtractor);
   const itemB = new DisjointSetItem({ key: 'B', value: 2 }, keyExtractor);
   const itemC = new DisjointSetItem({ key: 'C', value: 3 }, keyExtractor);
   const itemD = new DisjointSetItem({ key: 'D', value: 4 }, keyExtractor);

   expect(itemA.getRank()).toBe(0);
   expect(itemA.getChildren()).toEqual([]);
   expect(itemA.getKey()).toBe('A');
   expect(itemA.getRoot()).toEqual(itemA);
   expect(itemA.isRoot()).toBe(true);
   expect(itemB.isRoot()).toBe(true);

   itemA.addChild(itemB);
   itemD.setParent(itemC);

   expect(itemA.getRank()).toBe(1);
   expect(itemC.getRank()).toBe(1);

   expect(itemB.getRank()).toBe(0);
   expect(itemD.getRank()).toBe(0);

   expect(itemA.getChildren().length).toBe(1);
   expect(itemC.getChildren().length).toBe(1);

   expect(itemA.getChildren()[0]).toEqual(itemB);
   expect(itemC.getChildren()[0]).toEqual(itemD);

   expect(itemB.getChildren().length).toBe(0);
   expect(itemD.getChildren().length).toBe(0);

   expect(itemA.getRoot()).toEqual(itemA);
   expect(itemB.getRoot()).toEqual(itemA);

   expect(itemC.getRoot()).toEqual(itemC);
   expect(itemD.getRoot()).toEqual(itemC);

   expect(itemA.isRoot()).toBe(true);
   expect(itemB.isRoot()).toBe(false);
   expect(itemC.isRoot()).toBe(true);
   expect(itemD.isRoot()).toBe(false);

   itemA.addChild(itemC);

   expect(itemA.isRoot()).toBe(true);
   expect(itemB.isRoot()).toBe(false);
   expect(itemC.isRoot()).toBe(false);
   expect(itemD.isRoot()).toBe(false);

   expect(itemA.getRank()).toEqual(3);
   expect(itemB.getRank()).toEqual(0);
   expect(itemC.getRank()).toEqual(1);
 });
 */
