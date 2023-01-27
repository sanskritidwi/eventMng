import React from 'react'
import { DealCard } from './DealCard'

const dealCardData=[
    {
        title:"Personal",
        subTitle:"Lorem Ipsum",
        cost:"8",
        features:[
            "Excellent Performance",
            "Excellent Performance",
            "Excellent Performance",
            "Excellent Performance",
            "Excellent Performance",
        ]
    },
    {
        title:"Personal",
        subTitle:"Lorem Ipsum",
        cost:"8",
        features:[
            "Excellent Performance",
            "Excellent Performance",
            "Excellent Performance",
            "Excellent Performance",
            "Excellent Performance",
        ]
    },
    {
        title:"Personal",
        subTitle:"Lorem Ipsum",
        cost:"8",
        features:[
            "Excellent Performance",
            "Excellent Performance",
            "Excellent Performance",
            "Excellent Performance",
            "Excellent Performance",
        ]
    }
]

export const DealCover = () => {
  return (
    <div className='DealCoverWrapper'>
        <div className='title'> Get Your Best Deal</div>
        <div className='cards'>
            {
                dealCardData.map((item, index)=>{
                    return(<div key={index}>
                     <DealCard data={item} />
                    </div>)
                })
            }
        </div>
        
       </div>
  )
}
