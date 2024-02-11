import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './_layout/components/footer/footer.component';
import { TopbarComponent } from './_layout/components/topbar/topbar.component';
import { MenuComponent } from './_layout/menu/menu.component';
import { ContentComponent } from './_layout/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './_services/notification.service';
import { NotifierModule } from 'angular-notifier';
import { notifierOptions } from './_services/notifierOptions';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopbarComponent,
    MenuComponent,
    ContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NotifierModule.withConfig(notifierOptions),
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
