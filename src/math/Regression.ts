import { TableData } from '../store/module/table';

export default class Regression {

  static getBeta1(data: TableData[]) {
    const x2sq = data.reduce((prev, next) => prev + (next.x2 * next.x2), 0);
    const x1sq = data.reduce((prev, next) => prev + (next.x1 * next.x1), 0);
    const x1y = data.reduce((prev, next) => prev + (next.x1 * next.y), 0);
    const x1x2 = data.reduce((prev, next) => prev + (next.x1 * next.x2), 0);
    const x2y = data.reduce((prev, next) => prev + (next.x2 * next.y), 0);

    return (
      (x2sq * x1y - x1x2 * x2y) /
      (x1sq * x2sq - x1x2 * x1x2)
    );
  }

  static getBeta2(data: TableData[]) {
    const x2sq = data.reduce((prev, next) => prev + (next.x2 * next.x2), 0);
    const x1sq = data.reduce((prev, next) => prev + (next.x1 * next.x1), 0);
    const x1y = data.reduce((prev, next) => prev + (next.x1 * next.y), 0);
    const x1x2 = data.reduce((prev, next) => prev + (next.x1 * next.x2), 0);
    const x2y = data.reduce((prev, next) => prev + (next.x2 * next.y), 0);

    return (
      (x1sq * x2y - x1x2 * x1y) /
      (x1sq * x2sq - x1x2 * x1x2)
    );
  }

  static getEquation(data: TableData[]) {
    const yMean = data.reduce((prev, next) => prev + next.y, 0) / data.length;
    const x1Mean = data.reduce((prev, next) => prev + next.x1, 0) / data.length;
    const x2Mean = data.reduce((prev, next) => prev + next.x2, 0) / data.length;
    const a = yMean - this.getBeta1(data) * x1Mean - this.getBeta2(data) * x2Mean;

    return {
      e: a,
      b1: this.getBeta1(data),
      b2: this.getBeta2(data),
    }
  }

  static getErrorsMean(actual: number[], predicted: number[]) {
    return actual.map((v, i) => Math.pow(predicted[i] - v, 2))
      .reduce((prev, next) => prev + Math.sqrt(next), 0) / actual.length;
  }

}