import axios from 'axios';

class DashboardService {
  _apiBase = 'https://my-json-server.typicode.com/Almost-Infinity/placeholder-db';

  getCurrencies() {
    return axios.get(`${this._apiBase}/currencies`);
  }
}

export { DashboardService };