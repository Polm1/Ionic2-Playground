import { Component } from '@angular/core';
import { TrackingService } from '../../services/tracking.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public taps: number;
  public presses: number;

  constructor(
    private trackingService: TrackingService
  ) {
    this.taps = this.trackingService.resetTaps();
    this.presses = this.trackingService.resetPresses();
  }

  updateCount(target: string) {
    switch (target) {
      case 'taps':
        this.taps = this.trackingService.addTaps();
      break;
      case 'presses':
        this.presses = this.trackingService.addPresses();
      break;
      default:
      break;
    }
  }

  resetCount(target: string) {
    switch (target) {
      case 'all':
        this.taps = this.trackingService.resetTaps();
        this.presses = this.trackingService.resetPresses();
      break;
      case 'taps':
        this.taps = this.trackingService.resetTaps();;
      break;
      case 'presses':
        this.presses = this.trackingService.resetPresses();
      break;
      default:
      break;
    }
  }

  youWin() {
    return ((this.taps === 2) && (this.presses === 4));
  }

}
