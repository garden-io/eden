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
  const [r, setR] = useState(270)
  const path =
    "M20 20H80C86.5 19.9 99.6 23.76 100 40C100.4 56.24 100.167 86.7667 100 100C99.7667 106.638 103.44 119.932 120 120C136.56 120.068 146.9 120.028 150 120C156.641 119.733 169.938 123.36 170 140C170.062 156.64 170.026 173.6 170 180"

  var segments = normalize(abs(parse(path)))
    .flat()
    .join(" ")

  const rr = 6
  var outlinepath = pathOutline(segments, rr, { bezierAccuracy: 0.5 })
  let [left, top, right, bottom] = getBounds(path)
  const x = left - rr
  const y = top - rr
  const width = right - left + 2 * rr
  const height = bottom - top + 2 * rr

  const topGradient = {
    opacities: [0, 0, 1, 1, 1, 1],
    rotate: 90,
  }
  const rightGradient = {
    opacities: [1, 1, 1, 1, 0, 0],
    rotate: 0,
  }
  const bottomGradient = {
    opacities: [1, 1, 1, 1, 0, 0],
    rotate: 90,
  }
  const leftGradient = {
    opacities: [0, 0, 1, 1, 1, 1],
    rotate: 0,
  }

  const GradientMask = ({ opacities, rotate, x, y, width, height, id }) => {
    const offsets = [0, 0.03, 0.1, 0.9, 0.97, 1]
    return (
      <>
        <linearGradient id={id + "-gradient"} gradientTransform={`rotate(${rotate})`}>
          {offsets.map((offset, i) => (
            <stop key={i} offset={offset} stopColor="white" stopOpacity={opacities[i]} />
          ))}
        </linearGradient>
        <mask id={id}>
          <rect x={x} y={y} width={width} height={height} fill={`url(#${id + "-gradient"})`} />
        </mask>
      </>
    )
  }

  return (
    <>
      <input max="360" type="range" value={r} onChange={(e) => setR(parseFloat(e.target.value))} />
      <Svg>
        <defs>
          <GradientMask {...topGradient} x={x} y={y} width={width} height={height} id="topGradient" />
          <GradientMask {...bottomGradient} x={x} y={y} width={width} height={height} id="bottomGradient" />
        </defs>
        <g mask="url(#topGradient)">
          <g mask="url(#bottomGradient)">
            <path d={outlinepath} />
          </g>
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
