/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { Color } from "../themes"
import { useTheme } from "../contexts"
import { Title } from ".."

interface Props {
  /**
   * Component children
   */
  children?: any
  /**
   * Component children
   */
  background?: Color
  /**
   * Component children
   */
  // color?: Color
  /**
   * Data selector for testing
   */
  dataTest?: string
}

export const Bullet: FC<Props> = ({ dataTest = null, children = null, background = "grayDark" }) => {
  const { colors, space } = useTheme()
  return (
    <div
      data-test={dataTest}
      style={{
        width: `calc(${space.largest} * 0.4)`,
        height: `calc(${space.largest} * 0.4)`,
        borderRadius: "100%",
        backgroundColor: colors[background],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title size="large" color="white">
        {children}
      </Title>
    </div>
  )
}
