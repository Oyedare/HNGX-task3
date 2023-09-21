"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../firebaseConfig';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const auth = getAuth(firebaseApp);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/gallery');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='container signin'>
      <div className="modal">
        <div className="modal-text">
          <h2>Welcome to Galleria 👋🏽</h2>
          <p>Galleria is a photo gallery app with exciting pictures</p>
        </div>

        <form>
          <label for="email" className='label'>Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            className='input' 
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="pass" className='label'>Password:</label>
          <input 
            type="password" 
            id="pass" 
            name="pass" 
            className='input'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='button' onClick={handleLogin} className='login-btn'>Login</button>
        </form>
        {error && (
          <p className='error'>⚠ {error}</p>
        )}
      </div>
    </div>
    
  )
}

export default Signin