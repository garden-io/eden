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
  color?: Color
  /**
   * Data selector for testing
   */
  testid?: string
}

export const Line: FC<Props> = ({ testid = false, color = "grayLight" }) => {
  const { colors } = useTheme()
  return (
    <div
      data-testid={testid}
      style={{
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: colors[color],
      }}
    />
  )
}
