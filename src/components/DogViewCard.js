import React from 'react';
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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VisibilityIcon from '@material-ui/icons/Visibility';

import useCounter from "../hooks/useCounter.js";

import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth:345
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



export default function DogViewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [views, increment, decrement] = useCounter();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Card className={classes.root}>

      <CardHeader

        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }

        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }

        title={props.details.name}
        subheader={props.details.publishdate}
      />
      <Link to={`/dogs/${props.details.id}`}>
        <CardMedia onClick={
          ()=>{
            console.log(props.details.id)
          }
        }
          className={classes.media}
          image={props.details.url}
          title={props.details.name}
        />
      </Link>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.details.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

        { views==1 ? " ":
        <IconButton aria-label="total views">
          <Typography   color="textSecondary">{views}</Typography>
        </IconButton>
        }

        <IconButton aria-label="tap to view" onClick={increment}>
          <VisibilityIcon />
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
          <Typography paragraph>{props.details.content}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
