import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     RouterModule.forChild([
      {
        path: '',
        component: ShareComponent
      }
    ])
  ],
  declarations: [ShareComponent]
})
export class ShareModule { }
