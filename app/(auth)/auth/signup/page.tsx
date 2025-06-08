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
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpPage() {
  const router = useRouter()
  const { signUp } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (!acceptTerms) {
      setError("You must accept the terms and conditions")
      setIsLoading(false)
      return
    }

    try {
      await signUp("email", { email, password, name })
      router.push("/banking")
    } catch (err) {
      setError("Failed to create account. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    if (!acceptTerms) {
      setError("You must accept the terms and conditions")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      await signUp("google")
      router.push("/banking")
    } catch (err) {
      setError("Failed to sign up with Google. Please try again.")
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
          <p className="text-gray-400 mt-2">Create your Knott Bank account</p>
        </div>

        <Card className="bg-navy-900 border-navy-800">
          <CardHeader>
            <CardTitle className="text-xl text-white">Sign Up</CardTitle>
            <CardDescription>Choose how you want to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid grid-cols-3 mb-6 bg-navy-800">
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="google">Google</TabsTrigger>
                <TabsTrigger value="wallet">Wallet</TabsTrigger>
              </TabsList>

              <TabsContent value="email">
                <form onSubmit={handleEmailSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-navy-800 border-navy-700"
                    />
                  </div>
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
                    <Label htmlFor="password">Password</Label>
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
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="bg-navy-800 border-navy-700"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I accept the{" "}
                      <Link href="/terms" className="text-green-400 hover:underline">
                        terms and conditions
                      </Link>
                    </label>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button
                    type="submit"
                    className="w-full bg-green-400 text-navy-950 hover:bg-green-300"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="google">
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">Click the button below to sign up with your Google account.</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox
                      id="terms-google"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    />
                    <label
                      htmlFor="terms-google"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I accept the{" "}
                      <Link href="/terms" className="text-green-400 hover:underline">
                        terms and conditions
                      </Link>
                    </label>
                  </div>
                  <Button
                    onClick={handleGoogleSignUp}
                    variant="outline"
                    className="w-full border-navy-700 hover:bg-navy-800"
                    disabled={isLoading}
                  >
                    <FcGoogle className="mr-2 h-5 w-5" />
                    {isLoading ? "Creating account..." : "Sign up with Google"}
                  </Button>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
              </TabsContent>

              <TabsContent value="wallet">
                <div className="space-y-4">
                  <p className="text-sm text-gray-400">
                    Connect your Solana wallet to create an account. We support Phantom, Solflare, and other Solana
                    wallets.
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    <Checkbox
                      id="terms-wallet"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    />
                    <label
                      htmlFor="terms-wallet"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I accept the{" "}
                      <Link href="/terms" className="text-green-400 hover:underline">
                        terms and conditions
                      </Link>
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <WalletMultiButton />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-400 text-center w-full">
              Already have an account?{" "}
              <Link href="/auth/signin" className="text-green-400 hover:underline">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
