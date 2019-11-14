import { destroyPlatform } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SecondModule } from './app/second.module';

destroyPlatform();

platformBrowserDynamic()
  .bootstrapModule(SecondModule)
  .catch(err => console.error(err));
