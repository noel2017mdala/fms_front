class InfoClass{
constructor(override){

this.override = override = `
    display: block;
    margin: 0 auto;
    border-color: white;
    `;
}

saveToken = e =>{
    console.log(e);
    
}
alertErroMsg = e =>{
    alert(e);
}

}

export default new InfoClass();
