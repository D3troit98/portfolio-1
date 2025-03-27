"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Sparkles } from "lucide-react"
import Link from "next/link"

export default function CosmereExperience() {
  const [activeSystem, setActiveSystem] = useState<string | null>(null)
  const [hoveredQuote, setHoveredQuote] = useState<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Animation for particles
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full container size
    const resizeCanvas = () => {
      if (!containerRef.current || !canvas) return
      canvas.width = containerRef.current.offsetWidth
      canvas.height = containerRef.current.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1

        // Color based on active system
        if (activeSystem === "allomancy") {
          this.color = `rgba(255, 215, 0, ${Math.random() * 0.7 + 0.3})` // Gold
        } else if (activeSystem === "surgebinding") {
          this.color = `rgba(0, 191, 255, ${Math.random() * 0.7 + 0.3})` // Blue
        } else if (activeSystem === "awakening") {
          this.color = `rgba(138, 43, 226, ${Math.random() * 0.7 + 0.3})` // Purple
        } else {
          this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`
        }
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Boundary check
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Connect particles with lines if they're close enough
      connectParticles()

      requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = () => {
      if (!ctx) return
      const maxDistance = 100

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = particles[i].color
            ctx.lineWidth = 0.2
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [activeSystem])

  // Sanderson quotes
  const quotes = [
    {
      text: "The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.",
      book: "The Way of Kings",
    },
    {
      text: "You cannot have a villain who can defeat the hero. You can only have a hero who can defeat himself.",
      book: "The Hero of Ages",
    },
    {
      text: "The mark of a great man is one who knows when to set aside the important things in order to accomplish the vital ones.",
      book: "The Alloy of Law",
    },
    {
      text: "Life before death. Strength before weakness. Journey before destination.",
      book: "The Way of Kings",
    },
  ]

  // Magic systems
  const magicSystems = [
    {
      id: "allomancy",
      name: "Allomancy",
      description: 'The ability to "burn" metals to enhance physical and mental capabilities.',
      series: "Mistborn",
      color: "from-yellow-300 to-amber-600",
    },
    {
      id: "surgebinding",
      name: "Surgebinding",
      description: "Powers granted by bonding with spren, allowing manipulation of fundamental forces.",
      series: "The Stormlight Archive",
      color: "from-blue-400 to-cyan-600",
    },
    {
      id: "awakening",
      name: "Awakening",
      description: "The ability to imbue objects with life using stored Breath and specific Commands.",
      series: "Warbreaker",
      color: "from-purple-500 to-violet-700",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0F1624] text-[hsl(204,23.8%,95.9%)] font-['Space_Grotesk',_sans-serif]">
      <div
        ref={containerRef}
        className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 py-16"
      >
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        <div className="z-10 max-w-5xl w-full">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Cosmere Experience
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-center mb-12 text-[hsl(204,23.8%,95.9%)/80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore the magical systems from Brandon Sanderson's Cosmere universe
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {magicSystems.map((system) => (
              <motion.div
                key={system.id}
                className={`bg-[hsl(232.7,27.3%,23.7%)] p-6 rounded-lg cursor-pointer transition-all duration-300 border-2 ${activeSystem === system.id ? "border-[hsl(34.9,98.6%,72.9%)]" : "border-transparent"}`}
                whileHover={{ scale: 1.03 }}
                onClick={() => setActiveSystem(system.id)}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-4 bg-gradient-to-br ${system.color} flex items-center justify-center`}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{system.name}</h3>
                <p className="text-[hsl(204,23.8%,95.9%)/70] mb-3">{system.description}</p>
                <p className="text-[hsl(34.9,98.6%,72.9%)] text-sm">
                  <BookOpen className="inline-block w-4 h-4 mr-1" />
                  {system.series}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Words of Inspiration</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {quotes.map((quote, index) => (
                <motion.div
                  key={index}
                  className="bg-[hsl(232.7,27.3%,23.7%)/50] backdrop-blur-sm p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  onMouseEnter={() => setHoveredQuote(index)}
                  onMouseLeave={() => setHoveredQuote(null)}
                >
                  <p className="italic mb-3">{quote.text}</p>
                  <p
                    className={`text-right text-sm transition-colors duration-300 ${hoveredQuote === index ? "text-[hsl(34.9,98.6%,72.9%)]" : "text-[hsl(204,23.8%,95.9%)/70]"}`}
                  >
                    — {quote.book}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[hsl(205.1,100%,36.1%)] hover:bg-[hsl(205.1,100%,30%)] text-white py-3 px-6 rounded-md transition-colors duration-300"
            >
              Return to Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
