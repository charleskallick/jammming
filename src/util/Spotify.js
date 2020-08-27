const clientID = '305955dacbd54047887b2456492870af';
const redirectURI = 'http://localhost:3000/';
let accessToken;


const Spotify = {
  getAccessToken() {
    if (accessToken ) {
      return accessToken;
    }

    //check for accessToken
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessTokenMatch = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      //clears parameters from the URL, so the app doesn’t try grabbing the access token after it expires
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location.accessURL;
    }

  }

};


export default Spotify;

