import React from "react";
import { Button } from "react-bootstrap";

interface BasicPageProps{
    changePage: (pageName: "home" | "basic") => void;
}

export function BasicPage({changePage}:BasicPageProps): React.JSX.Element{
    return(
    <div>
        <Button onClick={() => changePage("home")}>go back</Button>
    </div>
    )
}