import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 25df2d676ed0113692c75a5891b3ccbec42354537444c124e593897aaaab3ee4'
  }
});