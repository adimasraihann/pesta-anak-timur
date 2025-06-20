"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ArrowLeft, Eye, EyeOff, Mail, Lock } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"

export default function MentorLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { login, isLoading } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    const success = await login(email, password)

    if (success) {
      toast({
        title: "Login Successful",
        description: "Welcome to your mentor dashboard!",
      })
      router.push("/dashboard/mentor")
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md page-transition">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 font-medium transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <Card className="glass border-0 shadow-apple-lg">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 glass-strong rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-apple">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-3xl font-semibold text-gray-900 mb-3">Mentor Login</CardTitle>
              <CardDescription className="text-gray-600 text-base leading-relaxed">
                Masuk ke akun mentor untuk mengelola kelas dan siswa
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
                      placeholder="mentor@example.com"
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
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white h-14 text-base font-semibold rounded-2xl shadow-apple hover:shadow-apple-lg transition-all duration-300 hover:-translate-y-1"
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
                <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                  Forgot your password?
                </Link>
              </div>

              <div className="glass-subtle rounded-xl p-4 mt-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Demo Credentials:</p>
                <p className="text-xs text-gray-600">Email: mentor@demo.com</p>
                <p className="text-xs text-gray-600">Password: demo123</p>
                <p className="text-xs text-gray-600 mt-2">Test Account:</p>
                <p className="text-xs text-gray-600">Email: mentor.barista@pestaanak.com</p>
                <p className="text-xs text-gray-600">Password: Test1234</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Need help?
              <Link href="#" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
                Contact support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
