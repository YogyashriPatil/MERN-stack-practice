export const Button = ({
    disabled,
    Children , 
    onClick
}) => {
    return <span onClick={onClick} className={`rounded-2xl px-16 py-5 text-white cursor-pointer ${disabled ? "bg-blue-500" : "bg-black"}`}>
        {Children}
    </span>
}