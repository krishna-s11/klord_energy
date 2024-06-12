import React from 'react'
import "./procedureRight.css";

const ProcedureRight = ({title,content}) => {
  return (
    <div className='procedure_right'>
      <div>
          <h2>{title}</h2>
          <ul>
              <li>{content[0]}</li>
              {
                content[1]?<li>{content[1]}</li>:null
              }
          </ul>
      </div>
    </div>
  )
}

export default ProcedureRight