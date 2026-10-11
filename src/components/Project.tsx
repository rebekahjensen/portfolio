import React from "react";
import roadmap from "../assets/images/roadmap.gif";
import mestizaje from "../assets/images/mestizaje.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>

      <div className="projects-grid">
        <div className="project">
          <div className="project-media">
            <img
              src={roadmap}
              alt="roadmap running route planner demonstration"
            />
          </div>

          <h2>roadmap</h2>
          <p>
            Built a running route planner using React, TypeScript,
            and React Leaflet. Users can plan routes on an interactive
            map, calculate distance, undo or redo points, and save
            named routes. As a long-distance runner, I created roadmap
            to simplify planning my runs ahead of time.
          </p>
        </div>

        <div className="project">
          <a
            className="project-media"
            href="https://github.com/ValeriaPoveda/mestizaje"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mestizaje}
              alt="Mestizaje Latin American art exploration application"
            />
          </a>

          <h2>
            <a
              href="https://github.com/ValeriaPoveda/mestizaje"
              target="_blank"
              rel="noreferrer"
            >
              Mestizaje
            </a>
          </h2>
          <p>
            Co-developed with Valeria Poveda, Mestizaje is an interactive
            application built with Python and Tkinter that helps users
            explore Latin American art. Users swipe through randomized
            artworks, and the app identifies their preferred country
            based on their selections. We used MVC architecture, the
            Factory Method design pattern, and a JSON dataset to keep
            the application modular and maintainable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;