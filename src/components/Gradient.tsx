/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

const gradients = {
  green: `linear-gradient(163deg, hsl(174, 52%, 94%) 21%, rgba(255, 255, 255, 0) 88%), rgba(255, 255, 255, 0)`,
  blue: `linear-gradient(163deg, hsl(197, 52%, 94%) 3%, rgba(255, 255, 255, 0) 98%), rgba(255, 255, 255, 0)`,
}

type Props = {
  children: any
  color?: "green" | "blue"
}

export const Gradient: FC<Props> = ({ color = "green", children }) => {
  return <div style={{ background: gradients[color] }}>{children}</div>
}
