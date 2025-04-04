import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Workshops() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-orange-950">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">AI Workshops & Seminars</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-gray-900 border-orange-500/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">AI Fundamentals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-2">November 22, 2023</p>
              <p className="text-gray-300">
                Learn the basics of artificial intelligence and machine learning in this hands-on workshop. No prior
                experience required!
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
              <CardTitle className="text-white">Computer Vision Workshop</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-2">December 10, 2023</p>
              <p className="text-gray-300">
                Explore computer vision techniques and build applications that can see and understand images.
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
              <CardTitle className="text-white">Natural Language Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400 mb-2">January 5, 2024</p>
              <p className="text-gray-300">
                Learn how to build applications that can understand and generate human language.
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

