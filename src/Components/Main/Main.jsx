import Button from "../Button/Button.jsx"


const Main = ({ toggle }) => {
    return (
        <div className="pt-[180px] container" >
      <div className="flex lg:justify-between lg:items-center lg:h-[552px] lg:border lg:border-1 lg:flex-row flex-col h-0 items-start justify-end">
      <div >
                <img src="/images/main.png" alt="main" />
            </div>
            <div className="flex flex-col items-end justify-end w-full lg:pr-7">
                <h2 className="font-bold text-black lg:text-[96px] font-poppins whitespace-nowrap text-[48px]">DICE GAME</h2>
                <div className="flex justify-end">
                    <Button text="Play Now" toggle={toggle} />
                </div>
            </div>
      </div>
        </div>
    )
}

export default Main
