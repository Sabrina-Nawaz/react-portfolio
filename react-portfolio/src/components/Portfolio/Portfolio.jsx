import React from "react";
import "./Portfolio.css"
import Project from "./Project";

export default function Portfolio() {
    return (
        <section>
        <div className="projects">
        <Project title="Prework Study Guide" url="https://sabrina-nawaz.github.io/prework-study-guide/" imgUrl="/assets/Pre-Work Study.png"/>
        <Project title="Refactor Horiseon" url="https://sabrina-nawaz.github.io/refactor-horiseon/" imgUrl="/assets/refactor.png"/>
        </div>
        </section>
    );
}
