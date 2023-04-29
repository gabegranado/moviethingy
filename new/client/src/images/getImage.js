// import parasite from "./parasite.png";
// import girlWithTheDragonTattoo from "./girlWithTheDragonTattoo.png";
import barbie from "./barbie.png";
import johnwick from './johnwick.png';
import oppenheimer from './oppenheimer.png';
import mariomovie from './mariomovie.png';
import spidermanacrosthespiderverse from './spidermanacrosthespiderverse.png';
import { useDispatch, useSelector } from "react-redux";
import movieDetails from './movieDetail.json';

export const getImage = (movieTitle) => {
  const imageImports = []
  console.log("herehrerhehrehrhehr", movieDetails.length)
  const keys = Object.keys(movieDetails)
  console.log(movieTitle)

  // for (var key in keys) {
  //   console.log('length: ', keys[key]);
  //   var img =   import(`./barbie.png`)
  //   imageImports.push([keys[key], img])
  // }
  // console.log(imageImports[1][1])

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
    return ;
}
