/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { Whitespace } from "../themes"
import { flatten } from "../utils"
import { useTheme } from "../contexts"

interface Props {
  /**
   * Component children
   */
  children?: any
  /**
   * Gap between columns
   */
  gap?: Whitespace
  /**
   * Gap between columns
   */
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around"

  align?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch"
  /**
   * Wrap the contents to the new lines?
   */
  wrap?: boolean
  /**
   * Show border around content for debugging?
   */
  debug?: boolean
  /**
   * Data selector for testing
   */
  dataTest?: string
}

export const Flex: FC<Props> = ({
  children = null,
  gap = "medium",
  justify = "flex-start",
  align = "center",
  wrap = false,
  debug = false,
  dataTest = false,
}) => {
  const { space } = useTheme()
  return (
    <div
      data-test={dataTest}
      style={{
        display: "flex",
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap ? "wrap" : undefined,
      }}
    >
      {flatten([children]).map((Child: any, i: number) => (
        <div
          key={i}
          style={{
            marginLeft: i === 0 ? "" : space[gap],
            border: debug ? "1px dashed red" : "",
          }}
        >
          {Child}
        </div>
      ))}
    </div>
  )
}
