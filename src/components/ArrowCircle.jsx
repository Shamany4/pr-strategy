import React from "react";

const ArrowCircle = ({ secondClass, orange, stroke, height, strokeWidth, angle, width, background, heightSVG, widthSVG }) => {
  return(
    <div className={'arrow-circle ' + secondClass}
         style={{
           height: height,
           width: width,
           backgroundColor: background
         }}
    >
      {
        orange
          ?
            <svg viewBox="0 0 12.74 7.9"
                 fill="none"
                 stroke="url(#arrow-gradient)"
                 strokeWidth={strokeWidth}
                 style={{
                   height: heightSVG,
                   width: widthSVG,
                   transform: `rotate(${angle}deg)`
                 }}
            >
              <linearGradient id="arrow-gradient">
                <stop offset="0%" stopColor="#FF6E65" />
                <stop offset="100%" stopColor="#C14C45" />
              </linearGradient>
              <path d="M.69,1,6.44,6.49,12,.69,6.44,6.49Z"/>
            </svg>
          :
            <svg viewBox="0 0 12.74 7.9"
                 fill="none"
                 stroke={stroke}
                 strokeWidth={strokeWidth}
                 style={{
                   height: heightSVG,
                   width: widthSVG,
                   transform: `rotate(${angle}deg)`
                 }}
            >
              <path d="M.69,1,6.44,6.49,12,.69,6.44,6.49Z"/>
            </svg>
      }
    </div>
  )
}

export default ArrowCircle;