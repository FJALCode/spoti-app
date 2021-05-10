export const environment = {
  production: true
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
  sesionToken: new Date()
}
