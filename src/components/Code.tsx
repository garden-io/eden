/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import { Color, CodeSize, fontFamilies, borderRadiuses } from "../themes"
import React, { FC } from "react"

import { useTheme } from "../contexts"

interface Props {
  /**
   * Component children
   */
  children?: any
  /**
   * Text size
   */
  size?: CodeSize
  /**
   * Function called when code is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  /**
   * Text color
   */
  color?: Color
  /**
   * Background color
   */
  background?: Color
  /**
   * Data selector for testing
   */
  testid?: string
}

export const Code: FC<Props> = ({
  children = null,
  size = "medium",
  color = "grayDark",
  background = "none",
  onClick = () => {},
  testid = null,
}) => {
  const { colors, codeSizes, fontWeights, lineHeights } = useTheme()
  return (
    <code
      data-testid={testid}
      style={{
        display: "block",
        fontFamily: fontFamilies.code,
        fontSize: codeSizes[size],
        fontWeight: fontWeights.normal,
        lineHeight: lineHeights.normal,
        color: colors[color],
        margin: 0,
        cursor: onClick ? "pointer" : "",
      }}
      onClick={onClick}
    >
      <span
        style={{
          background: colors[background],
          padding: background ? "0.15em" : "",
          borderRadius: background ? borderRadiuses.small : "",
        }}
      >
        {children}
      </span>
    </code>
  )
}
