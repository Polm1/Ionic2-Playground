import { Component, Output, EventEmitter } from '@angular/core';
import { TrackingService } from '../../services/tracking.service';

/**
 * Generated class for the ActionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tap-press-action',
  templateUrl: 'action.html'
})
export class ActionComponent {

  @Output()
  changeEvent: EventEmitter<{
      target: string,
      count: number
  }>

  constructor(
    private trackingService: TrackingService
  ) {
    this.changeEvent = new EventEmitter<{
      target: string,
      count: number
    }>();
  }


  tapAction() {
    this.trackingService.addTaps();
    this.changeEvent.emit({
      target: 'taps',
      count: this.trackingService.getTaps()
    });
  }

  pressAction() {
    this.trackingService.addPresses();
    this.changeEvent.emit({
      target: 'presses',
      count: this.trackingService.getPresses()
    });
  }

}
