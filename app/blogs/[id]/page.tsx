import { getBlogById } from "@/app/services/blogs";
import { notFound } from "next/navigation";
import { increaseBlogLike } from "@/app/actions/blogs";
const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = await getBlogById(Number(id));
  if (!blog) {
    notFound();
  }
  return (
    <div>
      {blog.title} {blog.author} {blog.url} {blog.likes}
      <div>
        <form action={increaseBlogLike}>
          <input type="hidden" name="id" value={blog.id} />
          <button>Like</button>
        </form>
      </div>
    </div>
  );
};

export default Blog;
