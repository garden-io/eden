/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import { Color, TextSize, TextAlign, FontFamily } from "../themes"
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
  size?: TextSize
  /**
   * Font family
   */
  fontFamily?: FontFamily
  /**
   * Text horizontal alignment
   */

  textAlign?: TextAlign
  /**
   * Router link to navigate to
   */
  to?: string
  /**
   * Function called when text is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  /**
   * Text color
   */
  color?: Color
}

export const Text: FC<Props> = ({
  children = null,
  size = "medium",
  textAlign = "left",
  fontFamily = "text",
  color = "grayDark",
  to = null,
  onClick = () => {},
}) => {
  const { colors, textSizes, fontFamilies, fontWeights, lineHeights, textAligns } = useTheme()
  return (
    <div
      style={{
        fontFamily: fontFamilies[fontFamily],
        fontSize: textSizes[size],
        fontWeight: fontWeights.normal,
        lineHeight: lineHeights.normal,
        color: colors[color],
        textAlign: textAligns[textAlign] as any,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
