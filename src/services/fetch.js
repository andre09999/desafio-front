import axios from 'axios';

const fetchML = axios.create({

  baseURL: `https://api.mercadolibre.com/sites/MLA/categories`,
}); 


const fetchBP = axios.create({

    baseURL: `https://api.mercadolibre.com/sites/MLA/categories`,
  }); 
  


const api = async (method, endpoint) => fetchML
  .request({ method, url: endpoint })
  .then(({data}) => (data));

export default api;