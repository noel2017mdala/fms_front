import React from 'react';
import Cookies from 'universal-cookie';
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () =>{

    const history = useHistory();
    const cookies = new Cookies();

    return(
        <Router>
        <div className='Dashboard'>
        {
            !cookies.get('login') ? history.push('/') : ''
         }
            <p>
                Hello World
                </p>
            </div>
    </Router>
    )
}

export default Dashboard;