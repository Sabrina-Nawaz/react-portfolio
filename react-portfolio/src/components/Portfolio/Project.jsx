import React from "react";

export default function Project({title, url, imgUrl}) {
    return (
        <div className="project">
        <h3>{title}</h3>
        <a href={url} className="responsive-img">
            <img src={imgUrl} alt={title}/>
        </a>
    </div>     
    );
}
