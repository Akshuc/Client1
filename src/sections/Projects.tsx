import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project.png",
      projectName: "Movix",
      projectLink: "https://jade-selkie-562038.netlify.app/",
      projectDescription:
        "The Movie Web App is a user-friendly and interactive web application designed to provide movie enthusiasts with a comprehensive platform to explore and discover information about movies. The app offers a rich and engaging experience, allowing users to browse an extensive database of movies, view details, and access a wide range of information.",
      projectTech: [
        "React",
        "Redux Toolkit",
        "SCSS",
        "Firebase",
        "Typescript",
        "MovieApi",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://jade-selkie-562038.netlify.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Hoo Bank",
      projectLink: "https://super-pastelito-0faddd.netlify.app/",
      projectDescription:
        "Hoo Bank is a cutting-edge financial platform that empowers users with a wide array of banking services. This comprehensive app allows customers to manage accounts, transfer funds, pay bills, and monitor transactions securely. Utilizing advanced security features like biometric authentication and encryption, users can confidently conduct financial activities. The app also offers personalized financial insights, budgeting tools, and investment options to help customers make informed decisions. With a seamless user interface and real-time updates, the Advanced Bank App sets new standards for modern banking, delivering convenience and efficiency at their fingertips.",
      projectTech: [
        "React",
        "Sockets",
        "Tailwind css",
        "Redux",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://super-pastelito-0faddd.netlify.app/",
      },
    },
    {
      image: "/projectH.png",
      projectName: "JSM Headphones",
      projectLink: "https://phenomenal-panda-8d5033.netlify.app/",
      projectDescription:
        "The JSM Headphones is a user-friendly platform catering to headphone enthusiasts and music lovers. It offers a wide range of headphones from top brands, complete with detailed product pages, customer reviews, and ratings. Users can compare headphones, create wishlists, and enjoy a secure checkout process. With a recommendation engine, informative guides, and social sharing options, the app aims to provide an immersive and personalized shopping experience for all users.",
      projectTech: [
        "React",
        "Node.js",
        "Stripe",
        "MongoDB",
        "Express",
        "Redux Toolkit",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://phenomenal-panda-8d5033.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                        target="_blank"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
