import React from "react"
import { Box, GlobalStyles, Text, Space, Grid, colors, Code, Section, Color } from ".."

const Colors = () => {
  return (
    <>
      <GlobalStyles />
      <Space height="largest" />
      <Section>
        <Space height="larger" />
        <Grid gap="large">
          <Text size="large">Eden</Text>
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

export default Colors
