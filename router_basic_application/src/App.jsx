import { useState } from 'react'

import './App.css'
import { useNavigate } from 'react-router';

const App=()=> {
const navigate = useNavigate()
  return (<>
  <h1>
    This is react main page 
  </h1>
  <button onClick={()=>navigate('/home')}>Home</button>
  <br/>
  <button onClick={()=>navigate('/about')}>About</button>
  <br/>
  <button onClick={()=>navigate('/contact')}>Contact</button>
  <br/>
  </>
  );
}

export default App
