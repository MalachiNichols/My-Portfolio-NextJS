import Link from "next/link";
import style from '../styles/Post.module.css'

const Post = ({ post }) => {
  return (
    <div className={style.card}>
        <img className={style.cover} src={post.frontmatter.cover_image}
        alt=""/>
        <h3 className={style.portTitle}>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>
        <Link href={`/portfolio/${post.slug}`}>
            <a className={style.btn}>Read More</a>    
        </Link>
    </div>)
};

export default Post;
