import axios from 'axios';
export const fetchData = async ({pageParam}) => {
  const api_key = process.env['API_KEY'];
  let _fetchedData;

  await axios
    .get(`https://api.thecatapi.com/v1/breeds?limit=9&page=${pageParam}`, {
      headers: {
        'x-api-key': api_key,
      },
    })
    .then(response => {
      return (_fetchedData = response.data);
    });
  return _fetchedData;
};
