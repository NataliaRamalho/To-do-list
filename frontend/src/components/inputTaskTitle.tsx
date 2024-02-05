'use client';

import React from 'react'

type InputTaskTitleProps = React.ComponentProps<'input'>

export function InputTaskTitle(props : InputTaskTitleProps){
  return (
    <input 
      className="w-full border p-1 focus:outline-none"
      maxLength={60}
      type="text"
      {... props}
    />
  )
}
