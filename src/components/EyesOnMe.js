// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe(){

    function handleFocus(e){
        console.log("Good!")
    }

    function handleBlur(e){
        console.log("Hey! Eyes on me!")
    }
    return (
        <buttton onFocus = {handleFocus} onBlur = {handleBlur}>Eyes on me</buttton>
    )
}

export default EyesOnMe