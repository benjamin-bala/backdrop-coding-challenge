import {useEffect, useState} from 'react';
import axios from 'axios';

export default function fetcher(url) {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus('fetching');
      await axios
        .get(url, {
          headers: {
            'x-api-key': 'ccdd2de4-04ef-41e0-8b8d-21cd814a2808',
          },
        })
        .then(result => {
          setData(result.data);
          setStatus('fetched');
        })
        .catch(() => {
          setStatus('error');
        });
    };

    fetchData();
  }, [url]);

  return {data, status};
}
