import React from "react"
import { Box, GlobalStyles, Text, Title, Space, Grid, colors, Code, GardenLogo } from "../src"

const Index = () => {
  return (
    <>
      <GlobalStyles />
      <Title size="large">Eden</Title>
      <Space height="larger" />
      <Space />
      <Grid gap="large">
        <Title color="gray">Colors</Title>
        <Grid columns={5}>
          {Object.entries(colors).map(([key, value]) => (
            <Grid key={key} gap="small">
              <div
                style={{
                  background: colors[key],
                }}
              >
                <br />
                <br />
                <br />
              </div>
              <Code color="gray">{key}</Code>
              <Code color="gray">{value}</Code>
              <Space />
            </Grid>
          ))}
        </Grid>
        <Space height="larger" />
        <Title color="gray">Logo</Title>
        <Grid columns="2fr 5fr" gap="larger">
          <Code color="gray">{`<GardenLogo />`}</Code>
          <GardenLogo />
          <Code color="gray">{`<Box background="grayDarker"><GardenLogo color="light" /></Box>`}</Code>
          <Box background="grayDarker">
            <GardenLogo color="light" />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Index
