import React from 'react';
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
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

export default function MediaCard({ data }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => {
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
      <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Button onClick={() => {
              history.push({
                pathname: "/detail/" + data.id + "/posts",
                state: data
              })
            }} size="small" color="primary">
              Posts
            </Button>
          </Grid>
          <Grid item >
            <Button onClick={() => {
              history.push({
                pathname: "/detail/" + data.id,
                state: data
              })
            }} size="small" color="primary">
              Full Profile
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
