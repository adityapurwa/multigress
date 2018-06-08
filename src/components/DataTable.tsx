import * as React from 'react';
import TABLE, { TableData } from '../store/module/table';
import { connect } from 'react-redux';
import DataTableRow from './DataTableRow';

interface StateFromStore {
  data: TableData[];
}

interface ActionFromStore {
  addRow();

  removeRow(index: number);

  setRowData(index: number, data: TableData);
}

interface OwnProps {

}

interface Props extends StateFromStore, ActionFromStore, OwnProps {

}

class DataTable extends React.Component<Props> {
  private handleOnAddRow = () => {
    this.props.addRow();
  };
  private handleOnRemoveRow = (index) => {
    this.props.removeRow(index);
  };
  private handleOnSetData = (index, data) => {
    this.props.setRowData(index, data);
  };

  render() {
    return (
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Y</th>
          <th>X<sub>1</sub></th>
          <th>X<sub>2</sub></th>
          <th>-</th>
        </tr>
        </thead>
        <tbody>
        { this.renderData() }
        <tr>
          <td colSpan={ 5 }>
            <button className="button __block" onClick={ this.handleOnAddRow }>Add Row</button>
          </td>
        </tr>
        </tbody>
      </table>
    )
  }

  renderData() {
    return this.props.data.map((data, index) => (
      <DataTableRow
        key={ index } eventKey={ index } y={ data.y } x1={ data.x1 } x2={ data.x2 }
        onRemove={ this.handleOnRemoveRow }
        onSetData={ this.handleOnSetData }
      />
    ));
  }
}

export default connect(
  (store: any) => ({
    data: store.table.data
  }),
  {
    addRow: TABLE.ACTIONS.addRow,
    removeRow: TABLE.ACTIONS.removeRow,
    setRowData: TABLE.ACTIONS.setRowData
  }
)(DataTable);