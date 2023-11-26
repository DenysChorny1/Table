import React from 'react';

const Table = ({ tableData }) => {
  if (!tableData || tableData.length === 0) {
    return <p>No data available</p>;
  }

  const columns = Object.keys(tableData[0]);

  const renderCell = (value, column) => {
    let cellContent;

    if (column === 'Advocate') {
      const truncatedValue = value.length > 18 ? `${value.substring(0, 18)}...` : value;
      cellContent = (
        <div className='advocate'>
          <div className={`${column.toLowerCase()}-email`}>
            {truncatedValue}
          </div>
          <div className={`${column.toLowerCase()}-label`}>
            Advocate
          </div>
        </div>
      );
    } else if (column === 'Referal event' && typeof value === 'object') {
      cellContent = (
        <div className={`referal`}>
          <div className='title'>Purchase</div>
          {Object.entries(value).map(([key, subValue], index) => (
            <div key={index} className={`${key.toLowerCase()}`}>
              {key === 'status' || key === 'check' ? (subValue ? '1' : '2') : subValue}
            </div>
          ))}
        </div>
      );
    } else if (typeof value === 'object') {
      cellContent = Object.entries(value).map(([key, subValue], index) => (
        <div key={index} className={`${key.toLowerCase()} ${key === 'check' ? (subValue ? 'true' : 'false') : ''}`}>
          {key === 'check' ? (subValue ? 'Passed fraud checks' : 'Marked as fraud') : subValue}
        </div>
      ));
    } else {
      const truncatedValue = value.length > 18 ? `${value.substring(0, 18)}...` : value;
      cellContent = (
        <div className={`${column.toLowerCase()}`}>
          <div className={`${column.toLowerCase()}-email`}>
            {truncatedValue}
          </div>
          <div className='title'>Friend</div>
        </div>
      );
    }

    return cellContent;
  };

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column}>
                {renderCell(row[column], column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
