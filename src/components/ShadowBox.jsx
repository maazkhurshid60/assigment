import React from 'react'

const ShadowBox = ({width, height, border}) => {
  return (
    <div class={`border-[7px] w-${width} h-${height} ${border} bg-transparent p-4 opacity-35 rounded-md blur-sm`}>
   </div>
    )
}

export default ShadowBox