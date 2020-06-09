/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC, useState } from "react"

import { Flex, Title } from ".."
import { IconCaret } from "./IconCaret"

interface Props {
  /**
   * Title
   */
  title: string
  /**
   * Expandable content
   */
  children?: any
  /**
   * Expandable content
   */
  isExpanded?: boolean
}

export const Expandable: FC<Props> = ({ title, children = null, isExpanded = false }) => {
  const [expanded, setExpanded] = useState(isExpanded)
  const handleClick = () => setExpanded(!expanded)
  return (
    <>
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        <Flex justify="space-between">
          <Title size="small">{title}</Title>
          <IconCaret direction={expanded ? "up" : "down"} />
        </Flex>
      </div>
      {expanded && children}
    </>
  )
}
