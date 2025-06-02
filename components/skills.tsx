"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Material UI", level: 75 },
      { name: "Ant Design", level: 70 },
      { name: "ShadCN", level: 70 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "Adonis.js", level: 70 },
      { name: "RESTful APIs", level: 75 },
      { name: "MongoDB", level: 65 },
      { name: "SQL", level: 60 },
    ],
  },
  {
    id: "tools",
    name: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 85 },
      { name: "Figma", level: 70 },
      { name: "Responsive Design", level: 85 },
      { name: "Web Performance", level: 75 },
      { name: "SEO Basics", level: 65 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-center">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="frontend" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                {skillCategories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card className="p-6">
                    <div className="grid gap-6">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-foreground/70">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2.5">
                            <motion.div
                              className="bg-primary h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                            ></motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

