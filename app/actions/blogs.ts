"use server";

// in this server action we have to create an action of creating a blog using the form data. and this action would be used by the form to create the blog entry in the blogs array.

import { redirect } from "next/navigation";
import { addBlog } from "../services/blogs";
import { revalidatePath } from "next/cache";

export const creatBlog = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const url = formData.get("url") as string;
  const likes = 0;

  addBlog(title, author, url, likes);
  revalidatePath("/blogs");
  redirect("/blogs");
};
