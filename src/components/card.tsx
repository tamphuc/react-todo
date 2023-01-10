// import { FC } from "react";
import './card.css'
// FC: Functional Component
// TypeScript: define a variable <name>: <type> (= <value>)
const Card = (prop: { title: string; content?: string}) => {


    

    // function onClick2 () {

    // }

    console.log(prop.title);

    return (
        <div className="card">
            <h1>{prop.title}</h1>
            <div>
                {prop.content}
            </div>
        
        </div>
    )
}

export default Card;