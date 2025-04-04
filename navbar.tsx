"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import LoginModal from "./login-modal"
import SignupModal from "./signup-modal"
import { useAuth } from "./auth-provider"

export default function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const { user, logout } = useAuth()

  return (
    <header className="w-full py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-GRRxI6HTkRJgIpbcZbYsfZgXjLLvrn.png"
              alt="Fusion Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-bold text-orange-500">FUSION</span>
          <span className="text-xs text-gray-400">Code | Create | Innovate</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-200 hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-gray-200 hover:text-white">
            About Us
          </Link>
          <Link href="/gaming" className="text-gray-200 hover:text-white">
            Gaming
          </Link>
          <Link href="/tech" className="text-gray-200 hover:text-white">
            Tech
          </Link>
          <Link href="/workshops" className="text-gray-200 hover:text-white">
            AI Workshops
          </Link>

          {user ? (
            <>
              {user.isAdmin && (
                <Link href="/admin-dashboard">
                  <Button className="bg-orange-500 text-white hover:bg-orange-600 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                    Admin Dashboard
                  </Button>
                </Link>
              )}
              <Link href="/dashboard">
                <Button className="bg-orange-500 text-white hover:bg-orange-600 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">
                  Dashboard
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500/10 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-500/10 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </Button>
              <Button
                className="bg-orange-500 text-white hover:bg-orange-600 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                onClick={() => setShowSignupModal(true)}
              >
                Sign Up
              </Button>
            </>
          )}
        </nav>
      </div>

      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onSwitchToSignup={() => {
            setShowLoginModal(false)
            setShowSignupModal(true)
          }}
        />
      )}

      {showSignupModal && (
        <SignupModal
          onClose={() => setShowSignupModal(false)}
          onSwitchToLogin={() => {
            setShowSignupModal(false)
            setShowLoginModal(true)
          }}
        />
      )}
    </header>
  )
}

