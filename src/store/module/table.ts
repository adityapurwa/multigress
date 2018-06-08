import { ReduxAction } from './index';
import { combineReducers } from 'redux';

export type TableData = {
  y: number;
  x1: number;
  x2: number;
}
export type FormulaData = {
  e: number;
  b1: number;
  b2: number;
}

const TYPES = {
  ADD_ROW: 'TABLE/ADD_ROW',
  REMOVE_ROW: 'TABLE/ADD_ROW',
  SET_ROW_DATA: 'TABLE/SET_ROW_DATA'
};

const ACTIONS = {
  addRow: () => ({
    type: TYPES.ADD_ROW
  }),
  removeRow: (index) => ({
    type: TYPES.ADD_ROW,
    payload: index
  }),
  setRowData: (index, data) => ({
    type: TYPES.SET_ROW_DATA,
    payload: { index, data }
  })
};

const data = (state: TableData[] = [
  {
    y: 0,
    x1: 0,
    x2: 0
  }
], action: ReduxAction) => {
  switch (action.type) {
    case TYPES.ADD_ROW:
      return state.concat({
        y: 0,
        x1: 0,
        x2: 0
      });
    case TYPES.REMOVE_ROW:
      return state.filter((value, index) => index !== action.payload);
    case TYPES.SET_ROW_DATA:
      return state.map((value, index) => {
        if (index !== action.payload.index) {
          return value;
        }
        return {
          y: parseFloat(action.payload.data.y),
          x1: parseFloat(action.payload.data.x1),
          x2: parseFloat(action.payload.data.x2)
        };
      });
    default:
      return state;
  }
};

export default {
  TYPES,
  ACTIONS,
  REDUCERS: combineReducers({
    data
  })
}