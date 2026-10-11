import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  const iconStyle = {
    background: "#ec4899",
    color: "white",
  };

  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Sep 2026 – Present"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Student Programmer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Southern Utah University · Cedar City, UT
            </h4>
            <p>
              Support software development using Python, React, and SQL.
              Work with Git, Linux, and SSH in a collaborative development
              environment.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2025 - Sep 2026"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              IT Help Desk Technician
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Southern Utah University · Cedar City, UT
            </h4>
            <p>
              Diagnose and resolve hardware, software, account, authentication, and device issues for students, faculty, and staff.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - Present"
            iconStyle={iconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Leavitt Center Fellow
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Southern Utah University · Cedar City, UT
            </h4>
            <p>
              Promote nonpartisan civic engagement through campus events, community service, and weekly discussions. Research, create, and present Pizza & Politics programs on current political and civic issues.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;




// import React from "react";
// import '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import '../assets/styles/Timeline.scss'

// function Timeline() {
//   return (
//     <div id="history">
//       <div className="items-container">
//         <h1>Career History</h1>
//         <VerticalTimeline>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
//             contentArrowStyle={{ borderRight: '7px solid  white' }}
//             date="2022 - present"
//             iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Technology Consultant</h3>
//             <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
//             <p>
//               Full-stack Web Development, GenAI/LLM, Project Management, Business Development
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="2020 - 2022"
//             iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Full Stack Engineer</h3>
//             <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
//             <p>
//               Frontend Development, Backend Development, User Experience, Team Leading
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="2021 - 2021"
//             iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
//             <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
//             <p>
//               Full-stack Development, API Development, User Experience
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="2020 - 2020"
//             iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
//             icon={<FontAwesomeIcon icon={faBriefcase} />}
//           >
//             <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
//             <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
//             <p>
//               Automation, Data Governance, Statistical Analysis
//             </p>
//           </VerticalTimelineElement>
//         </VerticalTimeline>
//       </div>
//     </div>
//   );
// }

// export default Timeline;