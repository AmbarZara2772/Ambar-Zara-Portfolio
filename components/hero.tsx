"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Navbar from "@/components/navbar"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <Navbar />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-primary">Hello, I'm</span> <br />
              Ambar Zara
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 mb-6">Mid Level Developer</h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto md:mx-0">
              Passionate about creating responsive, user-friendly web applications with modern technologies. Specialized
              in React, Next.js, and Node.js.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/ambarzara2772"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ambar-zara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ambarzara58@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-foreground/50 hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  )
}

