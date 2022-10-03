import React from "react";
import {ImageProps} from '../../helper/types';

const ImageCard = (props:ImageProps) => {
    const {width, height,image} = props;
    return(
        <div style={{width:`${width}`,height:`${height}`, backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}></div>
    )
}

export default ImageCard;