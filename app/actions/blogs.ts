"use server";

// in this server action we have to create an action of creating a blog using the form data. and this action would be used by the form to create the blog entry in the blogs array.

import { redirect } from "next/navigation";
import { addBlog, increaseLike } from "../services/blogs";
import { revalidatePath } from "next/cache";

export const createBlog = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const url = formData.get("url") as string;
  const likes = 0;
  const userId = 1;

  await addBlog(title, author, url, likes, userId);
  revalidatePath("/blogs");
  redirect("/blogs");
};

export const increaseBlogLike = async (formData: FormData) => {
  const id = Number(formData.get("id"));
  await increaseLike(id);
  revalidatePath(`/blogs/${id}`);
  revalidatePath("/blogs");
};

export const searchBlogsAction = async (formData: FormData) => {
  const query = formData.get("search") as string;
  revalidatePath("/blogs");
  redirect(`/blogs?filter=${query}`);
};
