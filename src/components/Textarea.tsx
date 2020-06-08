/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { useTheme, fontFamilies, BorderWidth } from ".."

interface TextareaProps {
  title?: string
  placeholder?: string
  name?: string
  value?: any
  borderWidth?: BorderWidth
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: FC<TextareaProps> = ({
  title = "",
  placeholder = "",
  name = "",
  value = "",
  borderWidth = "medium",
  onChange = () => null,
}) => {
  const { colors, space, textSizes, borderRadiuses, borderWidths } = useTheme()

  return (
    <div>
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
      <textarea
        name={name}
        value={value}
        rows={10}
        placeholder={placeholder}
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
        onChange={onChange}
      />
    </div>
  )
}
