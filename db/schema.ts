import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  author: varchar("author", { length: 256 }).notNull(),
  url: text("url").notNull(),
  likes: integer("likes").default(0).notNull(),
});