import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomGridComponent } from './custom-grid.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CustomGridComponent],
  exports: [CustomGridComponent]
})
export class CustomGridModule { }
