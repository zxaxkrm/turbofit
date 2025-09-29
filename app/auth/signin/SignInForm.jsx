// app/signin/SignInForm.tsx
"use client";

import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // ✅ Smooth client redirect if logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/tracker");
    }
  }, [status, router]);

  return (
    <main className="bg-[url('/dumbells.jpg')] bg-cover bg-no-repeat min-h-dvh">
      <section className="min-h-dvh bg-black/80 flex items-center justify-center">
        <div className="w-3/4 text-white md:px-10">
          <h1 className="text-center text-lg md:text-5xl font-bold">
            Sign In to TurboFit
          </h1>

          <div className="flex flex-col items-center justify-center gap-7 mt-6 w-full">
            <button
              className="border w-full flex items-center justify-center gap-3 md:text-lg rounded-full py-3"
              onClick={() => signIn("google", { callbackUrl: "/tracker" })}
            >
              <FcGoogle className="text-2xl" />
              Sign in with Google
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInForm;
