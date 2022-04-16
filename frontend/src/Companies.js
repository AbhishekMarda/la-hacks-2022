import {Link} from "react-router-dom";
import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@material-ui/core";

import useStyles from "./styles/CompanyStyles";

const cards = [1,2,3,4,5];

function Companies() {

    const classes = useStyles();



    return (
        <div className="Companies">
            <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant = "h6">
                            Companies
                            <Link to="/companies">Companies</Link>
                            <Link to="/skills">Skills</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div className={classes.container}>
                        <Container maxWidth="sm">
                            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                                Companies
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                This will display companies that we recommend you apply to.
                            </Typography>
                            <div className={classes.button}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">
                                            View your companies
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <Container className={classes.cardGrid}>
                        <Grid container spacing={4}>
                        {cards.map((card) =>(
                            <Grid item key={card} sm={4} m={4}>
                            <Card className={classes.card}>
                                <CardMedia 
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Company Name"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant="h5" gutterBottom>
                                        Company description
                                    </Typography>
                                    <Typography variant="h5" gutterBottom>
                                        Skills you can learn??
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
                <footer className={classes.footer}>
                    <Typography>Developed by blah blah blah</Typography>
                </footer>
        </div>
    )
}

export default Companies;