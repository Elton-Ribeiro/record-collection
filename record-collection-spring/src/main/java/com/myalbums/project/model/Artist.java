package com.myalbums.project.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table (name = "artist")
public class Artist {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column // (name = "artist_name") //não precisa adicionar o 'name' de cada 'column', o spring já pega do objeto
	private String name; //nome do artista
	@Column // (name = "album_name")
	private String album; // nome do álbum
	@Column // (name = "release_year")
	private int year; //ano de lançamento
		
	public Artist() {}

	public Artist(long id, String name, String album, int year) {		
		this.id = id;
		this.name = name;
		this.album = album;
		this.year = year;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAlbum() {
		return album;
	}

	public void setAlbum(String album) {
		this.album = album;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}	
	
}