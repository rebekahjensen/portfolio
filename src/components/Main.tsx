// import React from "react";
import React, { useEffect, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import profilePhoto from "../assets/images/rebekah.png";

function Main() {
  const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  let frame = 0;

  const updateWave = () => {
    const section = sectionRef.current;
    if (!section) return;

    const offset = reducedMotion.matches
      ? 0
      : Math.max(-600, Math.min(600, -section.getBoundingClientRect().top * 0.5));
    section.style.setProperty("--wave-offset", `${offset}px`);
  };

  const handleScroll = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(updateWave);
  };

  updateWave();
  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => {
    window.removeEventListener("scroll", handleScroll);
    cancelAnimationFrame(frame);
  };
}, []);

  return (
    <div className="container">
      <div className="about-section" ref={sectionRef}>        <div className="image-wrapper">
          <img src={profilePhoto} alt="Rebekah Jensen" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/rebekahjensen"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/rebhjensen/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          <h1>Rebekah Jensen</h1>
          <p>Full Stack Engineer & IT Technician</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/rebekahjensen"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/rebhjensen/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;