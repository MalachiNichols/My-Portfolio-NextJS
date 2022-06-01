import Head from "next/head";

export default function about() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <div className="about">
        <h1 className="aboutMe">About Me:</h1>
        <p className="aboutMeText">
          Hi! My name is Malachi. Welcome to my website.
          <br />
          <br />
          Currently, this website serves as a portfolio for some of my web
          development skills.
          <br />
          <br />
          I received my BSEE from the University of Texas in 2020. After
          graduating, I began exploring and studying different subjects like
          penetration testing and technical writing. Eventually, I found my way
          back to software engineering, and it inspired me to start this
          project.
          <br />
          <br />
          In my free time, I like to learn instruments and write music. I have
          been playing the drums for a long time, but I love the challenge of
          perfecting a new craft. I am always picking up new hobbies that I find
          engaging like speed-solving Rubiks cubes, rock climbing, and jiu
          jitsu.
        </p>
      </div>
    </div>
  );
}
