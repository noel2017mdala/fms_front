import image from "../images/micheile-henderson-ZVprbBmT8QA-unsplash.jpg";
const Style = {
  body: {
    fontFamily: "sans-serif",
    fontSize: "16px",
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
    /* your image */
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top",
  },

  header: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "70px",
    paddingTop: "20px",
  },

  header_h1: {
    fontStyle: "normal",
    fontWeight: "normal",
    textTransform: "uppercase",
    letterSpacing: "12px",
    color: "white",
    float: "left",
    cursor: "pointer",
    paddingLeft: "25px",
  },

  navigation_ul: {
    float: "right",
    paddingRight: "25px",
    paddingTop: "10px",
  },

  navigation_li: {
    listStyle: "none",
    display: "inline",
    padding: "7px 12px",
  },

  navigation_li_style: {
    listStyle: "none",
    display: "inline",
    padding: "7px 12px",
    border: "1px solid white",
    borderRadius: "5px",
  },

  navigation_a: {
    textDecoration: "none",
    color: "white",
  },

  div_form: {
    width: "650px",
    height: "400px",
    display: "block",
    margin: "0px auto",
    paddingTop: "10px",
    color: "white",
    marginTop: "10px",
    //  backgroundColor: 'red',
  },
  div_form_h3: {
    textAlign: "justify",
    fontSize: "26px",
    wordSpacing: "2px",
  },

  div_form_span: {
    textDecoration: "underline",
    cursor: "pointer",
    /* color: white; */
  },

  div_form_p: {
    textAlign: "justify",
    fontSize: "25px",
    fontWeight: "normal",
    paddingTop: "2px",
  },
  form_selector: {
    padding: "20px 104px",
  },

  div_form_input: {
    padding: "12px",
    margin: "10px",
    width: "161px",
    display: "inline",
    float: "left",
  },

  div_form_button: {
    padding: "15px 135px",
    marginLeft: "12px",
    backgroundColor: "black",
    color: "white",
    border: "1px solid black",
    textAlign: "center",
    borderRadius: "5px",
    fontSize: "18px",
  },

  signup: {
    border: "1px solid white",
    borderRadius: "5px",
  },

  footer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: "70px",
    paddingTop: "57px",
  },
};

export default Style;
