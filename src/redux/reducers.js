const initialState = {
    tableData: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TABLE_DATA':
        return {
          ...state,
          tableData: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;