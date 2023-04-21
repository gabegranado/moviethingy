import React from "react";
import girlWithTheDragonTattoo from "../../../images/girlWithTheDragonTattoo.png";
import parasite from "../../../images/parasite.png";
import uncutgems from "../../../images/uncutgems.png";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { browserHistory } from "react-router";
// import "./Movie.css";
// import { likePost, deletePost } from '../../../actions/posts';
import useStyles from "./style";

const Movie = ({ movie, setCurrentId }) => {
  const navigate = useNavigate();
  const options = [
    ["parasite", parasite],
    ["girlwiththedragontattoo", girlWithTheDragonTattoo],
    ["uncutgems", uncutgems],
  ];

  const getPoster = () => {
    for (let i in options) {
      console.log("HEY LOOK HERE RIGHT HERE", movie.movieTitle);
      // console.log(typeof movie.movieTitle);
      // console.log("hey look here ", i, options[i][0]);
      if (options[i][0] == movie.movieTitle) {
        return options[i][1];
      }
    }
    return "test";
  };

  const redirctToMoiveDetails = () => {
    console.log("herhe", movie);
    console.log("movieID: ", movie._id);
    browserHistory.push("Home");
    navigate(`/movieDetails/${movie._id}`);
  };
  //
  return (
    // <div>
    //   {/* <h1>{getPoster()}</h1> */}
    // <img  src={getPoster()} alt={getPoster()}/>
    // <Button variant="contained" color="secondary" size="small" onClick={redirctToMoiveDetails} fullWidth>Movie details</Button>
    // </div>

    <div>
      <div className="movie">
        <div>
          <p>2007</p>
        </div>
        <img
          src={
            getPoster() !== "N/A"
              ? getPoster()
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
          onClick={redirctToMoiveDetails}
        ></img>
        <div>
          <span>Movie</span>
          <h3>"A cool Movie"</h3>
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
