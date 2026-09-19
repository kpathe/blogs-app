import { getUserWithBlogs } from "@/app/services/users";
import Link from "next/link";

const UserPage = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const { username } = await params;
  const user = await getUserWithBlogs(username);

  return (
    <div>
      <h2>{user?.name}</h2>
      <ul>
        {user?.blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`blogs/${blog.id}`}>{blog.title} </Link>
            {blog.url} {blog.author} {blog.likes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
