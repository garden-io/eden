import React, { FC } from "react"
import { ThemeProvider, useTheme } from ".."

const Example: FC = () => {
  const { colors } = useTheme()
  return <div style={{ background: colors.gray }}>Gray</div>
}

const customTheme = {
  colors: {
    gray: "red",
  },
}

const App: FC = () => (
  <ThemeProvider customTheme={customTheme}>
    <Example />
  </ThemeProvider>
)

export default App
