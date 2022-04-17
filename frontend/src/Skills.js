import {Link} from "react-router-dom";
import {Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@material-ui/core";

import useStyles from "./styles/CompanyStyles";
import './styles/Skills.css';


const skills = [1,2,3,4];
const companyRecommended = [1,2,3,4,5];

function Skills() {

    const classes = useStyles();



    return (
        <div className="Skills">
            <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant = "h6">
                            Skills
                            <Link to="/companies">Companies</Link>
                            <Link to="/skills">Skills</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    <div className={classes.container}>
                        <Container maxWidth="sm">
                            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                                Skills
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                This will display skills that we recommend you apply to.
                            </Typography>
                        </Container>
                    </div>
                    <div>
                        <Container className={classes.cardGrid}>
                            <Grid container spacing={4} align="center">
                            {skills.map((skill) =>(
                                <Grid item key={skill} sm={2} m={6}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
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



                    <Container className={classes.cardGrid}>
                        <Grid container spacing={4}>
                        {companyRecommended.map((company) =>(
                            <Grid item key={company} sm={4} m={4}>
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

export default Skills;