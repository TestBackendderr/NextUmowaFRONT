import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.scss';
import '../styles/MainPage.scss';
import '../styles/Navbar.scss';
import '../styles/UtworzUmowy.scss';
import '../styles/UmowyLista.scss';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;