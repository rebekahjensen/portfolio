import React from "react";
import "../assets/styles/Expertise.scss";

function Expertise() {
  return (
    <div id="expertise">
      <div className="items-container">
        <h1>Expertise</h1>

        <div className="expertise-grid">
          <div>
            <h3>Software Development</h3>
            <p>
              Building applications and solving problems with Python,
              JavaScript, React, and SQL.
            </p>
          </div>

          <div>
            <h3>IT Support</h3>
            <p>
              Diagnose and resolve hardware, software, account, authentication, and device issues for students, faculty, and staff.
            </p>
          </div>

          <div>
            <h3>Tools &amp; Collaboration</h3>
            <p>
              Working with Git, Linux, and SSH, with an emphasis on
              clear communication and continuous learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;