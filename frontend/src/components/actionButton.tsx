'use client';

import React from 'react'
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa"

type ActionButtonProps = React.ComponentProps<'button'> & {
  variant: 'edit' | 'delete'
}

export function ActionButton(props : ActionButtonProps){
  const { variant, ...rest } = props
  return (
    <button 
      className='flex bg-white rounded-md items-center justify-center shadow-sm min-h-[30px] min-w-[30px] hover:bg-opacity-35'
      {... rest}
    >
      {variant === 'edit' ? 
        <FaPencilAlt className='text-thema-blue-600 hover:text-opacity-35'/> :  
        <FaTrashAlt className='text-thema-red-600 hover:text-opacity-35'/> 
      }
    </button>
  )
}
