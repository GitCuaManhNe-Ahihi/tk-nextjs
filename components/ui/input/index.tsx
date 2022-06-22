import React from 'react'

type Props = {
  props:{
    name:string
    type:string
    id:string
  }
  ref:any
}

export default  React.forwardRef<HTMLInputElement,Props>( function Input ({props},ref) {
  return (
    <>
    <input ref={ref} className="input" {...props}/>
    </>
  )
})
