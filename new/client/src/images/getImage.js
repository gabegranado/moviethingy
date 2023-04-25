import parasite from "./parasite.png";
import girlWithTheDragonTattoo from "./girlWithTheDragonTattoo.png";
import uncutgems from "./uncutgems.png";
import { useDispatch, useSelector } from "react-redux";

export const getImage = (movieTitle) => {
  if (movieTitle === undefined) {
    const ticket = useSelector((state) => state.movieTickets);
    var movieTitle = ''
  
    for (var key in ticket[0]) {
      if (key === 'movieTitle') {
        movieTitle = ticket[0][key]
      }
    }
  }


    const options = [
        ['parasite', parasite],
        ['girlwiththedragontattoo', girlWithTheDragonTattoo],
        ['uncutgems', uncutgems]
      ]
    
      for (let i in options) {
        if (options[i][0] == movieTitle) { return options[i][1] };
      }
    return;
}
