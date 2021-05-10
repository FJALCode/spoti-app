import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';
import { spotify } from 'src/environments/environment';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;
  topTracks: any[] = []

  constructor(
    private activateRouter: ActivatedRoute,
    private _spotifyService: SpotifyService) {
    this.loading = true;
    this.expireToken();
  }

  expireToken() {
    let time = new Date().getTime() - spotify.sesionToken.getTime();
    if (spotify.token == '' || time > spotify.expireToken * 1000) {
      this._spotifyService.getNewToken()
        .subscribe(() => {
          this.getData();
        })
    } else {
      this.getData();
    }
  }

  getData() {
    this.activateRouter.params.subscribe(newParams => {
      this.getArtista(newParams['id']);
      this.getTopTracks(newParams['id']);
    })
  }

  getArtista(id: string) {
    this.loading = true;
    this._spotifyService.getArtista(id).subscribe(data => {
      this.artista = data;
      this.loading = false;
    })
  }

  getTopTracks(id: string) {
    this._spotifyService.getTopTracks(id).subscribe(data => {
      this.topTracks = data;
    });
  }
}

