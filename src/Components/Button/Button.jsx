

const Button = ({ text, toggle }) => {
    return (
        <div>
            <button type="submit" onClick={toggle} className="bg-black text-[16px] font-poppins font-semibold text-white py-[10px] px-[73px] rounded-[5px] hover:bg-white hover:border-2 hover:border-black hover:text-black transition-all duration-300 ease-in-out border-2 border-black">
                {text}
            </button>
        </div>
    )
}

export default Button
