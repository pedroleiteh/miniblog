import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// context
import { AuthProvider } from './context/AuthContext';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

// components
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
