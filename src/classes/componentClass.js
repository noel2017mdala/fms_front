import toast from "toasted-notes";
import "toasted-notes/src/styles.css";

class InfoClass {
  alertErroMsg = (e) => {
    let msg = e;
    toast.notify(msg, {
      duration: 5000,
    });
  };
}

export default new InfoClass();
