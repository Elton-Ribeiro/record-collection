import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.scss']
})

export class ArtistCreateComponent implements OnInit {

  artist: Artist = new Artist();

  constructor(private artistsService: ArtistService, private router: Router) { }

  ngOnInit(): void {
  }

  artistSave() {
    this.artistsService.createArtist(this.artist).subscribe(data => {
      console.log(data);
      this.sendToArtistList();      
    },
    error => console.log(error));        
  }

  sendToArtistList(){
    this.router.navigate(['/artists']);    
  }

  onSubmit(){
    console.log(this.artist);
    this.artistSave()
  }
  
}