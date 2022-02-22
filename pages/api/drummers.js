import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = (req, res) => {
  const drummers = prisma.drummer.findMany();
  res.json(drummers);
};

export default handler;
