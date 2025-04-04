"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/components/auth-provider"
import { useToast } from "@/components/ui/use-toast"

export default function AdminDashboard() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [eventName, setEventName] = useState("")
  const [eventDate, setEventDate] = useState("")
  const [eventCategory, setEventCategory] = useState("Tech")
  const [eventDescription, setEventDescription] = useState("")

  // Stats for the dashboard
  const [stats, setStats] = useState({
    totalEvents: 3,
    upcomingEvents: 0,
    totalRegistrations: 0,
    activeUsers: 0,
  })

  useEffect(() => {
    if (!user || !user.isAdmin) {
      router.push("/")
    }
  }, [user, router])

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate inputs
    if (!eventName || !eventDate || !eventDescription) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would send this to a backend
    toast({
      title: "Success",
      description: "Event added successfully",
    })

    // Update stats
    setStats((prev) => ({
      ...prev,
      totalEvents: prev.totalEvents + 1,
      upcomingEvents: prev.upcomingEvents + 1,
    }))

    // Reset form
    setEventName("")
    setEventDate("")
    setEventCategory("Tech")
    setEventDescription("")
  }

  if (!user || !user.isAdmin) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-orange-950">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">Admin Dashboard</h1>

        <div className="grid gap-6 mb-12 md:grid-cols-4">
          <div className="rounded-lg bg-gray-900/70 p-6 text-center">
            <h2 className="text-orange-400 mb-2">Total Events</h2>
            <p className="text-4xl font-bold text-white">{stats.totalEvents}</p>
          </div>

          <div className="rounded-lg bg-gray-900/70 p-6 text-center">
            <h2 className="text-orange-400 mb-2">Upcoming Events</h2>
            <p className="text-4xl font-bold text-white">{stats.upcomingEvents}</p>
          </div>

          <div className="rounded-lg bg-gray-900/70 p-6 text-center">
            <h2 className="text-orange-400 mb-2">Total Registrations</h2>
            <p className="text-4xl font-bold text-white">{stats.totalRegistrations}</p>
          </div>

          <div className="rounded-lg bg-gray-900/70 p-6 text-center">
            <h2 className="text-orange-400 mb-2">Active Users</h2>
            <p className="text-4xl font-bold text-white">{stats.activeUsers}</p>
          </div>
        </div>

        <div className="rounded-lg bg-gray-900/70 p-6 mb-12">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">Add New Event</h2>

          <form onSubmit={handleAddEvent} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="eventName">Event Name</Label>
              <Input
                id="eventName"
                placeholder="Enter event name"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="bg-gray-800"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventDate">Event Date</Label>
              <Input
                id="eventDate"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="bg-gray-800"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventCategory">Category</Label>
              <Select value={eventCategory} onValueChange={setEventCategory}>
                <SelectTrigger className="bg-gray-800">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Tech">Tech</SelectItem>
                  <SelectItem value="Gaming">Gaming</SelectItem>
                  <SelectItem value="AI">AI</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventDescription">Description</Label>
              <Textarea
                id="eventDescription"
                placeholder="Enter event description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                className="bg-gray-800 min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
            >
              Add Event
            </Button>
          </form>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Manage Events</h2>

          <Link href="/">
            <Button className="bg-orange-500 text-white hover:bg-orange-600 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

