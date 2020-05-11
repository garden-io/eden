/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { Color } from "../themes"
import { useTheme } from "../contexts"

interface Props {
  /**
   * Component children
   */
  children?: any
  /**
   * Component children
   */
  color?: Color
}

export const Component: FC<Props> = ({ children = null, color = "gray" }) => {
  const { colors } = useTheme()
  return <div style={{ color: colors[color] }}>{children}</div>
}
