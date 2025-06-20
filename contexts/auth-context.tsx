"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  role: "admin" | "mentor" | "student"
  name: string
  assignedBatches?: string[]
  assignedModules?: string[]
  batch?: string // For students
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Dummy user data for testing
const DUMMY_USERS: User[] = [
  {
    id: "1",
    email: "admin@pestaanak.com",
    password: "admin123",
    role: "admin",
    name: "Admin User",
  },
  {
    id: "2",
    email: "mentor.barista@pestaanak.com",
    password: "Test1234",
    role: "mentor",
    name: "John Smith",
    assignedBatches: ["Barista Batch 1"],
    assignedModules: ["Espresso Basics", "Latte Art Intro"],
  },
  {
    id: "3",
    email: "student.music@pestaanak.com",
    password: "Test1234",
    role: "student",
    name: "Maria Sari",
    batch: "Music Production Batch 2",
  },
  {
    id: "4",
    email: "mentor@demo.com",
    password: "demo123",
    role: "mentor",
    name: "Sarah Johnson",
    assignedBatches: ["Music Production Batch 1", "Content Creator Batch 1"],
    assignedModules: [
      "Introduction to Music Production",
      "Audio Recording Techniques",
      "Content Creation Fundamentals",
    ],
  },
  {
    id: "5",
    email: "student@demo.com",
    password: "demo123",
    role: "student",
    name: "Ahmad Rizki",
    batch: "Music Production Batch 1",
  },
] as any[]

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const foundUser = DUMMY_USERS.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))
      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
