import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tap-press-action',
  templateUrl: 'action.html'
})

export class ActionComponent {
  @Output() addEvent: EventEmitter<string>

  constructor() {
    this.addEvent = new EventEmitter<string>();
  }

  tapAction() {
    this.addEvent.emit('taps');
  }

  pressAction() {
    this.addEvent.emit('presses');
  }

}
