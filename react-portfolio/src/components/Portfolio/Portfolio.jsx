import React from "react";
import "./Portfolio.css"
import Project from "./Project";

export default function Portfolio() {
    return (
        <section>
        <div className="projects">
        <Project title="BC Music Generator" gitHub="https://github.com/Sabrina-Nawaz/music-generator-" url="https://bc-music-generator.herokuapp.com/" imgUrl="/assets/music-generator.png"/>
        <Project title="Weather Dashboard" gitHub="https://github.com/Sabrina-Nawaz/weather-dashboard" url="https://sabrina-nawaz.github.io/weather-dashboard/" imgUrl="/assets/weather-app.png"/>
        <Project title="Work Day Scheduler" gitHub="https://github.com/Sabrina-Nawaz/work-day-scheduler" url="https://sabrina-nawaz.github.io/work-day-scheduler/" imgUrl="/assets/workday-scheduler.png"/>
        <Project title="Code Quiz" gitHub="https://github.com/Sabrina-Nawaz/code-quiz" url="https://sabrina-nawaz.github.io/code-quiz/" imgUrl="/assets/code-quiz.png"/>
        <Project title="Custom Fit" gitHub="https://github.com/bleachevil/Project1-WorkoutLinks" url="https://bleachevil.github.io/Project1-Workout/index.html" imgUrl="/assets/customfit.png"/>
        <Project title="Password Generator" gitHub="https://github.com/Sabrina-Nawaz/password-generator" url="https://sabrina-nawaz.github.io/password-generator/" imgUrl="/assets/password.png"/>
        </div>
        </section>
    );
}
