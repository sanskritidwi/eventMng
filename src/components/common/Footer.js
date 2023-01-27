import React from 'react';
import logo from "../../assets/Frame.svg";

export const Footer = () => {

    const links=[
        "Privacy Policy",
        "Terms and Conditions",
        "Contact Us",
        "Careers"
    ]

    const renderLinks=()=>{
        return(<div className='footerLinks'>
        {
            links.map((item, index)=>{
                return(
                    <div className='links' key={index}>{item}</div>
                )
            })
        }
        </div>)
    }

  return (
    <div className='FooterWrapper'>
        <div className='logo'>
            <img src={logo}/>
        </div>

        {renderLinks()}
    </div>
  )
}
