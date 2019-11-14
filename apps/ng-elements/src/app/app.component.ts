import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { AppComponentAttributes } from '@caterpillar-elements-demo/ng-element-types';

@Component({
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, AppComponentAttributes {
  @Input() person = { name: 'Bob' };
  @Output() greet: EventEmitter<string> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    const { person } = changes;
    if (person) {
      console.log(person.currentValue);
      if (typeof person.currentValue === 'string') {
        this.person = JSON.parse(person.currentValue);
      }
      console.log(this.person);
    }
  }

  onClick() {
    this.greet.emit(`Greetings, ${this.person.name}`);
  }
}
