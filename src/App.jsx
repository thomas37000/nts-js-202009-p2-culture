import React from 'react';

import Grid from './components/Grid';
import DetailCard from './components/DetailCard';
import Navbar from './components/navBar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Grid />
      <DetailCard />
    </div>
  );
}

export default App;
