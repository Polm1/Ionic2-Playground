import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tap-press-reset',
  templateUrl: 'reset.html'
})

export class ResetComponent {
  @Output() resetEvent: EventEmitter<string>

  constructor() {
    this.resetEvent = new EventEmitter<string>();
  }

  reset(target: string) {
    this.resetEvent.emit(target);
  }

}
