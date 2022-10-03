import React, { useEffect, useState } from 'react';
import HomeTemplate from '../templates/HomeTemplate';
import ApiCaller from "../../api/ApiCaller";
import {MovieContextType,Result,TMovie,TState} from '../../helper/types';

const Home : React.FC= () => {  
	const [state,setState] = useState<TState>({
        movies : []
      });
      const [searchTerm, setSearchTerm] = useState('');
      const [searchResults, setSearchResults] = useState<TState>({
        movies:[]
      });
      const { movies } = state; 

	//Retrieve Movie List
	  const retrieveMovies = async () => {
      const moviesData = await ApiCaller.getNowPlaying();
      const results = moviesData.results;
      const movies = results.slice(0,10).map(ApiCaller.parseMoviesData);
      setState({ ...state, movies:[...movies] })
    }
	useEffect(() => {
		retrieveMovies();  
	}, []);

	const onUserSearch  = (searchTerm:string) => {
		setSearchTerm(searchTerm);
        if(searchTerm !== "") {
            const newPlayList:any = movies.filter((movie: { [s: string]: unknown; } | ArrayLike<unknown>) =>{
                return Object.values(movie)
                .join(" ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            });
            return setSearchResults({ ...state, movies: newPlayList });
        } else {
            return setSearchResults({ ...state, movies: movies });
        }
	}
  
	return (
	<HomeTemplate onUserSearch={onUserSearch} searchTerm={searchTerm} movies={movies} searchResults={searchResults} />
	)
} 
export default Home;