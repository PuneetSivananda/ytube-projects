interface ISortable {}
abstract class ReverseSortEngineering implements ISortable {
  abstract data: number[];
  construct(N: number, C: number, M: number) {
    const { data } = this;
    console.log(data);
    // construct a array  with elements m..n
    // which when reversesorted, incurs a cost of C
    if (N === 1) {
      return M;
    } else {
    }
  }
}

class TestCases extends ReverseSortEngineering {
  public data: number[];
  constructor(data: number[]) {
    super();
    this.data = data;
  }
  read() {}
}

const test = new TestCases([1, 23, 4]);
test.construct(3, 4, 5);
