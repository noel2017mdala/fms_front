
class InfoClass{
constructor(override, ){
this.override = override = `
    display: block;
    margin: 0 auto;
    border-color: white;
    `;
}

saveToken = e =>{
    // console.log(e);
// localStorage.setItem('login', e);
// return true;   
}

alertErroMsg = (e) =>{
    let msg = e;
//    console.log(msg);
}

}

export default new InfoClass();
