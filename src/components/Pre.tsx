/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC, useState } from "react"
import { useCopyToClipboard, useInterval } from "react-use"

import { Color } from "../themes"
import { useTheme } from "../contexts"

interface Props {
  /**
   *  Content
   */
  children?: any
  /**
   *  Show button to copy contents to a clipboard?
   */
  copy?: boolean
  /**
   *  Text color
   */
  color?: Color
  /**
   * Background color
   */
  background?: Color
  /**
   * Data selector for testing
   */
  dataTest?: string
}

export const Pre: FC<Props> = ({
  dataTest = false,
  children = null,
  color = "grayDark",
  background = "grayLight",
  copy = false,
}) => {
  const { colors, fontFamilies, textSizes, codeSizes, space, borderRadiuses } = useTheme()

  const statuses = ["Copy", "Copied", "Error"]

  const [status, setStatus] = useState(0)

  const [, copyToClipboard] = useCopyToClipboard()

  const handleClick = () => {
    copyToClipboard(children)
    setStatus(1)
  }

  useInterval(
    () => {
      setStatus(0)
    },
    status > 0 ? 1000 : null
  )

  return (
    <div
      data-test={dataTest}
      style={{
        borderRadius: borderRadiuses.small,
        backgroundColor: colors[background],
        fontFamily: fontFamilies.code,
        color: colors[color],
        fontSize: codeSizes.medium,
        lineHeight: 1.5,
        padding: space.medium,
        paddingLeft: background === "none" ? "" : space.medium,
        paddingRight: "8ch",
        whiteSpace: "pre-wrap",
        wordBreak: "break-all",
        position: "relative",
      }}
    >
      {children}
      {copy && typeof children === "string" && (
        <div
          style={{
            position: "absolute",
            top: space.medium,
            right: space.medium,
            fontSize: textSizes.small,
            fontFamily: fontFamilies.text,
            color: colors.grayDark,
            textTransform: "uppercase",
            opacity: 0.5,
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          {statuses[status]}
        </div>
      )}
    </div>
  )
}
