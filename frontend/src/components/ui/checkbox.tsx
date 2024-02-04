'use client';
import React from 'react'
import * as Checkbox from '@radix-ui/react-checkbox';
import { FiCheck } from "react-icons/fi"

type CheckboxProps = React.ComponentProps<typeof Checkbox.Root> &  {
  isChecked: boolean
}


export function CheckboxComponent(props: CheckboxProps){
  return (
      <Checkbox.Root 
       className='flex border bg-white rounded-md items-center justify-center shadow-sm hover:bg-[#EEEEEE] min-w-[25px] min-h-[25px]'
       checked={props.isChecked}
      >
      <Checkbox.CheckboxIndicator>
        <FiCheck />
      </Checkbox.CheckboxIndicator>
    </Checkbox.Root>

  )
}