import React from 'react'
import "./procedureLeft.css";

const ProcedureLeft = ({title,content}) => {
  return (
    <div className='procedure_left'>
        <h2>{title}</h2>
        <ul>
            <li>{content[0]}</li>
            {
                content[1]?<li>{content[1]}</li>:null
            }
        </ul>
    </div>
  )
}

export default ProcedureLeft