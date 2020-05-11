/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { Color } from "../themes"
import { IconDelete } from "./IconDelete"

interface Props {
  /**
   * Icon color
   */
  color?: Color
  /**
   * Callback when button is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export const IconDeleteButton: FC<Props> = ({ color = "gray", onClick = () => null }) => {
  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // TODO: Replace with inline confirmation next to the button
    if (window.confirm("Are you sure to delete?")) {
      onClick(event)
    }
  }
  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <IconDelete size="small" color={color} />
    </div>
  )
}
