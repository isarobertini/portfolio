import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import routes from './routes/routes';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Main Content Wrapper */}
      <div className="">
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
