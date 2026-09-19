import { relations } from "drizzle-orm";
import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  author: varchar("author", { length: 256 }).notNull(),
  url: text("url").notNull(),
  likes: integer("likes").default(0).notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 256 }).notNull(),
  name: varchar("name", { length: 256 }),
});

export const userRelations = relations(users, ({ many }) => ({
  blogs: many(blogs),
}));

export const blogRelations = relations(blogs, ({ one }) => ({
  users: one(users, {
    fields: [blogs.userId],
    references: [users.id],
  }),
}));
