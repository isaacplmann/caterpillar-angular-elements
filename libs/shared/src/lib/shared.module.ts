import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoldComponent } from './bold/bold.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BoldComponent],
  exports: [BoldComponent]
})
export class SharedModule {}
