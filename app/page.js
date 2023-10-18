'use client'
import React, { useState } from 'react'

 

 

const page = () => {
  
  const [words, setwords] = useState("")
  
return (
  <>
  <div id='card' className='bg-gray'>

    <h1 className='text-5xl    text-center'>Responsive Paragraph word Counter</h1>

    <textarea onChange={ 
      (e)=>{
        console.log("hello")
        setwords(e.target.value);
      }

    }
      value={words} id="paragraph" cols={50} rows={10} className=" rounded-lg" placeholder='Enter Paragraph'></textarea>
      
      <h3>Words Count: {words.trim().split(/\s+/).filter(Boolean).length}</h3>
  </div>
  </>
)
}

export default page