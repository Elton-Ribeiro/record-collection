import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistCreateComponent } from './components/artist-create/artist-create.component';
import { ArtistUpdateComponent } from './components/artist-update/artist-update.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailsComponent,
    ArtistCreateComponent,
    ArtistUpdateComponent,
    ArtistListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClient,
    MatTableModule,
    MatTableDataSource
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
