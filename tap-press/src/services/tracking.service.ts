export class TrackingService {
  private taps: number;
  private presses: number;

  addTaps() {
    return this.taps += 1;
  }

  addPresses() {
    return this.presses += 1;
  }

  resetTaps() {
    return this.taps = 0;
  }

  resetPresses() {
    return this.presses = 0;
  }
}
