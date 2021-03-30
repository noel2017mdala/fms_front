import toast from "toasted-notes";
import "toasted-notes/src/styles.css";

const Common = {
  loader(color = "white") {
    return `
    display: block;
    margin: 0 auto;
    border-color: ${color};
  `;
  },

  alertMsg(e, duration = 50000) {
    let msg = e;
    toast.notify(msg, {
      duration: duration,
    });
  },
};

export default Common;

/*
    override: `
  display: block;
  margin: 0 auto;
  border-color: white;
`,
*/
