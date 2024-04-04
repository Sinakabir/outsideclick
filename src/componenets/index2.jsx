import React, { useEffect } from 'react'

const useOutsideClick2 = (ref , handler) => {

useEffect(()=>{
 
  function listener(e){
    if(!ref.current || ref.current.contains(e.target)){
      return
    }
    handler(e)
  }
  document.addEventListener('mousedown' , listener);
  document.addEventListener('touchstart' , listener)
  return()=>{
    document.removeEventListener('mousedown' , listener);
    document.removeEventListener('touchstart' , listener)
  }

},[handler,ref])
  return (
    <div>useOutsideClick2</div>
  )
}

export default useOutsideClick2