import React, {useEffect ,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/actions/actionCreator';

class Login {
constructor(){

this.value = {
    email :     '',
    password:   '',
};

}
testlogin(){
    console.log(this.value);
}
}

export default new Login();