/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { useTheme } from "../contexts"
import { fontFamilies } from "../themes"

interface TextareaProps {
  title?: string
  value?: any
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  /**
   * Data selector for testing
   */
  testid?: string
}

export const Textarea: FC<TextareaProps> = ({ testid = false, title = "", value = "", onChange = () => null }) => {
  const { colors, space, textSizes } = useTheme()

  return (
    <div data-testid={testid}>
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
        value={value}
        rows={10}
        style={{
          display: "block",
          background: colors.white,
          borderRadius: "1px",
          borderWidth: "1px",
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
