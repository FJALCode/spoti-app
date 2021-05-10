import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { spotify } from "../../environments/environment";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${spotify.token}`
    });
    const url: string = spotify.urlApiSpotify + query;
    return this.http.get(url, { headers });
  };

  getNewReleases() {
    return this.getQuery(spotify.urlNewReleases)
      .pipe(map(data => {
        return data['albums'].items;
      }))
  }

  getArtistas(termino: string) {
    return this.getQuery(`/v1/search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => {
        return data['artists'].items;
      }))
  }

  getArtista(id: string) {
    return this.getQuery(`${spotify.urlArtista}/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`${spotify.urlArtista}/${id}/top-tracks?market=us`)
      .pipe(map(data => data['tracks']));
  }

  getNewToken() {
    return this.http.get(`${spotify.urlService}/${spotify.clientId}/${spotify.clientSecret}`)
      .pipe(map(data => {
        spotify.token = data['access_token'];
        spotify.expireToken = data['expires_in'];
        spotify.sesionToken = new Date();
        
      }))
  }

}
