import { Component, EventEmitter, Output } from '@angular/core';
import { TrackingService } from '../../services/tracking.service';

/**
 * Generated class for the ResetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tap-press-reset',
  templateUrl: 'reset.html'
})
export class ResetComponent {


  @Output()
  resetEvent: EventEmitter<string>

  EventEmitter
  constructor(
    private trackingService: TrackingService
  ) {
    this.resetEvent = new EventEmitter<string>();
  }

  reset(target: string) {
    switch (target) {
      case 'all':
        this.trackingService.resetAll();
        this.resetEvent.emit('all');
      break;
      case 'taps':
        this.trackingService.resetTaps();
        this.resetEvent.emit('taps');
      break;
      case 'presses':
        this.trackingService.resetPresses();
        this.resetEvent.emit('presses');
      break;
    }
  }

}
