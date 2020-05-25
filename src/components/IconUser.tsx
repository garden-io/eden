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

export const IconUser: FC<Props> = ({ testid = false, color = "gray", size = "medium", debug = false }) => {
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
      <path
        fill="none"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      ></path>
      <circle
        fill="none"
        stroke={colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="12"
        cy="7"
        r="4"
      ></circle>
    </svg>
  )
}
