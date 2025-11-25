import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import { connectToDB } from '@/app/lib/data';

export default async function Page() {
  const db = await connectToDB();
  return (
    <>
      { db && <p className='text-green-500'>Connected to the database successfully.</p>}
      <h1>Posts</h1>
      {posts.map((post) => <Post key={post.id} {...post} />)}
    </>)
}