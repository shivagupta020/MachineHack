import React from 'react';
import ChartRenderer from '../components/ChartRenderer';

const GraphViewer = () => (
  <div className="p-4">
    <h1 className="text-xl font-bold mb-4">Chart Viewer</h1>
    <ChartRenderer />
  </div>
);

export default GraphViewer;