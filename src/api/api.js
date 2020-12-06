import axios from 'axios';

const API_URL = 'https://data.nantesmetropole.fr/api/records/1.0/search/';

const params = {
  dataset: '244400404_agenda-evenements-nantes-nantes-metropole',
  apikey: 'a2c65fe09812bd0c8a2628bdfe6f71bb1bd48facca5b74d63070e77f',
  rows: 2000,
};

export default function getApi(onSuccess) {
  axios.get(`${API_URL}`, { params }).then((response) => {
    onSuccess(response.data.records);
  });
}
