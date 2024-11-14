import { useState } from "react"
import Button from "../Button/Button"

  

const RoleDice = ({currentDice , setcurrentDice , Dice  , reset}) => {

  return (
    <div>
        <div onClick={Dice}>
            <img src={`/images/dice_${currentDice}.png`} alt="" />
        </div>
      
    </div>
  )
}

export default RoleDice
