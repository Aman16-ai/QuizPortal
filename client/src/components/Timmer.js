import React from 'react'
import { useEffect,useState } from 'react'
import "./css/Timmer.css"
export default function Timmer(props) {

    const [sec,setSec] = useState(0)
    const [min,setMin] = useState(1)
    const [intervalId,setIntervalId] = useState()

    
    useEffect(() => {
      setSec(props.sec)
        setMin(props.min)
    }, [props.min,props.sec])


    useEffect(()=> {
        let id = setInterval(()=> {
            setSec(prev => prev - 1)
        },1000)
        setIntervalId(id)
    },[])
    useEffect(()=> {
        if(min == 0 && sec == 0) {
            props.setisTimmerComplete(true)
            clearInterval(intervalId)
        }
        if(sec < 0) {
            setMin(prev=> prev - 1)
            setSec(60)
        }
    },[sec,min])
    
  return (
    <div className='timmer-container'>
        <h3 id="timmer-title">Over in</h3>
        <h1 id="timmer-info">{`${min}:${sec}`}</h1>
    </div>
  )
}
Timmer.defaultProps = {
    sec : 0,
    min : 0,
}
