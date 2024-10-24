import React from 'react';

import { Footer,  Header } from './containers';
import { Navbar, Locations, CTA,  Narative, Connect, Creatives } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <Header />
    <Creatives />
    <Narative />
    <Locations />
    <Connect />
    <CTA />
    <Footer />
  </div>
);

export default App;

