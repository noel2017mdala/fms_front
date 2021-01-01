import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/actionCreator';
import ClipLoader from 'react-spinners/ClipLoader';
import InfoClass from '../classes/componentClass';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Style from '../styles/Style';

const Login = () =>{

const [state, setState] = useState({email : '', password: '', loadState: false});
const dispatch = useDispatch();
const paramClass = InfoClass;
const history = useHistory();
const cookies = new Cookies();
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
    if(state.email === '' || state.password === ''){
      paramClass.alertErroMsg('please Enter your details');
    }else if(state.email && state.password === ''){
      paramClass.alertErroMsg('please Enter details');
    }
    else{

      dispatch(login(state));

      setState(prevState => ({
          ...prevState,
              loadState: true,
      }));

    }
  }
  const hundleFormSubmit = (e) =>{
    
    if(e === undefined){
      state.loadState = false;
    }else{
      // let saveToken = paramClass.saveToken(e);

      cookies.set('login', e, {
            sameSite: 'strict', 
            path: '/', 
            expires: new Date(new Date().getTime() + 10 * 10000),
            // httpOnly: true
        });

        if(cookies.get('login')){
          state.loadState = false;
          history.push('/dashboard');
        }
    }   
  }

  return (
    <Router>
    <div style={Style.body}>
   {
     cookies.get('login') ? history.push('/dashboard') : ''
   }
      <div style={Style.header}>

      <h1 style={Style.header_h1}>Countfy</h1>

   <div className='navigation'>
        <ul style={Style.navigation_ul}>
            <li style={Style.navigation_li}><a style={Style.navigation_a} href="/">Home</a></li>
            <li style={Style.navigation_li} ><a style={Style.navigation_a} href="/about">About</a></li>
            <li style={Style.navigation_li} ><a style={Style.navigation_a} href="/contact">Contacts</a></li>
            <li style={Style.navigation_li_style}><a style={Style.navigation_a} href="/signup">Sign up</a></li>
        </ul>
  </div>
  </div>

    <div style={Style.div_form}>

      <h3 style={Style.div_form_h3}>Find out why <span style={Style.div_form_span}>Countfy</span> is the Leading Financial management
        software and why we receive more that <span style={Style.div_form_span}>12 million</span> Visitors
          in a single day
      </h3>

    <p style={Style.div_form_p}>
    Countfy Makes tracking and managing of your finances easy, fast and secure.
    get started now
    </p>

    <form style={Style.form_selector}>
          <input style={Style.div_form_input } type='text' name='email' placeholder='Email' required='required'  onChange={handleSubmit} />
          <input style={Style.div_form_input } type='password' name='password' placeholder='password' required='required'  onChange={handleSubmit}/>
    <br/>
           <button style={Style.div_form_button} onClick={submitInput}>
               Let's get started 
                
                {
                !state.loadState ? '' : <ClipLoader  css={paramClass.override} size='20px'/>
                 }

               </button>
   </form>
      </div>
      {
        !select.login.data ? '' :  
        hundleFormSubmit(select.login.data.token)
      }
      <footer style={Style.footer}></footer>
    </div>
  </Router>
  );
}

export default Login;