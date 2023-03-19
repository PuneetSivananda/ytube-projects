export const Stack = function (this: any) {
  this.count = 0;
  this.storage = [];

  //   push implementation
  this.push = function (value: number) {
    this.storage[this.count] = value;
    this.count++;
  };

  //   pop implementation
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = function () {
    return this.count;
  };

  // returns the value at the end of stack or the top element
  this.peek = function (): number {
    return this.storage[this.count - 1];
  };
};
