import React from "react"
import { Box, GlobalStyles, Text, Space, Grid, colors, Code, Section, Color } from ".."

const Colors = () => {
  const h = 206
  const s = 5
  const newColors = {
    grayLightest: `hsl(${h},${s}%,93%)`,
    grayLighter: `hsl(${h},${s}%,90%)`,
    grayLight: `hsl(${h}, ${s}%, 72%)`,
    gray: `hsl(${h},${s}%,50%)`,
    grayDark: `hsl(${h},${s}%,30%)`,
    grayDarker: `hsl(${h},${s}%,15%)`,
  }

  return (
    <>
      <GlobalStyles />
      <Space height="largest" />
      <Section>
        <Space height="larger" />
        <Grid gap="large">
          <Text>New grays</Text>
          <Grid columns={6} gap="none">
            {Object.entries(newColors).map(([key, value]) => (
              <div key={key} style={{ background: newColors[key], height: "160px", padding: "24px" }}>
                <Code size="small" color="black">
                  {key}
                </Code>
                <Code size="small" color="black">
                  {value}
                </Code>
              </div>
            ))}
          </Grid>
          <Text>Old grays</Text>
          <Grid columns={6} gap="none">
            {Object.entries(colors).map(([key, value]) => (
              <Box key={key} background={key as Color} height="160px" align="flex-end">
                <Code size="small" color="black">
                  {key}
                </Code>
                <Code size="small" color="black">
                  {value}
                </Code>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Section>
    </>
  )
}

export default Colors
