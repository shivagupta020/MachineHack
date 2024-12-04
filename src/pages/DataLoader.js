import React from 'react';
import FileUpload from '../components/FileUpload';

const DataLoader = () => (
  <div className="p-4">
    <h1 className="text-xl font-bold mb-4">Upload CSV</h1>
    <FileUpload />
  </div>
);

export default DataLoader;