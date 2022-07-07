import React from 'react'

import { Navbar } from '../../../common/navbar/Navbar'
import { PostDetails } from './PostDetails'

export const PostDetailsLayout = () => {
  return (
        <>
            <Navbar />
            <PostDetails />
        </>
  )
}
