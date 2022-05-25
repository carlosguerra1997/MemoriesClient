import React from 'react'

/* eslint-disable react/prop-types */

export const Image = ({
  alt = 'Photo',
  height = '100',
  src = '',
  width = '100',
  ...rest
}) => {
  return <img alt={alt} height={height} src={src} width={width} {...rest} />
}
