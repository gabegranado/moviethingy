import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../../actions/movie';
import { getMovies } from '../../../actions/movies.js';
import { Checkbox } from 'react-input-checkbox';
import Select from 'react-select'
import movieDetails from '../../../images/movieDetail.json'

const MovieForm = () => {
  // const [movieData, setmovieData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
  const [movieData, setmovieData] = useState({
    movieTitle: "",
    movieTheater: "",
    movieTheaterNumber: "",
    movieDate: "",
    movieTime: "",
    nowPlaying: false,
  });

  const [selctorValue, setSelctorValue] = useState("Choose Movie");
  const [locationSelectorValue, setLocationSelectorValue] =
    useState("Choose Location");

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    movieData.nowPlaying = Boolean(movieData.nowPlaying);
    e.preventDefault();
    dispatch(addMovie(movieData));
    dispatch(getMovies());
    window.location.reload();
  };

  const clear = () => {
    setmovieData({
      movieTitle: "",
      movieTheater: "",
      movieTheaterNumber: "",
      movieDate: "",
      movieTime: "",
      nowPlaying: false,
    });
    setSelctorValue("Choose Movie");
  };
  
    function handleChange(e) {
      setSelctorValue(e)
      setmovieData({ ...movieData, movieTitle: e.value })
    }
    
    function handleLocationChange(e) {
      setLocationSelectorValue(e)
      setmovieData({ ...movieData, movieTheater: e.value })
    }
    const movieOptions = [
      // { value: 'parasite', label: 'Parasite' },
      // { value: 'girlWithTheDragonTattoo', label: 'Girl With The Dragon Tattoo'},
      // { value: 'uncutgems', label: 'Uncut Gems'},
    ]

    // for (var key in Object.keys(movieDetails)) {
    //   console.log("keys in admin page ", key)
    // }
    console.log(Object.keys(movieDetails))
    const keys = Object.keys(movieDetails)
    for (var i in keys) {
      movieOptions.push({value: keys[i], label: movieDetails[keys[i]].title})
    }

    console.log(movieOptions)
    const locationOptions = [
      { value: 'lubbock', label: 'Lubbock' },
      { value: 'amarillo', label: 'Amarillo'},
      { value: 'levelland', label: 'Levelland'},
      { value: 'plainview', label: 'Plainview'},
      { value: 'snyder', label: 'Snyder'},
      { value: 'abilene', label: 'Abilene'},
    ]
    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Add Movie</Typography>
          <Select 
          options={movieOptions} 
          placeholder={selctorValue}
          value={selctorValue}
          onChange={handleChange}
        />
        {/* <TextField name="movieTitle" variant="outlined" label="movie Title" fullWidth value={movieData.movieTitle} onChange={(e) => setmovieData({ ...movieData, movieTitle: e.target.value })} /> */}
        <Select
          options={locationOptions}
          placeholder={locationSelectorValue}
          value={locationSelectorValue}
          onChange={handleLocationChange}
          fullWidth
        />
        <TextField
          name="movieTheaterNumber"
          type="movieTheaterNumber"
          variant="outlined"
          label="movie Theater Number"
          fullWidth
          value={movieData.movieTheaterNumber}
          onChange={(e) =>
            setmovieData({ ...movieData, movieTheaterNumber: e.target.value })
          }
        />
        <TextField
          name="movieDate"
          variant="outlined"
          label="movie Date"
          fullWidth
          value={movieData.movieDate}
          onChange={(e) =>
            setmovieData({ ...movieData, movieDate: e.target.value })
          }
        />
        <TextField
          name="movieTime"
          variant="outlined"
          label="movie Time"
          fullWidth
          value={movieData.movieTime}
          onChange={(e) =>
            setmovieData({ ...movieData, movieTime: e.target.value })
          }
        />
        <Checkbox
          name="nowPlaying"
          labe="now playing"
          value={Boolean(movieData.nowPlaying)}
          onChange={(e) =>
            setmovieData({ ...movieData, nowPlaying: e.target.value })
          }
        >
          Now Playing?
        </Checkbox>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          Optional
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default MovieForm;
