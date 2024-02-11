import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomGridComponent } from './custom-grid.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomGridComponent    ],
  exports: [CustomGridComponent]
})
export class CustomGridModule { }
