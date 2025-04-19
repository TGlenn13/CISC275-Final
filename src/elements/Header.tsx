import React from 'react'
import './Header.css'
import {Button} from 'react-bootstrap'

interface HeaderProps{
    changePage:(pageName:string)=>void
}

export function Header({changePage}:HeaderProps): React.JSX.Element{
    return(
        <div id="navbar">
            <Button className="navbutton" onClick={()=>changePage("home")}>Home</Button>
            <Button className="navbutton" onClick={()=>changePage("basic")}>Basic Assessment</Button>
            <Button className="navbutton" onClick={()=>changePage("detailed")}>Detailed Assessment</Button>
        </div>
    )
}