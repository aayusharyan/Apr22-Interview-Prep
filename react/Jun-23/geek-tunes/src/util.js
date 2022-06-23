import axios from "axios";

const napster = axios.create({
  baseURL: 'https://api.napster.com/v2.2/',
  timeout: 10000,
  params: {
    apikey: process.env.REACT_APP_API_KEY
  }
});

const trackImage = trackId => {
  return `https://api.napster.com/imageserver/v2/albums/${trackId}/images/500x500.jpg`;
}

export {napster, trackImage};