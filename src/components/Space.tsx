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
  dataTest?: string
}

export const Space: FC<Props> = ({ dataTest = false, width = "medium", height = "medium" }) => {
  const { space } = useTheme()
  return <div data-test={dataTest} style={{ height: space[height], width: space[width] }} />
}
