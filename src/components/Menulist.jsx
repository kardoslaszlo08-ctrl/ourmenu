import React from 'react'
import { useState } from 'react'
import {foods} from '../data'
import { useEffect } from 'react'
import { MyModal } from './MyModal'

export const Menulist = ({selectedCateg}) => {
    const [menu, setMenu] = useState(foods)
    const[isOpen,setIsOpen] = useState(false);
    const [selectedFood, setselectedFood] = useState(null)
    console.log(selectedCateg);

    useEffect(() => {
      setMenu(()=>selectedCateg=='all'? foods : foods.filter(obj=>obj.category==selectedCateg))
      
    }, [selectedCateg])
    
    const toggle=({title,img})=>{
       setselectedFood({title,img})
        setIsOpen(!isOpen)
        console.log(title,img)

    }


  return (
    <div className='flex flex-wrap gap-4'>
    {menu.map(({id,title,category,price,img,desc})=>
        <div key={id} className="flex flex-col brp500:flex-row gap-4 basis-full brp900:basis-[calc(50%-20px)] border border-blue-800 p-3 rounded-2xl">
            <div className='flex-1'>
                <img onClick={()=>toggle({title,img})}
                 className='w-full h-50 object-cover border-4 rounded-2xl border-white ' src={'images/'+img} alt={title}/>
            </div>
            <div className='flex-1'>
                <div className='flex justify-between text-amber-400  font-bold border-b border-b-amber-400 p-3'>
                    <span className='capitalize'>{title}</span>
                    <span>€{price}</span>
                </div>
                {desc}
            </div>
            
        </div>
        )}
        {isOpen && <MyModal isOpen={isOpen} setIsOpen={setIsOpen} selectedFood={selectedFood}/>}
    </div>
  )
}

