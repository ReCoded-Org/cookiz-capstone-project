import React from 'react'

export const Item = (props) => {
  // console.log(arr);
  return (
    <>
      <ul>
        {props.arr.map((item, index) => <li className='my-4  hover:text-teal-100 ' key={index}>{item}</li>)}
      </ul>
    </>
  )
}
