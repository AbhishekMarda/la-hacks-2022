import {Link} from "react-router-dom";
import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@material-ui/core";
import './styles/Skills.css';
import { StylesProvider } from "@material-ui/core";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const cards = [1,2,3,4,5];

function Companies() {

    const navigate = useNavigate();

    const [home, setHome] = useState(false);

    const HandleHome =  (event) => {
        event.preventDefault();
        setHome(true);
        navigate("/");
    };

    return (
        <div className="Companies">
            <StylesProvider injectFirst>
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
                                    Companies
                                </Typography>
                            </Container>
                        </div>
                        <Container className="cardGrid">
                            <Grid container spacing={4}>
                            {cards.map((card) =>(
                                <Grid item key={card} sm={4} m={4}>
                                <Card className="card">
                                    <CardMedia 
                                    className="cardMedia"
                                    image="https://source.unsplash.com/random"
                                    title="Company Name"
                                    />
                                    <CardContent className="classes.cardContent">
                                        <Typography variant="h5" gutterBottom>
                                            Company description
                                        </Typography>
                                        <Typography variant="h5" gutterBottom>
                                            Job
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button color="primary">
                                            Connect with an employee from here!
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
    )
}

export default Companies;