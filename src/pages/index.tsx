import React from "react"
import { Box, GlobalStyles, Text, Space, Grid, colors, Code, Section, Color, Button } from ".."

const EdenColors = () => (
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
)

const Colors = () => {
  return (
    <>
      <GlobalStyles />
      <Space height="largest" />
      <Section>
        <Button>Hello</Button>
        <Button secondary>Hello</Button>
        <Space height="larger" />
        <Grid gap="large">
          <Text size="large">Eden</Text>
          <Text>Colors</Text>
          <EdenColors />
        </Grid>
      </Section>
    </>
  )
}

export default Colors
