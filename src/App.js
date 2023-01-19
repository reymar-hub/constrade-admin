import { Routes, Route } from 'react-router-dom'

import Index from './pages/Index'
import Login from './pages/Login/Login'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>

  );
}

export default App;
