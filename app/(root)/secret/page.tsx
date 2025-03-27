/* eslint-disable react/no-unknown-property */
"use client"
import type React from "react"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, EyeOff, Key, Lock, Shield, Sparkles, Unlock } from "lucide-react"
import Link from "next/link"

export default function SecretPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [codeInput, setCodeInput] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [revealedSections, setRevealedSections] = useState<number[]>([])
  const [glyphsActivated, setGlyphsActivated] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const glyphRefs = useRef<(HTMLDivElement | null)[]>([])

  // Secret phrases from Sanderson books
  const secretPhrases = ["Life before death", "Journey before destination", "Strength before weakness"]

  // Simulate authentication process
  const authenticate = () => {
    if (codeInput.toLowerCase() === "bridge four" || codeInput.toLowerCase() === "bridge 4") {
      setIsAuthenticated(true)
      setTimeout(() => {
        setCurrentPhase(1)
      }, 2000)
    } else {
      // Shake effect for wrong password
      if (containerRef.current) {
        containerRef.current.classList.add("shake")
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.classList.remove("shake")
          }
        }, 500)
      }
    }
  }

  // Handle key press for authentication
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      authenticate()
    }
  }

  // Reveal a section of the secret content
  const revealSection = (index: number) => {
    if (!revealedSections.includes(index)) {
      setRevealedSections([...revealedSections, index])
    }
  }

  // Handle glyph activation
  const activateGlyph = (index: number) => {
    if (glyphsActivated < 5) {
      setGlyphsActivated(glyphsActivated + 1)

      // Activate the glyph with visual effect
      if (glyphRefs.current[index]) {
        glyphRefs.current[index]?.classList.add("active")
      }

      // If all glyphs are activated, reveal easter egg
      if (glyphsActivated === 4) {
        setTimeout(() => {
          setShowEasterEgg(true)
        }, 1000)
      }
    }
  }

  // Particle effect for background
  useEffect(() => {
    if (!isAuthenticated) return

    const canvas = document.createElement("canvas")
    const container = document.getElementById("secret-container")
    if (!container) return

    container.appendChild(canvas)
    canvas.style.position = "absolute"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.pointerEvents = "none"
    canvas.style.zIndex = "0"

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    const particles: Particle[] = []
    const particleCount = 50

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
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = `hsla(${Math.random() * 60 + 30}, 100%, 70%, ${Math.random() * 0.3 + 0.2})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Boundary check
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
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

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
      if (container.contains(canvas)) {
        container.removeChild(canvas)
      }
    }
  }, [isAuthenticated])

  return (
    <div className="min-h-screen bg-[#0F1624] text-[hsl(204,23.8%,95.9%)] font-['Space_Grotesk',_sans-serif] flex items-center justify-center p-4">
      <div
        id="secret-container"
        ref={containerRef}
        className="relative w-full max-w-4xl bg-[hsl(232.7,27.3%,23.7%)] rounded-lg overflow-hidden shadow-2xl border border-[hsl(204,23.8%,95.9%)/10]"
      >
        {/* Authentication screen */}
        <AnimatePresence>
          {!isAuthenticated && (
            <motion.div className="p-8 md:p-12" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex items-center justify-center mb-8">
                <Shield className="w-10 h-10 text-[hsl(34.9,98.6%,72.9%)] mr-3" />
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Knights Radiant Portal</h1>
              </div>

              <div className="text-center mb-8">
                <p className="text-[hsl(204,23.8%,95.9%)/80] mb-2">Authentication Required</p>
                <p className="text-sm text-[hsl(204,23.8%,95.9%)/60]">
                  Only those who have spoken the oaths may proceed.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <Lock className="w-4 h-4 mr-2 text-[hsl(34.9,98.6%,72.9%)]" />
                  <label className="text-sm font-medium">Enter the passphrase:</label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={codeInput}
                    onChange={(e) => setCodeInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Speak the words..."
                    className="w-full bg-[#0F1624] border border-[hsl(204,23.8%,95.9%)/20] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[hsl(34.9,98.6%,72.9%)] text-[hsl(204,23.8%,95.9%)]"
                  />
                  <button
                    onClick={authenticate}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[hsl(34.9,98.6%,72.9%)] hover:text-[hsl(34.9,98.6%,82.9%)] transition-colors"
                  >
                    <Key className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-sm text-[hsl(204,23.8%,95.9%)/60] hover:text-[hsl(204,23.8%,95.9%)] flex items-center transition-colors"
                >
                  {showHint ? <EyeOff className="w-4 h-4 mr-1" /> : <Eye className="w-4 h-4 mr-1" />}
                  {showHint ? "Hide hint" : "Show hint"}
                </button>

                <Link
                  href="/"
                  className="text-sm text-[hsl(204,23.8%,95.9%)/60] hover:text-[hsl(204,23.8%,95.9%)] transition-colors"
                >
                  Return to safety
                </Link>
              </div>

              <AnimatePresence>
                {showHint && (
                  <motion.div
                    className="mt-6 p-4 bg-[#0F1624] rounded-md border border-[hsl(204,23.8%,95.9%)/10]"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-sm text-[hsl(204,23.8%,95.9%)/70]">
                      <span className="text-[hsl(34.9,98.6%,72.9%)]">Hint:</span> Kaladin&apos;s squad in the Stormlight
                      Archive. (Two words or a word and a number)
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Authenticated content */}
        <AnimatePresence>
          {isAuthenticated && (
            <motion.div
              className="p-8 md:p-12 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Phase 1: Initial access */}
              {currentPhase === 1 && (
                <div>
                  <div className="flex items-center justify-center mb-8">
                    <Unlock className="w-10 h-10 text-[hsl(34.9,98.6%,72.9%)] mr-3" />
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Access Granted</h1>
                  </div>

                  <div className="text-center mb-12">
                    <p className="text-[hsl(204,23.8%,95.9%)] mb-4">
                      Welcome, Radiant. The archives are now open to you.
                    </p>
                    <p className="text-sm text-[hsl(204,23.8%,95.9%)/70] mb-8">
                      &ldquo;Sometimes a hypocrite is nothing more than a man in the process of changing.&rdquo;
                    </p>

                    <button
                      onClick={() => setCurrentPhase(2)}
                      className="bg-[hsl(205.1,100%,36.1%)] hover:bg-[hsl(205.1,100%,30%)] text-white py-2 px-6 rounded-md transition-colors duration-300 flex items-center mx-auto"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Proceed to the Archives
                    </button>
                  </div>

                  <div className="grid grid-cols-5 gap-4">
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          glyphRefs.current[index] = el;
                        }}
                        className="aspect-square bg-[#0F1624] rounded-md flex items-center justify-center cursor-pointer hover:bg-[#0F1624]/80 transition-all duration-300 glyph"
                        onClick={() => activateGlyph(index)}
                      >
                        <div className="w-12 h-12 opacity-20 hover:opacity-100 transition-opacity duration-300">
                          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d={
                                [
                                  "M50 10 L90 50 L50 90 L10 50 Z",
                                  "M20 20 L80 20 L80 80 L20 80 Z",
                                  "M50 10 L90 90 L10 90 Z",
                                  "M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z",
                                  "M50 10 A40 40 0 1 0 50 90 A40 40 0 1 0 50 10 Z",
                                ][index]
                              }
                              fill="none"
                              stroke="hsl(34.9,98.6%,72.9%)"
                              strokeWidth="4"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Phase 2: Archives */}
              {currentPhase === 2 && (
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">The Archives</h1>
                    <div className="flex items-center text-sm text-[hsl(34.9,98.6%,72.9%)]">
                      <Sparkles className="w-4 h-4 mr-1" />
                      <span>Clearance Level: Radiant</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {secretPhrases.map((phrase, index) => (
                      <div
                        key={index}
                        className="bg-[#0F1624] rounded-lg p-6 cursor-pointer hover:bg-[#0F1624]/80 transition-all duration-300 border border-[hsl(204,23.8%,95.9%)/10]"
                        onClick={() => revealSection(index)}
                      >
                        <h3 className="text-xl font-bold mb-4 text-[hsl(34.9,98.6%,72.9%)]">{phrase}</h3>

                        <AnimatePresence>
                          {revealedSections.includes(index) ? (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-[hsl(204,23.8%,95.9%)/80] mb-4">
                                {
                                  [
                                    "The First Ideal of the Knights Radiant. A commitment to protect those who cannot protect themselves.",
                                    "The Third Ideal of the Knights Radiant. The destination is not as important as the journey itself.",
                                    "The Second Ideal of the Knights Radiant. True strength comes from acknowledging and overcoming weakness.",
                                  ][index]
                                }
                              </p>
                              <div className="text-sm text-[hsl(204,23.8%,95.9%)/60]">
                                <span className="text-[hsl(34.9,98.6%,72.9%)]">Order:</span>{" "}
                                {["Windrunners", "Lightweavers", "Edgedancers"][index]}
                              </div>
                            </motion.div>
                          ) : (
                            <div className="text-[hsl(204,23.8%,95.9%)/50] text-sm">Click to reveal the meaning...</div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setCurrentPhase(1)}
                      className="text-[hsl(204,23.8%,95.9%)/70] hover:text-[hsl(204,23.8%,95.9%)] transition-colors"
                    >
                      ← Back
                    </button>

                    <Link
                      href="/"
                      className="text-[hsl(204,23.8%,95.9%)/70] hover:text-[hsl(204,23.8%,95.9%)] transition-colors"
                    >
                      Return to Portfolio
                    </Link>
                  </div>
                </div>
              )}

              {/* Easter egg */}
              <AnimatePresence>
                {showEasterEgg && (
                  <motion.div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="bg-[#0F1624] p-8 rounded-lg max-w-md border border-[hsl(34.9,98.6%,72.9%)]"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="text-2xl font-bold mb-4 text-[hsl(34.9,98.6%,72.9%)]">The Words Are Accepted</h2>
                      <p className="mb-6 text-[hsl(204,23.8%,95.9%)]">
                        &ldquo;Life before death. Strength before weakness. Journey before destination.&rdquo;
                      </p>
                      <p className="mb-6 text-[hsl(204,23.8%,95.9%)/80]">
                        You have spoken the First Ideal of the Knights Radiant. The Stormfather acknowledges your oath.
                      </p>
                      <div className="flex justify-end">
                        <button
                          onClick={() => setShowEasterEgg(false)}
                          className="bg-[hsl(205.1,100%,36.1%)] hover:bg-[hsl(205.1,100%,30%)] text-white py-2 px-6 rounded-md transition-colors duration-300"
                        >
                          Close
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>



      <style jsx global>{`
        .glyph.active svg path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: dash 2s linear forwards;
          stroke: hsl(34.9,98.6%,82.9%);
          filter: drop-shadow(0 0 8px hsl(34.9,98.6%,72.9%));
        }

        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }

        .shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }

        @keyframes shake {
          10%, 90% {
            transform: translate3d(-1px, 0, 0);
          }

          20%, 80% {
            transform: translate3d(2px, 0, 0);
          }

          30%, 50%, 70% {
            transform: translate3d(-4px, 0, 0);
          }

          40%, 60% {
            transform: translate3d(4px, 0, 0);
          }
        }
      `}</style>
    </div>
  )
}
