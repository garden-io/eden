/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import { Color, Whitespace } from "../themes"
import React, { FC } from "react"

import { useTheme } from "../contexts"

interface Props {
  /**
   * Component children
   */
  children?: any
  /**
   * Gap between columns
   */
  padding?: Whitespace
  /**
   * Border color
   */
  borderColor?: Color
  /**
   * Background color
   */
  background?: Color
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch"

  align?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch"
  height?: Whitespace | string
  shadow?: boolean
  /**
   * Section Show border around content for debugging?
   */
  debug?: boolean
  /**
   * Data selector for testing
   */
  testid?: string
}

export const Box: FC<Props> = ({
  children = null,
  padding = "large",
  borderColor = "none",
  background = "none",
  justify = "flex-start",
  align = "flex-start",
  height = "",
  shadow = false,
  debug = false,
  testid = null,
}) => {
  const { space, colors } = useTheme()
  return (
    <div
      data-testid={testid}
      style={{
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        padding: space[padding],
        borderColor: colors[borderColor],
        borderStyle: borderColor ? "solid" : "",
        backgroundColor: colors[background],
        borderWidth: borderColor ? "1px" : "",
        height: Object(space).hasOwnProperty(height) ? space[height] : height,
        boxShadow: shadow ? "0 0 2px rgba(0,0,0,0.1), 0 0 40px rgba(0,0,0,0.05)" : "",
      }}
    >
      <div
        style={{
          border: debug ? "1px dashed red" : "",
          flex: justify === "center" ? "" : 1,
          textAlign: justify === "center" ? "center" : undefined,
        }}
      >
        {children}
      </div>
    </div>
  )
}
