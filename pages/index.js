import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="welcomePage">
      <Head>
        <title>Malachi Nichols</title>
      </Head>
      <Link href="/about">
        <button className="welcome">Welcome</button>
      </Link>
    </div>
  );
}
