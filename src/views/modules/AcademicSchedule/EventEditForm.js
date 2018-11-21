import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { attendants } from '../../../data/data'
import Success from '../../../components/Success'
import Error from '../../../components/Error'
import PACKAGE from '../../../../package.json'

const API_URL = PACKAGE.config.api[process.env.NODE_ENV]

class EventEditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      asignaturas: [],
      encargados: attendants,
      grupos: [],
      titles: ['tipo', 'fecha Inicio', 'fecha Fin'],
      error: false,
      success: false,
      message: 'Creado con éxito',
      selectedGroups: [],
    }

    this.nombre = React.createRef()
    this.asignatura = React.createRef()
    this.encargado = React.createRef()
    this.fecha = React.createRef()
    this.aforo = React.createRef()

    this.addGroup = this.addGroup.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.getGrupos()
    this.getAsignaturas()
    this.getEventValues()
  }

  getAsignaturas() {
    axios.get(`${API_URL}/asignaturas`).then(res => {
      const { data } = res
      this.setState({
        asignaturas: data,
      })
    })
  }

  getGrupos() {
    axios.get(`${API_URL}/grupos`).then(res => {
      const { data } = res
      this.setState({
        grupos: data,
      })
    })
  }

  getEventValues() {
    const eventoAcademicoId = this.props.match.params.id

    axios
      .get(`${API_URL}/eventosAcademicos`, {
        params: {
          eventoAcademicoId,
        },
      })
      .then(res => {
        const { data } = res

        this.nombre.current.value = data.nombre
        this.fecha.current.value = data.fecha.split('.')[0]
        this.aforo.current.value = data.aforo
        this.asignatura.current.value = data.asignatura
        this.encargado.current.value = data.encargado

        this.setState({
          selectedGroups: data.grupos,
        })
      })
  }

  handleSubmit(e) {
    e.preventDefault()

    const nombre = this.nombre.current.value
    const fecha = this.fecha.current.value
    const aforo = this.aforo.current.value
    const asignatura = this.asignatura.current.value
    const grupos = this.state.selectedGroups
    const encargado = this.encargado.current.value

    const eventoAcademicoId = this.props.match.params.id

    axios
      .put(`${API_URL}/eventosAcademicos`, {
        params: {
          eventoAcademicoId,
        },
        data: {
          nombre,
          fecha,
          aforo,
          asignatura,
          grupos,
          encargado,
        },
      })
      .then(res => {
        if (res.status === 200) {
          this.asignatura.current.value = ''
          this.encargado.current.value = ''
          this.fecha.current.value = ''
          this.aforo.current.value = ''
          this.setState({
            selectedGroups: [],
          })

          this.toggleAlert()
        }
      })
  }

  toggleAlert() {
    this.setState(
      {
        success: true,
      },
      () => {
        setTimeout(() => {
          this.setState({
            success: false,
          })

          this.props.history.goBack()
        }, 1000)
      },
    )
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

        <div className="form--container">
          <h3 className="form--title">Crear Evento</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="nombre" className="required label">
              Nombre:
            </label>
            <input type="text" id="nombre" className="input" ref={this.nombre} required />

            <label htmlFor="asignatura" className="required label">
              Asignatura:
            </label>
            <select id="asignatura" ref={this.asignatura} className="input select--input">
              {this.state.asignaturas.map(asignatura => (
                <option key={asignatura.nombre}>{asignatura.nombre}</option>
              ))}
            </select>

            <label htmlFor="encargado" className="required label">
              Encargado:
            </label>
            <select id="encargado" className="input select--input" ref={this.encargado}>
              {this.state.encargados.map(encargado => (
                <option key={encargado}>{encargado}</option>
              ))}
            </select>

            <label htmlFor="aforo" className="required label">
              Aforo:
            </label>
            <input type="number" id="aforo" className="input" ref={this.aforo} required />

            <label htmlFor="fecha" className="required label">
              Fecha / Hora:
            </label>
            <input type="datetime-local" id="fecha" className="input" ref={this.fecha} required />

            <label htmlFor="grupos" className="required label">
              Grupos:
            </label>
            {this.state.grupos.map(grupo => (
              <label key={grupo.nombre} className="checkbox">
                <input
                  type="checkbox"
                  name={grupo.nombre}
                  onChange={this.addGroup}
                  checked={this.groupExist(grupo.nombre)}
                />
                {grupo.nombre}
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
