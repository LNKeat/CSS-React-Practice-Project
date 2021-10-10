

function Day({day, num}){
  const dayAbr = day.split('').splice(0,3).join('');
  const classCombo = `day-item ${dayAbr}`
  return(
    
    <div className={classCombo} >
      <h2>{day.toUpperCase()}</h2>
      <div>To do List: 
        <ul>
          <li>placeholder</li>
        </ul>
      </div>
    </div>
  )
}
export default Day;