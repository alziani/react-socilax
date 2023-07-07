import React from 'react';
import CountUp from 'react-countup';


function Counter({ start, end, duration, text }) {
    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        
    }


    return (
        <div>
            <div style={style} >
                <span style={{fontSize:"2rem" }}>
                    <CountUp start={start} end={end} duration={duration}  />
                    <span style={{color:"orange"}} >+</span>
                </span>
                <span style={{color:"rgba(140 159 159) "}} >{text} </span>
            </div>
        </div>
    )
}

export default Counter