/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { useTheme, BorderWidths, Color, BorderWidth, BorderRadius } from ".."

interface Props {
  title?: string
  name?: string
  value?: any
  placeholder?: string
  type?: string
  disabled?: boolean
  /**
   * Border width
   */
  borderWidth?: BorderWidth
  onChange?: (value: string) => void
}

export const Textfield: FC<Props> = ({
  title = "",
  name = "",
  value = "",
  placeholder = "",
  type = "text",
  disabled = false,
  borderWidth = "small",
  onChange = () => null,
}) => {
  const { colors, space, textSizes, fontFamilies, borderWidths, borderRadiuses } = useTheme()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)
  return (
    /* TODO: Make opacity a thene variable */
    <div style={{ opacity: disabled ? 0.5 : 1 }}>
      {title && (
        <div
          style={{
            fontFamily: fontFamilies.text,
            fontSize: textSizes.medium,
            color: colors.gray,
            marginBottom: space.small,
          }}
        >
          {title}
        </div>
      )}
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        style={{
          display: "block",
          background: colors.white,
          borderRadius: borderRadiuses.small,
          borderWidth: borderWidths[borderWidth],
          borderStyle: "solid",
          borderColor: colors.grayLight,
          color: colors.gray,
          paddingTop: space.medium,
          paddingRight: `calc(${space.medium} * 1.25)`,
          paddingBottom: space.medium,
          paddingLeft: `calc(${space.medium} * 1.25)`,
          fontFamily: fontFamilies.text,
          fontSize: textSizes.medium,
          outline: "none",
          width: "100%",
        }}
        onChange={handleChange}
      />
    </div>
  )
}
