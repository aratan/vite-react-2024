import React, { useState, useEffect } from 'react';

export function Api() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        if (response.ok) {
          const data = await response.json();
          setPokemonData(data);
        } else {
          throw new Error('Error al obtener datos del Pokémon');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    fetchData();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h1>Información de Pokémon:</h1>
      {pokemonData ? (
        <div>
          <p>Nombre: {pokemonData.name}</p>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>Altura: {pokemonData.height} dm</p>
          <p>Peso: {pokemonData.weight} hg</p>
        </div>
      ) : (
        <p>Cargando información del Pokémon...</p>
      )}
    </div>
  );
}


