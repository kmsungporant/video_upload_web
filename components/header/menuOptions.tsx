import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function MenuOptions() {
  const { data: session } = useSession();

  return (
    <div className="flex items-center h-full">
      <div className="text-2xl text-white ">
        <Link href="/">
          <button className="mx-3">Home</button>
        </Link>
        <Link href="/dashboard">
          <button className="mx-3">Dashboard</button>
        </Link>
        <Link href="/upload">
          <button className="mx-3">Upload</button>
        </Link>
        {session ? (
          <button onClick={() => signOut()}>
            <span className="p-2 mx-3 font-semibold bg-red-500 hover:bg-red-700 rounded-2xl">
              Logout
            </span>
          </button>
        ) : (
          <button onClick={() => signIn()}>
            <span className="p-2 mx-3 font-semibold bg-red-500 hover:bg-red-700 rounded-2xl">
              Login
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
