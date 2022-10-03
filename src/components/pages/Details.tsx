import React from "react";
import { useLocation,Link } from 'react-router-dom';
import ImageCard from "../Atoms/ImageCard";
import {CardProps} from "../../helper/types";


/** 
 * @param props 
 * @returns 
 * 
 */
const Details = (props:any) => {
  const location:any= useLocation();
  const data:any = location.state;
  const {image, title,overview, release_date,vote_average} = data.movieData;
  
  return (      
    <div style={{display: "flex", flexDirection: "row", alignItems: "left", justifyContent: "left", padding: "1px", color: "#333",marginTop:"20px"}}>
      <ImageCard width="45%" height="350px" image={image}></ImageCard>
      <div style={{alignItems: "left", justifyContent: "left", padding:"10px" }}>
         <p><b>Name</b>  {` : ${title}`}</p>
         <p><b>Release Date</b>  {` : ${release_date}`}</p>
         <b>Description</b>
         <p>{`${overview}`}</p>
         <p><b>Rating</b>{`: ${vote_average}`}</p>        
      </div>   
    </div>
  )
}

export default Details;