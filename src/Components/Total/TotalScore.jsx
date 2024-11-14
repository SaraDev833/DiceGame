import React from 'react'

const TotalScore = ({score}) => {
    
  return (
    <div className='flex flex-col items-center justify-center'>
    <h1 className='font-medium text-[100px] font-poppins text-black leading-none'>{score}</h1>
    <p className='font-medium text-[24px] font-poppins text-black leading-none'>Total Score</p>
    </div>
  )
}

export default TotalScore
