export class PerformanceCalculator {
    constructor(aPerformance, aPlay) {
        this.performance = aPerformance;
        this.play = aPlay;
    }

    get amount() {
      throw new Error('subclass responsibility');
    }

    get volumeCredits() {
        return Math.max(this.performance.audience - 30, 0);
    }
}
