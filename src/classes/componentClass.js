import toast from "toasted-notes";
import "toasted-notes/src/styles.css";

const Common = {
  override: `
  display: block;
  margin: 0 auto;
  border-color: white;
`,
  alertMsg(e) {
    let msg = e;
    toast.notify(msg, {
      duration: 5000,
    });
  },
};

export default Common;
