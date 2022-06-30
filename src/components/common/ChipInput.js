import React, { useState } from 'react'
import styled from 'styled-components'

import ChipInput from 'material-ui-chip-input'

export const ChipInputs = () => {
  const [tags, setTags] = useState([])

  const handleAdd = tag => setTags([...tags, tag])
  const handleDelete = tagToDelete => setTags(tags.filter(tag => tag !== tagToDelete))

  return (
    <StyledChip
      onAdd={handleAdd}
      onDelete={handleDelete}
      placeholder='Buscar tags'
      value={tags}
    />
  )
}

const StyledChip = styled(ChipInput)`
  margin: 1rem 0;
`
