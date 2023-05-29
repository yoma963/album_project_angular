import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumSpecialComponent } from './album-special/album-special.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AlbumListComponent,
    AlbumSpecialComponent,
    NotFoundedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
