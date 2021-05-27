import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  
  },
  media: {
    height: 300,
    width: 300,
    resizeMode: "contain"
  },
});

export default function MediaCard({data}) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={()=>{
          history.push({
              pathname: "/detail/" + data.id,
              state: data
          })
      }}>
        <CardMedia
          className={classes.media}
          image={data.picture}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.firstName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
