class ReverseSort {
  min(leftChar: number, rightChar: number): number {
    if (leftChar < rightChar) {
      return leftChar;
    } else {
      return rightChar;
    }
  }
}

const rs = new ReverseSort();
console.log(rs.min(3, 5));
