import React, { createContext, useContext, useState } from "react";
import ApiCaller from "../api/ApiCaller";
import {MovieContextType,Result,TMovie,TState} from '../helper/types';

const MoviesCrudContext  = React.createContext<MovieContextType | null> (null);

export const MoviesCrudContextProvider: React.FC<React.ReactNode> = ({ children }) => {
    
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
        const moviesData = await ApiCaller.getNowPlaying()
      const results = moviesData.results;
      const movies = results.map(ApiCaller.parseMoviesData);
      setState({ ...state, movies:[...movies] })
    }

    //Search Movies
    const searchHandler = (searchTerm:string) => {
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

    const value = {
        movies,
        searchHandler,
        searchTerm,
        searchResults,
        retrieveMovies,
        
    }
    return (
        <MoviesCrudContext.Provider value = { value }>
            {children}
        </MoviesCrudContext.Provider>
    )
}

export function useMoviesCrud() {
    return useContext(MoviesCrudContext);
}