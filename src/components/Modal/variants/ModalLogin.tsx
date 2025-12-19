import { Heading } from "@/components/UI";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export function ModalLogin() {
    return (
        <div>
            <Heading>
                Sign In
            </Heading>
            <SignedOut>
                <SignInButton />
                <SignUpButton>
                    <button className="bg-red text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                        Sign Up
                    </button>
                </SignUpButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    )
}
