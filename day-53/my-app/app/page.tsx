"use client";
import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();
  return <div>
    {JSON.stringify(session)}
{/*     
    <SessionProvider>
      <ReaHome />
    </SessionProvider> */}
  </div>
}

function ReaHome () {
  const session = useSession()
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        {session.status === "authenticated" && <button onClick={() => signOut()}>Logout</button>}
        {session.status === "unauthenticated" && <button onClick={() => signIn()}>Sign in</button>}
        {JSON.stringify(session)}
    </div>
  );
}
