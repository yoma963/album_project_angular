import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumSpecialComponent } from './album-special/album-special.component';
import { NotFoundedComponent } from './not-founded/not-founded.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "albums", component: AlbumListComponent},
  {path: "albums/:id", component: AlbumSpecialComponent},
  {path: "**", component: NotFoundedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
