export {};

import { bubbleSort, insertionSort } from "./sortAlgorithms";

interface SortStrategy {
  sort(list: number[]): number[];
}

class BubbleSort implements SortStrategy {
  sort(list: number[]): number[] {
    console.log("bubble");
    return bubbleSort(list);
  }
}

class InsertSort implements SortStrategy {
  sort(list: number[]): number[] {
    console.log("insert");
    return insertionSort(list);
  }
}

class SortContext {
  constructor(private strategy: SortStrategy) {}
  sort(list: number[]): number[] {
    return this.strategy.sort(list);
  }
}

function run() {
    const list1 = [3,5,2,1,7,9,2]
    const context1 = new SortContext(new BubbleSort());
    context1.sort(list1);
    console.log(list1)

    const list2 = [3, 5, 2, 1, 7, 9, 2];
    const context2 = new SortContext(new InsertSort());
    context2.sort(list2);
    console.log(list2);

}
run()
