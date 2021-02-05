import axios from 'axios';

const KEY = 'AIzaSyB1VbFaVgo3__4fRld0xfNf-nLBW-12pkk';
//https://developers.google.com/youtube/v3/docs/search/list
//https://console.developers.google.com/apis

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});