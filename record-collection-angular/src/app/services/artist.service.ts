import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})

export class ArtistService {

  private baseURL = "http://localhost:8080/api/v1/artists";

  constructor(private httpClient: HttpClient) { }

  //LISTAR ARTISTAS
  getArtistList(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(`${this.baseURL}`);
  }
  //BUSCAR ARTISTA PELO ID
  getArtistById(id: number): Observable<Artist> {
    return this.httpClient.get<Artist>(`${this.baseURL}/${id}`);
  }
  //ADICIONAR UM NOVO ARTISTA
  createArtist(artist: Artist): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, artist); //PUT ????????
  }
  //ATUALIZAR O ARTISTA ATUAL USANDO O ID
  updateArtist(id: number, artist: Artist): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, artist); //POST ????????
  }
  //DELETAR ARTISTA
  deleteArtist(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}