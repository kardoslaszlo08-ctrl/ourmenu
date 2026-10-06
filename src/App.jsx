
import { useState } from 'react'
import './App.css'
import { Menulist } from './components/Menulist'
import MyHeader from './components/MyHeader'

function App() {
  const[ selectedCateg,setSelectedCateg] = useState('all')
  

  return (
    <div className='bg-gray-800 text-white min-h-screen'>
      <MyHeader selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg}/>
      <main className='max-w-300 shadow-2xl p-4 mx-auto'>
      <Menulist selectedCateg={selectedCateg}/>
      </main>
    </div>
     
  )
}

export default App
