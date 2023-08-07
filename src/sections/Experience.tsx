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
      name: "Chai One",
      role: "Senior Lead React.js Developer",
      url: "https://www.chaione.com",
      start: "June 2021",
      end: "Present",
      shortDescription: [
        "Diverse Project Experience - I have successfully worked on a variety of projects, including an enterprise application with ReactJS and Redux, a React-based platform for a telecommunication company, a React-powered web application for a healthcare company, and more.",
        "Technology Stack - I am proficient in working with technologies such as ReactJS, Redux, MongoDB, Node.js, Express.js, Angular, Next.js, Vue.js, HTML/CSS, and JavaScript, as well as AWS and Azure cloud services.",
        "Problem-Solving Skills - I have experience in optimizing existing codebases, implementing jQuery plugins, and resolving complex issues related to web development.",
        "Leadership and Mentorship - I have a track record of mentoring and guiding junior developers, providing valuable feedback on coding standards, best practices, and UI/UX design.",
        "DevOps and Continuous Integration: I have expertise in managing DevOps-related tools, implementing CICD pipelines with Azure DevOps, and maintaining development and staging environments.",
        "Unit Testing and Debugging - Experienced in unit testing and debugging using Mocha, Jest, and Enzyme frameworks, ensuring the reliability and quality of code.",
        "Collaboration and Communication - Demonstrates strong collaboration skills, working cross-functionally with various teams and driving projects forward to achieve successful outcomes.",
        "Cloud Architectures: I have experience in designing AWS Lambda implementations, leveraging the cloud for efficient and cost-effective code execution.",
        "Analytics and Monitoring - I have worked with analytics platforms like Google Analytics and monitoring tools like Grafana and Kibana, providing valuable insights into the performance of web applications.",
        "Version Control and Repository Management - I use GitHub for version control and remote repository management, ensuring efficient collaboration and versioning of UI components.",
      ],
    },
    {
      name: "CVS Health Group",
      role: "React.js Developer with Node.js",
      url: "https://www.cvshealth.com/",
      start: "October 2017",
      end: "May 21",
      shortDescription: [
        "Patient EHR Data Sharing - Developed a web application using ReactJS, Node.js, and MongoDB to facilitate patient Electronic Health Record (EHR) data sharing between hospital systems and CVS Health. Implemented Angular 4 UI router for nested HTML components' routing.",
        "Product Catalog - Built a ReactJS application to catalog CVS Health's product line for customers, enhancing their shopping experience.",
        "Automated Testing System - Created an automated testing system using ReactJS, Selenium, and Mocha to ensure the health and stability of CVS Health's eCommerce store. Responsible for requirement analysis, UI design, and development.",
        "Real-Time Communication - Developed a web application using ReactJS and Firebase to facilitate real-time communication between CVS Health's mobile app users, improving customer engagement.",
        "Cloud Infrastructure - Utilized AWS Elastic Compute Cloud (EC2) to generate a cost-effective and efficient elastic computing infrastructure for dynamic applications. Implemented Elastic Load Balancing (ELB) to improve application performance and availability.",
        "AWS Deployment - Proficiently deployed .NET and Angular applications to the AWS environment using AWS Code Deploy service. Utilized AWS Identity and Access Management (IAM) for setting up access permissions.",
        "Full-Stack Development at Sephora - As a UI Full Stack Developer at Sephora, Silas worked on various projects to improve the user experience of Sephora's digital products.",
        "UI Development - Developed and maintained user interfaces for Sephora's websites and mobile applications using technologies such as HTML, CSS, JavaScript, JQuery, Angular, and React.",
        "eCommerce Applications - Contributed to the development of shopping cart applications, customer account management features, payment gateway integration, loyalty points management systems, and eCommerce order tracking.",
        "User Interface Design - Collaborated with UX designers to ensure high-quality design and visual fidelity, aligning with Sephora's brand guidelines.",
        "API Integration - Implemented a RESTful API client for seamless data integration and improved user experience.",
        "Cross-Functional Collaboration - Collaborated closely with backend developers and product team members to ensure end-to-end cross-functional development efforts.",
        "Testing and Quality Assurance - Conducted cross-browser compatibility, performance, and responsiveness testing to ensure a seamless user experience on various devices.",
        "Reusable Components - Produced reusable UI components and elements optimized for maximum performance.",
        "Technical Support - Provided technical support during launch and post-production, ensuring the smooth running of high-quality software products.",
        
      ]
    },
    {
      name: "Sephora",
      role: "UI Fullstack Developer",
      url: "https://www.sephora.com/",
      start: "April 2014",
      end: "September 2017",
      shortDescription: [
        "Fraud Dashboard UI - Worked on the development of the Fraud Dashboard UI, focusing on improving user experience and visual fidelity. Utilized technologies such as React JS, JavaScript, HTML, CSS, and Bootstrap to build modern UI components and responsive experiences for web and mobile platforms.",
        "New Money Filter - Contributed to the development of the New Money Filter feature, ensuring seamless data integration and improved user experience through the implementation of a RESTful API client.",
        "Shopping Cart Application - Developed a shopping cart application, enabling customers to manage their orders and make purchases. Collaborated closely with UX designers to ensure a pixel-perfect user interface.",
        "Customer Account Management - Worked on the development of a customer account management feature, enhancing customer engagement and loyalty through efficient account management.",
        "Payment Gateway Integration - Implemented payment gateway integration, allowing secure authentication and payment processing during checkout.",
        "Loyalty Points Management - Developed the loyalty points management system, providing customers with a seamless experience in tracking and redeeming loyalty points.",
        "eCommerce Order Tracking - Contributed to the development of the eCommerce order tracking feature, enabling customers to track their orders conveniently.",
        "End-to-End Development - Collaborated with Backend Developers and other product team members for end-to-end cross-functional development efforts.",
        "User Interface Design - Developed and maintained user interfaces for Sephora's websites and mobile applications using technologies like HTML, CSS, JavaScript, Angular JS, Angular, and server controls.",
        "Reusable UI Components - Produced reusable UI components and elements optimized for maximum performance, adhering to Test Driven Development (TDD) practices to ensure correctness and maintainability of code.",
        "Prototyping and Wireframes - Developed interactive prototypes and collaborated with UX designers to create wireframes, facilitating stakeholder evaluation of user interface designs.",
        "Workflow Implementation - Implemented workflow features for various modules, including products, contracts, contacts, and submissions.",
        "Web Services and APIs - Developed and maintained various web services and APIs used in different applications, ensuring smooth operation and high-quality software products.",
        "Technical Support - Provided technical support during launch and post-production to ensure the successful deployment and maintenance of software products.",
      ],
    },
    {
      name: "Bank Of America",
      role: "Software Developer Executive",
      url: "https://www.bankofamerica.com/",
      start: "May 2012",
      end: "March 2014",
      shortDescription:[
        "Customer Accounts Monitoring System - Developed a system to monitor customer accounts, enhancing the bank's ability to track and manage customer data securely.",
        "Mobile Banking Application - Played a role in the development of a mobile banking application, providing customers with convenient and secure access to banking services on their mobile devices.",
        "Integration of New Technology - Assisted in integrating new technologies into existing systems, improving system efficiency and customer experience.",
        "Customer Trend Analysis - Created tools to better understand customer trends and needs, helping the bank to offer personalized services.",
        "Back-End Enterprise System - Worked on developing a highly secure and scalable back-end enterprise system to support the bank's online and mobile banking offerings.",
        "Learning New Technologies - Acquired expertise in technologies such as Java/J2EE, Apache Tomcat, and Oracle Database while working on the projects.",
        "Collaboration and Support - Collaborated closely with QA teams to troubleshoot and optimize data and performance issues, ensuring software delivery and accuracy.",
        "Database Development - Developed database architecture and queries to facilitate data manipulation and management.",
        "Software Optimization and Improvements - Ensured the maintenance, bug fixing, and continuous improvement of the existing systems.",
        "Automation and DevOps - Created scripts to automate various business processes and implemented DevOps principles for efficient software development and management.",
        "Research and Innovation - Researched and implemented new technologies to enhance system performance and deliver innovative solutions to address customer issues.",
        "Banking Domain Expertise - Worked in the banking domain, contributing to the development of applications that align with industry standards.",
        "Front-End Development - Developed front-end web forms using ASP and JavaScript, ensuring an engaging user interface.",
      ]

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
