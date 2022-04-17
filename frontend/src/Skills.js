import { Link, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
    Typography,
    AppBar,
    Button,
    Card,
    CardActions,
    Input,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
} from "@material-ui/core";
import "./styles/Skills.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import { ArrowBack } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core";
import { useLocation } from "react-router-dom";

// const skills = [1,2,3,4];
const companyRecommended = [1, 2, 3, 4, 5];

function Skills() {
    const navigate = useNavigate();
    const location = useLocation();

    const [people, setPeople] = useState({});

    useEffect(() => {
        setup();
    }, []);

    console.log(people);

    let skills = [];
    let company = "";
    if (location.state) {
        skills = location.state.missing;
        company = location.state.company;
    } else skills = [];
    console.log(company);

    async function setup() {
        const serverUrl = "http://localhost:105";
        let requestUri = serverUrl + "/getPeopleInCompany";
        let pplJSON = {
            companyID: company,
            role: "engineering",
            subrole: "software",
            skills: [], // this does nothing, i just have it just in case
        };
        fetch(requestUri, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pplJSON),
        })
            .then((response) => response.json())
            .then((data) => setPeople(data));
    }

    const HandleHome = (event) => {
        event.preventDefault();
        navigate("/");
    };

    const HandleBack = (event) => {
        event.preventDefault();
        navigate("/companies");
    };

    return (
        <div className="Skills">
            <StylesProvider injectFirst>
                <CssBaseline />
                <AppBar
                    position="relative"
                    className="nav"
                    style={{ background: "#4877b6" }}
                >
                    <Toolbar>
                        <Box display="flex" flexGrow={-10}>
                            <img
                                src="favicon.ico"
                                alt="Query Compatible"
                                className="logo"
                                onClick={HandleHome}
                            />
                        </Box>
                        <Typography variant="h6">
                            <Button
                                // variant="contained"
                                startIcon={<ArrowBack />}
                                onClick={HandleBack}
                            >
                                Back
                            </Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div className="container">
                        <Container maxWidth="sm">
                            <Typography
                                variant="h1"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                                className="Header"
                            >
                                Get into {company}
                            </Typography>
                            <Typography
                                variant="h3"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                                className="Header"
                            >
                                by learning these skills:
                            </Typography>
                        </Container>
                    </div>
                    <div>
                        <Container className="cardGrid">
                            <Grid container spacing={4} align="center">
                                {skills.map((skill) => (
                                    <Grid item key={skill} sm={2} m={6}>
                                        <Card className="card">
                                            <CardContent className="cardContent">
                                                <Typography
                                                    variant="h5"
                                                    align="center"
                                                    color="textPrimary"
                                                    className="Header"
                                                >
                                                    {skill}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </div>

                    <div className="container">
                        <Container maxWidth="sm">
                            <Typography
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                className="Header"
                            >
                                Some people to connect with here:
                            </Typography>
                        </Container>
                        <Container className="cardGrid">
                            <Grid container spacing={4}>
                                {Object.keys(people).map((keyName, i) => (
                                    <Grid item key={i} sm={6} m={4}>
                                        <Card className="card">
                                            <CardMedia
                                                className="cardMedia"
                                                image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                                title="Company Name"
                                            />
                                            <CardContent className="cardContent">
                                                <Typography
                                                    variant="h4"
                                                    align="center"
                                                    color="textPrimary"
                                                    className="Header"
                                                >
                                                    {"Name: " +
                                                        people[keyName]
                                                            .first_name +
                                                        " " +
                                                        people[keyName]
                                                            .last_name}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    align="center"
                                                    color="textPrimary"
                                                    className="Header"
                                                >
                                                    {"Email: " +
                                                        people[keyName]
                                                            .professional_email}
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    align="center"
                                                    color="textPrimary"
                                                    className="Header"
                                                >
                                                    {"Their top skills: " +
                                                        people[keyName].skills
                                                            .slice(0, 6)
                                                            .join(", ")}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </div>
                </main>
                <footer className="footer">
                    <Typography>Developed by blah blah blah</Typography>
                </footer>
            </StylesProvider>
        </div>
    );
}

export default Skills;
