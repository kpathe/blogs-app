import { notFound } from "next/navigation";

const blogs = [
  {
    id: 1,
    title: "Next JS",
    author: "Kaushlendra Pathe",
    url: "https://bloggs.com/next-js",
    likes: 480,
  },
  {
    id: 2,
    title: "Javascript",
    author: "Kaushlendra Pathe",
    url: "https://bloggs.com/javascript",
    likes: 200,
  },
  {
    id: 3,
    title: "Typescript",
    author: "Kaushlendra Pathe",
    url: "https://bloggs.com/typescript",
    likes: 340,
  },
  {
    id: 4,
    title: "Tailwind",
    author: "Kaushlendra Pathe",
    url: "https://bloggs.com/tailwind",
    likes: 500,
  },
];

let nextId = 5;

export const getBlogs = () => {
  return blogs;
};

export const addBlog = (
  title: string,
  author: string,
  url: string,
  likes: number = 0,
) => {
  blogs.push({ id: nextId++, title, author, url, likes });
};

export const getBlogById = (id: string) => {
  return blogs.find((blog) => blog.id === Number(id));
};

export const increaseLike = (id: number) => {
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    notFound();
  }
  blog.likes += 1;
};
