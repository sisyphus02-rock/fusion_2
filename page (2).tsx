"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Users, BookOpen } from "lucide-react"

export default function Dashboard() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-orange-950">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">Welcome, {user.fullName}!</h1>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-gray-900 border-orange-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-400 flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />
                Upcoming Events
              </CardTitle>
              <CardDescription>Events you might be interested in</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md bg-gray-800 p-4">
                  <h3 className="font-medium text-white">Game Design Challenge</h3>
                  <p className="text-sm text-gray-400">November 29, 2023</p>
                </div>
                <div className="rounded-md bg-gray-800 p-4">
                  <h3 className="font-medium text-white">AI Workshop</h3>
                  <p className="text-sm text-gray-400">November 22, 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-orange-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-400 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Community
              </CardTitle>
              <CardDescription>Connect with other members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md bg-gray-800 p-4">
                  <h3 className="font-medium text-white">Join Discord</h3>
                  <p className="text-sm text-gray-400">Chat with other members</p>
                </div>
                <div className="rounded-md bg-gray-800 p-4">
                  <h3 className="font-medium text-white">Forum</h3>
                  <p className="text-sm text-gray-400">Discuss projects and ideas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-orange-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-400 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Resources
              </CardTitle>
              <CardDescription>Learning materials and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md bg-gray-800 p-4">
                  <h3 className="font-medium text-white">Tutorials</h3>
                  <p className="text-sm text-gray-400">Learn new skills</p>
                </div>
                <div className="rounded-md bg-gray-800 p-4">
                  <h3 className="font-medium text-white">Project Templates</h3>
                  <p className="text-sm text-gray-400">Start building quickly</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
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

