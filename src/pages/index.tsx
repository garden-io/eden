import React from "react"

import { GlobalStyles, Title, Text, Section, Space } from ".."

const Index = () => (
  <>
    <GlobalStyles />
    <Section width="small">
      <Space height="largest" />
      <Title fontWeight="normal">
        Hello <b>World</b>
      </Title>
      <Text>
        Hello <b>World</b>
      </Text>
    </Section>
  </>
)

export default Index
