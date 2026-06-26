"use client";
// import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "motion/react";
import { Backlight } from "@/components/ui/backlight";
import { Ripple } from "@/components/ui/ripple";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Ripple />
      </motion.div>

      {/* UI on top */}
      <main className="flex items-center justify-center h-full w-full">
        <motion.div
          drag
          initial={{ y: 10, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 20,
            duration: 0.2 / 8,
          }}
          className="inline-block"
        >
          <Backlight>
            <Card className="p-4">
              <div className="flex flex-col w-auto h-auto text-2xl">
                <div className="flex flex-row">
                  <span className="">
                    <ImageIcon />
                    Upload
                    <span className="ml-1">& forget.</span>
                  </span>
                </div>
                <Link href="/library" className="w-full ">
                  <Button className="bg-white text-black mt-4 w-full">
                    Get started
                  </Button>
                </Link>
              </div>
            </Card>
          </Backlight>
        </motion.div>
      </main>
    </div>
  );
}

function ImageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline my-1 mx-1 mb-2  lucide lucide-image-icon lucide-image"
    >
      <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
      <circle cx={9} cy={9} r={2} />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
