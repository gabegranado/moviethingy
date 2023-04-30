import useStyles from "./style";
import React from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { browserHistory } from 'react-router';
import moviedetails from '../../../images/movieDetail.json'
import { getImage } from '../../../images/getImage';
import movieDetails from '../../../images/movieDetail.json';
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../../actions/movie";

const Movie = ({ movie, setCurrentId }) => {
  const dispatch = useDispatch;
  const navigate = useNavigate();

  const redirctToMoiveDetails = () => {
    browserHistory.push('Home');
    navigate(`/movieDetails/${movie._id}`);
  }

  return (
    <div>
      <div className="movie">
        <div>
          <p>{movie.movieTime}</p>
          <p>{movie.movieDate}</p>
        </div>
        <img className="movie-sizing"
          src={
            getImage(movie.movieTitle) !== "N/A"
              ? getImage(movie.movieTitle)
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
          onClick={redirctToMoiveDetails}
        ></img>
        <div>
          <span>Movie</span>
          <h3>{movie.movieTitle}</h3>
        </div>
      </div>
    </div>

    // <Card className={classes.card}>
    //   <CardMedia className={classes.media} image={movie.moviePoster} title={movie.movieTitle} />
    //   <div className={classes.overlay}>
    //     <Typography variant="h6">{movie.movieTheater}</Typography>
    //     {/* <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography> */}
    //   </div>
    //   {/* <div className={classes.overlay2}>
    //     <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(movie._id)}><MoreHorizIcon fontSize="default" /></Button>
    //   </div> */}
    //   {/* <div className={classes.details}>
    //     <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
    //   </div> */}
    //   <Typography className={classes.movieTitle} gutterBottom variant="h5" component="h2">{movie.movieTitle}</Typography>
    //   <CardContent>
    //     <Typography variant="body2" color="textSecondary" component="p">{movie.movieTitle}</Typography>
    //   </CardContent>
    //   {/* <CardActions className={classes.cardActions}>
    //     <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
    //     <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
    //   </CardActions> */}
    // </Card>
  );
};

export default Movie;
