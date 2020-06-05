import React from "react"
import { Box, GlobalStyles, Text, Space, Grid, colors, Code, Section, Color } from "../src"

const Index = () => {
  return (
    <>
      <GlobalStyles />
      <Space height="largest" />
      <Section>
        <Space height="larger" />
        <Text size="large">Eden documentation</Text>
        <Space />
        <Grid gap="large">
          <Text>Colors</Text>
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

export default Index
