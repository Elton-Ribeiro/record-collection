package com.myalbuns.project.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myalbuns.project.exception.NotFoundException;
import com.myalbuns.project.model.Artist;
import com.myalbuns.project.repository.ArtistRepository;

@CrossOrigin (origins = "http://localhost:4200")
@RestController
@RequestMapping ("api/v1/")
public class ArtistController {

	@Autowired
	private ArtistRepository artistRepository;
	
	// buscar todos os artistas
	@GetMapping ("/artists")
	public List<Artist> getAllArtists() {
		return artistRepository.findAll();
	}
	
	// criar artista
	@GetMapping ("/artists")
	public Artist createArtist (@RequestBody Artist artist) {
		return artistRepository.save(artist);
	}

	// buscar artista pelo ID
	@GetMapping ("/artists/{id}")
	public ResponseEntity<Artist> getArtistById(@PathVariable Long id) {
		Artist artist  = artistRepository.findById(id)		
				.orElseThrow(() -> new NotFoundException("Artist not exist with id :" + id));
		return ResponseEntity.ok(artist);						
	}
	
	// fazer update do artista
	@PutMapping ("/artists/{id}")
	public ResponseEntity<Artist> updateArtistEntity(@PathVariable Long id) {
		Artist artist  = artistRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Artist not exist with id :" + id));
		
		artist.setName(artist.getName()); //artist.setName(artistDetails..
		artist.setAlbum(artist.getAlbum()); //artist.setName(artistDetails.. 
		artist.setYear(artist.getYear()); //artist.setName(artistDetails..	
		
		Artist updateArtist = artistRepository.save(artist);
		return ResponseEntity.ok(updateArtist);
	}
	
	// deletar artista 
	@DeleteMapping("/artists/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteArtist(@PathVariable Long id) {
			Artist artist = artistRepository.findById(id)
					.orElseThrow(() -> new NotFoundException ("Artist not exist with id :" + id));
			
			artistRepository.delete(artist);
			Map<String, Boolean> response = new HashMap<>();
			response.put("DELETED", Boolean.TRUE);
		return ResponseEntity.ok(response);		
	}
		
}