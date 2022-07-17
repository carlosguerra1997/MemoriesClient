import React from 'react'

import { Containers } from '../../../../common/Container'
import { Text } from '../../../../common/Text'

export const Comments = ({ post }) => {
  console.log('Post... ', post)

  return (
    <Containers>
      <Containers>
        <Containers>
          <Text variant='h6'>Comments</Text>
        </Containers>
      </Containers>
    </Containers>
  )
}
