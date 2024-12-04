import React from 'react';
import Papa from 'papaparse';
import { useDispatch } from 'react-redux';
import { setCsvData, setColumns } from '../store/actions';

const FileUpload = () => {
  const dispatch = useDispatch();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'text/csv') {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const parsedData = result.data.map((row) =>
            Object.fromEntries(
              Object.entries(row).map(([key, value]) => {
                const num = parseFloat(value);
                return [key, isNaN(num) ? value : num]; // Convert to number if possible
              })
            )
          );
          dispatch(setCsvData(parsedData));
          dispatch(setColumns(Object.keys(parsedData[0])));
        },
        error: (err) => {
          console.error('Parsing error:', err);
        },
      });
    } else {
      alert('Please upload a valid CSV file.');
    }
  };

  return (
    <div className="p-4">
      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </div>
  );
};

export default FileUpload;