### format code from terminal before commiting the code

1. install the package using: bun add -d prettier
2. make the .prettierrc file and add your definitions
3. in package.json make a script by adding the follow in it: "format": "prettier --write ."

### Automate flow using Husky [Husky](https://typicode.github.io/husky/get-started.html)

1. install the package and initialize it
2. install lint-staged by using: bin add -d lint-staged
3. in .husky we have a pre-commit files
4. add in the file: bunx lint-staged
5. at the root make a new file lintstagedrc
6. add the following line in carly braces: "\*.{,js,jsx,ts,tsx,css}": "prettier --write"

### The prompt to populate data

model Product {
id Int @id @default(autoincrement())
name String @db.VarChar(255)
description String? @db.Text
price Float
reviews Review[]
summary Summary?

@@map("products")
}

model Review {
id Int @id @default(autoincrement())
author String @db.VarChar(255)
rating Int @db.TinyInt
content String @db.Text
createdAt DateTime @default(now())
productId Int
product Product @relation(fields: [productId], references: [id])

@@map("reviews")
}

model Summary {
id Int @id @default(autoincrement())
productId Int @unique
product Product @relation(fields: [productId], references: [id])
content String @db.Text
generatedAt DateTime @default(now())
expiresAt DateTime

@@map("summeries")
}

Generate a complete SQL script to populate the products and reviews tables in a MYSQL database based on the schema above.

- Create 5 products
- For each product, insert 5 realistic customer reviews.
- Make sure each review is long and tailored to the product type.
- Do not include data for the summaries table,
- Output only the SQL script. No comments or explanations.
