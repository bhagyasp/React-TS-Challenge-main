import React from "react";
import { Link } from "react-router-dom";
import ImageCard from "../Atoms/ImageCard";
import {CardProps} from "../../helper/types";


/**
 * This should be a React component that, at the very least, comprises an image component a title and a description or subheading.
 * Types/Interfaces should be defined in a separate module and imported here
 * 
 * @param props 
 * @returns 
 * 
 */
const Card = (props: CardProps) => {
  const {image,title, overview, release_date,vote_average,id} = props;
  return (      
    <div style={{display: "flex", flexDirection: "column", alignItems: "left", justifyContent: "left", padding: "1px", color: "#000"}}>
      <Link to={`/details/${id}`} state= {{movieData: props}}>
      <ImageCard width="100%" height="350px" image={image}></ImageCard>
      </Link>        
    </div>
  )
}

export default Card