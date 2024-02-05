import React from 'react'

export function TaskListLoading() {
  const listSize = 5
  const textStyle = "min-h-2 flex-1 bg-slate-300"
  
  return (
    <div className="overflow-y-hide flex h-2/3 w-2/3 animate-pulse flex-col gap-3 p-2 duration-1000">
      {Array.from({ length: listSize }, (_, index) => (
        <div 
          className="flex  flex-row items-center gap-x-2 rounded-md bg-slate-50 p-2"
          key={index}
        >
          <div className="flex-none">
            <div className="min-h-[25px] min-w-[25px] bg-white" />
          </div>
          <div className="flex flex-1 flex-row gap-2 self-center">
            <p className={textStyle} />
            <p className={textStyle} />
            <p className={textStyle} />
            <p className={textStyle} />
          </div>
          <div className="flex flex-none flex-row gap-2">
            <div className="min-h-[25px] min-w-[25px] bg-slate-300"></div>
            <div className="min-h-[25px] min-w-[25px] bg-slate-300"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
