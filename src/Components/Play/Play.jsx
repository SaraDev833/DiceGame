import { useState } from "react";
import RoleDice from "../roleDice/RoleDice"
import SelectedNumber from "../SelectedNumber/SelectedNumber"
import TotalScore from "../Total/TotalScore"

import ShowRule from './../Rule/ShowRule';

const Play = () => {
  const [selectedOne, setselectedOne] = useState();
  const [currentDice , setcurrentDice ] = useState(1);
  const [score , setscore]= useState(0);
  const [error ,seterror] = useState("");
 const [showRule , setshowRule] = useState(false);
  const generateNumber = (min , max)=>{
   
      return Math.floor( Math.random() * (max - min) + min);
  }
 const Dice = () => {
  if(!selectedOne){
     seterror("Please Select Number")
     return;
  }
     const randomNumber = generateNumber(1, 7);
     setcurrentDice((prev) => randomNumber);
  
    
     if(selectedOne === randomNumber){
      setscore((prev)=> prev + randomNumber);
     }
      else{
        setscore(prev => prev - randomNumber);
      }

     setselectedOne(undefined)
 }

const reset= ()=>{
  setscore(0);
  setcurrentDice(1);
  setselectedOne(undefined);
}
const rule=()=>{
  setshowRule(prev=> !prev)
}
 
  return (
    <div className="pt-[64px] container mobile-container">
<div className="flex items-center justify-between">
<TotalScore score = {score}/>
<div className="flex ">
<SelectedNumber selectedOne = {selectedOne} setselectedOne = {setselectedOne} seterror = {seterror} error={error} />
</div>


</div>
<div className="flex flex-col items-center justify-center pt-[60px]">
<div className="flex flex-col items-center justify-center pt-[60px]">
<RoleDice currentDice={currentDice} setcurrentDice={setcurrentDice} Dice = {Dice} reset = {reset}/> 
</div>
<div className="flex flex-col gap-4 pt-4 pb-7">
  <button onClick={reset} className="bg-white text-[16px] font-poppins font-semibold text-black py-[10px] px-[73px] rounded-[5px] hover:bg-black hover:border-1 hover:border-black hover:text-white transition-all duration-300 ease-in-out border-2 border-black">Reset</button>
  <button onClick = {rule} className="bg-black text-[16px] font-poppins font-semibold text-white py-[10px] px-[73px] rounded-[5px] hover:bg-white hover:border-2 hover:border-black hover:text-black transition-all duration-300 ease-in-out border-2 border-black">{showRule?"hide" : "show" } rule</button>
</div>
<div>
  {showRule && <ShowRule/>}
</div>

    </div>
    </div>
  )
}

export default Play
