import axios from 'axios';

export const HTTP = axios.create({
  baseURL: "https://vuejs-stock-trader-54d6e.firebaseio.com/",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
})