import React from 'react'
import './Header.css'
import {Button} from 'react-bootstrap'

interface HeaderProps{
    changePage:(pageName:string)=>void
    error: boolean
}

export function Header({changePage, error}:HeaderProps): React.JSX.Element{
    return(
        <div id="navbar">
            <Button className="navbutton" onClick={()=>changePage("home")}>Home</Button>
            <Button className="navbutton" onClick={()=>changePage("basic")} disabled={error}>Basic Assessment</Button>
            <Button className="navbutton" onClick={()=>changePage("detailed")} disabled={error}>Detailed Assessment</Button>
        </div>
    )
}