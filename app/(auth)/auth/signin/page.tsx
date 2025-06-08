"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { FcGoogle } from "react-icons/fc"
import { WalletMultiButton } from "@/components/auth/wallet-multi-button"
import { useAuth } from "@/components/auth/auth-provider"

export default function SignInPage() {
  const router = useRouter()
  const { signIn, isLoading: authIsLoading, enterDemoMode } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      await signIn("email", { email, password })
      router.push("/banking")
    } catch (err) {
      setError("Invalid email or password. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    setError("")

    try {
      await signIn("google")
      router.push("/banking")
    } catch (err) {
      setError("Failed to sign in with Google. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-950 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">
              Knott Bank
            </h1>
          </Link>
          <p className="text-gray-400 mt-2">Sign in to access your account</p>
        </div>

        <Card className="bg-navy-900 border-navy-800">
          <CardHeader>
            <CardTitle className="text-xl text-white">Sign In</CardTitle>
            <CardDescription>Choose your preferred sign in method</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6 bg-navy-800">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="google">Google</TabsTrigger>
                <TabsTrigger value="wallet">Wallet</TabsTrigger>
              </TabsList>

              <TabsContent value="email">
                <form onSubmit={handleEmailSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-navy-800 border-navy-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link href="/auth/forgot-password" className="text-sm text-green-400 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-navy-800 border-navy-700"
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button
                    type="submit"
                    className="w-full bg-green-400 text-navy-950 hover:bg-green-300"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-gray-700" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-navy-950 px-2 text-gray-400">Or</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="mt-4 w-full border-green-400/50 text-green-400 hover:bg-green-400/10"
                    onClick={enterDemoMode}
                  >
                    Try Demo Mode
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="google">
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">Click the button below to sign in with your Google account.</p>
                  <Button
                    onClick={handleGoogleSignIn}
                    variant="outline"
                    className="w-full border-navy-700 hover:bg-navy-800"
                    disabled={isLoading}
                  >
                    <FcGoogle className="mr-2 h-5 w-5" />
                    {isLoading ? "Signing in..." : "Sign in with Google"}
                  </Button>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
              </TabsContent>

              <TabsContent value="wallet">
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">
                    Connect your Solana wallet to sign in. We support Phantom, Solflare, and other Solana wallets.
                  </p>
                  <div className="flex justify-center">
                    <WalletMultiButton />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400 text-center w-full">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-green-400 hover:underline">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
