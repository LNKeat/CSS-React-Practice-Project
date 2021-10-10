import React from 'react'
import Day from './Day'
import './schedule.css'

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
function Schedule() {
  return (
    <div className="component-wrapper">
      <h1 className="title">Schedule</h1>
      <div className="schedule-container">
        {days.map((day, ind) => <Day key={day} day={day} num={ind + 1} />)}
      </div>
    </div>
  )
}

export default Schedule;

