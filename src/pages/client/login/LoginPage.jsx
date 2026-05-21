import React, { useState } from 'react'
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
} from 'lucide-react'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberSession, setRememberSession] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    console.log('Login attempt:', {
      email,
      password,
      rememberSession,
    })
  }

  return (
    <main className="min-h-screen bg-white lg:flex">
      {/* Brand panel */}
      <section className="relative hidden overflow-hidden bg-[#01164C] md:flex md:min-h-85 md:flex-col md:justify-center md:px-8 md:py-7 lg:min-h-screen lg:w-[48%] lg:justify-between lg:px-10 lg:py-8 xl:w-1/2 xl:px-12">
        <div className="absolute inset-0 bg-[#01164C]" />
        <div className="absolute inset-0  " />

        <div className="relative z-10 max-w-[52%] lg:max-w-152">
          <div className="mb-5 flex items-center gap-3 lg:mb-10">
            <div className="h-10 w-10 shrink-0 lg:h-12 lg:w-12">
              <img
                src="/co-logo.png"
                alt="CO Monitor Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <span className="font-inter text-xl font-bold tracking-wider text-white lg:text-[26px] xl:text-[28px]">
              CO MONITOR
            </span>
          </div>

          <h1 className="font-sora mb-3 text-[36px] font-bold leading-tight text-white md:text-[38px] lg:mb-4 lg:text-[50px] xl:text-6xl">
            Enterprise Asset
            <br />
            Intelligence.
          </h1>

          <p className="font-inter max-w-md text-[14px] leading-6 text-blue-100/85 lg:max-w-124 lg:text-[16px]">
            Secure access for live asset visibility, operations teams, and industrial monitoring workflows.
          </p>
        </div>

        <div className="relative z-10 mt-5 max-w-[52%] lg:mb-[34vh] lg:mt-0 lg:max-w-lg xl:mb-[36vh]">
          <p className="font-inter text-[20px] font-bold leading-tight text-white md:text-[22px] lg:text-[26px] xl:text-[28px]">
            Create your account and start
            <br />
            monitoring{' '}
            <span className="font-bold text-[#0098ff]">
              smarter
            </span>
          </p>
        </div>

        <div className="absolute bottom-0 right-0 top-0 w-[44%] overflow-hidden lg:left-0 lg:right-0 lg:top-auto lg:h-[42vh] lg:w-auto xl:h-[46vh]">
          <img
            src="/login-img.png"
            alt="Industrial monitoring facility"
            className="absolute inset-0 h-full w-full object-cover object-center md:object-left lg:object-center"
          />

          <div className="absolute inset-0 bg-linear-to-r from-[#01164C]/65 via-[#02134f]/25 to-transparent lg:bg-linear-to-b lg:from-[#02134f]/45 lg:via-transparent lg:to-[#000819]/30" />
        </div>
      </section>

      {/* Login panel */}
      <section className="flex min-h-screen w-full items-center justify-center bg-[#f7f9fc] px-5 py-8 sm:px-8 md:min-h-[calc(100vh-340px)] md:px-10 md:py-8 lg:min-h-screen lg:w-[52%] lg:bg-white lg:px-10 xl:w-1/2 xl:px-16">
        <div className="w-full max-w-110">
          <div className="mb-8 flex items-center gap-3 md:hidden">
            <div className="h-10 w-10">
              <img
                src="/co-logo.png"
                alt="CO Monitor Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <span className="text-lg font-bold tracking-wide text-gray-900">
              CO MONITOR
            </span>
          </div>

          <p className="font-jetbrains mb-3 text-[12px] font-semibold uppercase tracking-wider text-[#003D9B]">
            Secure Login
          </p>

          <h2 className="font-sora mb-2 text-3xl font-bold leading-tight text-gray-950 sm:text-4xl lg:text-[40px]">
            Welcome Back
          </h2>

          <p className="font-inter mb-7 text-[15px] leading-6 text-gray-600 sm:text-[16px] lg:mb-8">
            Sign in to your secure industrial command center.
          </p>

          <form onSubmit={handleLogin} className="space-y-5 lg:space-y-6">
            <div>
              <label className="font-jetbrains mb-2 block text-[12px] font-semibold uppercase tracking-wider text-gray-700">
                Corporate Email
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="font-inter h-12 w-full rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-4 text-[15px] text-gray-900 shadow-sm outline-none transition placeholder:text-gray-500 focus:border-transparent focus:ring-2 focus:ring-[#0098ff]"
                />
              </div>
            </div>

            <div>
              <label className="font-jetbrains mb-2 block text-[12px] font-semibold uppercase tracking-wider text-gray-700">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="font-inter h-12 w-full rounded-lg border border-gray-300 bg-white py-3 pl-12 pr-12 text-[15px] text-gray-900 shadow-sm outline-none transition placeholder:text-gray-500 focus:border-transparent focus:ring-2 focus:ring-[#0098ff]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label className="font-inter flex cursor-pointer items-center gap-2 text-[15px] font-normal text-gray-700 sm:text-[16px]">
                <input
                  type="checkbox"
                  checked={rememberSession}
                  onChange={(e) => setRememberSession(e.target.checked)}
                  className="h-4 w-4 accent-[#003D9B]"
                />

                Remember session
              </label>

              <a
                href="#"
                className="font-inter text-[15px] font-semibold text-[#003D9B] transition hover:text-blue-700 sm:text-[16px]"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="font-inter flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-black px-4 text-[14px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0098ff] focus:ring-offset-2"
            >
              Login to Dashboard
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <p className="font-inter mt-7 text-center text-[15px] text-gray-600 sm:text-[16px] lg:mt-8">
            New to the unit?{' '}
            <a
              href="#"
              className="font-inter text-[15px] font-semibold text-blue-600 hover:text-blue-700 sm:text-[16px]"
            >
              Provision access
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
