"use client";

import LandingHero from "@/components/LandingHero";
import LandingNavbar from "@/components/LandingNavbar";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function LandingPage() {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      window.location.href = "/dashboard";
    }
  }, [isSignedIn]);

  return (
    <>
      <LandingNavbar />
      <LandingHero />
    </>
  );
}
