"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/auth-provider";
import { useRouter } from "next/navigation";
import LoginModal from "@/components/login-modal";
import SignupModal from "@/components/signup-modal";

export default function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (user.isAdmin) {
        router.push("/admin-dashboard");
      } else {
        router.push("/dashboard");
      }
    }
  }, [user, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-orange-950">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <section className="flex flex-col items-center justify-center gap-8">
          <div className="relative h-[400px] w-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9o7tiPQPowloHmp1nYXcVKrNyZyEKr.png"
              alt="Fusion Club 3D Head"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          <div className="max-w-2xl space-y-6 text-center">
            <h1 className="text-5xl font-bold text-white">The Fusion Club</h1>
            <p className="text-xl text-gray-300">
              Where innovation, creativity, and technology come together to build the future!
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                className="bg-orange-500 text-white hover:bg-orange-600 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </Button>
              <Button 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-500/10 transition-all hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                onClick={() => setShowSignupModal(true)}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-24 text-center">
          <h2 className="mb-12 text-4xl font-bold text-white">About Us</h2>
          <div className="mx-auto max-w-4xl space-y-6 text-gray-300">
            <p>
              The Fusion Club is a dynamic community where innovation, creativity, and technology
              collide to shape the future. We brin

