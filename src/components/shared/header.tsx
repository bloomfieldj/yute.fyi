import { ThemeToggle } from "@/components/theme/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="flex h-16 items-center space-x-4 px-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-2 items-center">
          <ThemeToggle />
          <Link href="/">
            {/* <Image src="/logo.svg" alt="Logo" width={40} height={40} /> */}
            <p className="text-primary hover:text-primary/90">yute.fyi</p>
            <span className="sr-only">Home</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <div className="flex">
                <Link
                  href="/posts/new"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Add Post
                </Link>
                <Link
                  href="/dashboard"
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    }),
                    "mr-2"
                  )}
                >
                  Dashboard
                </Link>
                <UserButton />
              </div>
            </SignedIn>
          </nav>
        </div>
      </div>
    </header>
  );
}
