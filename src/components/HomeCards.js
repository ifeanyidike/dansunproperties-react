import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import styles from '../styles/HomeScreen.module.css'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom"


const useStyles = makeStyles({
    /* Styles applied to the root element. */
    cardAction: {
        '&:hover ': {
            opacity: 1,
            backgroundColor: "none"
        }
    },

});


export default function MediaCard({ image, title, description, btn_text, variant, btnLink }) {
    const classes = useStyles();

    return (
        <Card className={styles.home__card} >
            <CardActionArea className={classes.cardAction}
            >
                <img className={styles.home__cardImage}
                    src={image} alt="title" />

                <CardContent >
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Link to={btnLink}>
                <Button className={styles.card__button} size="small"
                >
                    {btn_text}
                </Button>

            </Link>
                
            </CardActions>
        </Card>
    );
}
