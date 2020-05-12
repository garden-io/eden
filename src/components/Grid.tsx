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
   * Number of columns or string with CSS grid-template-columns values
   */
  columns?: number | string
  /**
   * Gap between columns
   */
  gap?: Whitespace
  /**
   * Section Show border around content for debugging?
   */
  debug?: boolean
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around"

  align?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch"
}

export const Grid: FC<Props> = ({
  children = null,
  columns = 1,
  gap = "medium",
  debug = false,
  justify = "start",
  align = "stretch",
}) => {
  const { space } = useTheme()

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: typeof columns === "string" ? columns : `repeat(${columns}, 1fr)`,
        gridGap: space[gap],
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {flatten([children]).map((Child: any, i: string) => (
        <div key={i} style={{ border: debug ? "1px dashed red" : "" }}>
          {Child}
        </div>
      ))}
    </div>
  )
}
