/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { Flex } from "./Flex"
import { useTheme } from "../contexts"
import { fontFamilies } from "../themes"

interface Props {
  title?: string
  name?: string
  value?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<Props> = ({ title = "", name = "", value = false, onChange = () => null }) => {
  const { colors, textSizes } = useTheme()
  return (
    <Flex align="flex-start">
      <input
        name={name}
        type="checkbox"
        checked={value}
        onChange={onChange}
        style={{
          fontSize: textSizes.large,
        }}
      />
      <div
        style={{
          color: colors.grayDark,
          fontFamily: fontFamilies.text,
          fontSize: textSizes.medium,
        }}
      >
        {title}
      </div>
    </Flex>
  )
}
