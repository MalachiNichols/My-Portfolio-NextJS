import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post';
import Head from "next/head";

const portfolio = ({posts}) => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div>
        {posts.map((post, index) => (
          <Post post={post} key={post}/>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  //get files from posts dir 
  const files = fs.readdirSync(path.join('posts'))

  //get slug and front matter from posts
  const posts = files.map(filename => {
    //create slug
    const slug = filename.replace('.md', '')
    //get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const {data:frontmatter} = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts,
    }
  }
}
export default portfolio;
