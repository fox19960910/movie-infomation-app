import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './CircleProgressBar.scss'
import { useState } from 'react';

const CircleProgressBar = props => {
    const {point,speed,color,size,bold,text} = props
    const percent = point*10
    const strokeSize = size ? size/2 : 50
    const [strokeDashoffset, setStrokeDashoffset] = useState(0)
    let keyframeAnimate = `
        @keyframes animate{
            100%{
                stroke-dashoffset:0
            }
        }
    `
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframeAnimate, styleSheet.cssRules.length);
    const progressSize ={
        height:size ? `${size}px` : "100px",
        width:size ? `${size}px` : "100px"
    }
    const svgStyle={
        ...progressSize,
        position:"relative",
        transform:"rotate(-90deg)"
    }
    const circleStyle={
        ...progressSize,
        fill:"transparent",
        stroke:"transparent",
        strokeWidth:bold ? bold : "5",
        strokeLinecap:"round",
        strokeDasharray:"440",
        strokeDashoffset:"440",
    }
    const circleStyle1 = {
        ...circleStyle,
        stroke:color ? color : "#ffac4a",
        strokeDashoffset:"0",
    }
    const circleStyle2 = {
        ...circleStyle,
        stroke:"#adadad",
        strokeDashoffset:"440",
        // animation:"animate 2s ease-in-out both "
    }
    useEffect(() => {
        window.onload = function() {
            var totalProgress, progress;
                const circles = document.querySelectorAll('.progress-inner');
                console.log('circles',circles)
                for(var i = 0; i < circles.length; i++) {
                    totalProgress = circles[i].querySelector('circle').getAttribute('stroke-dasharray');
                    progress = percent
                    console.log(circles[i].querySelector('.bar'))
                    setStrokeDashoffset(totalProgress * progress / 100)
              
                }
            }
    }, [])
    return (
        <div className="progress" style={progressSize} >
            <svg className ="progress-inner" style={svgStyle}>
                <circle cx={strokeSize} cy={strokeSize} r={strokeSize - 10} style={circleStyle1}></circle>
                <circle className="bar"cx={strokeSize} cy={strokeSize} r={strokeSize - 10} style={circleStyle2}></circle>
            </svg>
            <div className="counter">
                <span>{point.toFixed(1)}</span> 
                <p>{text}</p></div>
        </div>
        // <div class="progressdiv"  data-percent="86">
        //     <svg class="progress" width="178" height="178" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        //     <circle r="80" cx="89" cy="89" fill="transparent" stroke-dasharray="502.4" stroke-dashoffset="0" ></circle>
        //     <circle class="bar" r="80" cx="89" cy="89" fill="transparent" stroke-dasharray="502.4" stroke-dashoffset={(502.4 * 86) / 100}></circle>
        //     </svg>
        // </div>
    )
}

CircleProgressBar.propTypes = {
    size:PropTypes.number.isRequired,
    point:PropTypes.number.isRequired,
    speed:PropTypes.number,
    color:PropTypes.string,
    bold:PropTypes.number,
    text:PropTypes.string
}

export default CircleProgressBar
