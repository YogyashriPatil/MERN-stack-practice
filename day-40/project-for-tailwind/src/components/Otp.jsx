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
        }} />
        <SubOtpBox reference={ref3} onDone={() => {
            ref4.current.focus();
        }}/>
        <SubOtpBox reference={ref4} onDone={() => {
            ref5.current.focus();
        }}/>
        <SubOtpBox reference={ref5} onDone={() => {
            ref6.current.focus();
        }} />
        <SubOtpBox reference={ref6} onDone={() => {
            setdisabled(false) 
        }} />

        <br />
        <br />
        <Button disabled={disabled} Children={"Verify"} ></Button>
    </div>
}

function SubOtpBox({reference, onDone}){
    return <div>
        <input ref={reference} onChange={(e) => {
            onDone()
        }} type="text" className="m-1 w-[40px] h-[50px] rounded-xl 
        bg-blue-800 outline-0 px-4 text-white"></input>
    </div>
}