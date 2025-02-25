import React from 'react';
import './ArtistCard.css'; // Asegúrate de que tengas este archivo de estilos

const ArtistCard = ({ artist }) => {
  return (
    <div className="artist-card">
      <img src={artist.image} alt={artist.name} className="artist-image" />
      <h2 className="artist-name">{artist.name}</h2>
    </div>
  );
};

export default ArtistCard;
