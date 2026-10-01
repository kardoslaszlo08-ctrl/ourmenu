
import './App.css'
import { Menulist } from './components/Menulist'

function App() {
  

  return (
    <div className='bg-gray-800 text-white'>
      <header>
        <h1 className='text-center text-3xl font-bold'>Our menu</h1>
      </header>
      <main className='max-w-300 shadow-2xl p-4 mx-auto'>
      <Menulist/>
      </main>
    </div>
     
  )
}

export default App
