import { PrismaClient } from "@prisma/client";
import YouTube from "react-youtube";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import style from "../../styles/Drummers.module.css";

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const drummer = await prisma.drummer.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return {
    props: {
      drummer,
    },
  };
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const drummers = await prisma.drummer.findMany();

  return {
    paths: drummers.map((drummer) => ({
      params: {
        id: drummer.id.toString(),
      },
    })),
    fallback: false,
  };
}

const Drummer = ({ drummer }) => {
  return (
    <div className={style.container}>
      <div className={style.btnback}>
        <Link href="/myfavoritedrummers">
          <a className={style.goBack}>
            <FaArrowLeft className={style.icon} color="black" size="28px" />
            Go Back
          </a>
        </Link>
      </div>
      <h1 className={style.name}>{drummer.name}</h1>
      <YouTube videoId={drummer.uri} opts={opts} className={style.video} />
    </div>
  );
};

export default Drummer;
