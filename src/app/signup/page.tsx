"use client";

import Image from "next/image";
import { SignupForm } from "@/components/signup-form";

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a
          href="#"
          className="flex mr-66 items-center justify-start gap-3 self-center font-medium"
        >
          {/* Logo */}
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-primary shadow-md">
            <Image
              src="/white-favicon.png"
              width={40}
              height={40}
              alt="favicon"
              className="h-full w-full object-cover"
            />
          </div>

          <span>Noodle.</span>
        </a>

        <SignupForm />
      </div>
    </div>
  );
}
