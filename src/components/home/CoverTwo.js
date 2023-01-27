import React from 'react';



export const CoverTwo = ({data}) => {
  const {title, subTitle} =data;
  return (
    <div className='CoverTwoWrapper'>
        <div className="create">
				{title}
                <div className="subTitle">
					{subTitle}
				</div>
       </div>
       
       </div>
  )
}
