"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Crective",
    position: "Full Stack Developer",
    period: "October 2024 - Present",
    location: "OnSite",
    description:
      "Leading the development of full-stack web applications across various domains. Collaborating with cross-functional teams to build scalable, maintainable, and user-centric solutions. Responsible for developing dynamic front-end UIs using React and Next.js and building robust back-end APIs using Node.js and Express.",
    projects: [
      { name: "German Guest Post", url: "https://germanguestpost.com/en" },
      { name: "Auto Publish", url: "https://autopublish.fun/" },
      { name: "Maristo Chats", url: "https://maristochats.fr/" },
      { name: "Joaquin Sabina", url: "https://joaquinsabina.net/" },
      { name: "The Prominente", url: "https://theprominente.de/" },
      { name: "The Berlin Mag", url: "https://theberlinmag.de/" },
    ],
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "REST APIs",
      "MongoDB",
      "Git",
    ],
  },
  {
    company: "Tekbex",
    position: "Full Stack Developer",
    period: "January 2024 - September 2024",
    location: "OnSite",
    description:
      "Worked on both front-end and back-end development of web platforms. Contributed to designing reusable UI components, integrating third-party APIs, and optimizing application performance. Participated in daily stand-ups and agile sprint planning, ensuring timely project delivery.",
    projects: [
      { name: "TopSpot", url: "https://portal.topspotmedia.net/auth/login" },
      { name: "Tekbex", url: "https://tekbex.com/" },
      { name: "Choicedone", url: "https://choicedone.com/" },
    ],
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Auth",
      "API Integration",
    ],
  },
  {
    company: "TheMillionsBit",
    position: "Frontend Developer Intern",
    period: "November 2023 - December 2023",
    location: "OnSite",
    description:
      "Completed a 2-month internship focused on developing responsive front-end layouts and implementing client UI requirements. Contributed to the live deployment of the Muhafiz Oxygen project and gained hands-on experience in real-world product development.",
    projects: [
      { name: "Muhafiz Oxygen", url: "https://www.muhafizoxygen.com/" },
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Version Control (Git)",
    ],
  },
];


export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-primary/30 pl-8 ml-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-12 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                  <Card className="p-6 bg-background/50 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.position}</h3>
                        <h4 className="text-lg font-medium text-primary">{exp.company}</h4>
                      </div>
                      <div className="mt-2 md:mt-0 text-foreground/70">
                        <div className="flex items-center mb-1">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/80 mb-4">{exp.description}</p>

                    {exp.projects.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-medium mb-2">Projects:</h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {exp.projects.map((project, idx) => (
                            <li key={idx}>
                              <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {project.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

