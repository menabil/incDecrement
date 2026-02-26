
const Container = ({ children, className }) => {
    return (
        <div className={`max-w-[1340px] mx-auto ${className}`}>{children}</div>
    )
}

export default Container