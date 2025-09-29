// // app/signin/page.tsx
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import SignInForm from "./SignInForm";

const SignInPage = async () => {
  const session = await auth();

  // ✅ Server protection
  if (session?.user) {
    redirect("/dashboard");
  }

  return <SignInForm />;
};

export default SignInPage;
