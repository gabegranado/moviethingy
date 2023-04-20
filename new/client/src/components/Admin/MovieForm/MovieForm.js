import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addMovie } from '../../../actions/movies';
import Select from 'react-select'

const MovieForm = () => {
    // const [movieData, setmovieData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const [movieData, setmovieData] = useState({movieTitle: '', movieTheater: '', movieTheaterNumber: '', movieDate: '', movieTime: '', moviePoster: ''})
    const classes = useStyles()
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addMovie(movieData))
    }

    const clear = () => {

    }

   const state = {
      selectedOption: 'test',
    }

    const handleChange = (selectedOption) => {
      state.selectedOption = ({ selectedOption });
      movieData.movieTitle = selectedOption.value;
    }

    const options = [
      { value: 'parasite', label: 'Parasite' },
      { value: 'girlWithTheDragonTattoo', label: 'Girl With The Dragon Tattoo'},
      { value: 'uncutgems', label: 'Uncut Gems'},
    ]
    return (
        <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">Add Movie</Typography>
          <Select 
          options={options} 
          placeholder={<div>{state.selectedOption}</div>} 
          value={movieData.movieTitle}
          onChange={handleChange}
          />
          {/* <TextField name="movieTitle" variant="outlined" label="movie Title" fullWidth value={movieData.movieTitle} onChange={(e) => setmovieData({ ...movieData, movieTitle: e.target.value })} /> */}
          <TextField name="movieTheater" variant="outlined" label="movie Theater" fullWidth value={movieData.movieTheater} onChange={(e) => setmovieData({ ...movieData, movieTheater: e.target.value })} />
          <TextField name="movieTheaterNumber" type="movieTheaterNumber" variant="outlined" label="movie Theater Number" fullWidth value={movieData.movieTheaterNumber} onChange={(e) => setmovieData({ ...movieData, movieTheaterNumber: e.target.value })} />
          <TextField name="movieDate" variant="outlined" label="movie Date" fullWidth value={movieData.movieDate} onChange={(e) => setmovieData({ ...movieData, movieDate: e.target.value })} />
          <TextField name="movieTime" variant="outlined" label="movie Time" fullWidth value={movieData.movieTime} onChange={(e) => setmovieData({ ...movieData, movieTime: e.target.value })} />
          {/* <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setmovieData({ ...movieData, moviePoster: base64 })} /></div> */}
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    );
}

export default MovieForm;