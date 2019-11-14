import { Component, Injector, NgModule, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  template: `
    The Second One
  `
})
export class SecondComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@NgModule({
  imports: [BrowserModule],
  declarations: [SecondComponent],
  providers: [],
  entryComponents: [SecondComponent]
})
export class SecondModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elm = createCustomElement<SecondComponent>(SecondComponent, {
      injector: this.injector
    });
    customElements.define('second-element', elm);
  }
}
