import React from "react";
import "./Resume.css"

export default function Resume() {
    return (
        <div className="resume">
        <h2>My Resume</h2>
        <a className="download" href="/assets/Resume.zip">Download Resume</a>
        <a href="/about"><img src="/assets/Resume.png" alt="Resume"/></a>
    </div>     
    );
}