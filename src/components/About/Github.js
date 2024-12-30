import React from "react";

const ExperienceItem = ({ company, role, period, italic = false }) => (
  <div className="mb-6">
    <h3 className="text-lg font-bold">
      <strong className="purple">{company}</strong>
    </h3>
    <p className={`text-md ${italic ? 'italic' : 'font-semibold'} text-gray-700 mb-1`}>
      {role}
    </p>
    <p className="text-sm text-gray-600">{period}</p>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      company: "Ramblin' Rocket Club",
      role: "Lead Avionics Engineer",
      period: "May 2024 - Present"
    },
    {
      company: "Google",
      role: "Hardware Engineering Intern",
      period: "May 2024 - August 2024"
    },
    {
      company: "The HIVE Makerspace",
      role: "Student Researcher",
      period: "August 2023 - Present"
    },
    {
      company: "SpaceX",
      role: "Test Engineering Intern",
      period: "May 2023 - August 2023",
      italic: true
    },
    {
      company: "Stebner Labs",
      role: "Undergraduate Research Assistant",
      period: "August 2022 - May 2024",
      italic: true
    },
    {
      company: "LIDAR Lab",
      role: "Undergraduate Research Assistant",
      period: "January 2023 - December 2023",
      italic: true
    },
    {
      company: "Georgia Tech Research Institute",
      role: "Student Research Assistant",
      period: "January 2022 - July 2022",
      italic: true
    },
    {
      company: "Listables",
      role: "Software Engineering Intern",
      period: "August 2021 - May 2022",
      italic: true
    },
    {
      company: "UC Irvine",
      role: "Research Assistant",
      period: "March 2021 - July 2021",
      italic: true
    }
  ];

  return (
    <div className="w-full p-6">
      <h1 className="project-heading">
        <strong>Experience</strong>
      </h1>
      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            company={exp.company}
            role={exp.role}
            period={exp.period}
            italic={exp.italic}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;