import React, { Component, Fragment } from 'react'
import AditionalInfo from '../../../components/AditionalInfo'
import { schedules } from '../../../data/data'

class EventForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subjects: [
        'Ingeniería de Software I',
        'Ingeniería de Software II',
        'Ingeniería de Software III',
        'Ingeniería de Software VI',
      ],
      attendants: [
        'Liliana',
        'Bell',
        'Juan',
        'Gloria',
      ],
      schedule: schedules[0],
      titles: ['Periodo', 'Fecha Inicio', 'Fecha Fin', 'Nombre'],
      groups: [ '061', '062', '063', '064'],
      selectedGroups: []
    }

    this.subject = React.createRef();
    this.attendant = React.createRef();
    this.date = React.createRef();

    this.addGroup = this.addGroup.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log(
      this.subject.current.value,
       this.attendant.current.value, 
       this.date.current.value, 
       this.state.selectedGroups);
    e.preventDefault();
  }

  addGroup(e) {
    const item = e.target.name
    let selectedGroups = this.state.selectedGroups

    if (e.target.checked) {
      selectedGroups = selectedGroups.concat(item)
    } else {
      selectedGroups = selectedGroups.filter(i => i !== item)
    }
    
    this.setState({
      selectedGroups 
    })
  }
  
  render() {
    return (
      <Fragment>
        <h2>Gestionar Calendario</h2>

        <AditionalInfo data={this.state.schedule} titles={this.state.titles}/>

        <div className="form--container">
          <h3 className="form--title">Crear Evento</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="subject" className="required label">Asignatura:</label>
            <select 
              id="subject"
              ref={this.subject}
              className="input select--input"
            >
              {
                this.state.subjects.map( subject =>(
                  <option key={subject}>{subject}</option>
                ))
              }
            </select>
            
            <label htmlFor="attendant" className="required label">Encargado:</label>
            <select 
              id="attendant"
              className="input select--input"
              ref={this.attendant} 
            >
              {
                this.state.attendants.map( attendant =>(
                  <option key={attendant}>{attendant}</option>
                ))
              }
            </select>

            <label htmlFor="date" className="required label">Fecha / Hora:</label>
            <input type="datetime-local" id="date" className="input" ref={this.date}/>

            <label htmlFor="groups" className="required label">Grupos:</label>
            {
              this.state.groups.map( group =>(
                <label key={group}  className="checkbox">
                  <input 
                    type="checkbox"
                    name={group}
                    onChange={this.addGroup}
                  />
                  {group}
                </label>
              ))
            }

            <div className="form--controls">
              <input type="submit" value="Guardar" className="reset--button button"/>
            </div>
          </form>
        </div>
      </Fragment>
      
    )
  }
}

export default EventForm
