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
  const path =
    "M20 20H80C86.5 19.9 99.6 23.76 100 40C100.4 56.24 100.167 86.7667 100 100C99.7667 106.638 103.44 119.932 120 120C136.56 120.068 146.9 120.028 150 120C156.641 119.733 169.938 123.36 170 140C170.062 156.64 170.026 173.6 170 180"

  var segments = normalize(abs(parse(path)))
    .flat()
    .join(" ")

  var outlinepath = pathOutline(segments, 6)

  const FadeEdges = ({ path, r, children, top = false, right = false, bottom = false, left = false }) => {
    const [leftBound, topBound, rightBound, bottomBound] = getBounds(path)
    const x = leftBound - r
    const y = topBound - r
    const width = rightBound - leftBound + 2 * r
    const height = bottomBound - topBound + 2 * r
    const gradients = [
      {
        id: "topGradient",
        opacities: [0, 0, 1, 1, 1, 1],
        rotate: 90,
      },
      {
        id: "rightGradient",
        opacities: [1, 1, 1, 1, 0, 0],
        rotate: 0,
      },
      {
        id: "bottomGradient",
        opacities: [1, 1, 1, 1, 0, 0],
        rotate: 90,
      },
      {
        id: "leftGradient",
        opacities: [0, 0, 1, 1, 1, 1],
        rotate: 0,
      },
    ]
    const offsets = [0, 0.03, 0.14, 0.85, 0.97, 1]

    return (
      <>
        {gradients.map(({ id, opacities, rotate }, i) => (
          <defs key={i}>
            <linearGradient id={id + "-gradient"} gradientTransform={`rotate(${rotate})`}>
              {offsets.map((offset, i) => (
                <stop key={i} offset={offset} stopColor="white" stopOpacity={opacities[i]} />
              ))}
            </linearGradient>
            <mask key={"m" + i} id={id}>
              <rect x={x} y={y} width={width} height={height} fill={`url(#${id + "-gradient"})`} />
            </mask>
          </defs>
        ))}
        <g mask={top ? "url(#topGradient)" : ""}>
          <g mask={right ? "url(#rightGradient)" : ""}>
            <g mask={bottom ? "url(#bottomGradient)" : ""}>
              <g mask={left ? "url(#leftGradient)" : ""}>{children}</g>
            </g>
          </g>
        </g>
      </>
    )
  }

  const AnimateShine = ({ path, outlinepath, fill }) => (
    <>
      <defs>
        <path id="path" d={path} fill="none" stroke="black" />
        <clipPath id="clip">
          <path d={outlinepath} />
        </clipPath>
        <filter id="blur">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <g clipPath="url(#clip)">
        <rect x="-400" y="-200" width="400" height="400" fill={fill} filter="url(#blur)">
          <animateMotion id="one" dur="2s" rotate="auto" fill="freeze" calcMode="linear" begin="0s">
            <mpath xlinkHref="#path" />
          </animateMotion>
        </rect>
      </g>
    </>
  )

  return (
    <>
      <Svg>
        <defs></defs>
        <FadeEdges path={path} r={6} left bottom>
          <path d={outlinepath} fill={colors.greenDark} />
          <AnimateShine path={path} outlinepath={outlinepath} fill={colors.greenLight} />
        </FadeEdges>
        <path d={path} stroke="blue" fill="none" />
      </Svg>
    </>
  )
}

const Page = () => (
  <>
    <style>{`body { background: ${colors.blueDark}; }`}</style>
    <Vine />
  </>
)

export default Page
