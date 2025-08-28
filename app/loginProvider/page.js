"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();
  // console.log(session)

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}</p>
        <p>Email: {session.user.email}</p>
        <img
          src={session.user.image}
          alt="User Avatar"
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
        />
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn("google")}>Sign in with Google</button>
  );
}
