import { Modal } from '@heroui/react'
import React from 'react'

export const MyModal = ({isOpen,setIsOpen,selectedFood}) => {
  console.log(selectedFood)
    return (
    <div>
        
        <Modal.Backdrop isOpen={isOpen} onOpenChange={setIsOpen}>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                
                </Modal.Icon>
                <Modal.Heading>{selectedFood.title}</Modal.Heading>
              </Modal.Header>
              <Modal.Body>
               <img src={'images/'+selectedFood.img} alt={selectedFood.title} />
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
    </div>
  )
}
