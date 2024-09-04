import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

  const ref = useRef(null)
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      size: "0.4mb",
      close: true ,
      tag: {
          isOpen: true,
          tagTitle: "Upload",
          tagColor: "Green",   
        }   
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      size: "0.9mb",
      close: true ,
      tag: {
          isOpen: false,
          tagTitle: "Downloaded",
          tagColor: "Green",   
          }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      size: "0.4mb",
      close: false ,
      tag: {
          isOpen: true,
          tagTitle: "Download Now",
          tagColor: "#FFBF00 ",   
          }
    }
  ]
  return (
    <div ref = {ref}className='fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index) =>(
          <Card data ={item} reference = {ref} />
        ))}
    </div>
  )
}

export default Foreground