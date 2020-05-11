/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { Flex, Text, useTheme } from ".."

import { StatusColor } from "../themes"

interface StatusProps {
  color?: StatusColor
  children?: any
}

export const Status: FC<StatusProps> = ({ color = "ok", children = null }) => {
  const { statusColors } = useTheme()

  return (
    <Flex align="center" gap="small">
      <div
        style={{
          color: statusColors[color],
          fontSize: "0.7em",
          transform: "translate(0,-0.1em)",
        }}
      >
        ⬤
      </div>
      {children && (
        <div style={{ width: "80px" }}>
          <Text color="gray">{children}</Text>
        </div>
      )}
    </Flex>
  )
}
