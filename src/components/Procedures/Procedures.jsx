import React from 'react'
import "./procedures.css";
import ProcedureLeft from '../ProcedureCards/ProcedureLeft/ProcedureLeft';
import ProcedureRight from '../ProcedureCards/ProcedureRight/ProcedureRIght';

const Procedures = () => {
  return (
    <div className='procedures'>
        <h1>Stepwise Procedures</h1>
        <div className='procedure_container'>
            <ProcedureLeft title="Step 1: Register in the portal with the following"
                content={["Select your State & Electricity Distribution Company","Enter your Electricity Consumer Number, Mobile Number & Email"]}/>
            <ProcedureRight title="Step 2: Login"
                content={["Step 2: Login","Login with Consumer Number & Mobile Number","Apply for the Rooftop Solar as per the form"]}
            />
        </div>
        <div className='procedure_container'>
            <ProcedureLeft title="Step 3: Plant installed by register vendor"
                content={["Once you get the feasibility approval, get the plant installed by any of the registered vendors in your DISCOM"]}/>
            <ProcedureRight title="Step 4: Submit the plant details"
                content={["Once installation is completed, submit the plant details and apply for net meter"]}
            />
        </div>
        <div className='procedure_container'>
            <ProcedureLeft title="Step 5: Genereate Certificate"
                content={["Commissioning certificate will be generated from the portal, after installation of net meter and inspection by DISCOM"]}/>
            <ProcedureRight title="Step 6: Submit the bank account details"
                content={["Once you get the commissioning report. Submit the bank account details and a cancelled cheque through the portal. You will receive your subsidy in your bank account within 30 days."]}
            />
        </div>
    </div>
  )
}

export default Procedures