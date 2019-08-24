import { useState, useEffect } from 'react'

export const useHttp = (endpoint, dependencies) => {
    
  const [fetchedData, setFetchedData] = useState([]);
  const url = '/api/shops/';

  useEffect(() => {
    setFetchedData([]);
    fetch(url+endpoint, {credentials: 'include'})
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch.')
        }
        return response.json();
      })
      .then(data => {
          if(data.status === 'ok')
            setFetchedData(data.data);
          if(data.status === 'error')
            throw new Error(data.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, dependencies);

  return [fetchedData, setFetchedData];

}