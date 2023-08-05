import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Lucid Motors",
      role: "Senior Full Stack Developer",
      url: "https://lucidmotors.com/#trims",
      start: "January 2019",
      end: "July 2023",
      shortDescription: [
        "Web Platform for Electric Car Owners - Showcase that you worked on a web platform for electric car owners, providing them with features like vehicle settings management, charging availability, and other related functionalities.",
        "Full Stack Web Development - Mention that you have experience in full stack web development, including front-end and back-end technologies such as Node.js, React, Java, and Amazon Web Services (AWS).",
        "Integration of Third-Party APIs - Emphasize that you successfully integrated various APIs from third-party vendors to enhance the platform's functionality.",
        "Test-Driven Development (TDD) - Highlight your expertise in implementing TDD to ensure high-quality software solutions.",
        "Agile Development Experience - Include your experience with agile development processes and participation in daily SCRUM meetings.",
        "Micro-Services Architecture - Mention that you were involved in designing and developing a highly-scalable micro-service for maintaining vehicle data.",
        "DevOps and Cloud Infrastructure - Emphasize your experience in DevOps tasks, automation, cloud infrastructure, continuous integration/delivery, deployment, security, and monitoring.",
        "Experience with Multiple Frameworks - Mention your experience in working with various frameworks such as Angular, React Native, JavaFX, Swing, and Spring Framework.",
        "Achievements - Highlight specific achievements, such as increasing productivity by 30% with a web-based application for monitoring production processes and improving customer satisfaction by 40% with a mobile application for remote monitoring and control.",
        "Leadership and Team Management - Mention that you have led both onshore and offshore teams, managing remote teams from different locations.",
        "Database Design and Implementation - Include your experience in designing and implementing databases, using technologies like MySQL and MongoDB.",
        "API Development - Highlight your experience in developing APIs, including GraphQL APIs for managing vehicle inventory, customer information, and orders.",
        "Responsive Design - Mention that you have implemented responsive designs for web applications using various technologies like Java Server Faces (JSF) and Java Server Pages (JSP).",
        "Version Control - Indicate that you are proficient in using version control systems like Git for collaborative development.",
      ],
    },
    {
      name: "Bass Pro Shops",
      role: "Senior Frontend/UI Developer",
      url: "https://www.basspro.com/l/duffel-travel-bags",
      start: "October 2014",
      end: "December 2018",
      shortDescription: [
        "Single Page Application (SPA) Development - Showcase that you worked on developing a Single Page Application for the Bass Pro website using React.js and a RESTful API backend.",
        "Responsibilities - Emphasize your responsibilities, which include developing and maintaining web-based applications, ensuring visual appeal and mobile-friendliness, and optimizing website content for maximum usability.",
        "Tech Stack and Integration - Highlight the technologies you utilized, such as AngularJS, Angular, React Native, Node.js, Express.js, and Vue.js. Mention your experience in integrating frontend applications with third-party software and services.",
        "Leadership and Guidance - Mention that you provided technical guidance to junior team members, contributing to their growth and skill development.",
        "Project Highlights - Include some project highlights, like re-designing and restructuring the company website, implementing type-script/JavaScript (ES6) for custom UI, and developing interactive dashboards using Vue.js.",
        "DevOps and Deployment - Indicate your experience in DevOps tasks, such as setting up DevOps pipelines for deploying services using Jenkins, Maven, Gradle, etc.",
        "Achievements - Highlight specific achievements, such as reducing product turnaround time by 40% with a new inventory management system and increasing customer engagement by 20% with a web-based retail platform.",
        "UI/UX Standards - Mention that you developed user-friendly, interactive, and responsive e-commerce interfaces in accordance with UI/UX standards.",
        "Version Control and Source Management - Indicate that you have experience with version control systems like Git, Subversion (SVN), and Mercurial.",
        "Documentation and Customer Support - Emphasize that you maintained a robust documentation library, improving customer support and user experience.",
        "Industry Best Practices - Highlight that you established industry best practices for front-end development, ensuring consistency and efficiency in future projects.",
        "Continuous Learning - Mention that you kept up with industry trends and best practices in the web development field.",
        
      ],
    },
    {
      name: "Bayer",
      role: "Android Software Developer",
      url: "https://www.bayer.com/en/",
      start: "July 2013",
      end: "August 2014",
      shortDescription: [
        "Android Development Expertise - Developed applications for Android OS using Java, Kotlin, and Android Studio, Integrated with back-end services and 3rd party APIs to enhance functionality,Proficient in working with Android APIs, Android NDK, and platform SDKs.",
        "User Experience and Interface Design - Analyzed user needs and collaborated with designers to create intuitive user experiences, Developed Android user interfaces with UI layouts, designs, widgets, and other UX components.",
        "Database Operations - Worked with databases, such as SQLite, to store and query data from Android devices.",
        "Testing and Quality Assurance - Conducted unit and integration tests using frameworks like JUnit/Mockito, Karma, and Jasmine, Performed code reviews to ensure product quality and maintain code organization.",
        "Technical Expertise - Developed multiple distributed and microservice solutions using Java/J2EE technologies, Implemented and maintained SOAP/RESTful API services using Java/J2EE, Experienced in Agile and Scrum software development methodologies, Utilized Git version control and other integrated development workflows.",
        "Multi-platform Development - Developed desktop and mobile applications with C# using Visual Studio, Created and maintained platform-independent mobile apps using hybrid frameworks such as Ionic and React Native.",
        "Web Development Skills - Experienced in Vue.js and worked with various Vue.js components to develop UX/UI, Understanding of web services, REST APIs, JSON, and XML.",
        "Documentation and Technical Writing - Developed and maintained technical documents, training materials, and resources related to the products.",
        "Achievements - Developed a web-based application that increased customer satisfaction by 30% by managing customer orders effectively, Developed a mobile application that increased customer engagement by 15% by enabling order tracking.",
        
      ],
    },
    {
      name: "Waystar",
      role: "Software Engineer",
      url: "https://www.waystar.com/request-demo/",
      start: "August 2011",
      end: "June 2013",
      shortDescription: [
        "Web Application Development - Developed new features for Waystar's web application using software engineering best practices, Implemented high-performance, reusable, and reliable code for web applications, Collaborated with product teams to define and implement user interface components for new features.",
        "Full Software Development Lifecycle - Participated in all stages of software development, including design, coding, testing, and maintenance, Troubleshot and resolved software bugs and technical challenges to ensure product stability, Automated deployment processes to reduce time and cost.",
        "Front-End Optimization - Optimized front-end performance to improve user experience, Improved website loading time by 25% through performance optimization.",
        "Security Measures - Implemented security measures for web applications, including authentication and authorization.",
        "Integration and APIs - Developed a cost-effective solution to integrate third-party services and APIs, Built Restful API endpoints with Flask and handled project dependencies with NPM.",
        "Front-End Development Skills - Developed front-end code using HTML, CSS, and JavaScript libraries (e.g., AngularJS, React, or others), Designed and built mobile-responsive functionality for web applications.",
        "Back-End Development Skills - Developed secure and reliable backends to ensure data integrity, Worked with technologies such as Java, J2EE, Servlets, JSP, AJAX, and jQuery.",
        "Testing and Quality Assurance - Participated in code reviews and provided feedback to other development team members, Worked on unit tests, end-to-end testing, and automated tests for applications.",
        "Agile Development - Collaborated in an agile scrum team to design and develop an application-based MVC framework using Angular.js.",
        "Notable Achievements - Implemented a secure payment gateway to enable customers to make payments securely, Developed an advanced search engine to improve website navigation, Built a mobile web application publishing framework component library using AngularJS.",
      ],
    },
    
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
