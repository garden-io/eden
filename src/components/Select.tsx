/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"
import { useTheme, BorderWidth, borderWidths, borderRadiuses } from ".."

export interface SelectOption {
  value: string | number
  title?: string
  selected?: boolean
  disabled?: boolean
}

interface Props {
  name?: string
  options: SelectOption[]
  onChange?: (value: string) => void
  selectedValue?: string | number
  borderWidth?: BorderWidth
}

export const Select: FC<Props> = ({
  name = "",
  options = [],
  onChange = () => null,
  selectedValue = undefined,
  borderWidth = "medium",
}) => {
  const { colors, space, textSizes, fontFamilies } = useTheme()
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)
  return (
    <div
      style={{
        borderRadius: borderRadiuses.small,
        borderWidth: borderWidths[borderWidth],
        borderStyle: "solid",
        paddingTop: `calc(${space.medium} * 0.88)`,
        paddingRight: space.medium,
        paddingBottom: `calc(${space.medium} * 0.88)`,
        paddingLeft: space.medium,
        background: colors.white,
        borderColor: colors.grayLight,
        // TODO: extract to a style
        boxShadow: "inset 2px 2px 4px rgba(224, 225, 237, 0.5)",
      }}
    >
      {options.length && (
        <select
          name={name}
          onChange={handleChange}
          style={{
            display: "block",
            color: colors.gray,
            background: colors.white,
            fontFamily: fontFamilies.text,
            fontSize: textSizes.medium,
            outline: "none",
            width: "100%",
            MozAppearance: "none",
            border: 0,
          }}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.disabled} selected={selectedValue === opt.value}>
              {opt.title || opt.value}
            </option>
          ))}
        </select>
      )}
    </div>
  )
}
