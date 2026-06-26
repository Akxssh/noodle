import Image from "next/image"
import { useTheme } from "next-themes"
import { LucideSun } from "lucide-react"
import { LucideMoon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Navbar({ showToggleThemeBtn = true }: { showToggleThemeBtn?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme()
  function toggleTheme() {
    if (resolvedTheme == "dark") {
      setTheme("light")
    } else if (resolvedTheme == "light") {
      setTheme("dark")
    } else {
      setTheme("system")
    }
  }
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <div className="fixed mb-14 top-0 left-0 z-50 w-full h-14 flex items-center justify-between px-5 border-b bg-background/70 backdrop-blur-xl">
      <div className="flex justify-between w-full items-center gap-2">
        <div className="flex justify-center items-center">
          {isMounted &&
            <Image
              // src="/white-favicon.png"
              src={resolvedTheme === "dark" ? "/white-favicon.png" : "/black-favicon.png"}
              width={40}
              height={40}
              alt="Noodle app icon"
              className="rounded-md"
            />
          }
          <span className="text-sm font-medium tracking-tight">Noodle</span>
        </div>
        {showToggleThemeBtn && <ThemeBtn />}
      </div>
    </div>
  )
  function ThemeBtn() {
    return (
      <Button onClick={() => toggleTheme()} className="">
        <LucideSun />
      </Button>
    )
  }
}

