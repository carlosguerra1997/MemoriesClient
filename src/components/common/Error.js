import React from 'react'

import { Text } from './Text'

export const Error = ({
  children,
  ...rest
}) => <Text {...rest}>{children}</Text>
