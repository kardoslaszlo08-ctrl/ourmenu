import { Modal } from '@heroui/react'
import React from 'react'

export const MyModal = ({isOpen,setIsOpen,selectedFood}) => {
  console.log(selectedFood)
    return (
    <div>
        
        <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
          <Modal.Container placement='center'>
            <Modal.Dialog className="w-[80vw] max-h-[80vh] max-w-none">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>{selectedFood.title}</Modal.Heading>
              </Modal.Header>
              <Modal.Body>
               <img className='block max-h-[70vh] w-full object-contain h-auto' 
               src={'images/'+selectedFood.img} alt={selectedFood.title} />
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
    </div>
  )
}
