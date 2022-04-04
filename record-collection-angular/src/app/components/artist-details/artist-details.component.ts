import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})

export class ArtistDetailsComponent implements OnInit {

  id!: number;
  artist: Artist | undefined;
  
  constructor (private artistService: ArtistService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.artist = new Artist();
    this.artistService.getArtistById(this.id).subscribe(data => {this.artist = data;
    });
  }
}
