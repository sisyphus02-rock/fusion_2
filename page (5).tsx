import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Tech() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-orange-950">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">Tech Events</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gray-900 border-orange-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">Web Development Bootcamp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-2">December 5, 2023</p>
              <p className="text-gray-300">
                Learn modern web development with React and Next.js in this intensive bootcamp.
              </p>
              <div className="mt-4">
                <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                  Register
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-orange-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">Blockchain Workshop</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-2">December 20, 2023</p>
              <p className="text-gray-300">
                Explore blockchain technology and learn how to build decentralized applications.
              </p>
              <div className="mt-4">
                <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                  Register
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-orange-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">Cybersecurity Seminar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-2">January 15, 2024</p>
              <p className="text-gray-300">
                Learn about the latest threats and how to protect your applications from cyber attacks.
              </p>
              <div className="mt-4">
                <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                  Register
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
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

