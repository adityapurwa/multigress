import * as React from 'react';
import { SyntheticEvent } from 'react';
import { TableData } from '../store/module/table';

interface Props {
  eventKey: number;
  y: number;
  x1: number;
  x2: number;

  onRemove(eventKey: number);

  onSetData(eventKey: number, data: TableData);
}

export default class DataTableRow extends React.Component<Props> {
  private handleOnRemove = () => {
    this.props.onRemove(this.props.eventKey);
  };
  private handleDataChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.props.onSetData(this.props.eventKey,
      Object.assign({
        y: this.props.y,
        x1: this.props.x1,
        x2: this.props.x2
      }, { [event.currentTarget.name]: event.currentTarget.value }))
  };

  render() {
    return (
      <tr>
        <td>{ this.props.eventKey + 1 }</td>
        <td>
          <input
            name="y"
            type="number" className="input" value={ this.props.y.toString() }
            onChange={ this.handleDataChange }
          />
        </td>
        <td>
          <input
            name="x1"
            type="number" className="input" value={ this.props.x1.toString() }
            onChange={ this.handleDataChange }
          />
        </td>
        <td>
          <input
            name="x2"
            type="number" className="input" value={ this.props.x2.toString() }
            onChange={ this.handleDataChange }
          />
        </td>
        <td>
          <button className="button" onClick={ this.handleOnRemove }>x</button>
        </td>
      </tr>
    )
  }
}