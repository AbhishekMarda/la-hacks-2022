import {Link} from "react-router-dom";
import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@material-ui/core";
import './styles/Skills.css';
import { StylesProvider } from "@material-ui/core";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

const cards = [1,2,3,4,5];

function Companies() {

    const navigate = useNavigate();

    const HandleHome =  (event) => {
        event.preventDefault();
        navigate("/");
    };

    const HandleMore = (event) => {
        event.preventDefault();
        navigate("/skills");
    }

    return (
        <motion.div id="Companies"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <StylesProvider injectFirst>
                <CssBaseline />
                <img src="node.png" className="backgroundImage"/>
                    <div id="imageContainer">
                        <img src="logo_blue_crop.png" alt="Query Compatible" className="image" onClick={HandleHome}/>
                    </div>
                    {/* <AppBar position="relative" className="nav" style={{background: "#4877b6"}}>
                        <Toolbar>
                            <img src="favicon.ico" alt="Query Compatible" className="logo" onClick={HandleHome}/>
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
                                    Companies
                                </Typography>
                            </Container>
                        </div>
                        <Container className="cardGrid">
                            <Grid container spacing={4}>
                            {cards.map((card) =>(
                                <Grid item key={card} sm={4} m={4}>
                                <Card className="cardHolder">
                                    <CardMedia 
                                    className="cardMedia"
                                    image="https://source.unsplash.com/random"
                                    title="Company Name"
                                    />
                                    <CardContent id="cardContent">
                                        <Typography variant="h5" gutterBottom>
                                            Company description
                                        </Typography>
                                        <Typography variant="h5" gutterBottom>
                                            Career
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button color="primary" onClick={HandleMore}>
                                            Learn more about this company!
                                        </Button> 
                                    </CardActions>
                                </Card>
                            </Grid>
                            ))}
                            {/* <img src="node.png" className="backgroundImage"/> */}
                            </Grid>
                        
                        </Container>
                    </main>
                    {/* <footer className="footer">
                        <Typography>Developed by blah blah blah</Typography>
                    </footer> */}
                </StylesProvider>
        </motion.div>
    )
}

export default Companies;