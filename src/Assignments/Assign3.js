//Assignment 3 : Create a Page with multiple React Apps. Both React Apps should be independent of each other.

import React from 'react'


const Assign3 = () => {
  return (
    <div>
      <Example1 />
      <Example2 />
    </div>
  )
}

const Example1=()=>{
    return (
        <div>
            I am Example 1
        </div>
    )
}


const Example2=()=>{
    return (
        <div>
            I am Example 2
        </div>
    )
}
export default Assign3
