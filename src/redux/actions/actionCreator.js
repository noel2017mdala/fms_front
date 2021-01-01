import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';

export const FETCH_LOGIN = 'FETCH_LOGIN';
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
            console.log(e);
        }
                
    }
}