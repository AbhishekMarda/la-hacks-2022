import {Link, Navigate} from "react-router-dom";
import {useState} from "react";
import {Typography, AppBar, Button, Card, CardActions, Input, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@material-ui/core";
import './styles/Skills.css';
import {useNavigate} from "react-router-dom";
import SearchBar from "material-ui-search-bar";
import {ArrowBack} from '@material-ui/icons';
import {Box} from "@material-ui/core"
import { StylesProvider } from "@material-ui/core";
import {motion} from "framer-motion";


const skills = [1,2,3,4];
const companyRecommended = [1,2,3,4,5];

function Skills() {

    const navigate = useNavigate();
    const empty = {};

    // let skillsList = search ? skills : empty;
    let skillsList = skills;

    const [search, setSearch] = useState(false);

    const HandleHome =  (event) => {
        event.preventDefault();
        navigate("/");
    };

    const HandleBack = (event) => {
        event.preventDefault();
        navigate("/companies");
    }

    const HandleSearch = (event) => {
        event.preventDefault();
        setSearch(true);
    }

    return (
        <motion.div id="Skills"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <StylesProvider injectFirst>
                <CssBaseline />
                    <div id="buttonContainer">
                        <Button variant="contained" startIcon={<ArrowBack/>} onClick={HandleBack} id="button">
                            Back
                        </Button>
                    </div>
                    <img src="node.png" className="backgroundImage"/>
                    <div id="imageContainer">
                        <img src="logo_blue_crop.png" alt="Query Compatible" id="imageSkills" onClick={HandleHome} style={{}}/>
                    </div>
                    
                    {/* <AppBar position="relative" className="nav" style={{background: "#4877b6"}}>
                        <Toolbar>
                            <Box display="flex" flexGrow={-10}>
                                <img src="favicon.ico" alt="Query Compatible" className="logo" onClick={HandleHome}/>
                            </Box>
                            <Typography variant = "h6">
                                <Link to="/companies" className="link">Companies</Link>
                                <Link to="/skills" className="link">Skills</Link>
                                
                            </Typography>
                        </Toolbar>
                    </AppBar> */}
                    <main>
                        <div className="container">
                            <Container maxWidth="sm">
                                <Typography variant="h2" align="center" color="textPrimary" gutterBottom id="Header">
                                    Company Name
                                </Typography>
                                {/* <div className="search">
                                    <SearchBar placeholder="Search a company!" onChange={HandleSearch}></SearchBar>
                                </div> */}
                            </Container>
                        </div>
                        <div>
                            <Container className="cardGrid">
                                <div className="cardContainer">
                                    <Grid container spacing={4} align="center" className="card">
                                    {skillsList.map((skill) =>(
                                        <Grid item key={skill} sm={2} m={6}>
                                        <Card id="skillCard">
                                            <CardContent className="cardContent">
                                                <Typography variant="h5" gutterBottom>
                                                    Javascript
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        </Grid>
                                    ))}
                                    </Grid>
                                </div>
                            </Container>
                        </div>

                        <div className="container">
                            <Container maxWidth="sm">
                                {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                    These are companies you can work towards applying to.
                                </Typography> */}
                            </Container>
                            <Container className="cardGrid">
                                <Grid container spacing={4}>
                                {companyRecommended.map((company) =>(
                                    <Grid item key={company} sm={6} m={4}>
                                    <Card className="card">
                                        <CardMedia 
                                        className="cardMedia"
                                        image="https://source.unsplash.com/random"
                                        title="Company Name"
                                        />
                                        <CardContent className="cardContent">
                                            <Typography variant="h5" gutterBottom>
                                                Company 
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
                    {/* <footer className="footer">
                        <Typography>Developed by blah blah blah</Typography>
                    </footer> */}
            </StylesProvider>
        </motion.div>
    )
}

export default Skills;