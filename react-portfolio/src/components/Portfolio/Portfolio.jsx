import React from "react";
import "./Portfolio.css"
import Project from "./Project";

export default function Portfolio() {
    return (
        <section>
        <div className="projects">
        <Project title="BC Music Generator" gitHub="GitHub" gitHubUrl="https://github.com/Sabrina-Nawaz/music-generator-" url="https://bc-music-generator.herokuapp.com/" imgUrl="/assets/music-generator.png"/>
        <Project title="Weather Dashboard" url="https://sabrina-nawaz.github.io/weather-dashboard/" imgUrl="/assets/weather-app.png"/>
        <Project title="Work Day Scheduler" url="https://sabrina-nawaz.github.io/work-day-scheduler/" imgUrl="/assets/workday-scheduler.png"/>
        <Project title="Code Quiz" url="https://sabrina-nawaz.github.io/code-quiz/" imgUrl="/assets/code-quiz.png"/>
        <Project title="Custom Fit" url="https://bleachevil.github.io/Project1-Workout/index.html" imgUrl="/assets/customfit.png"/>
        <Project title="Password Generator" url="https://sabrina-nawaz.github.io/password-generator/" imgUrl="/assets/password.png"/>
        </div>
        </section>
    );
}
