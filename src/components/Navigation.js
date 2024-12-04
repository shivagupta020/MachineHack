import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="p-4 bg-gray-200">
    <Link to="/" className="mr-4">Upload</Link>
    <Link to="/graph">Graph Viewer</Link>
  </nav>
);

export default Navigation;