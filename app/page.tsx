import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Testimonials from "@/components/testimonials"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ResumeView from "@/components/resume-view"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <ResumeView />
      <ScrollToTop />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

