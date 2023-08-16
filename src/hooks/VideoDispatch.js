import React, { useContext } from 'react'
import VideosDispatchContext from '../context/VideosDispatchContext'

const useVideoDispatch = () => {
  return useContext(VideosDispatchContext)
    
}

export default useVideoDispatch
