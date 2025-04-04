import React from 'react'
import {Button} from 'react-bootstrap'

interface HeaderProps{
    changePage:(pageName:string)=>void
}

export function Header({changePage}:HeaderProps): React.JSX.Element{
    return(
        <div className="navbar">
            <Button onClick={()=>changePage("home")}>Home</Button>
            <Button onClick={()=>changePage("basic")}>Basic Assessment</Button>
            <Button onClick={()=>changePage("detailed")}>Detailed Assessment</Button>
        </div>
    )
}