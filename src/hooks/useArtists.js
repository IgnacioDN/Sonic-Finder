// src/hooks/useArtists.js
import { useState, useEffect } from 'react';
import { fetchArtists } from '../services/api';

const useArtists = (genre) => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArtists = async () => {
      setLoading(true);
      try {
        const data = await fetchArtists(genre);
        setArtists(data);
      } catch (error) {
        setError('No se pudieron cargar los artistas');
      } finally {
        setLoading(false);
      }
    };

    if (genre) {
      getArtists();
    }
  }, [genre]);

  return { artists, loading, error };
};

export default useArtists;
