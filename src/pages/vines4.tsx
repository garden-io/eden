import React, { useState, useRef, useEffect } from "react"
import { colors } from ".."
import getBounds from "svg-path-bounds"
import pathOutline from "svg-path-outline"

var parse = require("parse-svg-path")
var abs = require("abs-svg-path")
var normalize = require("normalize-svg-path")

const Svg = ({ children }) => (
  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    {children}
  </svg>
)
const Vine = () => {
  const [r, setR] = useState(0)
  //const path =
  "M20 20H90C96.5761 20.077 109.783 24.1847 110 40C110.217 55.8153 110.091 126.59 110 160C109.961 166.589 113.906 179.813 130 180C146.094 180.187 170.039 180.078 180 180"
  const path =
    "M20 20H80C86.5 19.9 99.6 23.76 100 40C100.4 56.24 100.167 86.7667 100 100C99.7667 106.638 103.44 119.932 120 120C136.56 120.068 146.9 120.028 150 120C156.641 119.733 169.938 123.36 170 140C170.062 156.64 170.026 173.6 170 180"
  // const outlinepath =
  //   "M89.9681 25H20V15H90.0293L90.0585 15.0003C94.1523 15.0483 100.165 16.3081 105.322 20.052C110.716 23.9679 114.869 30.4064 115 39.9313C115.218 55.7997 115.09 126.632 115 160.014L115 160.022L115 160.03C114.985 162.505 115.76 166.36 118.006 169.477C120.074 172.347 123.602 174.925 130.058 175C146.101 175.187 170.006 175.078 179.961 175L180.039 185C170.072 185.078 146.087 185.187 129.942 185C120.304 184.888 113.812 180.761 109.894 175.324C106.157 170.14 104.978 164.094 105 159.981C105.091 126.539 105.217 55.83 105 40.0687C104.914 33.7784 102.355 30.2554 99.4471 28.1443C96.3136 25.8694 92.4515 25.0347 89.9681 25Z"
  // let [left, top, right, bottom] = getBounds(outlinepath)
  var segments = normalize(abs(parse(path)))
    .flat()
    .join(" ")

  const rr = 6
  var outlinepath = pathOutline(segments, rr, { bezierAccuracy: 0.5 })
  let [left, top, right, bottom] = getBounds(path)
  const x = left
  const y = top - rr
  const width = right - left
  const height = bottom - top + 2 * rr

  return (
    <>
      <Svg>
        <defs>
          <linearGradient id="gradient">
            <stop offset="0" stopColor="white" stopOpacity="0" />
            <stop offset="0.1" stopColor="white" stopOpacity="1" />
            <stop offset="0.9" stopColor="white" stopOpacity="1" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="gradient-mask">
            <rect x={x} y={y} width={width} height={height} fill="url(#gradient)" />
          </mask>
        </defs>
        <g mask="url(#gradient-mask)">
          <path d={outlinepath} />
        </g>
        <path d={path} stroke="blue" fill="none" />
        <rect x={x} y={y} width={width} height={height} fill="none" stroke="red" />
      </Svg>
    </>
  )
}

const Page = () => (
  <>
    {/* <style>{`body { background: ${colors.blueDark}; }`}</style> */}
    <Vine />
  </>
)

export default Page
