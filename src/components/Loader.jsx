import React from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const progress = useProgress();
  return (
    <Html className='text-white'>
      {progress.loaded} % loaded
    </Html>
  )
}

export default Loader