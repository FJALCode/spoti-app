// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyABH5Gl6xuVsGbJy7GXUaGPbR1g8f2Cxhs",
    authDomain: "fjalcode-spoti-app.firebaseapp.com",
    projectId: "fjalcode-spoti-app",
    storageBucket: "fjalcode-spoti-app.appspot.com",
    messagingSenderId: "978447933165",
    appId: "1:978447933165:web:b58aca297ce66c799ab6e4",
    measurementId: "G-5XMFZ0XFQS"
  }
};

export const spotify = {
  token:'',
  clientId: '1b0b02d4caa8493eafe08e44ce6d5524',
  clientSecret: '3ba8a26935ce492a813a8e975e50642b',
  urlApiSpotify:'https://api.spotify.com',
  urlNewReleases:'/v1/browse/new-releases',
  urlArtista: '/v1/artists',
  urlService:'https://spoti-service.herokuapp.com/spotify',
  expireToken: 0,
  sesionToken: new Date()
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
