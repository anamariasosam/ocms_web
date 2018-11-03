import React, { Fragment, Component } from 'react'
import Options from '../../../components/Options'


class Calendar extends Component {
  constructor(props) {
    super(props)

    this.handleAction = this.handleAction.bind(this)
  }

  handleAction(e) {
    console.log(e)
  }
  
  render() {
    return (
      <Fragment>
        <h2>Gestionar Calendario</h2>
  
        <div className="module--container">
          <h3>Programa Ingeniería de Sistemas</h3>
          <table className="table">
            <thead className="thead">
              <tr>
                <th>ID</th>
                <th>FECHA INICIO</th>
                <th>FECHA FIN</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2017-1</td>
                <td>Enero 23</td>
                <td>Junio 23</td>
                <td>
                  <Options handleAction={this.handleAction}/>
                </td>
              </tr>
              <tr>
                <td>2017-2</td>
                <td>Julio 23</td>
                <td>Noviembre 23</td>
                <td>
                  <Options handleAction={this.handleAction}/>
                </td>
              </tr>
              <tr>
                <td>2018-1</td>
                <td>Enero 23</td>
                <td>Junio 23</td>
                <td>
                  <Options handleAction={this.handleAction}/>
                </td>
              </tr>
              <tr>
                <td>2018-2</td>
                <td>Julio 23</td>
                <td>Noviembre 23</td>
                <td>
                  <Options handleAction={this.handleAction}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Fragment>
    )
  }
}

export default Calendar
