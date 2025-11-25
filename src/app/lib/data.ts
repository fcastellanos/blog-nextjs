import { neon } from "@neondatabase/serverless";

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