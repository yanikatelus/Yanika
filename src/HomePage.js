import React, { useEffect, useRef, useState } from 'react';
import './HomePage.css';

import GraduationImage from './images/graduation.png';
import suprisedImage from './images/suprised.png';


function HomePage() {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleExperienceChange = (index) => {
    setActiveIndex(index);
  };

  const experiences = [
    {
      id: 1,
      role: "UX Designer, Slide UX",
      date: "June 2022 – March 2023",
      tasks: [
        "Led stages of the UX design process, including user research, wireframing, prototyping, and usability testing (Figma)",
        "Worked closely with designers, developers, and product managers, and stakeholders to integrate research insights into product development cycles",
        "Oversaw research studies to inform the design & development of products including recruiting participants, conducting interviews, and synthesizing research resulting in an increase in user engagement."
      ],
      skills: ["UI&UX Design", "Wireframing", "User research", "Usability Testing", "Communication", "Presentation"]
    },
    {
      id: 2,
      role: "UX/UI Developer Intern, ISTE",
      date: "Jan 2021 — Dec 2021 ",
      tasks: [
        "Orchestrated usability testing sessions, swiftly resolving critical issues and optimizing product performance (Increasing  processing speeds up by 44%)",
        "Developed re-usable, and resizable components which handle synchronous action and asynchronous event using React, and Material-UI for their internal dashboard.",
        "Collaborated with cross-functional stakeholders in the Marketing and Engineering organizations",
        "Built dynamic gauge data visualization to allow users to track times & position."
      ],
      skills: ["Git", "Docker", "Python", "React ", "Usability Testing", "RESTful APIs", "UX/UI Design", "Figma"]
    },
    {
      id: 3,
      role: "UX Engineer Intern, SusArc Tech",
      date: "May 2020 — Dec 2020",
      tasks: [
        "Designed, built, and and patented new designs using typescript, Angular & Python",
        "Solved all layout and user-flow challenges for all screens on both web and Mobile platforms",
        "Collaborated with cross-functional stakeholders in the Marketing and Engineering organizations",
        "Optimized the user interface for increased responsiveness, achieving an improved user experience",
        "Marcadoc Patent: Mott, Shawn et al. 2021. Online Real-time Interactive Collaborative Document System U.S. Patent 63/027,012, filled May 19, 2021. Patent pending"
      ],
      skills: ["Python", "Angular ", "Javascript", "Usability Testing", "Communication", "Presentation"]
    }
    // Add more experiences as needed
  ];

  return (
    <div className="homepage">
      <div className="background-image"></div>
      <header className="top-nav">
        YANIKA TELUS
        <nav>
          <a href="#resume">RESUME</a>
          <a href="#projects">PROJECTS</a>
        </nav>
      </header>
      <aside className="social-links">

        <a href="https://www.linkedin.com/in/yanikatelus/">
          <svg xmlns="http://www.w3.org/2000/svg" width="27" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="white" /></svg>
        </a>

        <a href="https://github.com/yanikatelus">
          <svg width="27" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" fill="white" /></svg></a>
        <a href="https://www.behance.net/yst75921806">
          <svg height="27" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true">
            <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z" fill="white"></path>
          </svg>
        </a>
      </aside>

      {/* Random comment */}

      <div className='background-black-fixed'>

        <div className='fold'>

          <div className="container">
            <div className="Line_Text">
              <span>SOFTWARE</span>
              <span>ENGINEER</span>
            </div>
            <div className="Line_Text">
              <span>UX</span>
              <span>ENGINEER</span>
            </div>
            <div className="Line_Text">
              <span>UI</span>
              <span>DESIGNER</span>
            </div>
            <button className='active_button' onClick={() => window.location.href = '/Telus_Yanika_Resume.pdf'} download="Yanika_Telus_Resume">
              <svg width="100%" height="100%" viewBox="0 0 200 50">
                <rect x="1" y="1" width="198" height="48" fill="transparent" stroke="#fff" strokeWidth="2" rx="8" ry="8" />
              </svg>
              Download Resume
            </button>
          </div>

        </div>
        <section id="section1" >

          <div className="container">
            <div className="professional-experience">

              <div className='box'>
                <div className="title">
                  Professional Experience
                </div>
                <span className='number-block'>03</span>
                <span className="has-accent-color">.</span>
                <div className="bottom-border"></div>
              </div>

              <div id='professional-experience-scrollable'>
                <div className="details">
                  <div className="role">{experiences[activeIndex].role}</div>
                  <div className="date">{experiences[activeIndex].date}</div>
                  <ul>
                    {experiences[activeIndex].tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                  <div className="skills">
                    {experiences[activeIndex].skills.map((skill, index) => (
                      <div className="skill-tag" key={index}>{skill}</div>
                    ))}
                  </div>
                  <div className="navigation-buttons">
                    {experiences.map((experience) => (
                      <button
                        key={experience.id}
                        onClick={() => handleExperienceChange(experience.id - 1)}  // Adjusted for zero-based index if needed
                        className={`nav-button ${experience.id - 1 === activeIndex ? 'active' : ''}`}
                      >
                        {experience.id}
                      </button>
                    ))}
                  </div>
                </div>
              </div>{/* professional-experience-scrollable */}
            </div>
          </div> {/* Container */}

          {/* </div> */}
        </section>
        <section className="container" id="section2">

          {/* <div className="container"> */}
          <div className="edu">
            <div className="title">
              Education
            </div>
            <div className="details">
              <div className="role">Rochester Institute of Technology</div>
              <div className="date">B.S. Human Center Computing
                <br></br>Honors, Cum Laude</div>
              <div className="skills" id='skills-edu'>
                <div className="skill-tag">Software Development</div>
                <div className="skill-tag">New media Design</div>
                <div className="skill-tag">Psychology</div>
              </div>
              <div>
                <img id="grad-pic" src={GraduationImage} alt="Graduation Image" />
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* Skills section */}
        </section>
        <section className="container" id="section3">
          <div className="edu">
            <div className="title">
              Skills
            </div>
            <div className="details">
              <div className="skills-section">
                <div className="skills-column">
                  <h3>Coding</h3>
                  <ul>
                    <li>Objective-C / Swift</li>
                    <li>HTML & CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript, Angular & React</li>
                    <li>Java</li>
                    <li>Data structures & algorithms</li>
                    <li>Docker</li>
                    <li>Firebase</li>
                    <li>Google Cloud</li>
                    <li>Git (Version Control)</li>
                  </ul>
                </div>
                <div className="skills-column">
                  <h3>UX/UI</h3>
                  <ul>
                    <li>Prototyping & User Testing</li>
                    <li>Design Systems</li>
                    <li>UX Research & Interviewing</li>
                    <li>Data Analysis</li>
                    <li>Usability Testing</li>
                    <li>Empathy & User-Centric Design</li>
                    <li>Cross-functional Communication</li>
                    <li>Interaction Design</li>
                    <li>Branding, typography, and color theory</li>
                    <li>Style guides</li>
                  </ul>
                </div>
                <div className="skills-column">
                  <h3>Tools</h3>
                  <ul>
                    <li>Xcode</li>
                    <li>Visual Studio Code</li>
                    <li>Github</li>
                    <li>Figma</li>
                    <li>Sketch</li>
                    <li>Illustrator/Photoshop</li>
                    <li>Azure, Jira</li>
                    <li>Miro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Check Out My Projects*/}
        <section className="container" id="section4"><div className="edu">
          <div className="title">
            Check Out My Projects
            <div className="projects-section">
              <div className="projects-column">
                <div className='card'>
                  <img className='project-img' src={suprisedImage} />
                  <h3>BALANCE APP</h3>
                  <p className='project-p'>
                    An IOS app that Balance is a health app centered on keeping track and
                    providing an overall view of your health and wellness
                  </p>
                </div>
                <div className='tag-section'>
                  <div className="project-tag">Coding</div>
                  <div className="project-tag">Design</div>
                </div>
              </div>
              <div className="projects-column">
                <div className='card'>
                  <img className='project-img' src={suprisedImage} />
                  <h3>BALANCE APP</h3>
                  <p className='project-p'>
                    An IOS app that Balance is a health app centered on keeping track and
                    providing an overall view of your health and wellness
                  </p>
                </div>
                <div className='tag-section'>
                  <div className="project-tag">Coding</div>
                  <div className="project-tag">Design</div>
                </div>
              </div>
              <div className="projects-column">
                <div className='card'>
                  <img className='project-img' src={suprisedImage} />
                  <h3>Tools</h3>
                </div>
              </div>
            </div>
          </div>
        </div></section>
        <section className="container" id="section5">Section 5 Content</section>

      </div>
      {/* Random comment */}

    </div>
  );
}

export default HomePage;