import React from 'react'

import BigCalendar from '../BigCalendar'

const Calendar = ({ match }) => {
  const { programacionNombre } = match.params

  return <BigCalendar programacionNombre={programacionNombre} />
}
export default Calendar
