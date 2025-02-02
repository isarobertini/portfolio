import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom';
import routes from './routes/routes';
import { NavigationMenu } from './common/navigationMenu';
import { Footer } from './common/footer';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <div className="m-4">
          <NavigationMenu />
        </div>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>{routes}</Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App
