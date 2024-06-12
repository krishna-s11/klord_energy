import React from 'react'
import "./quickLinks.css"

const QuickLinks = () => {
  return (
    <div className='quick_links'>
        <h3>Quick Links</h3>
        <button>
        <img src="https://www.pmsuryaghar.gov.in/src/assets/images/homepage/Men.svg"
         style={{marginRight: "10px", transform: "translateY(-2px)"}}
         alt="" 
         srcset="" />Enquiry</button>
        <button>
        <img src="https://www.pmsuryaghar.gov.in/src/assets/images/homepage/Structure.svg"
         style={{marginRight: "10px", transform: "translateY(-2px)"}}
         alt="" 
         srcset="" />Subsidy Structure</button>
        <button>
        <img src="https://www.pmsuryaghar.gov.in/src/assets/images/homepage/Vendor.svg"
         style={{marginRight: "10px", transform: "translateY(-2px)"}}
         alt="" 
         srcset="" />Registered Vendors</button>
    </div>
  )
}

export default QuickLinks