import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Chart } from 'react-google-charts';
import { setChartType } from '../store/actions';

const ChartRenderer = () => {
  const { csvData, chartType, columns } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [xAxis, setXAxis] = useState(columns[0]); // Default X-axis
  const [yAxis, setYAxis] = useState(columns[1]); // Default Y-axis

  if (!csvData || columns.length < 2) {
    return <p>No data available. Please upload a valid CSV file.</p>;
  }

  // Filter and format the data for the chart
  const chartData = [
    [xAxis, yAxis], // Chart headers
    ...csvData.map((row) => [row[xAxis], row[yAxis]]).filter((row) => typeof row[0] === 'number' && typeof row[1] === 'number'),
  ];

  // Error handling for invalid data
  if (chartData.length <= 1) {
    return <p>Error: X-axis and Y-axis must both have numerical data for the selected chart type.</p>;
  }

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div>
          <label className="block mb-2 font-bold">Chart Type</label>
          <select
            className="border p-2"
            value={chartType}
            onChange={(e) => dispatch(setChartType(e.target.value))}
          >
            <option value="LineChart">Line Chart</option>
            <option value="BarChart">Bar Chart</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-bold">X-Axis</label>
          <select
            className="border p-2"
            value={xAxis}
            onChange={(e) => setXAxis(e.target.value)}
          >
            {columns.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-2 font-bold">Y-Axis</label>
          <select
            className="border p-2"
            value={yAxis}
            onChange={(e) => setYAxis(e.target.value)}
          >
            {columns.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Chart
        chartType={chartType}
        data={chartData}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default ChartRenderer;