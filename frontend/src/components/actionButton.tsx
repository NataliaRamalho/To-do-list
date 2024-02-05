'use client';

import React from 'react'
import { FaPencilAlt, FaTrashAlt , FaSave} from "react-icons/fa"

type ActionButtonProps = React.ComponentProps<'button'> & {
  variant: 'edit' | 'delete' | 'save'
}

export function ActionButton(props : ActionButtonProps){
  const { variant, ...rest } = props
  return (
    <button 
      className='flex bg-white rounded-md items-center justify-center shadow-sm min-h-[30px] min-w-[30px] hover:bg-opacity-35 disabled:opacity-20'
      {... rest}
    >
      {variant === 'edit' &&  <FaPencilAlt className='text-thema-blue-600 hover:text-opacity-35'/>}
      {variant === 'delete' &&  <FaTrashAlt className='text-thema-red-600 hover:text-opacity-35'/> }
      {variant === 'save' &&  <FaSave className='text-green-700 hover:text-opacity-35'/> }
    </button>
  )
}
