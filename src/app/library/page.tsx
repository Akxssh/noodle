'use client'
import Image from "next/image";
import Navbar from "@/components/ui/Navbar"
import { useTheme } from "next-themes"
import { Card } from "@/components/ui/card";

export default function Page() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center items-center h-full min-h-50 w-full">
        <Card className="p-4">helo there</Card>
      </div>
    </div>
  )
}

