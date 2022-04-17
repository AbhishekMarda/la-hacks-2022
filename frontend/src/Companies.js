import { Link } from "react-router-dom";
import {
    Typography,
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
} from "@material-ui/core";
import "./styles/Skills.css";
import { StylesProvider } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const cards = [1, 2, 3, 4, 5];

function Companies() {
    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    setup();

    async function getSkills(uri) {
        const response = await fetch(uri, {
            mode: "cors",
        });
        const data = await response.json();
        return data;
    }

    async function getCompanies(uri, skillsJSON) {
        const response = await fetch(uri, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(skillsJSON),
        });
        const data = response.json();
        return data;
    }

    async function setup() {
        let id = "";
        if (location.state) id = location.state.id;
        else id = "sanchit1591";
        const serverUrl = "http://localhost:105";
        let requestUri = serverUrl + "/getSkillsFromId?id=" + id;
        getSkills(requestUri)
            .then((skillsArr) => {
                let skillsJSON = {
                    skills: skillsArr,
                };
                return skillsJSON;
            })
            .then((skillsJSON) => {
                console.log(skillsJSON);
                getCompanies(serverUrl + "/getTopCompanies", skillsJSON).then(
                    (data) => {
                        // for (let company in data) {
                        //     setCompanies((arr) => [...arr, { company }]);
                        // }
                        // console.log(companies);
                    }
                );
            });
    }

    const HandleMore = (event) => {
        event.preventDefault();
        navigate("/skills");
    };

    return (
        <div className="Companies">
            <StylesProvider injectFirst>
                <CssBaseline />
                <AppBar
                    position="relative"
                    className="nav"
                    style={{ background: "#4877b6" }}
                >
                    <Toolbar>
                        <img
                            src="favicon.ico"
                            alt="Query Compatible"
                            className="logo"
                        />
                        {/* <Typography variant = "h6">
                                <Link to="/companies" className="link">Companies</Link>
                                <Link to="/skills" className="link">Skills</Link>
                            </Typography> */}
                    </Toolbar>
                </AppBar>
                <main>
                    <div className="container">
                        <Container maxWidth="sm">
                            <Typography
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                                className="Header"
                            >
                                Companies
                            </Typography>
                        </Container>
                    </div>
                    <Container className="cardGrid">
                        <Grid container spacing={4}>
                            {cards.map((card) => (
                                <Grid item key={card} sm={4} m={4}>
                                    <Card className="card">
                                        <CardMedia
                                            className="cardMedia"
                                            image="https://source.unsplash.com/random"
                                            title="Company Name"
                                        />
                                        <CardContent className="classes.cardContent">
                                            <Typography
                                                variant="h5"
                                                gutterBottom
                                            >
                                                Company description
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                gutterBottom
                                            >
                                                Job
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                color="primary"
                                                onClick={HandleMore}
                                            >
                                                Learn more about this company!
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
                <footer className="footer">
                    <Typography>Developed by blah blah blah</Typography>
                </footer>
            </StylesProvider>
        </div>
    );
}

export default Companies;
