import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistDetailsComponent } from './component/artist-details/artist-details.component';
import { ArtistCreateComponent } from './component/artist-create/artist-create.component';
import { ArtistListComponent } from './component/artist-list/artist-list.component';
import { ArtistUpdateComponent } from './component/artist-update/artist-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailsComponent,
    ArtistCreateComponent,
    ArtistListComponent,
    ArtistUpdateComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
