import React from "react";
import "./contact.css";
import { TextField, Button } from "@material-ui/core";
import ContactUs from "./images/contact_us.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
      color: "white",
    },
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div className="contact">
      <img
        className="contact-img"
        src="https://images.unsplash.com/photo-1557409518-691ebcd96038?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
        alt="cherryblossom"
      />
      <div className="contact-container">
        <div className="contact-con-img">
          <img className="inner-img" src={ContactUs} alt="cherryblossom" />
        </div>
        <form
          className={classes.root}
          id="contact-form"
          noValidate
          autoComplete="off"
        >
          <h1>CONTACT</h1>
          <TextField
            required
            id="outlined-required"
            label="Name"
            variant="filled"
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            variant="filled"
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          />
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            variant="filled"
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#9df3c4",
              borderRadius: "10px",
              width: "300px",
              padding: "15px",
              color: "#232e33",
              fontSize: "22px",
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
