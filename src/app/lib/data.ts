import { neon } from "@neondatabase/serverless";
import { unstable_noStore as noStore } from "next/cache";

export async function connectToDB() {
    try {
      if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL environment variable is not set");
      }
      
      const sql = neon(process.env.DATABASE_URL);
      console.log("Connected to the database successfully.");
      return sql;
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      throw error;
    }
}

export async function getPosts() {
  try {
    noStore();
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate delay
    const sql = await connectToDB();
    const posts = await sql`SELECT * FROM posts;`;

    console.log("Retrieved posts:", posts);
    return posts;
  } catch (error) {
    console.error("Error getting posts:", error);
  }
}

export async function getPostsWithFilter(filter: string) {
  try {
    const sql = await connectToDB();
    const posts = await sql`SELECT * FROM posts ${filter}`;

    return posts;
  } catch (error) {
    console.error("Error getting posts:", error);
  }
}