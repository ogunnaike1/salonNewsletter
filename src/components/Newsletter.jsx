import React from 'react'
import { useState } from 'react';
import FormNewsLetter from './FormNewsLetter';
import { MdClose} from 'react-icons/md'

const Newsletter = () => {
    const [closeNewsLetter, setcloseNewsLetter] = useState(true);
    const closeDiv = () =>{
        setcloseNewsLetter(!closeNewsLetter)
    }

  return (
    <div className= {closeNewsLetter ? 'div-newsletter' : '' }>
            <div className="div-newsletter-container">
                 <div className='div-exit'>
                    <button onClick={closeDiv}>
                        <MdClose/>
                    </button>
                 </div>

                <h1>Welcome To Simpstyle</h1>
                <p>Signup today for free and be the first to get notified on new updates</p>
                <FormNewsLetter/>
            </div>  
    </div>
  )
}

export default Newsletter;