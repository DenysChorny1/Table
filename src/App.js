import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTableData } from './redux/actions';
import Table from './components/Table';

function App(props) {
  const data = [
    { 'Referal event': {date: '06/17/2020 at 7:13 PM PDT', count: 120.00, curency: '$'}, 'Advocate': 'fr58223@gmail.com', 'Friend': 'fr58272@gmail.com', 'Referal status': {status: 'Pending', check: true} },
    { 'Referal event': {date: '06/17/2020 at 7:13 PM PDT', count: 100.00, curency: '$'}, 'Advocate': 'fr5833323@gmail.com', 'Friend': 'fr583223@gmail.com', 'Referal status': {status: 'Flagged', check: false} },
    { 'Referal event': {date: '06/17/2020 at 7:13 PM PDT', count: 28.00, curency: '$'}, 'Advocate': 'fr582223223@gmail.com', 'Friend': 'fr51111@gmail.com', 'Referal status': {status: 'Approved', check: true} },
    { 'Referal event': {date: '06/17/2020 at 7:13 PM PDT', count: 100.00, curency: '$'}, 'Advocate': 'fr5832223423@gmail.com', 'Friend': 'fr58333@gmail.com', 'Referal status': {status: 'Blocked', check: false} },
    { 'Referal event': {date: '06/17/2020 at 7:13 PM PDT', count: 100.00, curency: '$'}, 'Advocate': 'fr583223@gmail.com', 'Friend': 'fr582324234233@gmail.com', 'Referal status': {status: 'Voided', check: false} },
  ];

  useEffect(() => {
    props.setTableData(data);
  }, []);

  return (
    <div className="App">
      <div className='container'>
        <h1>Referals - 345</h1>
        <Table tableData={data} />
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  setTableData,
};

export default connect(null, mapDispatchToProps)(App);