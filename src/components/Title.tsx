/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"
import { Color, TitleSize, TitleTags, TextAlign, textAligns, fontFamilies, FontFamily, FontWeight, useTheme } from ".."

interface Props {
  /**
   * Component children
   */
  children?: any
  /**
   * Title size
   */
  size?: TitleSize
  /**
   * Horizontal text alignment
   */
  textAlign?: TextAlign
  /**
   * Font family
   */
  fontFamily?: FontFamily
  /**
   * Font weight
   */
  fontWeight?: FontWeight
  /**
   * Headings tag
   */
  tag?: TitleTags
  /**
   * Function called when title is clicked
   */
  onClick?: Function
  /**
   * Title color
   */
  color?: Color
}

export const Title: FC<Props> = ({
  children = null,
  size = "medium",
  textAlign = "left",
  color = "grayDark",
  fontFamily = "title",
  fontWeight = "bold",
  tag = "h3",
  onClick = null,
}) => {
  const { colors, titleSizes, fontWeights, lineHeights, titleTags } = useTheme()

  const HeadingTag: any = tag ? tag : titleTags[size]
  return (
    <HeadingTag
      style={{
        fontFamily: fontFamilies[fontFamily],
        fontSize: titleSizes[size],
        fontWeight: fontWeights[fontWeight],
        lineHeight: lineHeights.small,
        color: colors[color],
        margin: 0,
        cursor: onClick ? "pointer" : "",
        textAlign: textAligns[textAlign],
      }}
      onClick={onClick}
    >
      {children}
    </HeadingTag>
  )
}
