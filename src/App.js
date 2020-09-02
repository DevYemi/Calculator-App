import React, { useEffect, useState } from 'react';
import './App.css';
import MainContent from './component/mainContent'
import Footer from './component/footer'
import Header from './component/header'

function App() {
  useEffect(() => {

  }, [])
  return (
    <div classNameName="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
