/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import { ButtonSize, Color, fontWeights, fontFamilies } from "../themes"
import React, { FC } from "react"

import { useTheme } from "../contexts"

interface Props {
  /**
   * Button children
   */
  children?: any
  /**
   * Callback function executed while button is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  /**
   * Button background color
   */
  color?: Color
  /**
   * Button size
   */
  size?: ButtonSize
  /**
   * Is it a secondary button on terms of importance?
   */
  secondary?: boolean
  /**
   * Should the button submit the form?
   */
  type?: "button" | "submit"
  /**
   * Should the button have the width of the container?
   */
  wide?: boolean
  /**
   * Router link to navigate to
   */
  to?: string
  /**
   * Data selector for testing
   */
  dataTest?: string
}

export const Button: FC<Props> = ({
  children = null,
  onClick = () => null,
  color = "greenDark",
  size = "medium",
  secondary = false,
  wide = false,
  type = "button",
  dataTest = null,
}) => {
  const { colors, space, textSizes } = useTheme()
  const sizingMap = {
    small: {
      height: `calc(${space.large} * 1.5)`,
      padding: `calc(${space.medium} * 1.25)`,
      fontSize: textSizes.small,
    },
    medium: {
      height: space.larger,
      padding: space.large,
      fontSize: textSizes.medium,
    },
    large: {
      height: `calc(${space.larger} * 1.25)`,
      padding: `calc(${space.large} * 1.25)`,
      fontSize: textSizes.large,
    },
  }
  return (
    <button
      data-test={dataTest}
      type={type}
      style={{
        display: wide ? "flex" : "inline-flex",
        width: wide ? "100%" : "",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        outline: "none",
        color: secondary ? colors[color] : colors.white,
        backgroundColor: secondary ? colors.none : colors[color],
        transition: "100ms ease",
        borderColor: colors[color],
        borderRadius: "1px",
        fontSize: sizingMap[size].fontSize,
        lineHeight: "1",
        fontWeight: fontWeights.bold,
        cursor: "pointer",
        height: sizingMap[size].height,
        padding: `0 ${sizingMap[size].padding}`,
        fontFamily: fontFamilies.text,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
