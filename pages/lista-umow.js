import React from 'react';
import axios from 'axios';
import UmowyLista from '../components/UmowyLista';

const ListaUmow = ({ umowy }) => {
  return <UmowyLista initialUmowy={umowy} />;
};

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:5000/api/umowy');
    return {
      props: {
        umowy: response.data,
      },
    };
  } catch (error) {
    console.error('Błąd podczas pobierania umów:', error);
    return {
      props: {
        umowy: [],
      },
    };
  }
}

export default ListaUmow;