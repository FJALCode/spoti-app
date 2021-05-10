import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { spotify } from 'src/environments/environment';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;
  termino: string = '';


  constructor(private _spotifyService: SpotifyService) {
    this.loading = false;
  }

  buscar(termino: string) {
    this.loading = true;
    if (termino.length > 0) {
      this.termino = termino
      this.expireToken();
    }
    this.loading = false;
  }

  expireToken() {
    let time = new Date().getTime() - spotify.sesionToken.getTime();
    if (spotify.token == '' || time > spotify.expireToken * 1000) {  
          
      this._spotifyService.getNewToken()
        .subscribe(() => {
          this.getArtistas() 
        })
    } else {
      this.getArtistas()
    }
  }

  getArtistas() {
    this._spotifyService.getArtistas(this.termino)
      .subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      })
  }
}
