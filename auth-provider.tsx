"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type User = {
  fullName: string
  email: string
  isAdmin: boolean
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => boolean
  signup: (fullName: string, email: string, password: string, isAdmin: boolean, adminCode?: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("fusion_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = (email: string, password: string) => {
    // In a real app, you would validate against a backend
    // For demo purposes, we'll just check if the user exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("fusion_users") || "[]")
    const foundUser = storedUsers.find((u: any) => u.email === email)

    if (foundUser && foundUser.password === password) {
      const userInfo = {
        fullName: foundUser.fullName,
        email: foundUser.email,
        isAdmin: foundUser.isAdmin,
      }
      setUser(userInfo)
      localStorage.setItem("fusion_user", JSON.stringify(userInfo))
      return true
    }
    return false
  }

  const signup = (fullName: string, email: string, password: string, isAdmin: boolean, adminCode?: string) => {
    // Validate admin code if trying to register as admin
    if (isAdmin && adminCode !== "fusion2023") {
      return false
    }

    // In a real app, you would send this to a backend
    // For demo purposes, we'll store in localStorage
    const storedUsers = JSON.parse(localStorage.getItem("fusion_users") || "[]")

    // Check if email already exists
    if (storedUsers.some((u: any) => u.email === email)) {
      return false
    }

    const newUser = {
      fullName,
      email,
      password,
      isAdmin,
    }

    storedUsers.push(newUser)
    localStorage.setItem("fusion_users", JSON.stringify(storedUsers))

    const userInfo = {
      fullName,
      email,
      isAdmin,
    }

    setUser(userInfo)
    localStorage.setItem("fusion_user", JSON.stringify(userInfo))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("fusion_user")
  }

  return <AuthContext.Provider value={{ user, login, signup, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

