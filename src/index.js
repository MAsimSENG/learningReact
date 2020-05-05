
import React from "react"
import ReactDOM from 'react-dom'
import app from './components/app'

// styling with react



/* parent child ie calling other components inside of app functional component
ReactDOM.render(app(),document.getElementById('root'))
*/




// vanilla js approach
/*
let root = document.getElementById("root")

let par = document.createElement("p");
par.innerText = "hi i'm a part";
root.appendChild(par);
*/
/*
ReactDOM.render(<ul>

    <li> A</li>
    <li>B</li>
    <li>C</li>



</ul>, document.getElementById("root"))

*/
// functional component
/*
function myApp() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>13</li>
        </ul>
    )
}

ReactDOM.render(myApp(),document.getElementById('root'))
*/


