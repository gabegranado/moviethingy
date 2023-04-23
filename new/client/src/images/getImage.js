import parasite from "./parasite.png";
import girlWithTheDragonTattoo from "./girlWithTheDragonTattoo.png";
import uncutgems from "./uncutgems.png";

export const getImage = (movieTitle) => {
    const options = [
        ['parasite', parasite],
        ['girlwiththedragontattoo', girlWithTheDragonTattoo],
        ['uncutgems', uncutgems]
      ]
    
      for (let i in options) {
        if (options[i][0] == movieTitle) { return options[i][1] };
      }
    return parasite;
}
