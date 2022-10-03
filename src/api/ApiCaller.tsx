import React from "react";
import consts from '../helper/consts.json';
import { Result } from "../helper/types";


  /**
   * utility/callback functions
   * HTTP call to Proxy layer
   */
  const getNowPlaying = async () => {
    const endpoint :string = `https://api.themoviedb.org/3/movie/${consts.api.nowPlaying}?api_key=${consts.apiKey}&language=en-US&page=1`
    const response = await fetch(endpoint)
    const data = await response.json()
    return data;
  }


  const parseMoviesData = (movie: Result) => {
    const { title, overview, release_date,poster_path,vote_average,id,backdrop_path} = movie;
        return { 
        title,
        overview, 
        release_date,
        image : 'https://image.tmdb.org/t/p/w500/'+poster_path,
        vote_average,
        id
        } 
  }


export default {getNowPlaying,parseMoviesData };