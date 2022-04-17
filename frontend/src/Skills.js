import {Link, Navigate} from "react-router-dom";
import {useState} from "react";
import {Typography, AppBar, Button, Card, CardActions, Input, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@material-ui/core";
import './styles/Skills.css';
import {useNavigate} from "react-router-dom";
import SearchBar from "material-ui-search-bar";


const skills = [1,2,3,4];
const companyRecommended = [1,2,3,4,5];

function Skills() {

    const navigate = useNavigate();
    const empty = {};

    // let skillsList = search ? skills : empty;
    let skillsList = skills;

    const [home, setHome] = useState(false);
    const [search, setSearch] = useState(false);

    const HandleHome =  (event) => {
        event.preventDefault();
        setHome(true);
        navigate("/");
    };

    const HandleSearch = (event) => {
        event.preventDefault();
        setSearch(true);
    }

    return (
        <div className="Skills">
            <CssBaseline />
                <AppBar position="relative" className="nav" style={{background: "#4877b6"}}>
                    <Toolbar>
                        <img src="favicon.ico" alt="Query Compatible" className="logo" onClick={HandleHome}/>
                        <Typography variant = "h6">
                            <Link to="/companies" className="link">Companies</Link>
                            <Link to="/skills" className="link">Skills</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div className="container">
                        <Container maxWidth="sm">
                            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                                Skills
                            </Typography>
                            <div className="search">
                                <SearchBar placeholder="Search a company!" onChange={HandleSearch}></SearchBar>
                            </div>
                        </Container>
                    </div>
                    <div>
                        <Container className="cardGrid">
                            <Grid container spacing={4} align="center">
                            {skillsList.map((skill) =>(
                                <Grid item key={skill} sm={2} m={6}>
                                <Card className="card">
                                    <CardContent className="cardContent">
                                        <Typography variant="h5" gutterBottom>
                                            Javascript
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
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                These are companies you can work towards applying to.
                            </Typography>
                        </Container>
                        <Container className="cardGrid">
                            <Grid container spacing={4}>
                            {companyRecommended.map((company) =>(
                                <Grid item key={company} sm={12} m={4}>
                                <Card className="card">
                                    <CardMedia 
                                    className="cardMedia"
                                    image="https://source.unsplash.com/random"
                                    title="Company Name"
                                    />
                                    <CardContent className="cardContent">
                                        <Typography variant="h5" gutterBottom>
                                            Company description
                                        </Typography>
                                        <Typography variant="h5" gutterBottom>
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
        </div>
    )
}

export default Skills;