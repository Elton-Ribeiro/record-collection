import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistCreateComponent } from './components/artist-create/artist-create.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ArtistUpdateComponent } from './components/artist-update/artist-update.component';

const routes: Routes = [
  {path: 'artists', component: ArtistListComponent},
  {path: 'artist-create', component: ArtistCreateComponent},
  {path: 'artist-update/:id', component: ArtistUpdateComponent},  
  {path: 'artist-details/:id', component: ArtistDetailsComponent},
  {path: '', redirectTo: 'artists', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
