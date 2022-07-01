import axios from "axios";

const napster = axios.create({
  baseURL: 'https://api.napster.com/v2.2/',
  timeout: 10000,
  params: {
    apikey: process.env.REACT_APP_API_KEY
  }
});

const getAlbumImage = albumId => {
  if(albumId === undefined) {
    return "";
  }
  return `https://api.napster.com/imageserver/v2/albums/${albumId}/images/500x500.jpg`;
} 

const getArtistImage = artistId => {
  if(artistId === undefined) {
    return "";
  }
  return `https://api.napster.com/imageserver/v2/artists/${artistId}/images/150x100.jpg`;
}

export {napster, getAlbumImage, getArtistImage};