/**
 * ReverseSort(L)
 * for i:= 1 to length(L) - 1
 *    j:= position with the minimum value in L between i and length(L), inclusive
 *    Reverse(L[i..j])
 *    cost:= cost+(j-i+1)
 */

class ReverseSort {
  private N: number;
  protected numbers: number[] = [];
  constructor(numbers: number[]) {
    this.numbers = numbers;
    this.N = numbers.length;
  }

  // returns the index where the number is found
  private findMinIndex(startIndex: number, endIndex: number): number {
    let minIndex = startIndex;
    for (let i = startIndex + 1; i <= endIndex; i++) {
      if (this.numbers[i] < this.numbers[minIndex]) {
        minIndex = i;
      }
    }
    return minIndex;
  }

  print(): void {
    console.log(this.numbers);
  }

  reverse(startIndex: number, endIndex: number): void {
    while (startIndex < endIndex) {
      const temp = this.numbers[startIndex];
      this.numbers[startIndex] = this.numbers[endIndex];
      this.numbers[endIndex] = temp;
      startIndex++;
      endIndex--;
    }
  }

  // Actual implementation of reverse sort
  sort(): number {
    const cost: number = 0;
    for (let i = 0; i < this.N - 1; i++) {
      let j = this.findMinIndex(i, this.N - 1);
      this.reverse(i, j);
      // console.log(this.numbers);
    }
    return cost;
  }
}

const rs = new ReverseSort([1, 4, 3, 5]);
rs.sort();
rs.print();
