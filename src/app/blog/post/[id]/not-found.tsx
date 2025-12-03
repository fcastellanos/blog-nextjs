import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';

export default function NotFound() { 
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2 p-">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">Post Not Found</h2>
      <p>Could not find the requested post.</p>
      <Link href="/blog/posts" className="text-blue-600 hover:underline">
        Back to Blog
      </Link>
    </main>
  );
}