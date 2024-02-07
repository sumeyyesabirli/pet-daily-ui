import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from 'src/app/_components/post/post.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'', component: MainPageComponent
      }
    ])
  ],
  declarations: [MainPageComponent,PostComponent]
})
export class MainPageModule { }
