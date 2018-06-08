import * as React from 'react';
import { TableData } from '../store/module/table';
import { connect } from 'react-redux';
import Plot from 'react-plotlyjs-ts';
import Regression from '../math/Regression';

interface StateFromStore {
  data: TableData[];
}

interface ActionFromStore {

}

interface OwnProps {

}

interface Props extends StateFromStore, ActionFromStore, OwnProps {

}

class RegressionResult extends React.Component<Props> {

  render() {
    const reg = Regression.getEquation(this.props.data);
    if (reg) {
      const linearData = this.props.data.map(v => reg.e + reg.b1 * v.x1 + reg.b2 * v.x2);
      const errorsMean = Regression.getErrorsMean(
        this.props.data.map(v => v.y),
        linearData
      );
      return (
        <div className="regression-result">
          <div className="regression-result--label">
            Equation Formula
          </div>
          <div className="regression-result--equation">
            y = { reg.e.toFixed(2) } +
            ({ reg.b1.toFixed(2) }x<sub>1</sub>) +
            ({ reg.b2.toFixed(2) }x<sub>2</sub>)
          </div>
          <div className="regression-result--label">
            Error Average
          </div>
          <div className="regression-result--data">
            { errorsMean.toFixed(2) }
          </div>
          <div className="regression-result--plot">
            <Plot
              data={ [
                {
                  x: this.props.data.map(v => v.x1),
                  y: this.props.data.map(v => v.x2),
                  z: this.props.data.map(v => v.y),
                  type: 'scatter3d',
                  mode: 'markers',
                  marker: {
                    color: 'rgb(23, 190, 207)',
                    size: 5
                  }
                },
                {
                  x: this.props.data.map(v => v.x1),
                  y: this.props.data.map(v => v.x2),
                  z: linearData,
                  type: 'mesh3d',
                  opacity: 0.5,
                  color: '#6634a9'
                }
              ] }
              layout={ {
                autosize: true,
                height: 380,
                scene: {
                  aspectratio: {
                    x: 1,
                    y: 1,
                    z: 1
                  },
                  camera: {
                    center: {
                      x: 0,
                      y: 0,
                      z: 0
                    },
                    eye: {
                      x: 1.25,
                      y: 1.25,
                      z: 1.25
                    },
                    up: {
                      x: 0,
                      y: 0,
                      z: 1
                    }
                  },
                  xaxis: {
                    type: 'linear',
                    zeroline: true
                  },
                  yaxis: {
                    type: 'linear',
                    zeroline: true
                  },
                  zaxis: {
                    type: 'linear',
                    zeroline: true
                  }
                },
                width: 477
              } }
            />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          Invalid data
        </div>
      )
    }
  }

}

export default connect(
  (store: any) => ({
    data: store.table.data
  })
)(RegressionResult);