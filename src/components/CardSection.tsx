/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { Color, Whitespace } from "../themes"
import { useTheme } from "../contexts"

interface Props {
  /**
   * Body
   */
  children?: any
  /**
   * Padding
   */
  padding?: Whitespace
  /**
   * Background
   */
  background?: Color
  /**
   *  Is it filling the height of the parent?
   */
  fill?: boolean
  /**
   * Data selector for testing
   */
  testid?: string
}

export const CardSection: FC<Props> = ({
  testid = null,
  children = null,
  padding = "medium",
  background = "white",
  fill = false,
}) => {
  const { colors, space } = useTheme()
  return (
    <div
      data-testid={testid}
      style={{
        padding: space[padding],
        background: colors[background] ? colors[background] : colors[background],
        height: fill ? "100%" : "",
      }}
    >
      {children}
    </div>
  )
}
