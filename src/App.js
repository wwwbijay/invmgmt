
import { useState } from 'react';
import Login from "./pages/login/login";
import Dashboard from "./pages/dashboard/dashboard";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [token, setToken] = useState();
  
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
