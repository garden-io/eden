/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import { Breakpoint, Color, Whitespace } from "../themes"
import React, { FC } from "react"

import { useTheme } from "../contexts"

interface Props {
  /**
   * Component children
   */
  children?: any
  /**
   * Section background color
   */
  background?: Color
  /**
   * Section content background color
   */
  contentBackground?: Color
  /**
   * Section padding
   */
  padding?: Whitespace
  /**
   * Section content padding
   */
  contentPadding?: Whitespace
  /**
   * Content width
   */
  width?: Breakpoint
  /**
   * Section Show border around content for debugging?
   */
  debug?: boolean
  /**
   * Data selector for testing
   */
  testid?: string
}

export const Section: FC<Props> = ({
  testid = false,
  children = null,
  width = "medium",
  background = "none",
  contentBackground = "none",
  padding = "",
  contentPadding = "",
  debug = false,
}) => {
  const { colors, space, breakpoints } = useTheme()
  return (
    <div
      data-testid={testid}
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: colors[background],
        padding: space[padding],
      }}
    >
      <div
        style={{
          flex: 1,
          maxWidth: breakpoints[width],
          backgroundColor: colors[contentBackground],
          padding: space[contentPadding],
          border: debug ? "1px dashed red" : "",
        }}
      >
        {children}
      </div>
    </div>
  )
}
