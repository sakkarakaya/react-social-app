import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: "30%",
        width: "100%"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = process.env.REACT_APP_DUMMYAPI_TOKEN;

const Detail = () => {
    const data = useLocation()
    const selected_id = data.state.id
    const [datalist, setData] = useState([]);

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        axios.get(`${BASE_URL}/user/${selected_id}`, { headers: { 'app-id': APP_ID } })
            .then((res) => setData(res.data))
            .catch(console.error)
    }, [selected_id])
    console.log("detail", datalist)
    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            r
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={`${datalist.firstName} ${datalist.lastName}`}
                    subheader={datalist.dateOfBirth}
                />
                <CardMedia
                    className={classes.media}
                    image={datalist.picture}
                    title={datalist.firstName}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {datalist.email}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {datalist.phone}
                        </Typography>
                        <Typography paragraph>
                            {datalist?.location?.city}
                        </Typography>
                        <Typography paragraph>
                            {datalist?.location?.country}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default Detail
