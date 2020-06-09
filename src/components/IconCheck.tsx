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
}

export const IconCheck: FC<Props> = ({ color = "gray", size = "medium", debug = false }) => {
  const { colors, iconSizes } = useTheme()
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
      <polyline
        fill="none"
        stroke={colors[color]}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="20 6 9 17 4 12"
      ></polyline>
    </svg>
  )
}
