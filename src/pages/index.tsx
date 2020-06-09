import React from "react"
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
<<<<<<< HEAD
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
=======
  Pre,
  Textfield,
  Textarea,
>>>>>>> master
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
    <Grid>
      <Box borderWidth="medium" borderColor="greenDark">
        <Text>Sample box</Text>
      </Box>
      <Box borderWidth="small" borderColor="greenDark">
        <Text>Sample box</Text>
      </Box>
    </Grid>
  )
}

const EdenTextfields = () => {
  return (
    <Grid columns="1fr 1fr">
      <Grid>
        <Textfield placeholder="Hello" />
        <Textfield borderWidth="small" placeholder="Hello" />
        <Textarea placeholder="Hello" />
        <Textarea borderWidth="small" placeholder="Hello" />
      </Grid>
    </Grid>
  )
}

const EdenTextareas = () => {
  return (
    <Grid columns="1fr 1fr">
      <Grid>
        <Textarea placeholder="Hello" />
        <Textarea borderWidth="small" placeholder="Hello" />
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
<<<<<<< HEAD
          <Text size="large">Arrows</Text>
          <EdenArrows />
          <Text size="large">Icons</Text>
          <EdenIcons />
=======
          <Text size="large">Box</Text>
          <EdenBoxes />
>>>>>>> master
          <Text size="large">Title</Text>
          <EdenTitles />
          <Text size="large">Text</Text>
          <EdenTexts />
          <Text size="large">Textfield</Text>
          <EdenTextfields />
          <Text size="large">Textarea</Text>
          <EdenTextareas />
          <Text size="large">Colors</Text>
          <EdenColors />
          <Text size="large">Gradient green</Text>
          <Gradient>
            <Space height="huge" />
          </Gradient>
          <Text size="large">Gradient blue</Text>
          <Gradient color="blue">
            <Space height="huge" />
          </Gradient>
          <Text size="large">Gradient blue</Text>
          <Expandable title="hello">
            <Text>world</Text>
          </Expandable>
        </Grid>
      </Section>
    </>
  )
}

export default Colors
