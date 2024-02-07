import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './_layout/components/footer/footer.component';
import { TopbarComponent } from './_layout/components/topbar/topbar.component';
import { MenuComponent } from './_layout/menu/menu.component';
import { ContentComponent } from './_layout/content/content.component';
import { HttpClientService } from './_services/base-http-client.service';
import { AnimalTypeService } from './_services/admin/animal-type.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopbarComponent,
    MenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
