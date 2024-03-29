import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { SharedModule } from '@caterpillar-elements-demo/shared';
import { AppComponent } from './app.component';
import { SecondModule } from './second.module';

@NgModule({
  imports: [BrowserModule, SharedModule, SecondModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elm = createCustomElement<AppComponent>(AppComponent, {
      injector: this.injector
    });
    customElements.define('ng-element', elm);
  }
}
