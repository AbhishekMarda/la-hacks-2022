import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Typography, Button} from "@material-ui/core";
import {Send} from '@material-ui/icons';

function Home() {
    
    const navigate = useNavigate();
    

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
      <div className="Home">
        <Typography variant ="h2">Find Jobs with (insert name)</Typography>
        <div className= "form-container" >
          <form onSubmit={HandleSubmit}>
            <input 
              onChange = {HandleLinkInputChange}
              value = {inputs.link} 
              type="text" 
              placeholder="Drop your Linkedin url here"/>
              <input 
              onChange = {HandleJobInputChange}
              value = {inputs.job} 
              type="text" 
              placeholder="What role are you applying for?"/>
            <Button variant="contained" type="submit"endIcon={<Send/>}>
            Send
            </Button>
          </form>
        </div>
      </div>
    );
}

export default Home;