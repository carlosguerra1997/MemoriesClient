import React, { useEffect, useState } from 'react'

// import { Containers } from '../../../../common/Container'
import { Text } from '../../../../common/Text'

export const Comments = ({ post }) => {
  const [comments, setComments] = useState([1, 2, 3, 4])
  console.log('Post... ', post)

  useEffect(() => {
    setComments([1, 2, 3, 4])
  }, [])

  return (
    <div>
      <div>
        <div>
          <Text align='left' gutterBottom variant='h6'>Comments</Text>
          {
            comments.map((c, i) => (
              <Text align='left' key={i} variant='subtitle1'>Comment {i}</Text>
            ))
          }
        </div>
      </div>
    </div>
  )
}
