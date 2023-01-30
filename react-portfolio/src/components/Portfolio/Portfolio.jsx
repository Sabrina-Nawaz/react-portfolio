import React from "react";
import "./Portfolio.css"

function Portfolio() {
    return (
        <section id="work" class="side-bar">
        <h2>Work</h2>
        <div class="anchor-imgs">
        <div class="study">
            <h3>Prework Study Guide</h3>
            <a href="https://sabrina-nawaz.github.io/prework-study-guide/" class="study-guide responsive-img"></a>
        </div>
        <div class="refact">
            <h3>Refactor Horiseon</h3>
            <a href="https://sabrina-nawaz.github.io/refactor-horiseon/" class="refactor responsive-img"></a>
        </div>
        <div class="calc">
            <h3>Calculator</h3>
            <a href="#" class="calculator responsive-img"></a>
        </div>        
        </div>
    );
}