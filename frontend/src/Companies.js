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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const cards = [1, 2, 3, 4];

function Companies() {
    const navigate = useNavigate();
    const location = useLocation();

    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        setup();
    }, []);
    console.log(companies);

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
            .then(
                // let skillsJSON = {
                //     skills: [
                //         "matlab",
                //         "python",
                //         "microsoft office",
                //         "npm",
                //         "leadership",
                //         "bootstrap",
                //         "git",
                //         "public speaking",
                //         "javascript",
                //         "c++",
                //         "html5",
                //         "react.js",
                //         "css",
                //         "sql",
                //     ],
                // };
                (skillsJSON) => {
                    getCompanies(
                        serverUrl + "/getTopCompanies",
                        skillsJSON
                    ).then((data) => {
                        let comp = data;
                        // let tempComp = [];
                        // for (const [key, value] of Object.entries(comp)) {
                        //     tempComp.push(key);
                        // }
                        setCompanies(data);
                    });
                }
            );
    }

    const HandleMore = (skills, comp) => {
        // console.log(comp);
        // event.preventDefault();
        navigate("/skills", {
            state: {
                missing: skills,
                company: comp,
            },
        });
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
                            {Object.keys(companies).map((keyName, i) => (
                                <Grid item key={i} sm={4} m={4}>
                                    {/* {console.log(companies[keyName])} */}
                                    <Card className="card">
                                        <CardMedia
                                            className="cardMedia"
                                            image={"https://logo.clearbit.com/"+companies[keyName].website}
                                            title={companies[keyName].name}
                                        />
                                        <CardContent className="classes.cardContent">
                                            <Typography
                                                variant="h5"
                                                gutterBottom
                                            >
                                                {companies[keyName].name}
                                            </Typography>
                                            <Typography>
                                                Software Engineer
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                gutterBottom
                                            >
                                                {"Matched Skills: " +
                                                    companies[
                                                        keyName
                                                    ].matchedSkills.join(", ")}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                color="primary"
                                                onClick={() => {
                                                    // console.log(
                                                    //     companies[keyName].missingSkills
                                                    // );
                                                    HandleMore(
                                                        companies[keyName]
                                                            .missingSkills,
                                                        keyName
                                                    );
                                                }}
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
