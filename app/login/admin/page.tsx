"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, ArrowLeft, Eye, EyeOff, Mail, Lock } from "lucide-react"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/dashboard/admin")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-100 to-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md page-transition">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-purple-600 mb-8 font-medium transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <Card className="glass border-0 shadow-apple-lg">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 glass-strong rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-apple">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-3xl font-semibold text-gray-900 mb-3">Admin Login</CardTitle>
              <CardDescription className="text-gray-600 text-base leading-relaxed">
                Masuk ke panel admin untuk mengelola sistem
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-apple pl-12 h-14 text-base"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-apple pl-12 pr-12 h-14 text-base"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white h-14 text-base font-semibold rounded-2xl shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>

              <div className="text-center pt-4">
                <Link href="#" className="text-purple-600 hover:text-purple-700 font-medium transition-colors">
                  Forgot your password?
                </Link>
              </div>

              <div className="glass-subtle rounded-xl p-4 mt-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Demo Credentials:</p>
                <p className="text-xs text-gray-600">Email: admin@demo.com</p>
                <p className="text-xs text-gray-600">Password: admin123</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Need help?
              <Link href="#" className="text-purple-600 hover:text-purple-700 font-medium ml-1">
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
