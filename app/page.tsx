import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Shield, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 via-white to-purple-50/30"></div>

      <div className="relative flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-lg border border-gray-100">
                <GraduationCap className="w-10 h-10 text-primary-500" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">Pesta Anak Timur</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Platform pembelajaran digital untuk mengembangkan kreativitas dan keterampilan anak-anak Indonesia Timur
            </p>
          </div>

          {/* Login Portal Cards - Symmetrical 3-column layout */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Student Portal */}
            <Card className="group card-hover bg-white border border-gray-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center h-80">
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <GraduationCap className="w-8 h-8 text-red-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Student Portal</CardTitle>
              <CardDescription className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
                Akses modul pembelajaran, tugas, dan sertifikat Anda
              </CardDescription>
              <Link href="/login/student" className="w-full">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 hover:shadow-lg group">
                  Login as Student
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>

            {/* Mentor Portal */}
            <Card className="group card-hover bg-white border border-gray-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center h-80">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Mentor Portal</CardTitle>
              <CardDescription className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
                Kelola kelas, review tugas, dan pantau progress siswa
              </CardDescription>
              <Link href="/login/mentor" className="w-full">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 hover:shadow-lg group">
                  Login as Mentor
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>

            {/* Admin Portal */}
            <Card className="group card-hover bg-white border border-gray-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center h-80">
              <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <Shield className="w-8 h-8 text-purple-500" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">Admin Portal</CardTitle>
              <CardDescription className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
                Kelola sistem, batch, modul, dan laporan lengkap
              </CardDescription>
              <Link href="/login/admin" className="w-full">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 hover:shadow-lg group">
                  Login as Admin
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center mt-16">
            <p className="text-gray-500 font-medium">&copy; 2024 Pesta Anak Timur. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
