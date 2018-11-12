import React, { Component, Fragment } from 'react'
import AditionalInfo from '../../../components/AditionalInfo'
import { schedules, events, attendants, groups } from '../../../data/data'
import Success from '../../../components/Success'
import Error from '../../../components/Error'

class EventEditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subjects: [
        'Ingeniería de Software I',
        'Ingeniería de Software II',
        'Ingeniería de Software III',
        'Ingeniería de Software VI',
      ],
      attendants,
      schedule: schedules[0],
      groups,
      titles: ['Periodo', 'Fecha Inicio', 'Fecha Fin', 'Nombre'],
      error: false,
      success: false,
      message: 'Editado con éxito',
      selectedGroups: [],
    }

    this.subject = React.createRef()
    this.attendant = React.createRef()
    this.date = React.createRef()
    this.aforo = React.createRef()

    this.addGroup = this.addGroup.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.getEventValues()
  }

  getEventValues() {
    const event = events.filter(event => event.id === this.props.match.params.id)[0]

    this.attendant.current.value = event.attendant
    this.subject.current.value = event.subject
    this.date.current.value = event.date
    this.aforo.current.value = event.aforo

    this.setState({
      selectedGroups: event.groups,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    console.log(
      this.subject.current.value,
      this.attendant.current.value,
      this.date.current.value,
      this.aforo.current.value,
      this.state.groups,
    )

    this.showSuccessMessage()
  }

  showSuccessMessage() {
    this.setState({
      success: true,
    })
  }

  addGroup(e) {
    const name = e.target.name
    let selectedGroups = this.state.selectedGroups

    if (e.target.checked) {
      selectedGroups = selectedGroups.concat(name)
    } else {
      selectedGroups = selectedGroups.filter(i => i !== name)
    }

    this.setState({
      selectedGroups,
    })
  }

  groupExist(group) {
    return this.state.selectedGroups.includes(group)
  }

  render() {
    return (
      <Fragment>
        <h2>Gestionar Evento</h2>

        <AditionalInfo data={this.state.schedule} titles={this.state.titles} />

        <div className="form--container">
          <h3 className="form--title">Editar Evento</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="subject" className="required label">
              Asignatura:
            </label>
            <select id="subject" ref={this.subject} className="input select--input">
              {this.state.subjects.map(subject => (
                <option key={subject}>{subject}</option>
              ))}
            </select>

            <label htmlFor="attendant" className="required label">
              Encargado:
            </label>
            <select id="attendant" className="input select--input" ref={this.attendant}>
              {this.state.attendants.map(attendant => (
                <option key={attendant}>{attendant}</option>
              ))}
            </select>

            <label htmlFor="aforo" className="required label">
              Aforo:
            </label>
            <input type="number" id="aforo" className="input" ref={this.aforo} required />

            <label htmlFor="date" className="required label">
              Fecha / Hora:
            </label>
            <input type="datetime-local" id="date" className="input" ref={this.date} required />

            <label htmlFor="groups" className="required label">
              Grupos:
            </label>
            {this.state.groups.map(group => (
              <label key={group} className="checkbox">
                <input
                  type="checkbox"
                  name={group}
                  onChange={this.addGroup}
                  checked={this.groupExist(group)}
                />
                {group}
              </label>
            ))}

            <div className="form--controls">
              <input type="submit" value="Guardar" className="reset--button button" />
            </div>
          </form>

          {this.state.error && <Error description={this.state.message} />}
          {this.state.success && <Success description={this.state.message} />}
        </div>
      </Fragment>
    )
  }
}

export default EventEditForm
