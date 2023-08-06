import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Bonjour! My name is Vivek, and I am passionate about creating
            digital content for the web. My interest in web development was
            sparked in 2008 when I created my first project called lavish, a
            social media app built using React and Node.js.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our users and exceed their
            expectations at{" "}
            <Link href="https://lucidmotors.com/#trims" className="link" target="_blank">
              Lucid Motors.
            </Link>
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world
            through my Free sessions, where I demonstrate how to build
            full-stack applications.
          </p>
          <p className="about-grid-info-text">
          I am currently working on a project to develop an online platform that
          allows customers to customize and purchase their dream electric vehicles.
          This platform will include features like 3D personalization, an intuitive user
           interface, secure payment functions, and a direct interface with our production
            team to provide the best customer experience possible. My team is developing the
             platform using React, Node, and GraphQL, with the goal of making the user
              experience as streamlined and enjoyable as you can see here at{" "}
            <Link
              className="link"
              target="_blank"
              href="https://lucidmotors.com/available-cars/?trim=PURE"
            >
              Lucid motor availability,
            </Link>
            &nbsp;aimed at enhancing frontend development skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">

            <li className="about-grid-info-list-item">Java/J2EE</li>
            <li className="about-grid-info-list-item">Python</li>
            <li className="about-grid-info-list-item">Reactjs</li>
            <li className="about-grid-info-list-item">Angular</li>
            <li className="about-grid-info-list-item">Javascript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">C++</li>
            <li className="about-grid-info-list-item">C#</li>
            <li className="about-grid-info-list-item">HTML</li>
            <li className="about-grid-info-list-item">CSS</li>
            <li className="about-grid-info-list-item">AWS</li>
            <li className="about-grid-info-list-item">Spring boot</li>
            <li className="about-grid-info-list-item">Jasper</li>
            <li className="about-grid-info-list-item">Github</li>
            <li className="about-grid-info-list-item">Jenkins</li>
            <li className="about-grid-info-list-item">Sonar</li>
            <li className="about-grid-info-list-item">Kafka js</li>
            <li className="about-grid-info-list-item">Spring</li>
            <li className="about-grid-info-list-item">Maven</li>
            <li className="about-grid-info-list-item">Gradel</li>
            <li className="about-grid-info-list-item">Tomcat</li>
            <li className="about-grid-info-list-item">SQL</li>
            <li className="about-grid-info-list-item">MY SQL</li>
            <li className="about-grid-info-list-item">Postgress SQL</li>
            <li className="about-grid-info-list-item">SQL Server</li>
            
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            {/* <Image src="/kishan.jpeg" alt="profile" fill /> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
