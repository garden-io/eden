/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC } from "react"

import { useTheme } from "../contexts"

export const GlobalStyles: FC<{}> = () => {
  const { colors, fontWeights } = useTheme()
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
      @import url("https://fonts.googleapis.com/css?family=Cousine|Nunito+Sans:400,400i,700,700i&display=swap");
      @import url("/fonts/fonts.css");
      * {
        box-sizing: border-box;
        transition: color 0.3s;
        transition: background-color 0.3s;
      }
      body {
        margin: 0;
        background-color: ${colors.white};
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      p {
        margin-top: 0;
      }
      p:last-child {
        margin-bottom: 0;
      }
      mark {
        background: none;
        color: ${colors.pink};
        font-weight: ${fontWeights.bold};
      }
      ::placeholder {
        color: ${colors.grayLight}
      }
    `,
      }}
    />
  )
}
