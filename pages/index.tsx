import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header/header";

export default function Home() {
  const { data: session } = useSession();

  console.log("session", session);
  return (
    <div className="h-full bg-gray-900">
      <Head>
        <title>VideoUploaderWeb</title>
        <meta
          name="VideoUploaderWeb"
          content="</> by Minsung using NextJS and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-between 2xl:flex-row">
          <img
            src="/MoonDogs.gif"
            alt="VideoUploaderWeb"
            className="w-1/2 border-2 border-red-500 rounded-full mx-60"
          />
          <div className="flex flex-col items-center text-center text-white 2xl:text-start 2xl:items-start ">
            <h1 className="text-3xl font-bold">Welcome to</h1>
            <h2 className="my-2 text-5xl font-black text-red-500 underline">
              MoonDogs
            </h2>
            <p className="w-1/2 my-1 text-xl">
              {
                "This website is a video manager for MoonDogs. It is a web app that allows you to upload videos to the server and store clips into a database that will be access by the our official Discord bot called 'Moon Bot'. "
              }

              <span className="font-semibold underline">
                {
                  " Note: This web application is a private, you will need a valid special key to access this website."
                }
              </span>
            </p>
            <div className="mt-5 text-xl">
              {session ? (
                <div>You have successfully signed in.</div>
              ) : (
                <div>You have to sign in to access this website.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
