CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(256),
	"email" varchar(256),
	"password" varchar(256)
);

CREATE TABLE IF NOT EXISTS "records" (
	"id" serial PRIMARY KEY NOT NULL,
	"type" varchar(256),
	"amount" integer,
	"category_id" integer,
	"date" varchar(256),
	"time" varchar(256),
	"payee" varchar(256),
	"note" varchar(256),
	"userId" varchar(256)
);

CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"categoryName" varchar(256),
	"categoryIcon" varchar(256),
	"categoryColor" varchar(256),
	"userId" integer
);
