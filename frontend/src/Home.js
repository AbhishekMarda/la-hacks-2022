import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Input, Typography, Button, CssBaseline} from "@material-ui/core";
import {Send} from '@material-ui/icons';
import './styles/Home.css';

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
        <CssBaseline />
        <Typography variant ="h3">Find Jobs with Query Compatible</Typography>
        <div className= "form-container" >
          <form onSubmit={HandleSubmit}>
            <Input>
              onChange = {HandleLinkInputChange}
              value = {inputs.link} 
              type="text" 
              placeholder="Drop your Linkedin url here"
            </Input> 
            <Input>
              onChange = {HandleJobInputChange}
              value = {inputs.job} 
              type="text" 
              placeholder="What role are you applying for?"
            </Input>
            <Button variant="contained" type="submit"endIcon={<Send/>}>
            Send
            </Button>
          </form>
        </div>
      </div>
    );
}

export default Home;