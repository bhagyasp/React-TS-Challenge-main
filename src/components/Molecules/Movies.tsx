import React from "react";
import Card from './Card';
import {TMovieProps} from '../../helper/types';


const Movies = ({ movies }: TMovieProps) => {
    const hasMovies = movies !== undefined
    return (
      <div className="App" style={{display: "grid",height:"auto",gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", rowGap: "5px", columnGap: "10px"}}>          
        {hasMovies ? movies!.map(Card) : null}
      </div>
    )
  }

  export default Movies;