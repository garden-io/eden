/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import { Color, Whitespace, BorderRadius, BorderWidth } from "../themes"
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
   * Border width
   */
  borderWidth?: BorderWidth
  /**
   * Border radius
   */
  borderRadius?: BorderRadius
  background?: Color
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch"

  align?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch"
  height?: Whitespace | string
  shadow?: boolean
  /**
   * Section Show border around content for debugging?
   */
  debug?: boolean
  overflow?: string
}

export const Box: FC<Props> = ({
  children = null,
  padding = "large",
  borderColor = "none",
  borderWidth = "none",
  borderRadius = "none",
  background = "none",
  justify = "flex-start",
  align = "flex-start",
  height = "",
  shadow = false,
  debug = false,
  overflow = "auto",
}) => {
  const { space, colors, borderRadiuses, borderWidths } = useTheme()
  return (
    <div
      style={{
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        padding: space[padding],
        borderColor: colors[borderColor],
        borderRadius: borderRadiuses[borderRadius],
        borderStyle: borderColor ? "solid" : "",
        backgroundColor: colors[background],
        borderWidth: borderWidths[borderWidth],
        height: Object(space).hasOwnProperty(height) ? space[height] : height,
        boxShadow: shadow ? `4px 4px 10px ${colors.shadow}` : "",
        overflow,
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
