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

/*
const AnimateShine = ({ path, outlinepath, fill, id }) => (
  <>
    <defs>
      <path id={id + "-path"} d={path} fill="none" stroke="black" />
      <clipPath id={id + "-clip"}>
        <path d={outlinepath} />
      </clipPath>
      <filter id="blur">
        <feGaussianBlur stdDeviation="6" />
      </filter>
    </defs>
    <g clipPath={`url(#${id + "-clipp"})`}>
      <rect x="-200" y="-100" width="200" height="200" fill={fill} filter="url(#blur)">
        <animateMotion id="one" dur="2s" rotate="auto" fill="freeze" calcMode="linear" begin="0s">
          <mpath xlinkHref={`url(#${id + "-path"})`} />
        </animateMotion>
      </rect>
    </g>
  </>
)
*/

const AnimateShine = ({ path, outlinepath, fill, id }) => (
  <>
    <defs>
      <path id={id + "-path"} d={path} fill="none" stroke="black" />
      <clipPath id={id + "-clip"}>
        <path d={outlinepath} />
      </clipPath>
      <filter id="blur">
        <feGaussianBlur stdDeviation="6" />
      </filter>
    </defs>
    <g clipPath={"url(#" + id + "-clip)"}>
      <rect x="-200" y="-100" width="200" height="200" fill={fill} filter="url(#blur)">
        <animateMotion id="one" dur="3s" rotate="auto" fill="freeze" calcMode="linear" begin="0s">
          <mpath xlinkHref={"#" + id + "-path"} />
        </animateMotion>
      </rect>
    </g>
  </>
)

const getPathOutline = (path, r = 6) => {
  const segments = normalize(abs(parse(path)))
    .flat()
    .join(" ")
  return pathOutline(segments, r)
}

const Vine = () => {
  const path =
    "M20 20H80C86.5 19.9 99.6 23.76 100 40C100.4 56.24 100.167 86.7667 100 100C99.7667 106.638 103.44 119.932 120 120C136.56 120.068 146.9 120.028 150 120C156.641 119.733 169.938 123.36 170 140C170.062 156.64 170.026 173.6 170 180"
  const path2 =
    "M100 40V70C100.072 76.7744 96.1723 90.2585 80 90C63.8277 89.7415 53.2615 89.8923 50 90C43.3692 90.2128 30.0862 94.5108 30 110C29.9138 125.489 29.9641 136.454 30 140C29.7974 146.744 33.5138 160.185 50 160C66.4862 159.815 70.2026 173.256 70 180"
  const outlinepath = getPathOutline(path)
  const outlinepath2 = getPathOutline(path2)

  return (
    <>
      <Svg>
        <FadeEdges path={path} r={6} top bottom>
          <path d={outlinepath2} fill={colors.greenDark} />
          <AnimateShine id="two" path={path2} outlinepath={outlinepath2} fill={colors.greenLight} />
        </FadeEdges>
        <FadeEdges path={path} r={6} left bottom>
          <path d={outlinepath} fill={colors.greenDark} />
          <AnimateShine id="one" path={path} outlinepath={outlinepath} fill={colors.greenLight} />
        </FadeEdges>
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
