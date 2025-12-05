export const Input = ({
    placeholder,
    onClick,
    type
}) => {
    return <span onClick={onClick} className={`p-4 text-4xl px-2 py-2 text-white cursor-pointer bg-blue-800`}>
        <input type={type} placeholder={placeholder} className="bg-blue-800 outline-0 rounded-2xl"></input>
    </span>
}