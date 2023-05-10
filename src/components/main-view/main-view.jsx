import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      _id: 1,
      Title: "Mad Max: Fury Road",
      Description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      Genre: {
        Name: "Action",
        Description:
          "Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats. The genre tends to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, a dangerous villain, or a pursuit which usually concludes in victory for the hero.",
      },
      Director: {
        Name: "George Miller",
        Bio: "Born on March 3, 1945 in Chinchilla, Queensland, Australia, George Miller is an Australian film director, screenwriter, producer, and former medical doctor. He is best known for his Mad Max franchise, with The Road Warrior (1981) and Mad Max: Fury Road (2015) being hailed as amongst the greatest action films of all time. Aside from the Mad Max films, Miller has been involved in a wide range of projects.",
        Birth: "1945-03-03",
        Death: "Null",
      },
      ImagePath: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX675_.jpg",
      Featured: false,
    },
    {
      _id: 2,
      Title: "Toy Story",
      Description: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
      Genre: {
        Name: "Animation",
        Description:
          "Animations are not a strictly-defined genre category, but rather a film technique, although they often contain genre-like elements. Animation, fairy tales, and stop-motion films often appeal to children, but it would marginalize animations to view them only as children's entertainment. Animated films are often directed to, or appeal most to children, but easily can be enjoyed by all.",
      },
      Director: {
        Name: "John Lasseter",
        Bio: "John Lasseter was born on January 12, 1957 in Hollywood, Los Angeles. He is an American animator, director and the chief creative officer at Pixar and Walt Disney Animation Studios. He is also currently the Principal Creative Advisor for Walt Disney Imagineering.",
        Birth: "1957-01-12",
        Death: "Null",
      },
      ImagePath: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_FMjpg_UX1005_.jpg",
      Featured: false,
    },
    {
      _id: 3,
      Title: "Saving Private Ryan",
      Description: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      Genre: {
        Name: "War Film",
        Description:
          "War Film is a film genre concerned with warfare, typically about naval, air, or land battles, with combat scenes central to the drama. It has been strongly associated with the 20th century. The fateful nature of battle scenes means that war films often end with them.",
      },
      Director: {
        Name: "Steven Spielberg",
        Bio: "Spielberg was born on December 18, 1946. One of the most influential personalities in the history of cinema, Steven Spielberg is Hollywood's best known director and one of the wealthiest filmmakers in the world. He has an extraordinary number of commercially successful and critically acclaimed credits to his name, either as a director, producer or writer since launching the summer blockbuster with Jaws (1975), and he has done more to define popular film-making since the mid-1970s than anyone else.",
        Birth: "1946-12-18",
        Death: "Null",
      },
      ImagePath: "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX800_.jpg",
      Featured: false,
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
