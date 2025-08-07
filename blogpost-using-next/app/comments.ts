import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const NewComments = async () => {
  const count = await prisma.comments.count();
  if (count === 0) {
    await prisma.comments.createMany({
      data: [
        {
          name: "abebe  kebede",
          comment: "This is a great post!",
          email: "abebe@gmail.com",
        },
        {
          name: "dani asefa",
          comment: "Very informative content.",
          email: "jane@gmail.com",
        },
        {
          name: "miki Johnson",
          comment: "Looking forward to more articles.",
          email: "mki@gmail.com",
        },
      ],
    });
  }
};

NewComments();

export async function getComments() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.comments.findMany({
    orderBy: {
      date: "desc",
    },
  });
}

export async function getComment(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.comments.findUnique({
    where: { id },
  });
}

export async function addComment(name: string, comment: string, email: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.comments.create({
    data: { name, comment, email },
  });
}

export async function updateComment(
  id: number,
  name: string,
  comment: string,
  email: string
) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.comments.update({
    where: { id },
    data: { name, comment, email },
  });
}

export async function deleteComment(id: number) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.comments.delete({
    where: { id },
  });
}
