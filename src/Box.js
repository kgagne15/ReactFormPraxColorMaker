import React from "react";

const Box = ({deleteBox, id, color, width, height}) => {
    return (
        <>
            <div style={{backgroundColor: color, height: height, width: width}}>

            </div>
            <button onClick={deleteBox}>X</button>
        </>
    )
}

export default Box;