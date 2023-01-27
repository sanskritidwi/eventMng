import React from 'react'
import { CompanyCard } from './CompanyCard'
import logo1 from "../../../assets/image 116.svg";
import logo2 from "../../../assets/image 117.svg";
import logo3 from "../../../assets/image 118.svg";
import logo4 from "../../../assets/image 119.svg";
import logo5 from "../../../assets/image 120.svg";
import logo6 from "../../../assets/image 121.svg";
import logo7 from "../../../assets/image 122.svg";
// import logo8 from "../../../assets/image 123.svg";
import logo9 from "../../../assets/image 124.svg";
import logo10 from "../../../assets/image 125.svg";
import logo11 from "../../../assets/image 126.svg";
import logo12 from "../../../assets/image 127.svg";
import logo13 from "../../../assets/image 128.svg";
import logo14 from "../../../assets/image 129.svg";
import logo15 from "../../../assets/image 130.svg";
import logo16 from "../../../assets/image 132.svg";
import logo17 from "../../../assets/image 133.svg";



const imgSources=[
logo1,
logo2,
logo3,
logo4,
logo5,
logo6,
logo7,
logo14,
logo9,
logo10,
logo11,
logo12,
logo13,
logo15,
logo16,
logo17,




]

export const Comapnies = () => {
  return (
    <div className='CompaniesWrapper'>
        <div className='title'>Find Trend Makes Your StartUp Grow</div>
        <div className='gridWrapper'>
{
    imgSources.map((item, index)=>{
        return(
            <div key={index}>        <CompanyCard imgSrc={item} />
            </div>
        )
    })
}</div>
    </div>
  )
}
