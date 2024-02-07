import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { AnimalTypeService } from '../_services/admin/animal-type.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [AdminComponent],
  providers: []
})
export class AdminModule { }
