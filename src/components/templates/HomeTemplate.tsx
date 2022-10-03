import React, { useEffect, useState } from 'react';
import Search from '../Atoms/Search';
import Movies from '../Molecules/Movies';

const HomeTemplate = (props:any) => {
    const {onUserSearch, searchTerm,movies, searchResults} = props;
    return (
        <div>
        <h1>Now Playing</h1>
        <div style={{float: "right", marginTop:"-50px"}}>
        <Search callBackFn={onUserSearch} serachTerm={searchTerm} />
        </div>
        <div>
          { movies.length > 0 ? <Movies movies={(searchTerm.length < 1 ? movies: searchResults.movies)} /> : null }
        </div>
      </div>
    )
}

export default HomeTemplate;