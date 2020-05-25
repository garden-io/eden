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

export const IconBranch: FC<Props> = ({ testid = false, color = "gray", size = "medium", debug = false }) => {
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
      <line
        fill="none"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="6"
        y1="3"
        x2="6"
        y2="15"
      ></line>
      <circle
        fill="none"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="18"
        cy="6"
        r="3"
      ></circle>
      <circle
        fill="none"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="6"
        cy="18"
        r="3"
      ></circle>
      <path
        fill="none"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 9a9 9 0 0 1-9 9"
      />
    </svg>
  )
}
