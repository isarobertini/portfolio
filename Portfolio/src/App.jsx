import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
