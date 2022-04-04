import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-update',
  templateUrl: './artist-update.component.html',
  styleUrls: ['./artist-update.component.scss']
})
export class ArtistUpdateComponent implements OnInit {
  id!: number;
  artist: Artist = new Artist;

  constructor(private artistService: ArtistService, private activatedRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  onSubmit() {
    this.artistService.updateArtist(this.id, this.artist).subscribe( data =>{
      this.sendToArtistList()}
    , error => console.log(error));    
  }

  sendToArtistList() {
    this.router.navigate(['/artists']);        
  }
}
