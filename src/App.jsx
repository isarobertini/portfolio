import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import routes from './routes/routes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Main Content Wrapper */}
      <div className="mx-6">
        <Routes>
          {routes}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
