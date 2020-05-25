/*
 * Copyright (C) 2018-2020 Garden Technologies, Inc. <info@garden.io>
 *
 * All rights reserved.
 */

import React, { FC, useState } from "react"

import { Button } from "./Button"
import { Flex } from "./Flex"
import { Grid } from "./Grid"
import { Textfield } from "./Textfield"
import { Title } from "./Title"

import { TitleSize } from "../themes"
import { useTheme } from "../contexts"

interface Props {
  title?: string
  size?: TitleSize
  value?: any
  placeholder?: string
  onChange?: (value: string) => void
}

export const EditableTitle: FC<Props> = ({ title = "", size = "medium", value = "", onChange = () => undefined }) => {
  const [editing, setEditing] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)

  const handleCurrentChange = (val) => {
    if (editing) {
      setCurrentValue(val)
    }
  }

  const onEdit = () => setEditing(true)
  const onSave = () => {
    onChange(currentValue)
    setEditing(false)
  }
  const onCancel = () => {
    setCurrentValue(value)
    setEditing(false)
  }

  const { colors, space, textSizes } = useTheme()

  return (
    <div>
      {title && (
        <div
          style={{
            fontSize: textSizes.medium,
            color: colors.gray,
            marginBottom: space.small,
          }}
        >
          {title}
        </div>
      )}

      {!editing && (
        <Flex align="center">
          <Title size={size}>{currentValue}</Title>
          {!editing && (
            <Button secondary size="small" onClick={onEdit}>
              Edit
            </Button>
          )}
        </Flex>
      )}

      {editing && (
        <Grid columns="1fr auto auto">
          <Textfield value={currentValue} onChange={handleCurrentChange} />
          <Button onClick={onSave}>Save</Button>
          <Button secondary color="statusRed" onClick={onCancel}>
            Cancel
          </Button>
        </Grid>
      )}
    </div>
  )
}
