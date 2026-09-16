import { getBlogs } from "../services/blogs";
import Link from "next/link";
const Blogs = () => {
  const blogs = getBlogs();
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
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
