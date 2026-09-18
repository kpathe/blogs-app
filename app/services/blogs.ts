import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq, like } from "drizzle-orm";
export const getBlogs = async () => {
  return db.query.blogs.findMany();
};

export const addBlog = async (
  title: string,
  author: string,
  url: string,
  likes: number = 0,
  userId: number,
) => {
  await db.insert(blogs).values({ title, author, url, likes, userId });
};

export const getBlogById = async (id: number) => {
  return db.query.blogs.findFirst({
    where: eq(blogs.id, id),
  });
};

export const increaseLike = async (id: number) => {
  const blog = await getBlogById(id);
  if (blog) {
    await db
      .update(blogs)
      .set({ likes: blog.likes + 1 })
      .where(eq(blogs.id, id));
  }
};

export const searchBlogs = async (query: string) => {
  return db.query.blogs.findMany({
    where: like(blogs.title, `%${query}%`),
  });
};
