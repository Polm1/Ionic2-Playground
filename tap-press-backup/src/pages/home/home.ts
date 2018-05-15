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
    this.trackingService.resetAll();
    this.taps = this.trackingService.getTaps()
    this.presses = this.trackingService.getPresses()
  }

  updateCount(change: { target: string, count: number }) {
    switch (change.target) {
      case 'taps':
        this.taps = change.count;
        this.trackingService.setTaps(change.count);
        break;
      case 'presses':
        this.presses = change.count;
        this.trackingService.setPresses(change.count);
        break;
      default:
        break;
    }
  }

  resetCount(target: string) {
    switch (target) {
      case 'all':
        this.taps = 0;
        this.presses = 0;
        break;
      case 'taps':
        this.taps = 0;
        break;
      case 'presses':
        this.presses = 0;
        break;
      default:
        break;
    }
  }

}
