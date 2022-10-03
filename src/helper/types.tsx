
export type TState = { movies:  TMovie[] | any}
export type TMovieProps = { movies: TMovie[] | any }
export type TMovie = {
  title: string
  overview: string
  release_date: string
}

export interface MovieResults {
    results: Result[]
  }
  
export interface Result {
    title: string;
    overview: string;
    release_date: string; 
    poster_path:string;
    vote_average:number;
    id:number;
    backdrop_path:string;
  }

export interface MovieContextType  {
    movies: TMovie[];
    searchTerm :string;
    searchResults : any;
    retrieveMovies: () => void;
    searchHandler: (searchTerm: string) => void;
  };


 export interface CardProps {
    image: string; 
    title: string;
    overview: string;
    release_date: string;
    vote_average:number;
    id:number;
  }

export interface ImageProps{
    width:string;
    height:string;
    image:string;
}

export interface SearchProps {
    callBackFn : any;
    serachTerm : string;
}
