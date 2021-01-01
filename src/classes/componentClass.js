import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css';

class InfoClass{
constructor(override, ){
this.override = override = `
    display: block;
    margin: 0 auto;
    border-color: white;
    `;
}
alertErroMsg = (e) =>{
    let msg = e;
    toast.notify(msg,{
        duration: 5000,
    });
}

}

export default new InfoClass();
