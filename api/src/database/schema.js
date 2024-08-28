const { relations, Many } = require("drizzle-orm");
const { integer, pgTable, serial, varchar } = require("drizzle-orm/pg-core");

// const users = pgTable("users", {
//   id: serial("id").primaryKey(),
//   username: varchar("name", { length: 256 }),
//   email: varchar("email", { length: 256 }),
//   password: varchar("password", { length: 256 }),
// });

// const posts = pgTable("posts", {
//   id: serial("id").primaryKey(),
//   name: varchar("name", { length: 256 }),
//   userId: integer("userId"),
// });

// const userRelation = relations(users, ({ many }) => ({
//   posts: many(posts),
// }));

// const postRelation = relations(posts, ({ one }) => ({
//   users: one(users, {
//     fields: [posts.userId],
//     references: [users.id],
//   }),
// }));
// const userRelation = relations(users, ({ many }) => ({
//   posts: many(posts),
// }));

// const postRelation = relations(posts, ({ one }) => ({
//   user: one(users, {
//     fields: [posts.userId],
//     references: [users.id],
//   }),
// }));

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 256 }),
  email: varchar("email", { length: 256 }),
  password: varchar("password", { length: 256 }),
});

const records = pgTable("records", {
  id: serial("id").primaryKey(),
  type: varchar("type", { length: 256 }),
  amount: integer("amount", { length: 256 }),
  category_id: integer("category_id", { length: 256 }),
  date: varchar("date", { length: 256 }),
  time: varchar("time", { length: 256 }),
  payee: varchar("payee", { length: 256 }),
  note: varchar("note", { length: 256 }),
  userId: varchar("userId", { length: 256 }),
});

const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  categoryName: varchar("categoryName", { length: 256 }),
  categoryIcon: varchar("categoryIcon", { length: 256 }),
  categoryColor: varchar("categoryColor", { length: 256 }),
  userId: integer("userId", { length: 256 }),
});

const userRelation = relations(users, ({ many }) => ({
  records: many(records),
  categories: many(categories),
}));

const recordRelation = relations(records, ({ one }) => ({
  user: one(users, {
    fields: [records.userId],
    references: [users.id],
  }),

  categories: one(categories, {
    fields: [records.category_id],
    references: [categories.id],
  }),
}));

const categoryRelation = relations(categories, ({ one, many }) => ({
  user: one(users, {
    fields: [categories.userId],
    references: [users.id],
  }),
  records: many(records),
}));

module.exports = {
  users,
  records,
  categories,
  userRelation,
  categoryRelation,
  recordRelation,
};
