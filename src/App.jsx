import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import routes from './routes/routes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>


      {/* Main Content Wrapper */}
      <div className="text-center">

        {/* Main content area */}
        <main className="">
          <Routes>{routes}</Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;


