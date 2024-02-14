import { NgModule,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalTypeComponent } from './animal-type.component';
import { RouterModule } from '@angular/router';
import { CustomGridModule } from 'src/app/_components/custom-grid/custom-grid.module';
import { AddAnimalTypeComponent } from './add-animal-type/add-animal-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'src/app/pagination/pagination.module';




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
    FormsModule,
    PaginationModule


  ],
  declarations: [AnimalTypeComponent, AddAnimalTypeComponent]

})
export class AnimalTypeModule { }
