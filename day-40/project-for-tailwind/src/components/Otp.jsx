import { useRef, useState } from "react"
import { Button } from "./Button";

export function Otp(){
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    const [disabled, setdisabled] = useState(true);
    return <div className="flex justify-center">
        <SubOtpBox reference={ref1} onDone={() => {
            ref2.current.focus();
        }}/>
        <SubOtpBox reference={ref2} onDone={() => {
            ref3.current.focus();
        }} goBack={() => {
            ref1.current.focus();
        }} />
        <SubOtpBox reference={ref3} onDone={() => {
            ref4.current.focus();
        }} goBack={() => {
            ref2.current.focus();
        }} />
        <SubOtpBox reference={ref4} onDone={() => {
            ref5.current.focus();
        }} goBack={() => {
            ref3.current.focus();
        }} />
        <SubOtpBox reference={ref5} onDone={() => {
            ref6.current.focus();
        }} goBack={() => {
            ref4.current.focus();
        }} />
        <SubOtpBox reference={ref6} onDone={() => {
            setdisabled(false) 
        }} goBack={() => {
            ref5.current.focus();
        }} />

        <Button disabled={disabled} Children={"Verify"} ></Button>
    </div>
}

function SubOtpBox({reference, onDone, goBack}){
    const [inputBoxVal, setinputBoxval] = useState("")
    return <div>
        <input value={inputBoxVal} ref={reference} onKeyUp={(e) => {
            if(e.key == "Backspace")
            {
                goBack()
            }
            console.log(e.key)
        }} onChange={(e) => {
            const val = e.target.value
            if(val==""){
                //go back logic
               goBack()
            }
            else if( val=="1" || val=="2" ||val=="3" ||val=="4" ||val=="5" ||val=="6" ||val=="7" ||val=="8" ||val=="9" ||val=="0"){
                setinputBoxval(val)
                onDone()
            }
            else{

            }
        }} type="text" className="m-1 w-[40px] h-[50px] rounded-xl 
        bg-blue-800 outline-0 px-4 text-white"></input>
    </div>
}