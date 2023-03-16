import React, { useEffect } from 'react'
import "./index.scss"
import gsap from "gsap-trial";

const AnimatedLetters = ({letterClass, strArray, idx}) => {

  

  return (
    <span>
        {
            strArray.map((char, i)=>(
                <p key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </p>
            ))
        }
    </span>
  )
}

export default AnimatedLetters