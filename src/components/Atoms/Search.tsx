import React from "react";
import {SearchProps} from '../../helper/types';

const Search = (props:SearchProps) => {    
    const {callBackFn,serachTerm} = props;
    return (
        <>
            <input
                type="text"
                placeholder="Search Movies"
                className="prompt"
                value={serachTerm}
                onChange={(e) => callBackFn(e.target.value)}
                />
      </>
    )
}
export default Search;