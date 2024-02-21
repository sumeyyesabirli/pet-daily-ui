import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalTypeComponent } from './animal-type.component';
import { RouterModule } from '@angular/router';
import { CustomGridModule } from 'src/app/_components/custom-grid/custom-grid.module';
import { AddAnimalTypeComponent } from './add-animal-type/add-animal-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateAnimalTypeComponent } from './update-animal-type/update-animal-type.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AnimalTypeComponent
      }
    ]),
    CustomGridModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AnimalTypeComponent, AddAnimalTypeComponent, UpdateAnimalTypeComponent]

})
export class AnimalTypeModule { }
