import React, { useState, useRef, useEffect } from "react"
import { colors } from ".."

const Svg = ({ children }) => (
  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
)
const Page = () => {
  const path =
    "M20 20H90C96.5761 20.077 109.783 24.1847 110 40C110.217 55.8153 110.091 126.59 110 160C109.961 166.589 113.906 179.813 130 180C146.094 180.187 170.039 180.078 180 180"
  const outlinepath =
    "M89.9681 25H20V15H90.0293L90.0585 15.0003C94.1523 15.0483 100.165 16.3081 105.322 20.052C110.716 23.9679 114.869 30.4064 115 39.9313C115.218 55.7997 115.09 126.632 115 160.014L115 160.022L115 160.03C114.985 162.505 115.76 166.36 118.006 169.477C120.074 172.347 123.602 174.925 130.058 175C146.101 175.187 170.006 175.078 179.961 175L180.039 185C170.072 185.078 146.087 185.187 129.942 185C120.304 184.888 113.812 180.761 109.894 175.324C106.157 170.14 104.978 164.094 105 159.981C105.091 126.539 105.217 55.83 105 40.0687C104.914 33.7784 102.355 30.2554 99.4471 28.1443C96.3136 25.8694 92.4515 25.0347 89.9681 25Z"
  return (
    <Svg>
      <defs>
        <path id="path" d={path} fill="none" stroke="black" />
        <clipPath id="clip">
          <path d={outlinepath} />
        </clipPath>
        <filter id="blur">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <path d={path} fill="none" stroke="black" opacity="0.5" />
      <path d={outlinepath} fill={colors.greenDark} />
      <g clipPath="url(#clipp)">
        <rect x="-100" y="-50" width="100" height="100" fill={colors.greenLight} filter="url(#blur)">
          <animateMotion dur="2s" rotate="auto" fill="freeze" repeatCount="indefinite">
            <mpath xlinkHref="#path" />
          </animateMotion>
        </rect>
      </g>
    </Svg>
  )
}

// const Page2 = () => {
//   return (
//     <Svg>
//       <defs>
//         <path id="curve" d="M 10 100 C 200 30 300 250 350 50" stroke="black" fill="none" stroke-width="5" />
//       </defs>
//       <ellipse cx="7" cy="-5" rx="20" ry="10" fill="#8888ff" stroke="#44aa88">
//         <animateMotion dur="2s" rotate="auto" fill="freeze" repeatCount="indefinite">
//           <mpath xlinkHref="#curve" />
//         </animateMotion>
//       </ellipse>
//     </Svg>
//   )
// }

export default Page
