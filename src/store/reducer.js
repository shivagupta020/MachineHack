const initialState = {
  csvData: null,
  chartType: 'LineChart', // Default chart type
  columns: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CSV_DATA':
      return { ...state, csvData: action.payload };
    case 'SET_CHART_TYPE':
      return { ...state, chartType: action.payload };
    case 'SET_COLUMNS':
      return { ...state, columns: action.payload };
    default:
      return state;
  }
};

export default reducer;