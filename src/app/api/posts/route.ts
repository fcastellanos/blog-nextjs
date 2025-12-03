
import { connectToDB, getPostsWithFilter } from '@/app/lib/data';
import { NextResponse } from 'next/server';
import { auth } from '@/auth.config';

export async function GET() {
  try {
    const posts = await getPostsWithFilter(`ORDER BY date DESC LIMIT 2;`) || [];
    
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const session = await auth();
  
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const content = searchParams.get('content');
  const date = searchParams.get('date');
  const author = searchParams.get('author');

  try {
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    // SQL query to insert a new post
    const sql = await connectToDB();
    await sql`INSERT INTO posts (id, author, title, content, date) VALUES (${id}, ${author}, ${title}, ${content}, ${date});`;
    
    return NextResponse.json({ message: 'Post inserted successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

