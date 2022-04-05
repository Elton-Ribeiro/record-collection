package com.myalbums.project.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.myalbums.project.exception.NotFoundException;
import com.myalbums.project.model.Artist;
import com.myalbums.project.repository.ArtistRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ArtistController {

	@Autowired
	private ArtistRepository artistRepository;

	// buscar todos os nomes de artistas
	@GetMapping("/artists")
	public List<Artist> getAllArtists() {
		System.out.println("GET ARTIST");
		return artistRepository.findAll();
	}

	// criar artista
	@PostMapping("/artists")
	public Artist createArtist(@RequestBody Artist artist) {
		System.out.println("CREATE ARTIST");
		return artistRepository.save(artist);
	}

	// buscar artista pelo ID
	@GetMapping("/artists/{id}")
	public ResponseEntity<Artist> getArtistById(@PathVariable Long id) {
		System.out.println("FIND ARTIST BY ID");
		Artist artist = artistRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Artist not exist with id :" + id));
		return ResponseEntity.ok(artist);
	}

	// fazer update do artista
	@PutMapping("/artists/{id}")
	public ResponseEntity<Artist> updateArtist(@PathVariable Long id, @RequestBody Artist artistDetails) {
		System.out.println("ARTIST UPDATE");
		Artist artist = artistRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Artist not exist with id :" + id));

		artist.setName(artistDetails.getName());
		artist.setAlbum(artistDetails.getAlbum());
		artist.setYear(artistDetails.getYear());

		Artist updateArtist = artistRepository.save(artist);
		return ResponseEntity.ok(updateArtist);
	}

	// deletar artista
	@DeleteMapping("/artists/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteArtist(@PathVariable Long id) {
		System.out.println("DELETE ARTIST");
		Artist artist = artistRepository.findById(id)
				.orElseThrow(() -> new NotFoundException("Artist not exist with id :" + id));

		artistRepository.delete(artist);
		Map<String, Boolean> response = new HashMap<>();
		response.put("DELETED", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}