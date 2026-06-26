// import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="">
        <div className="flex flex-col w-auto h-auto text-2xl">
          <div className="flex flex-row">
            <span className="">
              Upload
              <ImageIcon />
              <span className="ml-1">& forget.</span>
            </span>
          </div>
          <Button className="bg-white text-black mt-4">Get started</Button>
        </div>
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
      className="lucide lucide-image-icon lucide-image"
    >
      <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
      <circle cx={9} cy={9} r={2} />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
