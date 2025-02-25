import React, { useState, useEffect } from 'react';
import ArtistCard from '../components/ArtistCard';
import NavBar from '../components/NavBar';

const HomePage = () => {
  const [artists, setArtists] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para la búsqueda

  useEffect(() => {
    // Simulamos una API para los artistas
    setArtists([
      { name: 'Artist 1', image: 'https://via.placeholder.com/250' },
      { name: 'Artist 2', image: 'https://via.placeholder.com/250' },
      { name: 'Artist 3', image: 'https://via.placeholder.com/250' },
      { name: 'Artist 4', image: 'https://via.placeholder.com/250' },
    ]);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <h1>Descubre Nuevos Artistas</h1>
      <input
        type="text"
        placeholder="Buscar Artistas"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="artist-list">
        {filteredArtists.map((artist, index) => (
          <ArtistCard key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
