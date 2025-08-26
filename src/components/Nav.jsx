import React from 'react'
import  useSmoothScroll from "../hooks/useSmoothScroll"
import { headerData } from '../util/header'
const Nav = () => {
  

    const navLink= headerData
    const scrollTo=useSmoothScroll()
  return (
    <nav>
        <ul>
            {navLink.map((nav,i)=>(
                <li key={i}>
                    <a 
                    href={`#${nav}`} 
                    onClick={(e)=>{
                        e.preventDefault()
                        scrollTo(nav)
                    }}
                    >
                    {nav}
                    </a>
                </li>

            ))}
        </ul>
    </nav>
  )
}

export default Nav