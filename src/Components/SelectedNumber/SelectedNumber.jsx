import { useState } from "react";

const SelectedNumber = ({selectedOne , setselectedOne , seterror , error}) => {
    const arrayNumber = [1, 2, 3, 4, 5, 6, 7];

const selectedNumberHandler = (value)=>{
    setselectedOne(value);
    seterror("");
}
    return (
        <div className="flex flex-col ">
              <div className="flex items-start">
           
           {arrayNumber.map((value, i) => (
               <div 
                   key={i} 
                   onClick={() => selectedNumberHandler(value)} 
                   className={`h-[72px] w-[72px] border border-black ml-[24px] text-center flex items-center justify-center ${selectedOne === value ? 'bg-black text-white' : ''}`}
               >
                   {value}
               </div>
           ))}
       </div>
            <p className="pt-1 text-red-500 text-end">{error}</p>
        </div>
      
    );
};

export default SelectedNumber;
