'use client'
import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
const Providers = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <NextUIProvider>{children}</NextUIProvider>
  )
}

export default Providers