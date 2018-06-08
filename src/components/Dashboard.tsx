import * as React from 'react';
import DataTable from './DataTable';
import RegressionResult from './RegressionResult';

export default class Dashboard extends React.Component {

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard--header">
          <div className="dashboard--header-title">
            Linear Regression Dashboard
          </div>
        </div>
        <div className="dashboard--body">
          <div className="dashboard--body-table">
            <DataTable />
          </div>
          <div className="dashboard--body-result">
            <RegressionResult/>
          </div>
        </div>
        <div className="dashboard--footer">
          Copyright &copy; 2018 - Aditya, Christian, Diyah, Vincent.
        </div>
      </div>
    )
  }

}