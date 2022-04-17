import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
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

    let skills = [];
    let company = "";
    if (location.state) {
        skills = location.state.missing;
        company = location.state.company;
    } else skills = [];
    console.log(company);

    const [search, setSearch] = useState(false);
    const [missed, setMissed] = useState(location.state);

    const HandleHome = (event) => {
        event.preventDefault();
        navigate("/");
    };

    const HandleBack = (event) => {
        event.preventDefault();
        navigate("/companies");
    };

    const HandleSearch = (event) => {
        event.preventDefault();
        setSearch(true);
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
                            {/* <Link to="/companies" className="link">Companies</Link>
                                <Link to="/skills" className="link">Skills</Link> */}
                            <Button
                                variant="contained"
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
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                                className="Header"
                            >
                                {company} {"\n"} Gain These Skills:
                            </Typography>
                            {/* <div className="search">
                                    <SearchBar placeholder="Search a company!" onChange={HandleSearch}></SearchBar>
                                </div> */}
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
                                                    gutterBottom
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
                                variant="h5"
                                align="center"
                                color="textSecondary"
                                paragraph
                            >
                                Some people to connect with:
                            </Typography>
                        </Container>
                        <Container className="cardGrid">
                            <Grid container spacing={4}>
                                {companyRecommended.map((company) => (
                                    <Grid item key={company} sm={6} m={4}>
                                        <Card className="card">
                                            <CardMedia
                                                className="cardMedia"
                                                image="https://source.unsplash.com/random"
                                                title="Company Name"
                                            />
                                            <CardContent className="cardContent">
                                                <Typography
                                                    variant="h5"
                                                    gutterBottom
                                                >
                                                    Company
                                                </Typography>
                                                <Typography
                                                    variant="h5"
                                                    gutterBottom
                                                >
                                                    Skills you can learn??
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
