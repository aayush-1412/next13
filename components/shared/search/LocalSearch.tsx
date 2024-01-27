"use client"
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
interface Search{
    placeholder:string,
    route:string,
    imgsrc:string,
    otherClasses?:string,
    iconPosition:string
}

const LocalSearch = ({placeholder,route,iconPosition,imgsrc,otherClasses}:Search) => {
  return (
    
      <div className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}>
      {iconPosition==='left' && (<Image
        src={imgsrc}
        alt="search"
        width={24}
        height={24}
        className="cursor-pointer"
        />)}  
        <Input
        type="text"
        
        placeholder={placeholder}
        
        className="no-focus paragraph-regular placeholder background-light800_darkgradient border-none shadow-none outline-none "
        />

{iconPosition==='right' && (<Image
        src={imgsrc}
        alt="search"
        width={24}
        height={24}
        className="cursor-pointer"
        />)}  
      </div>
   
  )
}

export default LocalSearch