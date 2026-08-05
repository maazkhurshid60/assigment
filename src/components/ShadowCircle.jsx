import React from 'react'

const ShadowCircle = ({width, height,position, fromColor, toColor}) => {
  return (
    <div class={`w-${width} h-${height} bg-gradient-to-${position} from-[${fromColor}] to-[${toColor}] to-70% opacity-35 rounded-full `}>
    </div>
  )
}

export default ShadowCircle