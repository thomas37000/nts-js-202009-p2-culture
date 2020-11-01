import React from 'react';

import Grid from './components/Grid';
import DetailCard from './components/DetailCard';
import Navbar from './component/Navbar';
import Filters from './components/filters/Filters';

function App() {
  return (
    <div>
      <Navbar />
      <Grid />
      <Filters />
      <DetailCard />
    </div>
  );
}

export default App;
