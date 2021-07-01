import Head from "next/head";
import { square } from "../scripts/home";

export default function Home() {
  const a = square(4);
  console.log("a : ", a);
  return (
    <div>
      <Head>
        <title>JS Tutorials</title>
      </Head>

      <main>
        <h1>JS Tutorials</h1>
      </main>
    </div>
  );
}
