import {Link, Navigate} from "react-router-dom";
import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@material-ui/core";
import './styles/Skills.css';
import {ArrowBack} from '@material-ui/icons';
import {useNavigate} from "react-router-dom";

const cards = [1,2,3,4,5];

function Connect() {

    const navigate = useNavigate();

    const HandleBack = (event) => {
        event.preventDefault();
        navigate("/skills");
    }
    

    return (
        <div className="Connect">
            <CssBaseline />
                <AppBar position="relative" className="nav">
                    <Toolbar>
                        <Typography variant = "h6">
                        <Button variant="contained" startIcon={<ArrowBack/>} onClick={HandleBack}>
                        Back
                        </Button>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div className="container">
                        <Container maxWidth="sm">
                            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                                Connect with people.
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                This will display people you can connect with.
                            </Typography>
                        </Container>
                    </div>
                    <Container className="cardGrid">
                        <Grid container spacing={4}>
                        {cards.map((card) =>(
                            <Grid item key={card} sm={12} m={4}>
                            <Card className="card">
                                <CardContent className="classes.cardContent">
                                    <Typography variant="h5" gutterBottom>
                                        Company description
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        Skills you can learn??
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button color="primary">
                                        Go to their Linkedin!
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
        </div>
    )
}

export default Connect;