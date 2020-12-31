import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/actionCreator';
import ClipLoader from 'react-spinners/ClipLoader';
import InfoClass from '../classes/componentClass';
import '../App.css';

const Login = () =>{

const [state, setState] = useState({email : '', password: '', loadState: false});
const dispatch = useDispatch();
const paramClass = InfoClass;

const select = useSelector((e) =>{
    return e;
  });

  const handleSubmit = e =>{
    const {name, value} = e.target;
    setState(prevState => ({
        ...prevState,
            [name] : value,
            loadState: false,
    }));
  };

  const submitInput = (e) =>{
    e.preventDefault();
    dispatch(login(state));

    setState(prevState => ({
        ...prevState,
            loadState: true,
    }));
  }


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
          <input type='text' name='email' placeholder='Email'  onChange={handleSubmit} />
          <input type='password' name='password' placeholder='password'  onChange={handleSubmit}/>
    <br/>
           <button onClick={submitInput}>
               Let's get started 
                
                {
                !state.loadState ? '' : <ClipLoader  css={paramClass.override} size='20px'/>
                 }

               </button>
   </form>
      </div>
      {
        !select.login.data ? '' :  select.login.data.errors ?
         paramClass.alertErroMsg(select.login.data.message) : 
         paramClass.saveToken(select.login.data.token)
      }
      
    </div>
  );
}

export default Login;