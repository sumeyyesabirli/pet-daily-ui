import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from 'src/app/_components/post/post.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: MainPageComponent
      }
    ]),
    FormsModule
  ],
  declarations: [MainPageComponent, PostComponent]
})
export class MainPageModule { }
