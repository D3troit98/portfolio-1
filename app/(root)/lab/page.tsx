"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Beaker, ExternalLink, Maximize2, Minimize2, Play, RefreshCw } from "lucide-react"
import Link from "next/link"

type Experiment = {
  id: string
  title: string
  description: string
  tags: string[]
  component: React.ReactNode
}

export default function InteractiveLab() {
  const [activeExperiment, setActiveExperiment] = useState<string | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef<HTMLDivElement>(null)

  // Track mouse position for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Experiments
  const experiments: Experiment[] = [
    {
      id: "particle-flow",
      title: "Particle Flow",
      description: "Interactive particle system that responds to mouse movement",
      tags: ["Canvas", "Animation", "Interactive"],
      component: <ParticleFlow mousePosition={mousePosition} />,
    },
    {
      id: "audio-visualizer",
      title: "Audio Visualizer",
      description: "Visualize audio frequencies with dynamic animations",
      tags: ["Web Audio API", "Canvas", "Visualization"],
      component: <AudioVisualizer />,
    },
    {
      id: "generative-art",
      title: "Generative Art",
      description: "Procedurally generated artwork that creates unique patterns",
      tags: ["Generative", "SVG", "Algorithms"],
      component: <GenerativeArt />,
    },
    {
      id: "physics-playground",
      title: "Physics Playground",
      description: "Interactive physics simulation with draggable objects",
      tags: ["Physics", "Interaction", "Simulation"],
      component: <PhysicsPlayground />,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0F1624] text-[hsl(204,23.8%,95.9%)] font-['Space_Grotesk',_sans-serif]">
      {/* Custom cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border-2 border-[hsl(34.9,98.6%,72.9%)] pointer-events-none z-50 mix-blend-difference transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transition: "transform 0.1s ease-out, width 0.2s, height 0.2s",
        }}
      />

      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Beaker className="w-8 h-8 mr-2 text-[hsl(34.9,98.6%,72.9%)]" />
            <h1 className="text-4xl md:text-5xl font-bold">Interactive Lab</h1>
          </div>
          <p className="text-lg md:text-xl text-[hsl(204,23.8%,95.9%)/80] max-w-2xl mx-auto">
            A collection of creative coding experiments and interactive demos showcasing web technologies and creative
            coding techniques.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              className="bg-[hsl(232.7,27.3%,23.7%)] rounded-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setActiveExperiment(experiment.id)}
            >
              <div className="h-48 bg-[#0F1624]/50 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-30 group-hover:opacity-10 transition-opacity">
                  {experiment.id === "particle-flow" && <ParticleFlow mousePosition={mousePosition} preview />}
                  {experiment.id === "audio-visualizer" && <AudioVisualizer preview />}
                  {experiment.id === "generative-art" && <GenerativeArt preview />}
                  {experiment.id === "physics-playground" && <PhysicsPlayground preview />}
                </div>
                <div className="z-10 bg-[#0F1624]/80 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-8 h-8 text-[hsl(34.9,98.6%,72.9%)]" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{experiment.title}</h3>
                <p className="text-[hsl(204,23.8%,95.9%)/70] mb-4">{experiment.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experiment.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-[#0F1624] text-[hsl(34.9,98.6%,72.9%)] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[hsl(205.1,100%,36.1%)] hover:bg-[hsl(205.1,100%,30%)] text-white py-3 px-6 rounded-md transition-colors duration-300"
          >
            Return to Portfolio <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Fullscreen experiment modal */}
      <AnimatePresence>
        {activeExperiment && (
          <motion.div
            className={`fixed inset-0 z-50 bg-[#0F1624]/95 flex flex-col ${isFullscreen ? "p-0" : "p-4 md:p-8"}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={`flex justify-between items-center ${isFullscreen ? "p-4 bg-[#0F1624]/80" : "mb-4"}`}>
              <h2 className="text-xl font-bold">{experiments.find((e) => e.id === activeExperiment)?.title}</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 rounded-full hover:bg-[hsl(232.7,27.3%,23.7%)] transition-colors"
                >
                  {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setActiveExperiment(null)}
                  className="p-2 rounded-full hover:bg-[hsl(232.7,27.3%,23.7%)] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 bg-[#0F1624]/30 rounded-lg overflow-hidden">
              {experiments.find((e) => e.id === activeExperiment)?.component}
            </div>
            <div className={`flex justify-between items-center ${isFullscreen ? "p-4 bg-[#0F1624]/80" : "mt-4"}`}>
              <div className="flex gap-2">
                {experiments
                  .find((e) => e.id === activeExperiment)
                  ?.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-[#0F1624] text-[hsl(34.9,98.6%,72.9%)] px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
              </div>
              <button
                onClick={() => {
                  setActiveExperiment(activeExperiment)
                }}
                className="p-2 rounded-full hover:bg-[hsl(232.7,27.3%,23.7%)] transition-colors"
                title="Reset experiment"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Particle Flow Experiment
function ParticleFlow({
  mousePosition,
  preview = false,
}: { mousePosition: { x: number; y: number }; preview?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    const particles: any[] = []
    const particleCount = preview ? 30 : 100

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
        this.color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Boundary check
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Mouse interaction (only in full mode)
        if (!preview) {
          const dx = this.x - mousePosition.x
          const dy = this.y - mousePosition.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const angle = Math.atan2(dy, dx)
            this.speedX += Math.cos(angle) * 0.2
            this.speedY += Math.sin(angle) * 0.2
          }

          // Limit speed
          const speed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY)
          if (speed > 3) {
            this.speedX = (this.speedX / speed) * 3
            this.speedY = (this.speedY / speed) * 3
          }
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
    let animationId: number

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Connect particles with lines
      if (!preview) {
        connectParticles()
      }

      animationId = requestAnimationFrame(animate)
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
            ctx.strokeStyle = `rgba(100, 200, 255, ${1 - distance / maxDistance})`
            ctx.lineWidth = 0.5
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
      cancelAnimationFrame(animationId)
    }
  }, [mousePosition, preview])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

// Audio Visualizer Experiment
function AudioVisualizer({ preview = false }: { preview?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!canvasRef.current || preview) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create audio element
    const audio = new Audio()
    audio.crossOrigin = "anonymous"
    audio.src = "https://cdn.freesound.org/previews/630/630155_1648170-lq.mp3" // Example audio from freesound.org
    audio.loop = true
    audioRef.current = audio

    // Initialize audio context
    const initAudio = () => {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext
      const audioContext = new AudioContext()
      audioContextRef.current = audioContext

      const analyser = audioContext.createAnalyser()
      analyser.fftSize = 256
      analyserRef.current = analyser

      const source = audioContext.createMediaElementSource(audio)
      source.connect(analyser)
      analyser.connect(audioContext.destination)
      sourceRef.current = source
    }

    // Animation loop
    let animationId: number

    const animate = () => {
      if (!ctx || !analyserRef.current) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const analyser = analyserRef.current
      const bufferLength = analyser.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)
      analyser.getByteFrequencyData(dataArray)

      const barWidth = (canvas.width / bufferLength) * 2.5
      let x = 0

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i] / 2

        // Use a gradient based on frequency
        const hue = i * 2
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`

        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

        x += barWidth + 1
      }

      animationId = requestAnimationFrame(animate)
    }

    // Start/stop audio
    const toggleAudio = () => {
      if (!audioContextRef.current) {
        initAudio()
      }

      if (isPlaying) {
        audio.pause()
        cancelAnimationFrame(animationId)
      } else {
        audio.play()
        animate()
      }

      setIsPlaying(!isPlaying)
    }

    // Add click event listener to canvas
    canvas.addEventListener("click", toggleAudio)

    // For preview mode, just draw some static bars
    if (preview) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const barCount = 20
      const barWidth = (canvas.width / barCount) * 2.5
      let x = 0

      for (let i = 0; i < barCount; i++) {
        const barHeight = Math.random() * 50 + 10

        // Use a gradient based on position
        const hue = i * 10
        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`

        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

        x += barWidth + 1
      }
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("click", toggleAudio)
      cancelAnimationFrame(animationId)

      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
      }

      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [isPlaying, preview])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
      {!preview && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {!isPlaying && (
            <div
              className="bg-[#0F1624]/80 p-4 rounded-full pointer-events-auto cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <Play className="w-8 h-8 text-[hsl(34.9,98.6%,72.9%)]" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// Generative Art Experiment
function GenerativeArt({ preview = false }: { preview?: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [seed, setSeed] = useState(Math.random() * 1000)

  useEffect(() => {
    if (!svgRef.current) return

    const svg = svgRef.current

    // Clear SVG
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild)
    }

    // Set SVG dimensions
    const resizeSvg = () => {
      const container = svg.parentElement
      if (!container) return

      svg.setAttribute("width", container.clientWidth.toString())
      svg.setAttribute("height", container.clientHeight.toString())
    }

    resizeSvg()
    window.addEventListener("resize", resizeSvg)

    // Random number generator with seed
    const random = (min: number, max: number) => {
        let solveSeed = seed
      const x = Math.sin(solveSeed++) * 10000
      const r = x - Math.floor(x)
      return min + r * (max - min)
    }

    // Generate art
    const generateArt = () => {
      const width = Number.parseInt(svg.getAttribute("width") || "0")
      const height = Number.parseInt(svg.getAttribute("height") || "0")

      // Create background
      const background = document.createElementNS("http://www.w3.org/2000/svg", "rect")
      background.setAttribute("width", width.toString())
      background.setAttribute("height", height.toString())
      background.setAttribute("fill", "#0F1624")
      svg.appendChild(background)

      // Number of shapes to generate
      const shapeCount = preview ? 10 : 50

      // Generate shapes
      for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElementNS("http://www.w3.org/2000/svg", "path")

        // Generate random path
        const points = []
        const pointCount = Math.floor(random(3, 8))

        for (let j = 0; j < pointCount; j++) {
          const x = random(0, width)
          const y = random(0, height)
          points.push(`${j === 0 ? "M" : "L"} ${x} ${y}`)
        }

        // Close path
        points.push("Z")

        // Set path attributes
        shape.setAttribute("d", points.join(" "))
        shape.setAttribute("fill", `hsla(${random(180, 240)}, 100%, 50%, ${random(0.1, 0.3)})`)
        shape.setAttribute("stroke", `hsla(${random(180, 240)}, 100%, 70%, ${random(0.5, 0.8)})`)
        shape.setAttribute("stroke-width", random(0.5, 2).toString())

        svg.appendChild(shape)
      }

      // Add some circles
      for (let i = 0; i < shapeCount / 2; i++) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")

        circle.setAttribute("cx", random(0, width).toString())
        circle.setAttribute("cy", random(0, height).toString())
        circle.setAttribute("r", random(5, 30).toString())
        circle.setAttribute("fill", `hsla(${random(180, 240)}, 100%, 50%, ${random(0.1, 0.3)})`)
        circle.setAttribute("stroke", `hsla(${random(180, 240)}, 100%, 70%, ${random(0.5, 0.8)})`)
        circle.setAttribute("stroke-width", random(0.5, 2).toString())

        svg.appendChild(circle)
      }
    }

    generateArt()

    // Regenerate on click (only in full mode)
    const handleClick = () => {
      if (!preview) {
        setSeed(Math.random() * 1000)
      }
    }

    svg.addEventListener("click", handleClick)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeSvg)
      svg.removeEventListener("click", handleClick)
    }
  }, [seed, preview])

  return <svg ref={svgRef} className="w-full h-full cursor-pointer" />
}

// Physics Playground Experiment
function PhysicsPlayground({ preview = false }: { preview?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (!container) return

      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Physics objects
    const objects: PhysicsObject[] = []
    const objectCount = preview ? 5 : 15

    class PhysicsObject {
      x: number
      y: number
      radius: number
      mass: number
      vx: number
      vy: number
      color: string
      isDragging: boolean

      constructor(x: number, y: number, radius: number) {
        this.x = x
        this.y = y
        this.radius = radius
        this.mass = radius * radius * Math.PI
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.color = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`
        this.isDragging = false
      }

      update() {
        if (this.isDragging) return

        // Apply gravity
        this.vy += 0.1

        // Update position
        this.x += this.vx
        this.y += this.vy

        // Boundary collision
        if (this.x - this.radius < 0) {
          this.x = this.radius
          this.vx = -this.vx * 0.8
        } else if (this.x + this.radius > canvas.width) {
          this.x = canvas.width - this.radius
          this.vx = -this.vx * 0.8
        }

        if (this.y - this.radius < 0) {
          this.y = this.radius
          this.vy = -this.vy * 0.8
        } else if (this.y + this.radius > canvas.height) {
          this.y = canvas.height - this.radius
          this.vy = -this.vy * 0.8
        }

        // Apply friction
        this.vx *= 0.99
        this.vy *= 0.99
      }

      draw() {
        if (!ctx) return

        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()

        if (this.isDragging) {
          ctx.strokeStyle = "white"
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.radius + 2, 0, Math.PI * 2)
          ctx.stroke()
        }
      }

      contains(x: number, y: number) {
        const dx = this.x - x
        const dy = this.y - y
        return dx * dx + dy * dy < this.radius * this.radius
      }
    }

    // Initialize objects
    for (let i = 0; i < objectCount; i++) {
      const radius = Math.random() * 20 + 10
      const x = Math.random() * (canvas.width - radius * 2) + radius
      const y = Math.random() * (canvas.height - radius * 2) + radius
      objects.push(new PhysicsObject(x, y, radius))
    }

    // Handle mouse events (only in full mode)
    let isDragging = false
    let draggedObject: PhysicsObject | null = null
    let lastMouseX = 0
    let lastMouseY = 0

    if (!preview) {
      canvas.addEventListener("mousedown", (e) => {
        const rect = canvas.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        // Check if mouse is over an object
        for (let i = objects.length - 1; i >= 0; i--) {
          if (objects[i].contains(mouseX, mouseY)) {
            isDragging = true
            draggedObject = objects[i]
            draggedObject.isDragging = true
            lastMouseX = mouseX
            lastMouseY = mouseY
            break
          }
        }
      })

      canvas.addEventListener("mousemove", (e) => {
        if (isDragging && draggedObject) {
          const rect = canvas.getBoundingClientRect()
          const mouseX = e.clientX - rect.left
          const mouseY = e.clientY - rect.top

          // Update object position
          draggedObject.x += mouseX - lastMouseX
          draggedObject.y += mouseY - lastMouseY

          // Update velocity based on mouse movement
          draggedObject.vx = (mouseX - lastMouseX) * 0.5
          draggedObject.vy = (mouseY - lastMouseY) * 0.5

          lastMouseX = mouseX
          lastMouseY = mouseY
        }
      })

      canvas.addEventListener("mouseup", () => {
        if (draggedObject) {
          draggedObject.isDragging = false
        }
        isDragging = false
        draggedObject = null
      })

      canvas.addEventListener("mouseleave", () => {
        if (draggedObject) {
          draggedObject.isDragging = false
        }
        isDragging = false
        draggedObject = null
      })
    }

    // Check collision between objects
    const checkCollision = (a: PhysicsObject, b: PhysicsObject) => {
      const dx = b.x - a.x
      const dy = b.y - a.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < a.radius + b.radius) {
        // Calculate collision response
        const angle = Math.atan2(dy, dx)
        const sin = Math.sin(angle)
        const cos = Math.cos(angle)

        // Rotate velocities
        const vx1 = a.vx * cos + a.vy * sin
        const vy1 = a.vy * cos - a.vx * sin
        const vx2 = b.vx * cos + b.vy * sin
        const vy2 = b.vy * cos - b.vx * sin

        // Calculate new velocities (elastic collision)
        const m1 = a.mass
        const m2 = b.mass
        const u1 = ((m1 - m2) * vx1 + 2 * m2 * vx2) / (m1 + m2)
        const u2 = ((m2 - m1) * vx2 + 2 * m1 * vx1) / (m1 + m2)

        // Rotate velocities back
        a.vx = u1 * cos - vy1 * sin
        a.vy = vy1 * cos + u1 * sin
        b.vx = u2 * cos - vy2 * sin
        b.vy = vy2 * cos + u2 * sin

        // Move objects apart to prevent sticking
        const overlap = a.radius + b.radius - distance
        const moveX = (overlap * cos) / 2
        const moveY = (overlap * sin) / 2

        a.x -= moveX
        a.y -= moveY
        b.x += moveX
        b.y += moveY
      }
    }

    // Animation loop
    let animationId: number

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw objects
      objects.forEach((object) => {
        object.update()
        object.draw()
      })

      // Check collisions
      for (let i = 0; i < objects.length; i++) {
        for (let j = i + 1; j < objects.length; j++) {
          checkCollision(objects[i], objects[j])
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)

      if (!preview) {
        canvas.removeEventListener("mousedown", () => {})
        canvas.removeEventListener("mousemove", () => {})
        canvas.removeEventListener("mouseup", () => {})
        canvas.removeEventListener("mouseleave", () => {})
      }
    }
  }, [preview])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
