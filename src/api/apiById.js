import axios from 'axios';

const getEventById = async (id, onSuccess, onError) => {
  await axios
    .get(
      `https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&refine.recordid=${id}`
    )
    .then(
      (response) => {
        onSuccess(response.data.records[0].fields);
      },
      (error) => onError(error)
    );
};

export default getEventById;
