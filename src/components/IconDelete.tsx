/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

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
   * Wrapper Show border around icon for debugging?
   */
  debug?: boolean
  /**
   * Data selector for testing
   */
  testid?: string
}

export const IconDelete: FC<Props> = ({ testid = false, color = "gray", size = "medium", debug = false }) => {
  const { colors, iconSizes } = useTheme()
  return (
    <svg
      data-testid={testid}
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="3 6 5 6 21 6"
      />
      <path
        fill="none"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
      />
      <line
        fill="none"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="10"
        y1="11"
        x2="10"
        y2="17"
      />
      <line
        fill="none"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="14"
        y1="11"
        x2="14"
        y2="17"
      />
    </svg>
  )
}
