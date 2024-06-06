import { useState } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [ credentials, setCredentials ] = useState(localStorage.getItem('credentials'))


  return (
    <Routes>
      <Route path='/login' element={!credentials ? <Login setCredentials={setCredentials} /> : <Navigate to={'/add_products'} />}/>
      <Route path='/*' element={credentials ? <Home /> : <Navigate to={'/login'} />}/>
    </Routes>
  );
}

export default App;
