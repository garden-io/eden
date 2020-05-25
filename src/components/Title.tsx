/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import { Color, TitleSize, TitleTags, TextAlign, textAligns, fontFamilies, FontFamily } from "../themes"
import React, { FC } from "react"

import { useTheme } from "../contexts"

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
   * Headings tag
   */
  tag?: TitleTags
  /**
   * Headings tag
   */
  to?: string
  /**
   * Function called when title is clicked
   */
  onClick?: Function
  /**
   * Title color
   */
  color?: Color
  /**
   * Data selector for testing
   */
  dataTest?: string
}

export const Title: FC<Props> = ({
  children = null,
  size = "medium",
  textAlign = "left",
  color = "grayDark",
  fontFamily = "title",
  tag = "h3",
  to = null,
  onClick = () => {},
  dataTest = false,
}) => {
  const { colors, titleSizes, fontWeights, lineHeights, titleTags } = useTheme()

  const HeadingTag: any = tag ? tag : titleTags[size]
  return (
    <HeadingTag
      data-test={dataTest}
      style={{
        fontFamily: fontFamilies[fontFamily],
        fontSize: titleSizes[size],
        fontWeight: fontWeights.bold,
        lineHeight: lineHeights.small,
        color: colors[color],
        margin: 0,
        cursor: to || onClick ? "pointer" : "",
        textAlign: textAligns[textAlign],
      }}
      onClick={onClick}
    >
      {children}
    </HeadingTag>
  )
}
