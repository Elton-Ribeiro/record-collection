import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: [ './artist-list.component.scss' ]
})

export class ArtistListComponent implements OnInit {

  artists: Artist[] = [];

  displayedColumns: string[] = ['name', 'album', 'year', `actions`];
  dataSource = this.artists;

  constructor(private artistsService: ArtistService, private router: Router) { }

  ngOnInit(): void {
    this.getArtists();
  }

  private getArtists() {
    this.artistsService.getArtistList().subscribe(data => {
      this.artists = data;
      this.dataSource = this.artists      
    })
  }

  artistDetails(id: number) {
    this.router.navigate([ 'artist-details', id ]);
  }

  artistUpdate(id: number) {
    this.router.navigate([ 'artist-update', id ]);
  }

  artistDelete(id: number) {
    this.artistsService.deleteArtist(id).subscribe(data => {
      console.log(data);
      this.router.navigate([ 'artist-delete', id ]);
    })
  }

}
