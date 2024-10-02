'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Atom, Brain, Wand2, FileAudio, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const projectsRef = useRef<HTMLElement>(null)

  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`flex flex-col min-h-screen`}>
      <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 mx-auto">
        <Link className="flex items-center justify-center" href="#">
          <Atom className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">AI Projects</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" className="text-sm font-medium" onClick={scrollToProjects}>
            Projects
          </Button>
        </nav>
      </header>
      <main className="flex-1 pt-14 mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-secondary flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Cutting-Edge AI Projects with Next.js
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Explore our innovative AI projects built with Next.js, pushing the boundaries of what's possible with artificial intelligence.
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={scrollToProjects}>
                  Explore Projects
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section ref={projectsRef} className="w-full py-12 md:py-24 lg:py-32 bg-background flex justify-center">
          <div className="container px-4 md:px-6 flex flex-col items-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our AI Projects</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <Brain className="w-8 h-8 mb-2 text-primary" />
                    <CardTitle>LLM Jailbreak Game</CardTitle>
                    <CardDescription>Challenge AI models with prompt engineering</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Test your skills in prompt engineering by trying to trick our LLM into revealing a secret word. A fun and educational game that pushes the boundaries of AI interaction.</p>
                    <div className="flex items-center text-primary">
                      <span className="mr-2">Play Now</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <Wand2 className="w-8 h-8 mb-2 text-primary" />
                    <CardTitle>Flux Text-to-Image</CardTitle>
                    <CardDescription>Generate images from text descriptions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Experience the power of the new Flux text-to-image models. Turn your imagination into reality by generating stunning images from textual descriptions.</p>
                    <div className="flex items-center text-primary">
                      <span className="mr-2">Try It Out</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="group">
                <Card className="cursor-pointer transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <FileAudio className="w-8 h-8 mb-2 text-primary" />
                    <CardTitle>AI Transcription Service</CardTitle>
                    <CardDescription>Automatic closed captioning for audio and video</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Upload your audio or video files and let our AI generate accurate closed captions. Perfect for content creators, educators, and accessibility enthusiasts.</p>
                    <div className="flex items-center text-primary">
                      <span className="mr-2">Start Transcribing</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-screen shrink-0 items-center px-4 md:px-6 border-t bg-gray-800 text-white">
          <p className="text-xs text-muted-foreground">© 2024 AI Projects. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}