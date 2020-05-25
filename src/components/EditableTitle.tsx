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
import { useTheme } from "../contexts"

interface Props {
  title?: string
  value?: any
  placeholder?: string
  onChange?: (value: string) => void
  /**
   * Data selector for testing
   */
  dataTest?: string
}

export const EditableTitle: FC<Props> = ({ dataTest = null, title = "", value = "", onChange = () => undefined }) => {
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
    <div data-test={dataTest}>
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
          <Title size="large">{currentValue}</Title>
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
          <Button secondary color="red" onClick={onCancel}>
            Cancel
          </Button>
        </Grid>
      )}
    </div>
  )
}
