import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DataLoader from './pages/DataLoader';
import GraphViewer from './pages/GraphViewer';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<DataLoader />} />
      <Route path="/graph" element={<GraphViewer />} />
    </Routes>
  </Router>
);

export default App;