import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";
import { signIn, auth } from "@/auth";

const page = async () => {
  const session = await auth();
  console.log(session?.user?.name);
  console.log(session?.user?.image);
  console.log(session);

  return (
    <main className="bg-[url('/dumbells.jpg')] bg-cover bg-no-repeat min-h-dvh">
      <section className="min-h-dvh bg-black/80 flex items-center justify-center">
        <div className="w-3/4 text-white md:px-10">
          <h1 className="text-center max-md:w-full text-lg md:text-5xl font-bold">
            Sign In to TurboFit
          </h1>

          <div className="flex flex-col items-center justify-center gap-7 mt-6 w-full">
            <form
              className="w-full"
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button className="border w-full flex items-center justify-center gap-3 md:text-lg rounded-full py-3">
                <FcGoogle className="text-2xl" />
                Sign in with Google
              </button>
            </form>

            <button className="border w-full flex items-center justify-center gap-3 md:text-lg rounded-full py-3">
              <FaXTwitter className="text-red" />
              Sign In with X
            </button>

            <button className="border w-full flex items-center justify-center gap-3 md:text-lg rounded-full py-3">
              <FaHashnode />
              Sign In with ID
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
