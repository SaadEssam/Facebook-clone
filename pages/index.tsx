// import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getSession } from "next-auth/react";
import Head from "next/head";

import Header from "@/components/Header";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";

interface HomeProps {
  session: any;
}

export default function Home({ session }: HomeProps) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        <Feed/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
