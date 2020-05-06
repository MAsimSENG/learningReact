
import React from 'react'
import Amain from './main'
import Courses from "./myCourses";


function app() {

    let first="Asim";

    // template string syntax `${var name} other string to show up`}
    // you have to use two brackets because first is for js and second is for objects in js
    return (
        <div>

            <h1 style={{backgroundColor:'yellow'}}> Hello there {`${first} Ali` } </h1>
            <Amain/>
            <Courses style = {{backgroundColor:'yellow'}}/>
        </div>
    )

}

export default app;