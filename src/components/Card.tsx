/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { useTheme } from "../contexts"
import { BorderRadius, Color } from "../themes"

interface Props {
  /**
   * Header
   */
  // header?: any
  /**
   * Body
   */
  children?: any
  /**
   * Border radius
   */
  borderRadius?: BorderRadius
  /**
   * Border color
   */
  borderColor?: Color
  /**
   * Data selector for testing
   */
  testid?: string
}

export const Card: FC<Props> = ({
  testid = null,
  children = null,
  borderRadius = "medium",
  borderColor = "grayLight",
}) => {
  const { colors, borderRadiuses } = useTheme()
  return (
    <div
      data-testid={testid}
      style={{
        borderRadius: borderRadiuses[borderRadius],
        borderColor: colors[borderColor],
        borderStyle: "solid",
        borderWidth: "1px",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  )
}
