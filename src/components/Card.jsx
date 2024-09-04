import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints ={reference} whileDrag = {{scale: 1.2}}className='relative  flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white p-5 overflow-hidden px-8 py-10'>
        <FaFileAlt />
        <p className='text-sm mt-5 font-semibold leading-tight'> {data.desc}</p>
        <div className='footer absolute bottom-0 w-full   left-0'>
          <div className='flex items-center justify-between py-3 px-8 mb-3'>
            <h5>{data.size}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close ? <IoIosClose cursor='pointer'/> : <LuDownload  size="0.7em" color='#fff ' cursor='pointer'/>}
            </span>
          </div>
          {data.tag.isOpen && (
                      <div className='tag w-full py-4  flex items-center justify-center' style={{backgroundColor: data.tag.tagColor}}>
                      <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
          )}

        </div>
    </motion.div>

  )
}

export default Card