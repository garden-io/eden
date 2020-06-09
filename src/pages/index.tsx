import React, { useState } from "react"
import {
  Box,
  GlobalStyles,
  Text,
  Space,
  Grid,
  colors,
  Code,
  Section,
  Color,
  titleSizes,
  flatten,
  Title,
  TitleSize,
  titleTags,
  textSizes,
  TextSize,
  Gradient,
  iconSizes,
  Flex,
  IconSize,
  IconTwitter,
  IconArrow,
  IconBranch,
  IconCheck,
  IconDelete,
  IconDocs,
  IconGithub,
  IconLock,
  IconPlaceholder,
  IconSlack,
  IconUser,
  Expandable,
  Textfield,
  Textarea,
  Button,
  SelectOption,
  Select,
} from ".."
import { IconCaret } from "../components/IconCaret"

const EdenArrows = () => {
  return (
    <>
      {Object.entries(iconSizes).map(([key, value]) => (
        <>
          <Flex key={key} wrap>
            <IconArrow size={key as IconSize} />
            <IconArrow size={key as IconSize} direction="right" />
            <IconArrow size={key as IconSize} direction="down" />
            <IconArrow size={key as IconSize} direction="left" />
            <IconCaret size={key as IconSize} />
            <IconCaret size={key as IconSize} direction="right" />
            <IconCaret size={key as IconSize} direction="down" />
            <IconCaret size={key as IconSize} direction="left" />
          </Flex>
          <Space height="larger" />
        </>
      ))}
    </>
  )
}

const EdenIcons = () => {
  return (
    <>
      {Object.entries(iconSizes).map(([key, value]) => (
        <>
          <Flex key={key} wrap>
            <IconUser size={key as IconSize} />
            <IconBranch size={key as IconSize} />
            <IconCheck size={key as IconSize} />
            <IconDelete size={key as IconSize} />
            <IconLock size={key as IconSize} />
            <IconDocs size={key as IconSize} />
            <IconGithub size={key as IconSize} />
            <IconSlack size={key as IconSize} />
            <IconTwitter size={key as IconSize} />
            <IconPlaceholder size={key as IconSize} />
          </Flex>
          <Space height="larger" />
        </>
      ))}
    </>
  )
}

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

const EdenTitles = () => (
  <Grid columns="2fr 1fr">
    <Grid>
      {flatten(
        Object.entries(titleSizes)
          .reverse()
          .map(([key, value]) => [
            <Title size={key as TitleSize}>
              Here is {key} {titleTags[key]} title that wraps into lines
            </Title>,
            <Space height="large" />,
          ])
      )}
    </Grid>
  </Grid>
)

// const EdenTitleSizes = () => (
//   <Grid columns="1fr 3fr 1fr">
//     <Space />
//     <Grid>
//       {flatten(
//         Object.entries(titleSizes).map(([key, value]) => (
//           <div style={{ position: "relative", height: "3px" }}>
//             <div
//               style={{
//                 position: "absolute",
//                 top: "0px",
//                 bottom: "0px",
//                 left: "0px",
//                 width: `calc(${value} * 10)`,
//                 background: "#ccc",
//               }}
//             ></div>
//           </div>
//         ))
//       )}
//     </Grid>
//     <Space />
//   </Grid>
//)

const EdenTexts = () => (
  <Grid columns="2fr 1fr">
    <Grid>
      {flatten(
        Object.entries(textSizes)
          .reverse()
          .map(([key, _]) => [
            <Text size={key as TextSize}>
              Here is {key} {titleTags[key]} text that wraps into multiple lines and is actually even longer than
              expected. Here is the text that wraps into multiple lines and is actually even longer than expected.
            </Text>,
            <Space />,
          ])
      )}
    </Grid>
  </Grid>
)

const EdenBoxes = () => {
  return (
    <Box borderColor="greenDark">
      <Text>Box</Text>
    </Box>
  )
}

const EdenTextfields = () => {
  return (
    <Grid columns="1fr 1fr">
      <Flex>
        <Textfield placeholder="Hello" />
        <Button secondary>Test button</Button>
        <Button>Test button</Button>
      </Flex>
    </Grid>
  )
}

const EdenTextareas = () => {
  return (
    <Grid columns="1fr 1fr">
      <Textarea placeholder="Hello" />
    </Grid>
  )
}

const EdenSelects = () => {
  const options1: SelectOption[] = [{ value: "hello" }, { value: "world" }]
  const [selected1, setSelected1] = useState("hello")
  const onChange1 = (option) => setSelected1(option)

  const options2: SelectOption[] = [
    { title: "Hello", value: 0 },
    { title: "World", value: 1 },
  ]
  const [selected2, setSelected2] = useState(0)
  const onChange2 = (option) => setSelected2(option)

  return (
    <Grid columns="1fr 1fr">
      <Grid>
        <Select name="select_1_field" borderWidth="large" options={options1} onChange={onChange1} />
        <Text>
          <div id="select_1_selected">{selected1}</div>
        </Text>
        <Select name="select_2_field" options={options2} onChange={onChange2} />
        <Text>
          <div id="select_2_selected">{selected2}</div>
        </Text>
      </Grid>
    </Grid>
  )
}

const Colors = () => {
  return (
    <>
      <GlobalStyles />
      <Space height="largest" />
      <Section>
        <Space height="larger" />
        <Grid gap="large">
          <Code>Colors</Code>
          <EdenColors />
          <Code>Gradient green</Code>
          <Gradient>
            <Space height="huge" />
          </Gradient>
          <Code>Gradient greenReverse</Code>
          <Gradient color="greenReverse">
            <Space height="huge" />
          </Gradient>
          <Code>Gradient blue</Code>
          <Gradient color="blue">
            <Space height="huge" />
          </Gradient>
          <Code>Gradient blueReverse</Code>
          <Gradient color="blueReverse">
            <Space height="huge" />
          </Gradient>
          <Code>Title</Code>
          <EdenTitles />
          <Code>Text</Code>
          <EdenTexts />
          <Code>Arrows</Code>
          <EdenArrows />
          <Code>Icons</Code>
          <EdenIcons />
          <Code>Textfield</Code>
          <EdenTextfields />
          <Code>Textarea</Code>
          <EdenTextareas />
          <Code>Select</Code>
          <EdenSelects />
          <Code>Expandable</Code>
          <Grid columns="1fr 1fr">
            <Expandable title="hello">
              <Text>world</Text>
            </Expandable>
          </Grid>
          <Code>Box</Code>
          <EdenBoxes />
          <Space height="huge" />
        </Grid>
      </Section>
    </>
  )
}

export default Colors
