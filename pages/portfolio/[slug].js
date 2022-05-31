import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { BsArrowReturnLeft } from "react-icons/bs";
import Head from 'next/head'
import style from "../../styles/Post.module.css";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={style.btnback}>
        <Link href="/portfolio">
          <a className={style.goBack}>
            <FaArrowLeft className={style.icon}  color="black" size="28px" />
            Go Back
          </a>
        </Link>
      </div>
      <div className={style.cardpage}>
        {/* <h1 className="post title">{title}</h1> */}
        {/* <div className="post-date">Posted on {date}</div> */}
        {/* <img src={cover_image} alt=''/> */}
        <div className={style.postbody}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
