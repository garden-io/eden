/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

// Source https://github.com/simple-icons/simple-icons/blob/develop/icons/github.svg
// Licence https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md

import { Color, IconSize } from "../themes"
import React, { FC } from "react"

import { useTheme } from "../contexts"

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
   * Section Show border around icon for debugging?
   */
  debug?: boolean
}

export const IconPlaceholder: FC<Props> = ({ color = "gray", size = "medium", debug = false }) => {
  const { colors, iconSizes } = useTheme()
  return (
    <svg
      role="img"
      viewBox={`0 0 ${iconSizes[size]} ${iconSizes[size]}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: `${iconSizes[size]}px`,
        height: `${iconSizes[size]}px`,
        display: "block",
        border: debug ? "1px dashed red" : "",
      }}
    >
      <circle
        stroke={colors[color]}
        cx={iconSizes[size] / 2}
        cy={iconSizes[size] / 2}
        r={iconSizes[size] / 2 - 1}
        fill="none"
        strokeDasharray="2 1"
      />
    </svg>
  )
}
