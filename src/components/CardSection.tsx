/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { Color, Space } from "../themes"
import { useTheme } from "../contexts"

interface Props {
  /**
   * Body
   */
  children?: any
  /**
   * Padding
   */
  padding?: Space
  /**
   * Background
   */
  background?: Color
  /**
   *  Is it filling the height of the parent?
   */
  fill?: boolean
}

export const CardSection: FC<Props> = ({ children = null, padding = "medium", background = "white", fill = false }) => {
  const { colors, space } = useTheme()
  return (
    <div
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
