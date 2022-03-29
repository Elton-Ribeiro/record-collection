import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artist.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})

export class ArtistListComponent implements OnInit {
  
  artists: Artist[] = []

  displayedColumns: string[] = ['id', 'name', 'album', 'year'];
  dataSource = this.artists; // = new MatTableDataSource(this.artists);
  

  constructor(private artistsService: ArtistService, private router: Router) { }

  // @ViewChild(MatSort) sort!: MatSort;

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

  ngOnInit(): void {
    this.getArtists();
  }

  private getArtists() {
    this.artistsService.getArtistList().subscribe(show => {
      this.artists = show;
    })
  }

  artistDetails(id: number) {
    this.router.navigate(['artist-details', id]);
  }

  artistUpdate(id: number) {
    this.router.navigate(['update-artist', id]);
  }

  artistDelete(id: number) {
    this.artistsService.deleteArtist(id).subscribe(show => {
      console.log(show);
      this.router.navigate(['delete-artist', id]);
    })
  }  
}
