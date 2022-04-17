import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Input,
    Typography,
    Button,
    CssBaseline,
    AppBar,
    Toolbar,
} from "@material-ui/core";
import { Send } from "@material-ui/icons";
import "./styles/Home.css";

function Home() {
    const navigate = useNavigate();

    const HandleHome = (event) => {
        navigate("/");
    };

    const [inputs, setInputs] = useState({
        link: "",
        job: "",
    });
    const [submit, setSubmit] = useState("false");

    const HandleLinkInputChange = (event) => {
        setInputs({ ...inputs, link: event.target.value });
    };

    const HandleJobInputChange = (event) => {
        setInputs({ ...inputs, job: event.target.value });
    };

    const HandleSubmit = (event) => {
        event.preventDefault();
        setSubmit(true);
        let id = event.target.linkedinId.value;
        
        navigate("/companies", { state: { id: id} });
    };

    return (
        <div className="Home">
            <CssBaseline />
            <div className="imageContainer">
                <img
                    src="logo_blue_crop.png"
                    alt="Query Compatible"
                    className="image"
                    onClick={HandleHome}
                    style={{}}
                />
            </div>
            <main>
                <div className="container">
                    <Typography variant="h1" className="Header">
                        Find Jobs with Query Compatible
                    </Typography>
                    <Typography variant="h4" className="subHeader">
                        Make sure that your Linkedin is public!
                    </Typography>
                    <div className="form-container">
                        <form onSubmit={HandleSubmit}>
                            <Input
                                name="linkedinId"
                                className="input"
                                onChange={HandleLinkInputChange}
                                value={inputs.link}
                                fullWidth
                                type="text"
                                placeholder="Drop your Linkedin url here"
                            ></Input>
                            <Input
                                className="input"
                                onChange={HandleJobInputChange}
                                value={inputs.job}
                                fullWidth
                                variant="outlined"
                                type="text"
                                placeholder="What role are you applying for?"
                            ></Input>
                            <Button
                                variant="contained"
                                type="submit"
                                endIcon={<Send />}
                                style={{ width: "360px", marginTop: "50px" }}
                                className="button"
                            >
                                Send
                            </Button>
                        </form>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <Typography style={{ align: "center" }}>
                    Developed by blah blah blah
                </Typography>
            </footer>
        </div>
    );
}

export default Home;
