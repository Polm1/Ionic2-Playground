export class TrackingService {
  private taps: number;
  private presses: number;

  addTaps() {
    this.taps += 1;
  }

  addPresses() {
    this.presses += 1;
  }

  resetTaps() {
    this.taps = 0;
  }

  resetPresses() {
    this.presses = 0;
  }

  resetAll() {
    this.taps = 0;
    this.presses = 0;
  }

  getTaps() {
    return this.taps;
  }

  getPresses() {
    return this.presses;
  }

  setTaps(taps: number) {
    this.taps = taps;
  }

  setPresses(presses: number) {
    this.presses = presses;
  }
}
