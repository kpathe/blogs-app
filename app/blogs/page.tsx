import { getBlogs } from "../services/blogs";

const Blogs = () => {
  const blogs = getBlogs();
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title} {blog.url} {blog.author} {blog.likes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
