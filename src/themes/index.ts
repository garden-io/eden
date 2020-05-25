/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

// Colors

export const brandColors = {
  black: "hsl(0, 0%, 0%)", // #010101 in brand guidelines
  gray: "hsl(180,0%,33%)",
  grayLight: "hsl(0,0%,83%)",
  grayLighter: "hsl(210,33%,100%)",
  blueDark: "hsl(205,100%,30%)",
  blue: "hsl(197,100%,46%)",
  blueLight: "hsl(197, 61%, 92%)",
  greenDarker: "hsl(180, 75%, 34%)",
  greenDark: "hsl(174, 100%, 40%)",
  greenBright: "hsl(157, 100%, 70%)",
  greenLight: "hsl(156, 100%, 88%)",
  pink: "hsl(319, 74%, 72%)",
  white: "hsl(0, 0%, 100%)",
}

export interface Colors {
  grayLightest: string
  grayLighter: string
  grayLight: string
  gray: string
  grayDark: string
  grayDarker: string
  green: string
  greenLight: string
  greenDark: string
  greenDarker: string
  blueLight: string
  blue: string
  blueDark: string
  pink: string
  red: string
  yellow: string
  white: string
  black: string
  none: string
}

export type Color = keyof Colors

export const lightColors: Colors = {
  grayLightest: "hsl(0,0%,97%)",
  grayLighter: "hsl(0,0%,93%)",
  grayLight: "hsl(0,0%,90%)",
  gray: "hsl(0,0%,50%)",
  grayDark: "hsl(0,0%,30%)",
  grayDarker: "hsl(0,0%,15%)",
  greenLight: brandColors.greenLight,
  greenDark: brandColors.greenDark,
  greenDarker: brandColors.greenDarker,
  blueLight: brandColors.blueLight,
  blue: brandColors.blue,
  blueDark: brandColors.blueDark,
  pink: brandColors.pink,
  green: "hsl(160, 75%, 34%)",
  red: "hsl(353, 85%, 44%)",
  yellow: "hsl(37, 100%, 64%)",
  white: brandColors.white,
  black: brandColors.black,
  none: "transparent",
}

export const darkColors: Colors = {
  grayLightest: lightColors.white,
  grayLighter: lightColors.white,
  grayLight: lightColors.white,
  gray: lightColors.grayLight,
  grayDark: lightColors.white,
  grayDarker: lightColors.white,
  greenLight: brandColors.greenLight,
  greenDark: brandColors.greenDark,
  greenDarker: brandColors.greenDarker,
  blueLight: brandColors.blueLight,
  blue: brandColors.blue,
  blueDark: brandColors.blueDark,
  pink: brandColors.pink,
  green: "hsl(160, 75%, 34%)",
  red: "hsl(353, 85%, 44%)",
  yellow: "hsl(37, 100%, 64%)",
  white: lightColors.grayDark,
  black: lightColors.white,
  none: "transparent",
}

export const colors = lightColors

// Logo colors
// TODO: Unifiy light color with the branc

export interface LogoColors {
  light: string
  dark: string
}

export type LogoColor = keyof LogoColors

export const logoColors: LogoColors = {
  light: brandColors.greenLight,
  dark: brandColors.black,
}

// Whitespace

export const spacer: number = 12

export interface Whitespaces {
  none: string
  small: string
  medium: string
  large: string
  larger: string
  largest: string
  huge: string
}

export type Whitespace = keyof Whitespaces

export const space: Whitespaces = {
  none: "",
  small: `${spacer * 0.5}px`,
  medium: `${spacer}px`,
  large: `${spacer * 2}px`,
  larger: `${spacer * 4}px`,
  largest: `${spacer * 10}px`,
  huge: `${spacer * 30}px`,
}

export interface Breakpoints {
  small: string
  medium: string
  large: string
  full: string
}

export type Breakpoint = keyof Breakpoints

export const breakpoints: Breakpoints = {
  small: "800px",
  medium: "1200px", // Modified
  large: "1500px",
  full: "100%", // Modified
}

// Fonts

export interface FontFamilies {
  garden: string
  title: string
  text: string
  code: string
}

export type FontFamily = keyof FontFamilies

export const fontFamilies: FontFamilies = {
  garden: "Garden",
  title: "Garden", // Modified
  text: "Nunito Sans",
  code: "Cousine",
}

export interface FontWeights {
  normal: number
  bold: number
}

export type FontWeight = keyof FontWeights

export const fontWeights: FontWeights = {
  normal: 400,
  bold: 700,
}

export interface LineHeights {
  small: string
  normal: string
}

export type LineHeight = keyof LineHeights

export const lineHeights: LineHeights = {
  small: "1.15em",
  normal: "1.75em",
}

// Title

export interface TitleSizes {
  smaller: string
  small: string
  medium: string
  large: string
  larger: string
  largest: string
}

export type TitleSize = keyof TitleSizes

export const titleSizes: TitleSizes = {
  smaller: `calc(${spacer}px * 1.1666)`,
  small: `calc(${spacer}px * 1.5)`,
  medium: `calc(${spacer}px * 2.5)`,
  large: `calc(${spacer}px * 3)`, // 32
  larger: `calc(${spacer}px * 4)`, // 48
  largest: `calc(${spacer}px * 6)`, // 72
}

export type TitleTags = "h1" | "h2" | "h3" | "h4" | "h5"

export const titleTags = {
  smaller: "h5",
  small: "h4",
  medium: "h3",
  large: "h2",
  larger: "h1",
}

// Text

export interface TextSizes {
  small: string
  medium: string
  large: string
}

export type TextSize = keyof TextSizes

export const textSizes: TextSizes = {
  small: `calc(${spacer}px * 1.083)`, // 13
  medium: `calc(${spacer}px * 1.5)`, // 16
  large: `calc(${spacer}px * 2)`, // 18
}

export interface TextAligns {
  left: string
  center: string
  right: string
}

// Code

export interface CodeSizes {
  small: string
  medium: string
  large: string
}

export type CodeSize = keyof CodeSizes

export const codeSizes: CodeSizes = {
  small: `calc(${spacer}px * 1)`,
  medium: `calc(${spacer}px * 1.3)`,
  large: `calc(${spacer}px * 1.6)`,
}

export interface TextAligns {
  left: string
  center: string
  right: string
}

export type TextAlign = keyof TextAligns

export const textAligns: TextAligns = {
  left: "left",
  center: "center",
  right: "right",
}

// Button

export interface ButtonSizes {
  small: string
  medium: string
  large: string
}

export type ButtonSize = keyof ButtonSizes

// Icon

export interface IconSizes {
  small: number
  medium: number
  large: number
}

export type IconSize = keyof IconSizes

export const iconSizes: IconSizes = {
  small: spacer * 1.5,
  medium: spacer * 2.5,
  large: spacer * 6, // Modified
}

export interface BorderRadiuses {
  large: string
  medium: string
  small: string
  none: string
}

export type BorderRadius = keyof BorderRadiuses

export const borderRadiuses: BorderRadiuses = {
  large: "4px",
  medium: "3px",
  small: "2px",
  none: "0px",
}

export const theme = {
  colors,
  lightColors,
  darkColors,
  brandColors,
  logoColors,
  spacer,
  space,
  breakpoints,
  fontFamilies,
  fontWeights,
  lineHeights,
  titleSizes,
  titleTags,
  textSizes,
  textAligns,
  codeSizes,
  iconSizes,
  borderRadiuses,
}
