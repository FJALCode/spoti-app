// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const spotify = {
  token:'',
  clientId: '1b0b02d4caa8493eafe08e44ce6d5524',
  clientSecret: '3ba8a26935ce492a813a8e975e50642b',
  urlApiSpotify:'https://api.spotify.com',
  urlNewReleases:'/v1/browse/new-releases',
  urlArtista: '/v1/artists',
  urlService:'http://localhost:3000/spotify',
  expireToken: 0,
  firstSesion: new Date()
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
