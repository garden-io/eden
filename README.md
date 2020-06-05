# Eden

React + Typescript component library for [garden.io](https://garden.io)

## Installation

### Installing the latest version

Eden can installed using `npm` via direct Github link (note that we currently do not publish npm package).

```sh
npm i garden-io/eden
```

> In CI environments make sure your have `git` installed, `npm` will use that to download the library

### Installing a specific version

It's recommended to point the `package.json` to specific Eden version:

```sh
npm i garden-io/eden#v0.0.12
```

See the list of releases here: https://github.com/garden-io/eden/releases

### Installing a branch version

For testing you can also point to a specific branch / PR:

```sh
npm i garden-io/eden#branch-name-here
```

## Usage

### Using components

It's expected you have React installed. Typescript is optional but strongly recommended.

Note that Eden relies on global CSS as little as possible but it still needs a minimal set of CSS to set up font loading etc so `<GlobalStyles />` component has to be present on the app template.

To use Eden components, use the following code.

```tsx
// index.tsx

import { React }, FC from "react"
import { GlobalStyles, Grid, Text } from "eden"

export const App: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Grid columns={2}>
        <Text>Hello</Text>
        <Text>World</Text>
      </Grid>
    </>
  )
}
```

### Using style variables

To use the Eden typed style variables, you will need to wrap your application to `UiProvider` that provides access to styles in all child components using `useUi()` hook

```tsx
// index.tsx

import React, { FC } from "react"
import { ThemeProvider } from "eden"
import { Example } from "./components/Example.tsx"

export const App: FC = () => {
  <ThemeProvider>
    <Example />
  <ThemeProvider>
}
```

```tsx
// components/Example.tsx

import React, { FC } from "react"
import { useTheme } from "eden"

export const Example: FC = () => {
  const { colors } = useTheme()
  return <div style={{ background: colors.gray }}>Gray</div>
}
```

### Using types

You can also you use style types:

```tsx
// components/Example2.tsx

import { React }, FC from "react"
import { Color } from "eden"

interface Props {
  color?: Color
}

export const Example: FC<Props> = ({ color = "gray" }) => {
  const { colors } = useTheme()
  return (
    <div style={{ background: colors[color] }}>Gray</div>
  )
}
```

## Packaging

Eden is built on Typescript, but to ease the package usage in different JS / TS environments, we package the library to CommonJS format under `/dist` alongside with type information.

We use `tsc` for compilation and compiled library is committed back to the codebase on each push / PR by Github actions in [.github/workflows](.github/workflows).

## Copyright headers

We require to all repository files (with minor exceptions) to have copyright headers (the template is in `/copyright-header.txt`)
To check whenever all repository code contains required copyright headers, run

```
npx license-check-and-add check -f license-check-and-add-config.json
```

To automatically add headers, run

```
npx license-check-and-add add -f license-check-and-add-config.json
```

## Licence

Mozilla Public License Version 2.0
