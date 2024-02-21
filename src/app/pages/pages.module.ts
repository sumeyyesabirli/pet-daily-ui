import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginModule } from '../_auth/login/login.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,

  ],
  declarations: []
})
export class PagesModule { }
