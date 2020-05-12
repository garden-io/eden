# Eden

React + Typescript component library for [garden.io](https://garden.io)

## Installation

### Installing latest version

Eden can installed using `npm` via direct Github link (note that we currently do not publish npm package).

```sh
npm i garden-io/eden
```

> For CI environments make sure your have `git` installed, `npm` will use that to download the library

### Installing specific version

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

To use Eden components, use the following code:

```tsx
// index.tsx

import { React }, FC from "react"
import { Grid, Text } from "eden"

export const App: FC = () => {
  return (
    <Grid columns={2}>
      <Text>Hello</Text>
      <Text>World</Text>
    </Grid>
  )
}
```

### Using styles

To use the Eden typed styles, you will need
to wrap your application to `UiProvider` that provides access to styles in all child components using `useUi()` hook

```tsx
// index.tsx

import { React }, FC from "react"
import { UiProvider } from "eden"
import { Example } from "./components/Example.tsx"

export const App: FC = () => {
  <UiProvider>
    <Example />
  <UiProvider>
}
```

```tsx
// components/Example.tsx

import { React }, FC from "react"
import { useUi } from "eden"

export const Example: FC = () => {
  const { colors } = useUi()
  return (
    <div style={{ background: colors.red }}>Red</div>
  )
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

export const Example2: FC<Props> = ({ color = "red" }) => {
  const { colors } = useUi()
  return (
    <div style={{ background: colors[color] }}>Red</div>
  )
}
```

## Packaging

Eden is built on Typescript but to ease the package usage in different JS / TS environments we package the libary in CommonJS format under `/dist` alongside with typings.

We use `tsc` for compilaton and the packages are commited back to the repository on each push to the codebase but the Github actions in [.github/workflows](.github/workflows).

## Copyright headers

We require to all repository files (where it makes sense) to have copyright headers (the template is in `/copyright-header.txt`)
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
