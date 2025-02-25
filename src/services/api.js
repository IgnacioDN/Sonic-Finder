// src/services/api.js

const API_URL = 'https://api.example.com/artists';  // Reemplaza con la URL real de la API

export const fetchArtists = async (genre) => {
  try {
    const response = await fetch(`${API_URL}?genre=${genre}`);
    if (!response.ok) {
      throw new Error('Error al obtener artistas');
    }
    const data = await response.json();
    return data.artists; // Supuesto formato de respuesta
  } catch (error) {
    console.error(error);
    return [];
  }
};
