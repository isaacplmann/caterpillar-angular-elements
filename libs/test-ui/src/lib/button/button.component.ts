import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export type ButtonStyle = 'default' | 'primary' | 'warning';

@Component({
  selector: 'caterpillar-elements-demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() padding: number;
  @Input() style: ButtonStyle = 'default';
  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.buttonClick.emit();
  }
}
