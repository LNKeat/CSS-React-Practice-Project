import React, { useState } from 'react'
import "./addWorkout.css"

function AddWorkout({handleAddWorkout}){
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    target: "both"
  })

  function handleChange(e){
    const updatedForm = {...formData, [e.target.name]:e.target.value}
    setFormData(updatedForm)
    console.log(updatedForm)
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log('stringified: ',JSON.stringify(formData))

    fetch("http://localhost:5000/exercises", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(ex => console.log('response: ', ex))
      
      //reset form
      setFormData({
        name: "",
        desc: "",
        target: "both"
      })
  }

  return (
    <form className="component-wrapper" onSubmit={handleSubmit}>
      <h1 className="title">Add Exercise</h1>
      <div className="form-container">
        <input type="text" name="name" value={formData.name} placeholder="Exercise" onChange={handleChange} />
        <input type="text" name="desc"  value={formData.desc} placeholder="Description" onChange={handleChange} />
        <label>Target: </label>
        <select name="target" value={formData.target} onChange={handleChange}>
          <option value="both">Cardio & Strength</option>
          <option value="cardio">Cardio</option>
          <option value="strength">Strength</option>
        </select>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
export default AddWorkout;