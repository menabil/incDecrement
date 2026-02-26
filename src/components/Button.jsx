
const Button = ({ btnText, className }) => {
    return (
        <button className={`py-3.5 px-7 rounded-[100px] bg-[#FF7628] text-white border border-[#FF7628] hover:bg-white hover:text-[#FF7628] duration-500 ${className}`}>{btnText}</button>
    )
}

export default Button