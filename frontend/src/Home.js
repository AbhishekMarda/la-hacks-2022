import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Input, Typography, Button, CssBaseline, AppBar, Toolbar} from "@material-ui/core";
import {Send} from '@material-ui/icons';
import './styles/Home.css';
import {motion} from "framer-motion";

function Home() {
    
    const navigate = useNavigate();

    const HandleHome =  (event) => {
      navigate("/");
  };
    

    const [inputs, setInputs] = useState( {
        link: "",
        job: "",
    });
    const [submit, setSubmit] = useState("false");
  
    const HandleLinkInputChange = (event) => {
        setInputs({...inputs, link: event.target.value});
    }


    const HandleJobInputChange = (event) => {
        setInputs({...inputs, job: event.target.value});
    }
  
    const HandleSubmit = (event) => {
      event.preventDefault();
      setSubmit(true);
      navigate("/companies");
    }
  
  
    return (
      <motion.div id="Home"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
        <CssBaseline/>
        <div id="imageContainer">
          <img src="logo_blue_crop.png" alt="Query Compatible" className="image" onClick={HandleHome}/>
        </div>
        <main>
          <div className="container">
            <Typography variant ="h2" id="Header">Find a Career with Query Compatible</Typography>
            <img src="search.png" alt="Query Compatible" className="image-search"/>
            <Typography variant = "h4" id="subHeader">Make sure that your Linkedin is public!</Typography>
            <div className="form-container">
              <form onSubmit={HandleSubmit}>
                <Input className="input-first"
                  onChange = {HandleLinkInputChange}
                  value = {inputs.link} 
                  fullWidth
                  type="text" 
                  placeholder="Drop your Linkedin handle here!">
                </Input> 
                <Input className="input"
                  onChange = {HandleJobInputChange}
                  value = {inputs.job} 
                  fullWidth
                  variant="outlined"
                  type="text" 
                  placeholder="What role are you applying for?">
                </Input>
                <div className="submitButton">
                  <Button variant="contained" type="submit"endIcon={<Send/>} style={{width:"360px", marginTop: "50px", marginBottom:"8%"}}className="button">
                  Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </motion.div>
    );
}

export default Home;