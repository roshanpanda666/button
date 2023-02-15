import React,{useState} from 'react'
import './button1.css'
export default function ButtonComponent() {

    const click =()=>{
        setText("clicked!")
    }

    const [Text,setText] = useState('click me!')
  return (
    <div>
      <div className="buttonparrent">
      <div className="btn">
            <h1 className='txt' onClick={click}>{Text}</h1>

        </div>
        <div className="btn">
            <button className='btnstyle' onClick={click}>{Text}</button>

        </div>
      </div>
    </div>
  )
}
