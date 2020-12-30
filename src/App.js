import React, {useState} from 'react';
import Login from './classes/Login';
import './App.css';


function App() {

const holdValues = Login;

console.log(holdValues.testlogin())
  
const [state, setState] = useState(holdValues);

  return (
    <div className="App">

      <div className='header'>

      <h1>Countfy</h1>

   <div className='navigation'>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contacts</a></li>
            <li className='signup'><a href="/signup">Sign up</a></li>
        </ul>
  </div>
  </div>

    <div className='form'>

      <h3>Find out why <span>Countfy</span> is the Leading Financial management
        software and why we receive more that <span>12 million</span> Visitors
          in a single day
      </h3>

    <p>
    Countfy Makes tracking and managing of your finances easy, fast and secure.
    get started now
    </p>

    <form className='form_selector'>
          <input type='text' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='password'/>
    <br/>
           <button>Let's get started</button>
   </form>
      </div> 
    </div>
  );  
}

export default App;
