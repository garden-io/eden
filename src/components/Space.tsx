/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { Whitespace } from "../themes"
import { useTheme } from "../contexts"

interface Props {
  /**
   * Whitespace width
   */
  width?: Whitespace
  /**
   * Whitespace height
   */
  height?: Whitespace
  /**
   * Data selector for testing
   */
  testid?: string
}

export const Space: FC<Props> = ({ testid = false, width = "medium", height = "medium" }) => {
  const { space } = useTheme()
  return <div data-testid={testid} style={{ height: space[height], width: space[width] }} />
}
