import { useSession } from "next-auth/react";
import Header from "../components/header/header";

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <div className="h-full bg-gray-900">
      <Header />
      <div className="flex items-center justify-center h-full text-5xl text-white">
        {session ? (
          <div>You are Logged In!</div>
        ) : (
          <div>You need to Log In!</div>
        )}
      </div>
    </div>
  );
}
