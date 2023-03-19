class MySet {
  collection: number[] = [];
  constructor(collection: number[]) {
    this.collection = collection;
  }
  has(element: number): boolean {
    return this.collection.indexOf(element) !== -1;
  }
  values(): number[] {
    return this.collection;
  }

  add(element: number): boolean {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }
}
