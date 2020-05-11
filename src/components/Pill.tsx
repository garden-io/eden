/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { Text, useTheme } from ".."

import { Color } from "../themes"

interface PillProps {
  children: any
  color?: Color
}

export const Pill: FC<PillProps> = ({ color = "grayLight", children }) => {
  const { colors, space } = useTheme()

  return (
    <div
      style={{
        background: colors[color],
        padding: `0 ${space.medium}`,
        borderRadius: "100px",
      }}
    >
      <Text size="small" textAlign="center">
        {children}
      </Text>
    </div>
  )
}
