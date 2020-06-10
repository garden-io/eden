/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { Color, IconSize, useTheme } from ".."

interface Props {
  /**
   * Icon fill color
   */
  color?: Color
  /**
   * Icon fill color
   */
  size?: IconSize
  /**
   * Wrapper Show border around icon for debugging?
   */
  debug?: boolean
  /**
   *  Arrow direction
   */
  direction?: "up" | "right" | "down" | "left"
}

export const IconArrow: FC<Props> = ({ color = "gray", size = "medium", debug = false, direction = "up" }) => {
  const { colors, iconSizes } = useTheme()
  const directions = {
    up: 0,
    right: 90,
    down: 180,
    left: 270,
  }
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: `${iconSizes[size]}px`,
        height: `${iconSizes[size]}px`,
        display: "block",
        border: debug ? "1px dashed red" : "",
      }}
    >
      <g transform={`rotate(${directions[direction]} 12 12)`}>
        <line
          fill="none"
          stroke={colors[color]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="5"
          y1="12"
          x2="19"
          y2="12"
        ></line>
        <polyline
          fill="none"
          stroke={colors[color]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="12 5 19 12 12 19"
        ></polyline>
      </g>
    </svg>
  )
}
