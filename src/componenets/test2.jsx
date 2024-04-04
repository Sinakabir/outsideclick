import React, { useRef, useState } from 'react'
import useOutsideClick2 from './index2';

const UseonClickOutSideTest2 = () => {

  const [showContent,setShowContent] = useState(false)
  const ref = useRef();
  useOutsideClick2(ref , ()=> setShowContent(false))

  return (
    <div>
    {
      showContent ? <div ref={ref}>
        <h1>This is use content </h1>
        <p>you have to click outside of the content to clse this content</p>
      </div> : <button onClick={()=> setShowContent(true)}>Show Content</button>
    }
    </div>
  )
}

export default UseonClickOutSideTest2