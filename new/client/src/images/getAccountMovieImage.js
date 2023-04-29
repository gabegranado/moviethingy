import barbie from "./barbie.png";
import johnwick from './johnwick.png';
import oppenheimer from './oppenheimer.png';
import mariomovie from './mariomovie.png';
import spidermanacrosthespiderverse from './spidermanacrosthespiderverse.png';
import movieDetails from './movieDetail.json';
import { useDispatch, useSelector } from "react-redux";

export const getAccountMovieImage = (movieTitle) => {
    const ticket = useSelector((state) => state.movieTickets);
    var movieTitle = ''
  
    for (var key in ticket[0]) {
      if (key === 'movieTitle') {
        movieTitle = ticket[0][key]
      }
    }



    const options = [
      ['spidermanacrosthespiderverse', spidermanacrosthespiderverse],
      ['mariomovie', mariomovie],
      ['oppenheimer', oppenheimer],
      ['johnwick', johnwick],
      ['barbie', barbie],
    ]
  
    for (let i in options) {
      if (options[i][0] == movieTitle) { 
        console.log(options[i][1], "got images")
        return options[i][1]
      };
    }
  return undefined;
}
