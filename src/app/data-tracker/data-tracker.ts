
export class DataTracker {
  private dataArray: number[] = [];
  private total: number = 0;
  private mode: number;
  private dataCountMap: Map<number, number> = new Map();

  constructor() { }

  public insert(datum: number): void {
    this.dataArray.push(datum);
    this.calculateTotal();
    this.calculateMode(datum);
  }

  public showMax(): number {
    return Math.max(...this.dataArray);
  }

  public showMin(): number {
    return Math.min(...this.dataArray);
  }

  public showMean(): number {
    return this.total / this.dataArray.length;
  }

  public showMode(): number {
    return this.mode;
  }

  private calculateTotal(): void {
    this.total = this.dataArray
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  private calculateMode(datum: number): void {
    this.updateDataCountMap(datum);

    this.mode = datum;
    this.dataCountMap.forEach((count, datum, countMap) => {
      if (count > countMap.get(this.mode)) {
        this.mode = datum;
      }
    });
  }

  private updateDataCountMap(datum: number): void {
    if (this.dataCountMap.has(datum)) {
      this.dataCountMap.set(datum, this.dataCountMap.get(datum) + 1)
    } else {
      this.dataCountMap.set(datum, 1)
    }
  }

}
