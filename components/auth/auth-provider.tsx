"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { getSupabaseBrowserClient } from "@/lib/supabase"
import type { Session } from "@supabase/supabase-js"

type UserProfile = {
  id: string
  name: string
  email: string
  avatar?: string
  walletAddress?: string
  isDemoUser?: boolean
}

type AuthMethod = "email" | "google" | "wallet"

type AuthCredentials = {
  email?: string
  password?: string
  name?: string
}

type AuthContextType = {
  user: UserProfile | null
  isLoading: boolean
  isAuthenticated: boolean
  isDemoMode: boolean
  signIn: (method: AuthMethod, credentials?: AuthCredentials) => Promise<void>
  signUp: (method: AuthMethod, credentials?: AuthCredentials) => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
  enterDemoMode: () => void
  exitDemoMode: () => void
  session: Session | null
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  isAuthenticated: false,
  isDemoMode: false,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {},
  resetPassword: async () => {},
  enterDemoMode: () => {},
  exitDemoMode: () => {},
  session: null,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDemoMode, setIsDemoMode] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  const supabase = getSupabaseBrowserClient()

  // Check if component is mounted (client-side)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Check if user is already logged in or in demo mode
  useEffect(() => {
    if (!isMounted) return

    const checkAuth = async () => {
      try {
        // Check for demo mode first
        const demoMode = localStorage.getItem("knott_demo_mode") === "true"
        if (demoMode) {
          setIsDemoMode(true)
          setUser(getDemoUser())
          setIsLoading(false)
          return
        }

        // Then check for logged in user with Supabase
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession()

        if (error) {
          console.error("Error getting session:", error)
          setIsLoading(false)
          return
        }

        if (session) {
          setSession(session)

          // Get user profile data
          const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", session.user.id)
            .single()

          if (profileError) {
            console.error("Error fetching profile:", profileError)
          }

          setUser({
            id: session.user.id,
            name: profile?.name || session.user.user_metadata.name || "User",
            email: session.user.email || "",
            avatar: profile?.avatar_url || session.user.user_metadata.avatar_url,
            walletAddress: profile?.wallet_address,
          })
        }
      } catch (error) {
        console.error("Authentication error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    // Set up auth state change listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        setSession(session)

        // Get user profile data
        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", session.user.id)
          .single()

        if (profileError) {
          console.error("Error fetching profile:", profileError)
        }

        setUser({
          id: session.user.id,
          name: profile?.name || session.user.user_metadata.name || "User",
          email: session.user.email || "",
          avatar: profile?.avatar_url || session.user.user_metadata.avatar_url,
          walletAddress: profile?.wallet_address,
        })
      } else {
        setSession(null)
        setUser(null)
      }
    })

    checkAuth()

    return () => {
      subscription.unsubscribe()
    }
  }, [isMounted, supabase])

  // Add demo user function
  const getDemoUser = (): UserProfile => {
    return {
      id: "demo_user",
      name: "Demo User",
      email: "demo@knottbank.com",
      avatar: "/placeholder.svg?height=40&width=40",
      isDemoUser: true,
    }
  }

  // Add enterDemoMode function
  const enterDemoMode = () => {
    if (!isMounted) return

    setIsDemoMode(true)
    setUser(getDemoUser())
    localStorage.setItem("knott_demo_mode", "true")
    router.push("/banking")
  }

  // Add exitDemoMode function
  const exitDemoMode = () => {
    if (!isMounted) return

    setIsDemoMode(false)
    setUser(null)
    localStorage.removeItem("knott_demo_mode")
    router.push("/")
  }

  // Update signOut to handle demo mode and Supabase
  const signOut = async () => {
    if (!isMounted) return

    setIsLoading(true)

    try {
      // Handle demo mode
      if (isDemoMode) {
        exitDemoMode()
        setIsLoading(false)
        return
      }

      // Regular sign out with Supabase
      const { error } = await supabase.auth.signOut()
      if (error) throw error

      setUser(null)
      setSession(null)
      router.push("/")
    } catch (error) {
      console.error("Sign out error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signIn = async (method: AuthMethod, credentials?: AuthCredentials) => {
    if (!isMounted) return

    setIsLoading(true)

    try {
      switch (method) {
        case "email":
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required")
          }

          const { error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          })

          if (error) throw error
          router.push("/banking")
          break

        case "google":
          const { error: googleError } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
              redirectTo: `${window.location.origin}/auth/callback`,
            },
          })

          if (googleError) throw googleError
          break

        case "wallet":
          // Wallet login would be implemented with Solana wallet adapter
          // This is a placeholder for now
          throw new Error("Wallet login not implemented yet")
          break

        default:
          throw new Error("Invalid authentication method")
      }
    } catch (error) {
      console.error("Sign in error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signUp = async (method: AuthMethod, credentials?: AuthCredentials) => {
    if (!isMounted) return

    setIsLoading(true)

    try {
      switch (method) {
        case "email":
          if (!credentials?.email || !credentials?.password || !credentials?.name) {
            throw new Error("Email, password, and name are required")
          }

          const { error } = await supabase.auth.signUp({
            email: credentials.email,
            password: credentials.password,
            options: {
              data: {
                name: credentials.name,
              },
            },
          })

          if (error) throw error
          router.push("/banking")
          break

        case "google":
          const { error: googleError } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
              redirectTo: `${window.location.origin}/auth/callback`,
            },
          })

          if (googleError) throw googleError
          break

        case "wallet":
          // Wallet signup would be implemented with Solana wallet adapter
          // This is a placeholder for now
          throw new Error("Wallet signup not implemented yet")
          break

        default:
          throw new Error("Invalid authentication method")
      }
    } catch (error) {
      console.error("Sign up error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const resetPassword = async (email: string) => {
    if (!isMounted) return

    setIsLoading(true)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      })

      if (error) throw error
    } catch (error) {
      console.error("Password reset error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        isDemoMode,
        signIn,
        signUp,
        signOut,
        resetPassword,
        enterDemoMode,
        exitDemoMode,
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
