import React from "react";

export default function Project({title, gitHub, gitHubUrl, url, imgUrl}) {
    return (
        <div className="project">
        <h2>{title}</h2>
        <h3><a href={gitHub} src={gitHubUrl}></a></h3>
        <a href={url} className="responsive-img">
            <img src={imgUrl} alt={title}/>
        </a>
    </div>     
    );
}
