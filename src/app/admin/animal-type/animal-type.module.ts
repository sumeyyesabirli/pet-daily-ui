import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalTypeComponent } from './animal-type.component';
import { RouterModule } from '@angular/router';
import { CustomGridModule } from 'src/app/_components/custom-grid/custom-grid.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AnimalTypeComponent
      }
    ]),
    CustomGridModule
  ],
  declarations: [AnimalTypeComponent]
})
export class AnimalTypeModule { }
