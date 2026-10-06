import React from 'react'
import { useState } from 'react'
import { getAllCategories } from '../utils'
import { Button, ButtonGroup } from "@heroui/react"
import { motion, spring } from "motion/react"
import { TimeSpent } from './TimeSpent'


export const MyHeader = ({ selectedCateg, setSelectedCateg }) => {
    const [categories, setCategories] = useState(getAllCategories)
    // console.log(categories)
    return (
        <div className='flex flex-col items-center gap-4 relative'>
           
                <motion.h1
                    initial={{ x: '100vw' }}
                    animate={{ x: 0, transition: { duration: 2, type: spring, stiffmess: 20 } }}
                    className='text-center text-3xl font-bold text-amber-400'>
                        Our menu
                    </motion.h1>
                    <TimeSpent/>
    
            <ButtonGroup size="lg" className="bg-amber-400 text-gray-900 rounded-3xl">


                {categories.map((item, index) =>
                    <Button key={index} onClick={() => setSelectedCateg(item)}
                        className={selectedCateg == item ? "bg-gray-900 text-amber-400" : "bg-amber-400 text-gray-900 rounded-2xl"}>
                        <ButtonGroup.Separator />
                        <motion.span
                            whileHover={{ scale: 1.1 }}>

                            {item}
                        </motion.span>
                    </Button>

                )}



            </ButtonGroup>
        </div>
    )
}

export default MyHeader