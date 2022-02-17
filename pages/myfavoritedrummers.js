import Head from "next/head";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import style from "../styles/Drummers.module.css";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const drummers = await prisma.drummer.findMany();
  return {
    props: {
      drummers,
    },
  };
}

function myFavoriteDrummers({ drummers }) {
  return (
    <div className="test">
      <Head>
        <title>Drummers</title>
      </Head>
      <div className={style.grid}>
        {drummers.map((drummer) => (
          <div key={drummer.id} className={style.drummer}>
            <Link href={`/myfavoritedrummers/${drummer.id}`} className={style.link}>
              <a>
                <img src={drummer?.image} className={style.image} />
                <h3 className={style.names}>{drummer.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default myFavoriteDrummers;
