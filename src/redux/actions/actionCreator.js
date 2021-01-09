import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';
export const FETCH_LOGIN = 'FETCH_LOGIN';
export const FETCH_ACTIVITIES = 'FETCH_ACTIVITIES';
export const FETCH_EARNINGS = 'FETCH_EARNINGS';
export const FETCH_EXPENSES = 'FETCH_EXPENSES';

export const login = (e) =>{
    
    let url = "http://127.0.0.1:8000/api/login";
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    });
    const request = new Request(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(e),
    });
   
    return async dispatch =>{
        try{

        const response = await fetch(request);
        const resData = await response.json();
        if(resData['state']){    
        dispatch({type: FETCH_LOGIN, payLoad: resData}); 
        }else{
            toast.notify('Incorrect Email or Password',{
                duration: 5000,
            });
            
            dispatch({type: FETCH_LOGIN, payLoad: resData}); 
        }
        }catch(e){
            toast.notify('Please check you internet connection and try again later',{
                duration: 5000,
            });
            dispatch({type: FETCH_LOGIN, payLoad: {}}); 
        }
                
    }    
}

export  const activitiesAction = (e) =>{    

    let url = "http://127.0.0.1:8000/api/transaction";
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${e.token}`,
    });
    const request = new Request(url, {
        method: 'GET',
        headers: headers,
    });

    return async dispatch =>{
        try{
        const response = await fetch(request);
        const resData = await response.json();
        if(resData['state']){    
        dispatch({type: FETCH_ACTIVITIES, payLoad: resData}); 
        }
        }catch(e){
            toast.notify('Please check you internet connection and try again later',{
                duration: 5000,
            });
            dispatch({type: FETCH_ACTIVITIES, payLoad: {}}); 
        }
                
    }

}

export  const getEarnings = (e) =>{

    let url = "http://127.0.0.1:8000/api/earnings";
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${e.token}`,
    });
    const request = new Request(url, {
        method: 'GET',
        headers: headers,
    });

    return async dispatch =>{
        try{

        const response = await fetch(request);
        const resData = await response.json();
        if(resData['state']){    
        dispatch({type: FETCH_EARNINGS, payLoad: resData}); 
        }
        }catch(e){
            toast.notify('Please check you internet connection and try again later',{
                duration: 5000,
            });
            dispatch({type: FETCH_EARNINGS, payLoad: {}}); 
        }
                
    }

}

export const getExpenses = (e) =>{

    let url = "http://127.0.0.1:8000/api/expences";
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${e.token}`,
    });
    const request = new Request(url, {
        method: 'GET',
        headers: headers,
    });

    return async dispatch => {
        
        try{

            const response = await fetch(request);
            const resData = await response.json();
            if(resData['state']){
                dispatch({type: FETCH_EXPENSES, payLoad: resData });
            }
        }catch{
            toast.notify('Please check you internet connection and try again later',{
                duration: 5000,
            });
            dispatch({type: FETCH_EARNINGS, payLoad: {}}); 
        }
    }
}