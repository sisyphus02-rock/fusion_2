"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (user.isAdmin) {
        router.push("/admin-dashboard");
      } else {
        router.push("/dashboard");
      }
    }
  }, [user, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-orange-950">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <section className="flex flex-col items-center justify-center gap-8">
          <div className="relative h-[400px] w-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9o7tiPQPowloHmp1nYXcVKrNyZyEKr.png"
              alt="Fusion Club 3D Head"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="max-w-2xl space-y-6 text-center">
            <h1 className="text-5xl font-bold text-white">The Fusion Club</h1>
            <p className="text-xl text-gray-300">
              Where innovation, creativity, and technology come together to build the future!
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                className="bg-orange-500 text-white hover:bg-orange-600 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </Button>
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-500/10 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                onClick={() => setShowSignupModal(true)}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-24 text-center">
          <h2 className="mb-12 text-4xl font-bold text-white">About Us</h2>
          <div className="mx-auto max-w-4xl space-y-6 text-gray-300">
            <p>
              The Fusion Club is a dynamic community where innovation, creativity, and technology
              collide to shape the future. We bring together passionate minds from diverse fields to
              collaborate, learn, and build groundbreaking projects.
            </p>
            <p>
              Whether you&apos;re a coder, designer, or an innovator, Fusion Club is the place to connect,
              grow, and push boundaries!
            </p>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">Explore Events</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-orange-900/50 to-black">
              <div className="p-6">
                <h3 className="mb-6 text-center text-2xl font-bold text-white">Gaming</h3>
                <div className="rounded-lg bg-gray-800/50 p-6">
                  <h4 className="text-xl font-bold text-white">Game Design Challenge</h4>
                  <p className="mt-2 text-sm text-gray-400">November 29, 2023</p>
                  <span className="mt-2 inline-block rounded-full bg-orange-900/50 px-3 py-1 text-xs text-white">
                    Gaming
                  </span>
                  <p className="mt-4 text-gray-300">
                    Design and prototype a game in just 48 hours! Work in teams or solo to create something amazing.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-orange-900/50 to-black">
              <div className="p-6">
                <h3 className="mb-6 text-center text-2xl font-bold text-white">Tech</h3>
                <div className="rounded-lg bg-gray-800/50 p-6">
                  <h4 className="text-xl font-bold text-white">AI Workshop</h4>
                  <p className="mt-2 text-sm text-gray-400">November 22, 2023</p>
                  <span className="mt-2 inline-block rounded-full bg-orange-900/50 px-3 py-1 text-xs text-white">
                    Tech
                  </span>
                  <p className="mt-4 text-gray-300">
                    Learn the basics of artificial intelligence and machine learning in this hands-on workshop. No prior experience required!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-24 pb-8 text-center">
          <p className="mb-4 text-gray-400">@FusionClub</p>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.\

