import React,{useState} from "react"
import "../styles/test.css"


const Testing = ()=>{
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState("do")

    const doSome=()=>{

    }
    return(
        <div>
               <h1 className="do1" onClick={()=>setShow(!show)}>Hi</h1>
               {show ? 
               <div>
               <div className={[show1]} onClick={()=>setShow(!show)}>

               </div>
               <div className="appyy">
                    I love Programming and coding
                    <div onClick={()=>setShow(!show)} className="rebte">&times;</div>
               </div>
               </div>
               :""}
        </div>
    )
}

export default Testing;