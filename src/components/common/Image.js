/* eslint-disable react/prop-types */

import React from 'react'

export const Image = ({
  alt = 'Photo',
  height,
  src = '',
  width,
  ...rest
}) => {
  return <img alt={alt} height={height} src={src} width={width} {...rest} />
}
