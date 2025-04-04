"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useAuth } from "./auth-provider"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

interface SignupModalProps {
  onClose: () => void
  onSwitchToLogin: () => void
}

export default function SignupModal({ onClose, onSwitchToLogin }: SignupModalProps) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminCode, setAdminCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const { signup } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Validate inputs
    if (!fullName || !email || !password || !confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    if (isAdmin && !adminCode) {
      toast({
        title: "Error",
        description: "Admin code is required for admin registration",
        variant: "destructive",
      })
      setIsLoading(false)
      return
    }

    // Attempt signup
    const success = signup(fullName, email, password, isAdmin, adminCode)

    if (success) {
      toast({
        title: "Success",
        description: "Your account has been created successfully",
      })
      onClose()

      // Redirect to appropriate dashboard
      if (isAdmin) {
        router.push("/admin-dashboard")
      } else {
        router.push("/dashboard")
      }
    } else {
      if (isAdmin) {
        toast({
          title: "Error",
          description: "Invalid admin code or email already exists",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Error",
          description: "Email already exists",
          variant: "destructive",
        })
      }
    }

    setIsLoading(false)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-md rounded-lg bg-gray-900 p-6 shadow-lg">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-white">
          <X size={20} />
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white">Sign Up</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="bg-gray-800"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signupEmail">Email</Label>
            <Input
              id="signupEmail"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="signupPassword">Password</Label>
            <Input
              id="signupPassword"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-800"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="bg-gray-800"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="isAdmin"
              checked={isAdmin}
              onCheckedChange={(checked) => {
                setIsAdmin(checked as boolean)
              }}
            />
            <Label htmlFor="isAdmin" className="text-sm">
              Register as Admin (requires admin code)
            </Label>
          </div>

          {isAdmin && (
            <div className="space-y-2">
              <Label htmlFor="adminCode">Admin Code</Label>
              <Input
                id="adminCode"
                type="password"
                placeholder="Enter admin code"
                value={adminCode}
                onChange={(e) => setAdminCode(e.target.value)}
                required={isAdmin}
                className="bg-gray-800"
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <button onClick={onSwitchToLogin} className="text-orange-400 hover:text-orange-300">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

