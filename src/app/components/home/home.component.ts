import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { spotify } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  newSongs: any[] = []
  loading: boolean;
  error: boolean;
  mensajeError: string = '';

  constructor(private _spotifyService: SpotifyService) {
    this.loading = true;    
    this.expireToken();
  }

  expireToken() {
    let time = new Date().getTime() - spotify.firstSesion.getTime();
    if (spotify.token == '' || time > spotify.expireToken * 1000) {
      this._spotifyService.getNewToken()
        .subscribe(() => {
          this.getNewReleases();
        }) 
    } else {
      this.getNewReleases();
    }
  }

  private getNewReleases() {
    this._spotifyService.getNewReleases()
      .subscribe((data: any) => {
        this.newSongs = data
        this.loading = false;
      }, err => {
        this.error = true;
        this.loading = false;
        this.mensajeError = err.error.error.message;
      });

  }
}
