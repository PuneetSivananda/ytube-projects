interface ISortable {}
class ReverseSortEngineering {
  data: number[];
  constructor(data: number[]) {
    this.data = data;
  }
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
  cost(N: number) {
    return (N * (N + 1)) / 2 - 1;
  }
}

const rse = new ReverseSortEngineering([23, 4, 3]);
