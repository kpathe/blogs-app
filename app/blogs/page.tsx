import { searchBlogsAction } from "../actions/blogs";
import { getBlogs, searchBlogs } from "../services/blogs";
import Link from "next/link";
const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) => {
  const blogs = await getBlogs();
  console.log(blogs)
  const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes);

  const { filter } = await searchParams;

  const blogsToShow = filter ? await searchBlogs(filter) : sortedBlogs;

  return (
    <div>
      <form action={searchBlogsAction}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {blogsToShow.map((blog) => (
          <li key={blog.id}>
            <Link href={`blogs/${blog.id}`}>{blog.title} </Link>
            {blog.url} {blog.author} {blog.likes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
